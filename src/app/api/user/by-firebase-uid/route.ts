// src/app/api/user/by-firebase-uid/route.ts
import prisma from "@lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid");

  if (!uid) {
    return NextResponse.json({ error: "Missing Firebase UID" }, { status: 400 });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { firebase_uid: uid },
      select: { user_id: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user_id: user.user_id }, { status: 200 });
  } catch (error) {
    console.error("🔥 Failed to fetch user by Firebase UID:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
