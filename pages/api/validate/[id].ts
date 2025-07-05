// pages/api/validate/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID tidak valid' });
  }

  try {
    const detailId = parseInt(id);
    if (isNaN(detailId)) return res.status(400).json({ error: 'ID harus berupa angka' });

    const detail = await prisma.transaction_detail.findUnique({
      where: { transaction_detail_id: detailId },
      include: {
        ticket: true,
        transaction: true,
      },
    });

    if (!detail) {
      return res.status(404).json({ error: 'Tiket tidak ditemukan' });
    }

    if (detail.is_used === 'verified') {
      return res.status(400).json({ error: 'Tiket sudah digunakan' });
    }

    // Update status tiket menjadi verified
    await prisma.transaction_detail.update({
      where: { transaction_detail_id: detailId },
      data: { is_used: 'verified' },
    });

    return res.status(200).json({
      message: '✅ Tiket berhasil diverifikasi',
      visitor_name: detail.visitor_name,
      destination: detail.ticket?.ticket_name,
      transaction_code: detail.transaction?.transaction_code,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('[VALIDATE ERROR]', error);
    return res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
}
