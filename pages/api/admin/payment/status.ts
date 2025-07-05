// pages/api/admin/payment/status.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as midtransClient from 'midtrans-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { order_id } = req.query;

  // Setup Midtrans CoreApi
  const snap = new midtransClient.Snap({
    isProduction: false, // Set to true in production
    serverKey: process.env.MIDTRANS_SERVER_KEY, // Replace with your Midtrans server key
    clientKey: process.env.MIDTRANS_CLIENT_KEY, // Replace with your Midtrans client key
  });

  try {
    // Check the status of the transaction using the order_id
    const statusResponse = await snap.transaction.status(order_id as string);

    // Send the transaction status response back
    res.status(200).json(statusResponse);
  } catch (error) {
    console.error('Error fetching status:', error);
    res.status(500).json({ error: 'Failed to fetch payment status' });
  }
}
