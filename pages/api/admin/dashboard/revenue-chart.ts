import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const today = new Date();
    const days = [...Array(7)].map((_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() - (6 - i));
      return d.toISOString().split("T")[0]; // format YYYY-MM-DD
    });

    const payments = await prisma.payment.findMany({
      where: {
        payment_status: "success",
        payment_time: {
          gte: new Date(new Date().setDate(today.getDate() - 6)),
        },
      },
      select: {
        payment_time: true,
        payment_amount: true,
      },
    });

    const result = days.map((date) => {
      const total = payments
        .filter((p) => p.payment_time.toISOString().startsWith(date))
        .reduce((sum, p) => sum + Number(p.payment_amount), 0);

      return { date, total };
    });

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memuat data grafik pendapatan." });
  }
}
