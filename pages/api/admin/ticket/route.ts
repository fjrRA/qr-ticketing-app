import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const tickets = await prisma.ticket.findMany();
      res.status(200).json(tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      res.status(500).json({ error: 'Failed to fetch tickets' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
