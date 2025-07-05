import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedTicket = await prisma.ticket.delete({
        where: { ticket_id: id as string },
      });

      res.status(200).json(deletedTicket);
    } catch (error) {
      console.error('Error deleting ticket:', error);
      res.status(500).json({ error: 'Failed to delete ticket' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
