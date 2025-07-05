import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; 

  if (req.method === 'PUT') {
    const { transaction_status } = req.body; 

    try {
      const updatedTransaction = await prisma.transaction.update({
        where: {
          transaction_id: Number(id),
        },
        data: {
          transaction_status,
        },
      });

      res.status(200).json(updatedTransaction);
    } catch (error) {
      console.error('Error updating transaction:', error);
      res.status(500).json({ error: 'Failed to update transaction status' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
