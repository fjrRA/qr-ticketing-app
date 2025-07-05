import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const payments = await prisma.payment.groupBy({
      by: ["payment_type"],
      _count: { payment_type: true },
      where: { payment_status: "success" },
    });

    const result = payments.map((p) => ({
      name: p.payment_type,
      value: p._count.payment_type,
    }));

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengambil data metode pembayaran" });
  }
}
