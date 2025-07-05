// pages/api/payment/retry.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import midtransClient from 'midtrans-client'
import prisma from '@lib/prisma'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { order_id } = req.body

    const transaction = await prisma.transaction.findUnique({
      where: { transaction_code: order_id },
    })

    if (!transaction) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan' })
    }

    if (transaction.transaction_status !== 'pending') {
      return res.status(400).json({ error: 'Transaksi tidak dapat dibayar ulang' })
    }

    // Midtrans Snap instance
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
    })

    // Buat order_id baru
    const newOrderId = `${transaction.transaction_code}-RETRY-${Date.now()}`

    const parameter = {
      transaction_details: {
        order_id: newOrderId,
        gross_amount: Number(transaction.total_price),
      },
      credit_card: {
        secure: true,
      },
      callbacks: {
        finish: `${BASE_URL}/user/payment`,
      },
    }

    // Buat Snap transaksi
    const snapResponse = await snap.createTransaction(parameter)

    // (Opsional) Simpan token snap baru ke database
    await prisma.transaction.update({
      where: { transaction_code: transaction.transaction_code },
      data: {
        snap_token: snapResponse.token, // hanya jika kamu punya kolom snap_token
      },
    })

    return res.status(200).json({ snap_token: snapResponse.token })
  } catch (err) {
    console.error('[RETRY PAYMENT ERROR]', err)
    return res.status(500).json({ error: 'Gagal membuat ulang pembayaran' })
  }
}
