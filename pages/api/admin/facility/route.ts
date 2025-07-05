import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.facility.findMany()
      res.status(200).json(data)
    } catch (error) {
      console.error("Facility fetch failed:", error)
      res.status(500).json({ error: 'Failed to fetch facilities' })
    }
    
  } else {
    res.status(405).end()
  }
}
