import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const details = await prisma.transaction_detail.findMany({
        where: { transaction_id: Number(id) },
        include: {
          ticket: {
            select: {
              ticket_name: true,
              ticket_price: true
            }
          }
        }
      })

      res.status(200).json(details)
    } catch (error) {
      console.error('Error:', error)
      res.status(500).json({ error: 'Gagal mengambil detail transaksi' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
