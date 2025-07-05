// pages/api/payment/notification.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('🔥 CALLBACK PEMBAYARAN MASUK');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log("🔥 Notifikasi Midtrans DITERIMA");
  console.log("🧾 Headers:", JSON.stringify(req.headers, null, 2));

  const { order_id, transaction_status, settlement_time, payment_type } = req.body;
  const baseOrderId = order_id.includes('-RETRY') ? order_id.split('-RETRY')[0] : order_id;

  console.log('📦 Status:', transaction_status, '| Order ID:', order_id);

  try {
    // Cek apakah transaksi sudah pernah dibuat sebelumnya
    const transaction = await prisma.transaction.findFirst({
      where: {
        transaction_code: {
          startsWith: baseOrderId,
        },
      },
    });

    if (transaction) {
      console.log('🔄 Transaksi lama ditemukan');

      if (
        transaction_status === 'settlement' ||
        transaction_status === 'capture' ||
        transaction_status === 'accept'
      ) {
        await prisma.transaction.update({
          where: { transaction_code: transaction.transaction_code },
          data: { transaction_status: 'paid' },
        });

        await prisma.payment.updateMany({
          where: { reference_number: transaction.transaction_code },
          data: {
            payment_status: 'success',
            payment_time: new Date(settlement_time ?? Date.now()),
            response_data: req.body,
          },
        });

        console.log('✅ Transaksi ditemukan & diperbarui menjadi PAID');
      }

      return res.status(200).json({ message: 'Transaksi diperbarui' });
    }

    // Jika belum pernah tersimpan, cek di temp_order
    console.log('🔍 Mencari temp_order:', baseOrderId);
    const tempOrder = await prisma.temp_order.findUnique({
      where: { order_id: baseOrderId },
      include: { details: true },
    });

    if (!tempOrder) {
      console.warn('❌ Temp order tidak ditemukan juga');
      return res.status(404).json({ error: 'Transaction not found' });
    }

    const total_price = tempOrder.details.reduce(
      (sum, item) => sum + Number(item.subtotal),
      0
    );
    const now = new Date();
    const expiredAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    console.log('📝 Membuat transaksi baru...');
    const newTransaction = await prisma.transaction.create({
      data: {
        transaction_code: order_id,
        user_id: tempOrder.user_id,
        total_price,
        visit_date: tempOrder.visit_date,
        transaction_status:
          transaction_status === 'settlement' ||
          transaction_status === 'capture' ||
          transaction_status === 'accept'
            ? 'paid'
            : 'pending',
        transaction_date: now,
        expired_at: expiredAt,
        transaction_details: {
          create: tempOrder.details.map((item) => ({
            ticket_id: item.ticket_id,
            detail_quantity: item.quantity,
            detail_price: item.price,
            detail_subtotal: item.subtotal,
            visitor_name: item.visitor_name,
            is_used: 'unverified',
          })),
        },
      },
    });

    await prisma.payment.create({
      data: {
        transaction_id: newTransaction.transaction_id,
        reference_number: order_id,
        payment_type,
        payment_amount: total_price,
        payment_status:
          transaction_status === 'settlement' ||
          transaction_status === 'capture' ||
          transaction_status === 'accept'
            ? 'success'
            : 'pending',
        payment_time: new Date(settlement_time ?? Date.now()),
        response_data: req.body,
      },
    });

    // Bersihkan data temp
    await prisma.temp_order_detail.deleteMany({
      where: { temp_order_id: tempOrder.temp_order_id },
    });

    await prisma.temp_order.delete({
      where: { temp_order_id: tempOrder.temp_order_id },
    });

    console.log('✅ Transaksi baru berhasil disimpan dari notifikasi langsung');
    return res.status(200).json({ message: 'Transaksi baru berhasil dibuat dari notifikasi' });
  } catch (error) {
    console.error('❌ Gagal memproses notifikasi:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
