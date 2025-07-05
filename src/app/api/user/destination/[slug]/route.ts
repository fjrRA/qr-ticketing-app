// src/app/api/user/destination/[slug]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.pathname.split('/').pop();

const destination = await prisma.spot_tourism.findUnique({
  where: { spot_id: slug },
  include: {
    facility_tourisms: { include: { facility: true } },
    galleries: true,
    operating_hours: true,
    reviews: true,
    tickets: true,
    category: true,
  },
});

if (!destination) {
  return NextResponse.json({ message: 'Data tidak ditemukan' }, { status: 404 });
}

return NextResponse.json(destination);
}
