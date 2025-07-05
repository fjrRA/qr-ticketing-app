import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { village_id, village_name, village_city } = req.body

  if (req.method === 'POST') {
    try {
      const created = await prisma.village.create({
        data: { village_id, village_name, village_city },
      })
      res.status(200).json(created)
    } catch (error) {
      console.error("Failed to create village:", error)
      res.status(500).json({ error: 'Failed to create village' })
    }
  } else {
    res.status(405).end()
  }
}
