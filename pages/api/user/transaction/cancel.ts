// pages/api/user/transaction/cancel.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { transaction_code } = req.body

    const transaction = await prisma.transaction.findUnique({
      where: { transaction_code },
    })

    if (!transaction) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan' })
    }

    if (transaction.transaction_status !== 'pending') {
      return res.status(400).json({ error: 'Transaksi tidak bisa dibatalkan' })
    }

    await prisma.transaction.update({
      where: { transaction_code },
      data: { transaction_status: 'cancelled' },
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[CANCEL TRANSACTION ERROR]', err)
    return res.status(500).json({ error: 'Gagal membatalkan transaksi' })
  }
}
