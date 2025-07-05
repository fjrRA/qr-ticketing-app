import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.village.findMany()
      res.status(200).json(data)
    } catch (error) {
      console.error("Failed to fetch village:", error)
      res.status(500).json({ error: 'Failed to fetch village' })
    }
  } else {
    res.status(405).end()
  }
}
