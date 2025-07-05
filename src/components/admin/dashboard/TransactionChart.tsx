"use client"

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import SkeletonChart from "@/components/skeleton/SkeletonChart";

type Data = {
  date: string;
  count: number;
}[];

export default function TransactionChart() {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    fetch("/api/admin/dashboard/transaction-chart")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data.length === 0) return <SkeletonChart />

  return (
    <div className="mt-8 p-4 border rounded-xl bg-white shadow-sm w-full overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">📈 Grafik Transaksi 7 Hari Terakhir</h2>
      <div className="min-w-[500px]">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#2563eb"
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
