'use client'

import { useEffect, useState } from "react"
import { DataTable } from "@/components/ui/data-table"
import { TransactionToolbar } from "./TransactionToolbar"
import { columns } from "./TransactionColumns"

export type Transaction = {
  transaction_id: string;
  transaction_code: string;
  transaction_status: string;
  total_price: number;
  transaction_time: string;
  visit_date: string;
  user_id: string;
  user?: {
    name: string;
  };
  transaction_details: {
    ticket?: {
      spot_id: string;
    } | null;
  }[];
};

export function TransactionTable() {
  const [data, setData] = useState<Transaction[]>([])
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sort, setSort] = useState("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    setLoading(true)
    const params = new URLSearchParams({
      page: currentPage.toString(),
      search: searchTerm,
      status: statusFilter,
      sort,
    })

    fetch(`/api/admin/transaction/route?${params.toString()}`)
      .then(res => res.json())
      .then((res) => {
        setData(res.data || [])
        setTotalPages(Math.ceil(res.total / 10))
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm, statusFilter, sort, currentPage]) // ✅ tambahkan sort ke dependency

  return (
    <div className="space-y-4">
      <TransactionToolbar
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sort={sort}
        setSort={setSort}
        onRefresh={fetchData}
        data={data}
      />

      <DataTable
        columns={columns(fetchData, statusFilter)}
        data={loading ? Array(10).fill(null) : data}
        isLoading={loading}
      />

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
