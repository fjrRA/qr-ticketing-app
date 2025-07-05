import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.facility.delete({
        where: { facility_id: id as string },
      })
      res.status(200).json({ message: 'Facility deleted' })
    } catch {
      res.status(500).json({ error: 'Failed to delete facility' })
    }
  } else {
    res.status(405).end()
  }
}
