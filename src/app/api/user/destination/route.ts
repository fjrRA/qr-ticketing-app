import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const isNew = url.searchParams.get('new');

    let destinations;

    if (isNew === 'true') {
      // Contoh filter destinasi "baru"
      // Misal: destinasi yang dibuat/ditambahkan dalam 30 hari terakhir
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      destinations = await prisma.spot_tourism.findMany({
        where: {
          // Asumsikan kamu punya kolom tanggal buat di schema, misal 'createdAt'
          createdAt: {
            gte: thirtyDaysAgo,
          },
        },
        include: {
          galleries: true,
           tickets: {
              select: {
                ticket_price: true
              }
          }
        },
      });
    } else {
      destinations = await prisma.spot_tourism.findMany({
        include: {
          galleries: true,
        },
      });
    }

    return NextResponse.json(destinations);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: 'Terjadi kesalahan' }, { status: 500 });
  }
}
