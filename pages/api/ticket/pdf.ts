import { NextApiRequest, NextApiResponse } from 'next';
import { generateTicketPdf } from '@lib/pdf/generateTicketPdf';
import prisma from '@lib/prisma';
import { generateQRCode } from '@lib/qrcode';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // id = transaction_detail_id

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).json({ error: 'ID tidak valid' });
  }

  try {
    // Ambil data detail transaksi berdasarkan transaction_detail_id
    const detail = await prisma.transaction_detail.findUnique({
      where: { transaction_detail_id: Number(id) },
      include: {
        ticket: true,
        transaction: true,
      },
    });

    if (!detail || !detail.ticket || !detail.transaction) {
      return res.status(404).json({ error: 'Tiket tidak ditemukan' });
    }

    const { ticket, transaction, visitor_name } = detail;

    // Gunakan nama visitor jika ada, jika tidak fallback ke "-"
    const name = visitor_name || 'Pengunjung';
    const ticketName = ticket.ticket_name || 'Tiket';
    const date = transaction.transaction_date || new Date();

    // QR Code akan diarahkan ke halaman validasi individual
    const qrUrl = await generateQRCode(`${detail.transaction_detail_id}`);

    // Generate PDF (gunakan format CSV sebagai string pemisah data)
    const pdfBuffer = await generateTicketPdf(
      transaction.transaction_code,
      qrUrl,
      `${name},${ticketName},${date.toISOString()}`
    );

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="tiket-${detail.transaction_detail_id}.pdf"`);

    return res.end(Buffer.from(pdfBuffer));
  } catch (error) {
    console.error('[PDF ERROR]', error);
    return res.status(500).json({ error: 'Gagal menghasilkan PDF' });
  }
}
