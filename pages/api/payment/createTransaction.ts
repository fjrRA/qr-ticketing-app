/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/api/payment/createTransaction.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as midtransClient from 'midtrans-client';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const {
    order_id,
    amount,
    token_id,
    visit_date,
    user_id,
    detail_items, // array of { ticket_id, quantity, price, subtotal, visitor_name }
  } = req.body;

  if (!order_id || !amount || !token_id || !user_id || !detail_items || detail_items.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const coreApi = new midtransClient.CoreApi({
      serverKey: process.env.MIDTRANS_SERVER_KEY!,
      clientKey: process.env.MIDTRANS_CLIENT_KEY!,
      isProduction: false,
    });

    // Kirim request charge ke Midtrans
    const chargeResponse = await coreApi.charge({
      payment_type: 'credit_card',
      transaction_details: {
        order_id: order_id,
        gross_amount: amount,
      },
      credit_card: {
        secure: true,
        token_id,
      },
    });

    const now = new Date();
    const expiredAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // +24 jam
    console.log('EXPIRED AT:', expiredAt.toISOString());

    // Simpan transaksi dan detailnya ke DB
    await prisma.transaction.create({
      data: {
        transaction_code: order_id,
        total_price: amount,
        transaction_status: 'pending',
        transaction_date: now,
        expired_at: expiredAt,
        visit_date: new Date(visit_date),
        user_id: user_id,
        transaction_details: {
          createMany: {
            data: detail_items.map((item: any) => ({
              ticket_id: item.ticket_id,
              detail_quantity: item.quantity,
              detail_price: item.price,
              detail_subtotal: item.subtotal,
              visitor_name: item.visitor_name,
              is_used: 'unverified',
            })),
          },
        },
        payments: {
          create: {
            reference_number: chargeResponse.transaction_id,
            payment_type: 'credit_card',
            payment_amount: amount,
            payment_status: 'pending', // Midtrans Snap belum confirm success
            response_data: chargeResponse,
          },
        },
      },
    });

    res.status(200).json(chargeResponse);
  } catch (error: any) {
    console.error('Payment error:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
}
