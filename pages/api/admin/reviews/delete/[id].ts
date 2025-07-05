// pages/api/admin/reviews/delete/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // review_id

  if (req.method === 'DELETE') {
    try {
      await prisma.reviews.delete({
        where: {
          reviews_id: String(id),
        },
      });

      res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
      console.error('Error deleting review:', error);
      res.status(500).json({ error: 'Failed to delete review' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
