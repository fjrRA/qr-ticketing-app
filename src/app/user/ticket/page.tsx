// src/app/user/ticket/page.tsx
'use client';

import { useEffect, useState } from 'react';
import TicketTransactionCard from '@/components/user/ticket/TicketTransactionCard';

type TransactionDetail = {
  transaction_detail_id: number;
  ticket: {
    ticket_name: string;
    ticket_price: number;
  } | null;
  visitor_name: string | null;
  is_used: 'verified' | 'unverified';
  detail_price: number;
  detail_subtotal: number;
};

type Transaction = {
  transaction_id: number;
  transaction_code: string;
  transaction_date: string;
  total_price: number;
  transaction_status: string;
  transaction_details: TransactionDetail[];
};

export default function TicketPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 4;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user?.user_id) return;

    fetch(`/api/user/ticket/grouped?user_id=${user.user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  const filtered = transactions
    .map((tx) => {
      let filteredDetails = tx.transaction_details;

      if (filter === 'unverified') {
        filteredDetails = tx.transaction_details.filter((d) => d.is_used === 'unverified');
      } else if (filter === 'verified') {
        filteredDetails = tx.transaction_details.filter((d) => d.is_used === 'verified');
      }

      return {
        ...tx,
        transaction_details: filteredDetails,
      };
    })
    .filter((tx) => tx.transaction_details.length > 0)
    .filter((tx) =>
      tx.transaction_details.some(
        (d) =>
          (d.visitor_name ?? '').toLowerCase().includes(search.toLowerCase()) ||
          (d.ticket?.ticket_name ?? '').toLowerCase().includes(search.toLowerCase())
      )
    );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Tiket Saya</h1>

      <div className="flex justify-between items-center gap-2 flex-wrap">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded"
        >
          <option value="all">Semua</option>
          <option value="unverified">Belum Digunakan</option>
          <option value="verified">Sudah Digunakan</option>
        </select>

        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border px-3 py-2 rounded w-full md:w-72"
          placeholder="Cari nama tiket / pengunjung..."
        />
      </div>

      {paginated.length === 0 ? (
        <p className="text-gray-500">Tidak ada tiket yang sesuai.</p>
      ) : (
        paginated.map((tx) => (
          <TicketTransactionCard
            key={tx.transaction_id}
            {...{
              ...tx,
              transaction_details: tx.transaction_details.map((d) => ({
                ...d,
                visitor_name: d.visitor_name ?? '',
                ticket: d.ticket ?? { ticket_name: '' },
              })),
            }}
            filterUsed={
              filter === 'verified'
                ? 'verified'
                : filter === 'unverified'
                  ? 'unverified'
                  : undefined
            }
          />
        ))
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
