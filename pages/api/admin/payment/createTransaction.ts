import { NextApiRequest, NextApiResponse } from 'next';
import * as midtransClient from 'midtrans-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { amount, order_id } = req.body;

  try {
    const coreApi = new midtransClient.CoreApi({
      serverKey: process.env.MIDTRANS_SERVER_KEY, // Gunakan server key
      clientKey: process.env.MIDTRANS_CLIENT_KEY, // Gunakan client key
      isProduction: false, // Gunakan false untuk sandbox
    });

    const parameter = {
      payment_type: 'credit_card',
      transaction_details: {
        order_id: order_id,
        gross_amount: amount,
      },
      credit_card: {
        secure: true,
        token_id: 'token-id-dari-tokenisasi',  // Ini adalah token yang Anda dapatkan setelah tokenisasi di frontend
      },
    };


    const chargeResponse = await coreApi.charge(parameter);

    res.status(200).json(chargeResponse); // Mengirimkan hasil dari Midtrans
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
}
console.log('Server Key:', process.env.MIDTRANS_SERVER_KEY);
console.log('Client Key:', process.env.MIDTRANS_CLIENT_KEY);