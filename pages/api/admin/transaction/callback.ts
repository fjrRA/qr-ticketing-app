import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';
import { generateQRCode } from '@lib/qrcode';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { order_id, transaction_status, gross_amount } = req.body;

  if (!order_id || !transaction_status || !gross_amount) {
    return res.status(400).json({ error: 'Invalid callback data from Midtrans' });
  }

  console.log("RAW BODY DITERIMA:", req.body);
  console.log(`[CALLBACK] Order: ${order_id}, Status: ${transaction_status}`);

  try {
    const existing = await prisma.transaction.findUnique({
      where: { transaction_code: order_id },
    });

    if (!existing) {
      const newTransaction = await prisma.transaction.create({
        data: {
          transaction_code: order_id,
          transaction_status: transaction_status === 'settlement' ? 'paid' : 'pending',
          total_price: parseFloat(gross_amount),
          visit_date: new Date(),
          user_id: 'U969431208',
          transaction_details: {
            create: {
              ticket_id: 'TICKET001',
              detail_quantity: 1,
              detail_price: parseFloat(gross_amount),
              detail_subtotal: parseFloat(gross_amount),
            },
          },
        },
        include: {
          transaction_details: true,
        },
      });

      for (const detail of newTransaction.transaction_details) {
        const qrData = `https://baturraden-tourism.com/use/${detail.transaction_detail_id}`;
        const qrImage = await generateQRCode(qrData);

        await prisma.ticket.update({
          where: { ticket_id: detail.ticket_id! },
          data: {
            url_qr: qrImage,
          },
        });
      }

      return res.status(200).json({ message: 'Transaction saved & QR generated' });
    } else {
      if (transaction_status === 'settlement' || transaction_status === 'capture') {
        await prisma.transaction.update({
          where: { transaction_code: order_id },
          data: { transaction_status: 'paid' },
        });

        return res.status(200).json({ message: 'Transaction updated to paid' });
      } else {
        return res.status(200).json({ message: 'Transaction exists, no update needed' });
      }
    }

  } catch (err) {
    console.error('[MIDTRANS CALLBACK ERROR]', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '@lib/prisma';
// import { generateQRCode } from '@lib/qrcode';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { order_id, transaction_status } = req.body;

//   if (transaction_status === 'settlement' || transaction_status === 'capture') {
//     const transaction = await prisma.transaction.update({
//       where: { transaction_code: order_id },
//       data: { transaction_status: 'paid' },
//       include: {
//         transaction_details: true,
//       },
//     });

//     for (const detail of transaction.transaction_details) {
//       const qrData = `https://baturraden-tourism.com/use/${detail.transaction_detail_id}`;
//       const qrImage = await generateQRCode(qrData);

//       await prisma.transaction_detail.update({
//         where: { transaction_detail_id: detail.transaction_detail_id },
//         data: {
//           qr_url: qrImage,
//         },
//       });
//     }

//     return res.status(200).json({ message: 'Transaction updated & QR generated' });
//   }

//   return res.status(200).json({ message: 'Ignored non-paid status' });
// }
