import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.village.delete({
        where: { village_id: id as string },
      })
      res.status(200).json({ message: 'Village deleted' })
    } catch (error) {
      console.error("Failed to delete village:", error)
      res.status(500).json({ error: 'Failed to delete village' })
    }
  } else {
    res.status(405).end()
  }
}
