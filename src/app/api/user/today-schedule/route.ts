// src/app/api/user/today-schedule/route.ts
import { NextResponse } from 'next/server';
import prisma from '@lib/prisma';

enum OperatingDay {
  Senin = "Senin",
  Selasa = "Selasa",
  Rabu = "Rabu",
  Kamis = "Kamis",
  Jumat = "Jumat",
  Sabtu = "Sabtu",
  Minggu = "Minggu"
}

export async function GET() {
  try {
    const hariIni = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(new Date());
    const capitalizedDay = hariIni.charAt(0).toUpperCase() + hariIni.slice(1);

    if (!Object.values(OperatingDay).includes(capitalizedDay as OperatingDay)) {
      return NextResponse.json({ message: 'Hari tidak valid' }, { status: 400 });
    }

    const schedule = await prisma.operating_hours.findMany({
      where: {
        operating_day: capitalizedDay as OperatingDay,
      },
      include: {
        spot: true,
      },
    });

    return NextResponse.json(schedule);
  } catch (error) {
    console.error("Error fetching today's schedule:", error);
    return NextResponse.json({ message: 'Terjadi kesalahan' }, { status: 500 });
  }
}
