import prisma from '@lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.category_tourism.delete({
        where: { category_id: id as string },
      })
      res.status(200).json({ message: 'Category deleted' })
    } catch {
      res.status(500).json({ error: 'Failed to delete category' })
    }
  } else {
    res.status(405).end()
  }
}
