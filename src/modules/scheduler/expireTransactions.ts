// src/modules/scheduler/expireTransaction.ts

import cron from 'node-cron';
import prisma from '@lib/prisma'; // Sesuaikan jika perlu
import { Prisma } from '@prisma/client';

// Fungsi untuk membatalkan transaksi yang expired
const cancelExpiredTransactions = async () => {
  try {
    const now = new Date();
    const expiredTransactions = await prisma.transaction.findMany({
      where: {
        transaction_status: 'pending',
        expired_at: { lt: now },
      },
    });

    console.log(`[${now.toISOString()}] Found ${expiredTransactions.length} expired transactions`);

    // Jalankan update secara paralel dan aman
    await Promise.all(
      expiredTransactions.map((transaction) =>
        prisma.transaction.update({
          where: { transaction_id: transaction.transaction_id },
          data: { transaction_status: 'cancelled' },
        }).then(() => {
          console.log(`✔ Transaction ${transaction.transaction_id} marked as CANCELLED`);
        }).catch((err: Prisma.PrismaClientKnownRequestError) => {
          console.error(`✘ Failed to cancel transaction ${transaction.transaction_id}`, err.message);
        })
      )
    );
  } catch (error) {
    console.error('❌ Error cancelling expired transactions:', error);
  }
};

// Menjadwalkan cron setiap jam (misalnya jam 00:00, 01:00, dst)
cron.schedule('0 * * * *', async () => {
  console.log('🕐 Running expireTransactions cron job...');
  await cancelExpiredTransactions();
});
