import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function generateTicketPdf(
  transactionCode: string,
  qrCodeUrl: string,
  additionalData: string
): Promise<Uint8Array> {
  const [visitorName, destinationName, date] = additionalData.split(',');
  const formattedDate = new Date(date).toLocaleString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);

  // Fonts
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Title
  page.drawText("TIKET MASUK", {
    x: 200, y: 360, size: 22, font, color: rgb(0, 0.3, 0.6)
  });

  // Divider line
  page.drawLine({
    start: { x: 50, y: 350 },
    end: { x: 550, y: 350 },
    thickness: 1,
    color: rgb(0.6, 0.6, 0.6),
  });

  // Text content
  page.drawText(`Kode Transaksi: ${transactionCode}`, { x: 50, y: 310, size: 16, font });
  page.drawText(`Nama Pengunjung: ${visitorName}`, { x: 50, y: 280, size: 16, font });
  page.drawText(`Destinasi: ${destinationName}`, { x: 50, y: 250, size: 16, font });
  page.drawText(`Tanggal Kunjungan: ${formattedDate}`, { x: 50, y: 220, size: 16, font });

  // QR Code
  const qrImage = await pdfDoc.embedPng(qrCodeUrl);
  const qrDims = qrImage.scale(0.7);
  page.drawImage(qrImage, {
    x: 360, y: 0, width: qrDims.width, height: qrDims.height
  });

  return await pdfDoc.save();
}
