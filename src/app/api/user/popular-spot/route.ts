// pages/api/user/popular-spot/route.ts
import { NextResponse } from "next/server";
import prisma from "@lib/prisma";

export async function GET() {
  try {
    const spots = await prisma.spot_tourism.findMany({
      where: {
        spot_rating: {
          not: null,
          gt: 0,
        },
        reviews: {
          some: {}, // hanya wisata yang punya review
        },
      },
      orderBy: [
        { spot_rating: "desc" },
        { reviews: { _count: "desc" } }, // opsional: jumlah review
      ],
      take: 5,
      include: {
        _count: {
          select: { reviews: true },
        },
      },
    });

    return NextResponse.json(spots, { status: 200 });
  } catch (error) {
    console.error("Error fetching popular spots:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
