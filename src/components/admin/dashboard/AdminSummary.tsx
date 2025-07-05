'use client'

import { useEffect, useState } from "react";
import { SkeletonDashboardSummary } from "./skeleton/SkeletonDashboardSummary"

type Summary = {
  transaksi: { total: number; paid: number; cancelled: number; pending: number };
  pendapatan: { total: number; metodeTerbanyak: string };
  kunjungan: { hariIni: number; mingguIni: number };
  pengguna: { total: number; beli: number };
  populer: { nama: string };
};

export default function ExtendedSummary() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    fetch("/api/admin/dashboard/extended-summary")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading statistik...</p>;
  if (!data) return <SkeletonDashboardSummary />;

  return (
    <div className="space-y-6 mt-6">
      <Section title="🎟️ Transaksi Tiket">
        <p>Total transaksi: {data.transaksi.total}</p>
        <p>Transaksi sukses (paid): {data.transaksi.paid}</p>
        <p>Transaksi gagal (cancelled): {data.transaksi.cancelled}</p>
        <p>Transaksi pending: {data.transaksi.pending}</p>
      </Section>

      <Section title="💰 Pembayaran">
        <p>Total pendapatan: Rp {data.pendapatan.total.toLocaleString()}</p>
        <p>Metode pembayaran terbanyak: {data.pendapatan.metodeTerbanyak}</p>
      </Section>

      <Section title="📅 Kunjungan Terjadwal">
        <p>Hari ini: {data.kunjungan.hariIni} tiket</p>
        <p>Minggu ini: {data.kunjungan.mingguIni} tiket</p>
      </Section>

      <Section title="📍 Destinasi Populer">
        <p>{data.populer.nama}</p>
      </Section>

      <Section title="👤 Pengguna Aktif">
        <p>Total pengguna terdaftar: {data.pengguna.total}</p>
        <p>Yang membeli tiket: {data.pengguna.beli}</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="space-y-1 text-sm">{children}</div>
    </div>
  );
}
