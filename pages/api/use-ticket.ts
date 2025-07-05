// pages/api/use-ticket.ts
import { NextApiRequest, NextApiResponse } from "next"
import  prisma  from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" })
  }

  const { code } = req.body

  if (!code) {
    return res.status(400).json({ error: "Kode tidak ditemukan" })
  }

  try {
    // Cek apakah tiket ada dan belum digunakan
    const transactionDetail = await prisma.transaction_detail.findFirst({
      where: {
        transaction: { transaction_code: code },
        used_at: null
      },
      include: { transaction: true }
    })

    if (!transactionDetail) {
      return res.status(404).json({ error: "Tiket tidak ditemukan atau sudah digunakan" })
    }

    // Update `used_at` ke timestamp sekarang
    await prisma.transaction_detail.update({
      where: { transaction_detail_id: transactionDetail.transaction_detail_id },
      data: { used_at: new Date() }
    })

    return res.status(200).json({ message: "Tiket berhasil digunakan" })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Terjadi kesalahan server" })
  }
}
