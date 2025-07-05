// pages/api/generate-ticket.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { generateTicketPdf } from '@lib/pdf/generateTicketPdf';  // Import fungsi untuk generate PDF
import { generateQRCode } from '@lib/qrcode';  // Import fungsi untuk generate QR Code

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { transactionCode, additionalData } = req.query;

  if (!transactionCode || !additionalData) {
    return res.status(400).json({ error: 'Transaction code and additional data are required' });
  }

  try {
    // Generate QR Code URL
    const qrCodeUrl = await generateQRCode(transactionCode as string);

    // Generate PDF with QR Code and additional data
    const pdfBytes = await generateTicketPdf(transactionCode as string, qrCodeUrl, additionalData as string);

    // Set headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="ticket-${transactionCode}.pdf"`); 

    // Send PDF buffer as response
    const pdfBuffer = Buffer.from(pdfBytes);
    res.status(200).send(pdfBuffer); 
  } catch (error) {
    console.error('Error generating ticket PDF:', error);
    res.status(500).json({ error: 'Failed to generate PDF' });
  }
}
