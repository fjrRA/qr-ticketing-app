import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Minggu sebagai hari pertama

    const [
      totalTransaksi,
      transaksiPaid,
      transaksiCancelled,
      transaksiPending,
      totalPendapatan,
      penggunaTerdaftar,
      penggunaPembeli,
      jadwalHariIni,
      jadwalMingguIni,
      metodePembayaran,
      destinasiPopuler
    ] = await Promise.all([
      prisma.transaction.count(),
      prisma.transaction.count({ where: { transaction_status: "paid" } }),
      prisma.transaction.count({ where: { transaction_status: "cancelled" } }),
      prisma.transaction.count({ where: { transaction_status: "pending" } }),
      prisma.payment.aggregate({
        _sum: { payment_amount: true },
        where: { payment_status: "success" },
      }),
      prisma.users.count(),
      prisma.users.count({
        where: {
          transactions: {
            some: {},
          },
        },
      }),
      prisma.transaction.count({
        where: {
          visit_date: today,
        },
      }),
      prisma.transaction.count({
        where: {
          visit_date: {
            gte: startOfWeek,
          },
        },
      }),
      prisma.payment.groupBy({
        by: ["payment_type"],
        _count: { payment_type: true },
        orderBy: { _count: { payment_type: "desc" } },
        take: 1,
      }),
      prisma.transaction_detail.groupBy({
        by: ["ticket_id"],
        _count: { ticket_id: true },
        orderBy: { _count: { ticket_id: "desc" } },
        take: 1,
      }),
    ]);

    let namaDestinasi = "Belum ada";
    if (destinasiPopuler.length > 0) {
      const ticket = await prisma.ticket.findUnique({
        where: { ticket_id: destinasiPopuler[0].ticket_id! },
        include: { spot: true },
      });
      namaDestinasi = ticket?.spot?.spot_name ?? "Belum ada";
    }

    res.status(200).json({
      transaksi: {
        total: totalTransaksi,
        paid: transaksiPaid,
        cancelled: transaksiCancelled,
        pending: transaksiPending,
      },
      pendapatan: {
        total: totalPendapatan._sum.payment_amount?.toNumber() || 0,
        metodeTerbanyak: metodePembayaran[0]?.payment_type || "Tidak diketahui",
      },
      kunjungan: {
        hariIni: jadwalHariIni,
        mingguIni: jadwalMingguIni,
      },
      pengguna: {
        total: penggunaTerdaftar,
        beli: penggunaPembeli,
      },
      populer: {
        nama: namaDestinasi,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal memuat data statistik." });
  }
}
