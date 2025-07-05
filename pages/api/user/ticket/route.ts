// pages/api/user/ticket/route.ts
import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user_id } = req.query;

    if (!user_id || typeof user_id !== 'string') {
      return res.status(400).json({ error: "user_id is required" });
    }

    const tickets = await prisma.transaction_detail.findMany({
      where: {
        transaction: {
          user_id: user_id,
          transaction_status: "paid",
        },
      },
      include: {
        ticket: true,
      },
    });

    return res.status(200).json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return res.status(500).json({ error: "Failed to fetch tickets" });
  }
}
