// src/app/api/user/reviews/route.ts
import prisma from "@lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { updateSpotRating } from "@/modules/review/controller/updateSpotRating";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firebase_uid, spot_id, rating, comment } = body;

    if (!firebase_uid || !spot_id || !rating) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 🔍 Cari user_id berdasarkan firebase_uid
    const user = await prisma.users.findUnique({
      where: { firebase_uid },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 403 });
    }

    const user_id = user.user_id;

console.log("🔍 Review Check Debug:");
console.log("firebase_uid:", firebase_uid);
console.log("user_id:", user_id);
console.log("user.name:", user.name);
console.log("spot_id:", spot_id);

// Coba cari visit berdasarkan nama
const hasVisited = await prisma.transaction_detail.findFirst({
  where: {
    ticket: { spot_id },
    visitor_name: user.name,
    is_used: 'verified',
    transaction: {
      transaction_status: 'paid',
    },
  },
});

console.log("📦 hasVisited:", hasVisited);

    if (!hasVisited) {
      return NextResponse.json(
        { error: 'Kamu belum menggunakan tiket di tempat wisata ini.' },
        { status: 403 }
      );
    }

    const upsertedReview = await prisma.reviews.upsert({
      where: {
        reviews_id: `${user_id}-${spot_id}`,
      },
      update: {
        reviews_rating: rating,
        reviews_desc: comment,
        reviews_created_at: new Date(),
      },
      create: {
        reviews_id: `${user_id}-${spot_id}`,
        user_id,
        spot_id,
        reviews_rating: rating,
        reviews_desc: comment,
      },
    });

    await updateSpotRating(spot_id);

    return NextResponse.json(upsertedReview, { status: 200 });
  } catch (error) {
    console.error('Error in review upsert:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const spot_id = searchParams.get('spot_id');

  if (!spot_id) {
    return NextResponse.json({ error: 'spot_id is required' }, { status: 400 });
  }

  try {
    const reviews = await prisma.reviews.findMany({
      where: { spot_id },
      orderBy: { reviews_created_at: 'desc' },
      include: {
        user: {
          select: {
            name: true, // ✅ Ambil nama user
          },
        },
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

