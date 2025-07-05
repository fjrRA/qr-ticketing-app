// src/pages/api/user/transaction/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';
import { TransactionStatus } from '@prisma/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const { user_id, status } = req.query;

  if (!user_id || typeof user_id !== 'string') {
    return res.status(400).json({ error: 'User ID tidak valid' });
  }

  let statusFilter: TransactionStatus | undefined = undefined;
  if (typeof status === 'string' && ['paid', 'pending', 'cancelled'].includes(status)) {
    statusFilter = status as TransactionStatus;
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        user_id,
        ...(statusFilter && { transaction_status: statusFilter }),
      },
      select: {
        transaction_code: true,
        transaction_date: true,
        transaction_status: true,
        total_price: true,
        expired_at: true,
        transaction_details: {
          select: {
            transaction_detail_id: true,
            visitor_name: true,
            detail_quantity: true,
            detail_price: true,
            detail_subtotal: true,
            ticket: {
              select: {
                ticket_name: true,
              },
            },
          },
        },
      },
      orderBy: {
        transaction_date: 'desc',
      },
    });

    // Menghitung total tiket dan total pengeluaran
    const totalData = transactions.reduce(
      (acc, transaction) => {
        acc.totalTickets += transaction.transaction_details.length;
        // Pastikan total_price dan detail_price diubah menjadi number
        acc.totalAmount += Number(transaction.total_price); // Convert to number
        transaction.transaction_details.forEach(detail => {
          acc.totalAmount += Number(detail.detail_price); // Convert to number
        });
        return acc;
      },
      { totalTickets: 0, totalAmount: 0 }
    );

    console.log("🔥 expired_at:", transactions.map(t => t.expired_at));

    res.status(200).json({
      transactions,
      totalTickets: totalData.totalTickets,
      totalAmount: totalData.totalAmount,
    });
  } catch (err) {
    console.error('Gagal mengambil data transaksi:', err);
    res.status(500).json({ error: 'Gagal mengambil data transaksi' });
  }
}
