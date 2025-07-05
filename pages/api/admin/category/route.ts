
import prisma from '@lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.category_tourism.findMany()
      res.status(200).json(data)
    } catch {
      res.status(500).json({ error: 'Failed to fetch data' })
    }
  } else {
    res.status(405).end()
  }
}
