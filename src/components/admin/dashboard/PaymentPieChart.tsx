"use client"

import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import SkeletonPie from "@/components/skeleton/SkeletonPie"

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function PaymentPieChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/admin/dashboard/payment-method-chart")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data.length === 0) return <SkeletonPie />

  return (
    <div className="mt-8 p-4 border rounded-xl bg-white shadow-sm w-full max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">🥧 Metode Pembayaran Terbanyak</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
