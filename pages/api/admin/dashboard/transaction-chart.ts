import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const today = new Date();
    const last7Days = [...Array(7)].map((_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() - (6 - i)); // hari 0 = 6 hari lalu, sampai hari ini
      return d.toISOString().split("T")[0]; // format YYYY-MM-DD
    });

    const transactions = await prisma.transaction.findMany({
      where: {
        transaction_date: {
          gte: new Date(new Date().setDate(today.getDate() - 6)),
        },
      },
      select: {
        transaction_date: true,
      },
    });

    // Hitung jumlah per tanggal
    const result = last7Days.map((date) => {
      const count = transactions.filter((t) => {
        return t.transaction_date?.toISOString().startsWith(date);
      }).length;
      return { date, count };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal memuat data grafik." });
  }
}
