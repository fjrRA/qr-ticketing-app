import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { ticket_name, ticket_price, ticket_stock, code } = req.body;

    try {
      const updatedTicket = await prisma.ticket.update({
        where: { ticket_id: id as string },
        data: {
          ticket_name,
          ticket_price,
          ticket_stock,
          code,
        },
      });

      res.status(200).json(updatedTicket);
    } catch (error) {
      console.error('Error updating ticket:', error);
      res.status(500).json({ error: 'Failed to update ticket' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
