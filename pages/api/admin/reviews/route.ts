// pages/api/admin/reviews/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const reviews = await prisma.reviews.findMany({
        orderBy: {
          reviews_created_at: 'desc',
        },
        include: {
          user: true,  // dari relasi users?
          spot: true,  // dari relasi spot_tourism?
        },
      });

      res.status(200).json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
