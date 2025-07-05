import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { user_id } = req.query;

    if (!user_id || typeof user_id !== "string") {
      return res.status(400).json({ error: "user_id diperlukan" });
    }

    const transactions = await prisma.transaction.findMany({
      where: {
        user_id,
        transaction_status: "paid",
      },
      orderBy: {
        transaction_date: "desc",
      },
      include: {
        transaction_details: {
          include: {
            ticket: true,
          },
        },
      },
    });

    return res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching grouped tickets:", error);
    return res.status(500).json({ error: "Gagal mengambil data transaksi tiket" });
  }
}
