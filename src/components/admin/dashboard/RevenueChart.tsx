"use client"

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import SkeletonChart from "@/components/skeleton/SkeletonChart";

type Data = {
  date: string;
  total: number;
}[];

export default function RevenueChart() {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    fetch("/api/admin/dashboard/revenue-chart")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data.length === 0) return <SkeletonChart />

  return (
    <div className="mt-8 p-4 border rounded-xl bg-white shadow-sm w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">💰 Grafik Pendapatan 7 Hari Terakhir</h2>
      <div className="min-w-[500px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickFormatter={(v) => `Rp ${v / 1000}k`} />
            <Tooltip formatter={(value: number) => `Rp ${value.toLocaleString()}`} />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
