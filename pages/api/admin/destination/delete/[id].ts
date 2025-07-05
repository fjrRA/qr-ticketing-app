import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedSpot = await prisma.spot_tourism.delete({
        where: { spot_id: id as string },
      });
      res.status(200).json(deletedSpot);
    } catch (error) {
      console.error('Error deleting spot:', error);
      res.status(500).json({ error: 'Failed to delete spot' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
