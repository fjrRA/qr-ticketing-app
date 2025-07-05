import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.gallery.delete({
        where: { gallery_id: id as string },
      })
      res.status(200).json({ message: 'Gallery deleted' })
    } catch (error) {
      console.error("Failed to delete gallery:", error)
      res.status(500).json({ error: 'Failed to delete gallery' })
    }
  } else {
    res.status(405).end()
  }
}
