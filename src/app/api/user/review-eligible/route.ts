// src/app/api/user/review-eligible/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const spot_id = searchParams.get("spot_id");
  const firebase_uid = searchParams.get("firebase_uid");

  if (!spot_id || !firebase_uid) {
    return NextResponse.json({ error: "Missing spot_id or user_id" }, { status: 400 });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { firebase_uid },
    });

    if (!user) {
      return NextResponse.json({ eligible: false }, { status: 200 });
    }

    const hasUsedTicket = await prisma.transaction_detail.findFirst({
      where: {
        ticket: { spot_id },
        visitor_name: user.name, // 🟢 nama user yang melakukan review
        is_used: 'verified',     // 🟢 sudah diverifikasi (scan)
        transaction: {
          transaction_status: 'paid',
        },
      },
    });

    return NextResponse.json({ eligible: Boolean(hasUsedTicket) }, { status: 200 });
  } catch (error) {
    console.error("Failed to check eligibility:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
