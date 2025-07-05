
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const spots = await prisma.spot_tourism.findMany();
      res.status(200).json(spots); 
    } catch (error) {
      console.error('Error fetching spots:', error); 
      res.status(500).json({ error: 'Failed to fetch spots' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
