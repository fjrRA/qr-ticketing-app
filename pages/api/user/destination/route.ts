// pages/api/user/destination/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const destinations = await prisma.spot_tourism.findMany({
      include: {
        galleries: true,
      },
    });

    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data tempat wisata', error });
  }
}
