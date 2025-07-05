// src/app/user/payment/page.tsx
'use client';

import { useEffect, useState } from 'react';
import TransactionCard from "@/components/user/payment/TransactionCard";

type Transaction = {
  transaction_code: string;
  transaction_date: string;
  transaction_status: 'pending' | 'paid' | 'cancelled';
  total_price: number;
  expired_at?: string;
  transaction_details: {
    ticket: {
      ticket_name: string;
    };
    visitor_name: string;
    detail_price: number;
    detail_subtotal: number;
    transaction_detail_id: number;
  }[];
};

export default function PaymentHistoryPage() {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user?.user_id) {
      setLoading(false);
      return;
    }

    fetch(`/api/user/transaction/route?user_id=${user.user_id}`)
      .then(res => res.json())
      .then(res => {
        setData(res.transactions);
        setTotalTickets(res.totalTickets);
        setTotalAmount(res.totalAmount);
      })
      .catch(err => {
        console.error("Gagal fetch data transaksi:", err);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredData = data.filter(trx => {
    const matchStatus = statusFilter === 'all' || trx.transaction_status === statusFilter;
    const matchSearch = trx.transaction_details.some(detail =>
      detail.visitor_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      detail.ticket.ticket_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchStatus && (searchTerm === '' || matchSearch);
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction: 'prev' | 'next') => {
    setCurrentPage((prev) => {
      if (direction === 'prev' && prev > 1) return prev - 1;
      if (direction === 'next' && prev < totalPages) return prev + 1;
      return prev;
    });
  };

  return (
    <main className="p-6 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Riwayat Pembelian Tiket</h1>

      {/* Filter + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <label className="font-medium mr-2">Filter Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="p-2 border rounded-md"
          >
            <option value="all">Semua</option>
            <option value="paid">PAID</option>
            <option value="pending">PENDING</option>
            <option value="cancelled">CANCELLED</option>
          </select>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="🔍 Cari nama tiket atau pengunjung..."
          className="p-2 border rounded-md w-full md:max-w-sm"
        />
      </div>

      {loading ? (
        <p className="text-gray-500">Memuat data...</p>
      ) : filteredData.length === 0 ? (
        <p className="text-gray-500">Tidak ada transaksi yang ditemukan.</p>
      ) : (
        <>
          {/* Info Total Tickets and Amount */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-xl font-semibold">Total Tiket yang Dibeli</h3>
              <p className="text-2xl">{totalTickets}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="text-xl font-semibold">Total Pengeluaran</h3>
              <p className="text-2xl">Rp {totalAmount}</p>
            </div>
          </div>

          {/* Transaction Cards */}
          <div className="space-y-6">
            {paginatedData.map((trx, i) => (
              <TransactionCard key={i} {...trx} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition"
            >
              ⬅️ Sebelumnya
            </button>

            <span className="font-semibold">Halaman {currentPage} dari {totalPages}</span>

            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition"
            >
              Selanjutnya ➡️
            </button>
          </div>
        </>
      )}
    </main>
  );
}
