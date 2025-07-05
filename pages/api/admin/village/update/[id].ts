import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const { village_name, village_city } = req.body

  if (req.method === 'PUT') {
    try {
      const updated = await prisma.village.update({
        where: { village_id: id as string },
        data: { village_name, village_city },
      })
      res.status(200).json(updated)
    } catch (error) {
      console.error("Failed to update village:", error)
      res.status(500).json({ error: 'Failed to update village' })
    }
  } else {
    res.status(405).end()
  }
}
