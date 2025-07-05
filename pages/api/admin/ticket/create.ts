import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import QRCode from 'qrcode'  // Pastikan untuk menggunakan qrcode package

// Fungsi untuk generate QR Code sebagai Data URL
const generateQRCode = async (ticketId: string) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(ticketId)  // Menggunakan toDataURL untuk menghasilkan Data URL
    return qrCodeDataUrl  // Return base64 QR code data URL
  } catch (err) {
    console.error('Failed to generate QR code:', err)
    throw new Error('Failed to generate QR Code')  // Menangani error dengan melemparkan error
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { spot_id, ticket_name, ticket_price, ticket_stock, code } = req.body

    if (!spot_id) {
      return res.status(400).json({ error: "Spot ID is required" })
    }

    try {
      // Validasi spot_id
      const spot = await prisma.spot_tourism.findUnique({
        where: { spot_id: spot_id },
      })

      if (!spot) {
        return res.status(400).json({ error: `Spot with ID ${spot_id} not found` })
      }

      // Generate ticket_id (gunakan format yang sesuai)
      const ticket_id = `TICKET-${Date.now()}`

      // Generate QR Code untuk tiket
      const qrCodeDataUrl = await generateQRCode(ticket_id)

      // Create tiket di database
      const newTicket = await prisma.ticket.create({
        data: {
          ticket_id,
          spot_id,
          ticket_name,
          ticket_price,
          ticket_stock,
          code,
          url_qr: qrCodeDataUrl,  // Simpan QR code dalam format base64 URL
        },
      })

      return res.status(201).json(newTicket)
    } catch (error) {
      console.error('Error creating ticket:', error)
      return res.status(500).json({ error: 'Failed to create ticket' })
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
