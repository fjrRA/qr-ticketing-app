// pages/api/payment/history.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const user_id = req.query.user_id as string;

  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const transaksi = await prisma.transaction.findMany({
      where: { user_id },
      include: {
        transaction_details: {
          include: {
            ticket: true,
          },
        },
      },
      orderBy: { transaction_date: 'desc' },
    });

    return res.status(200).json(transaksi);
  } catch (error) {
    console.error('Error fetching history:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
