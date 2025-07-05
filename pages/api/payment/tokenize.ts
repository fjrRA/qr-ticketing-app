// pages/api/payment/tokenize.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import midtransClient from 'midtrans-client';
import prisma from '@lib/prisma';

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { order_id } = req.body;

    if (!order_id) {
      return res.status(400).json({ error: 'Missing order_id' });
    }

    // Cari order dari database
    const tempOrder = await prisma.temp_order.findUnique({
      where: { order_id },
      include: {
        details: true,
        user: true,
      },
    });

    if (!tempOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Hitung total dari detail
    const grossAmount = tempOrder.details.reduce((total, item) => {
      return total + Number(item.subtotal);
    }, 0);

    // Buat parameter untuk Snap
    const parameter = {
      transaction_details: {
        order_id: tempOrder.order_id,
        gross_amount: grossAmount,
      },
      customer_details: {
        first_name: tempOrder.user?.name ?? 'Guest',
        email: tempOrder.user?.email ?? 'guest@example.com',
      },
      credit_card: {
        secure: true,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return res.status(200).json({
      snapToken: transaction.token,
      redirect_url: transaction.redirect_url,
    });
  } catch (error) {
    console.error("Midtrans Tokenization Error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
