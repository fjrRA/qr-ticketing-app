'use client'

import { useEffect, useState, useCallback } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"
import { PaymentToolbar } from "./PaymentToolbar"

export type Payment = {
  payment_id: number
  reference_number: string
  payment_amount: number
  payment_status: string
  payment_time: string
  payment_type: string
  transaction: {
    transaction_code: string
  }
}

export function PaymentTable() {
  const [data, setData] = useState<Payment[]>([])
  const [status, setStatus] = useState("all")
  const [sort, setSort] = useState("desc")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(() => {
    setLoading(true)
    const params = new URLSearchParams({
      status,
      sort,
      page: page.toString(),
      search: searchTerm,
    })

    fetch(`/api/admin/payment/route?${params}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data || [])
        setTotalPages(Math.ceil(res.total / 10))
      })
      .finally(() => setLoading(false))
  }, [status, sort, page, searchTerm])

  useEffect(() => {
    fetchData()
  }, [status, sort, page, fetchData])

  const columns: ColumnDef<Payment>[] = [
    { header: "ID", accessorKey: "payment_id" },
    { header: "Transaksi", accessorKey: "transaction.transaction_code" },
    { header: "Ref", accessorKey: "reference_number" },
    {
      header: "Nominal",
      accessorKey: "payment_amount",
      cell: ({ row }) => `Rp ${String(row.getValue("payment_amount"))}`
    },
    {
      header: "Tipe",
      accessorKey: "payment_type",
      cell: ({ row }) => String(row.getValue("payment_type")).toUpperCase()
    },
    {
      header: "Status",
      accessorKey: "payment_status",
      cell: ({ row }) => {
        const status = String(row.getValue("payment_status"))
        const color = status === "success" ? "default" : status === "pending" ? "outline" : "destructive"
        return <Badge variant={color}>{status}</Badge>
      }
    },
    {
      header: "Waktu",
      accessorKey: "payment_time",
      cell: ({ row }) =>
        new Date(String(row.getValue("payment_time"))).toLocaleString()
    }
  ]

  return (
    <div className="space-y-4">
      <PaymentToolbar
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        onRefresh={fetchData}
      />

      <DataTable
        columns={columns}
        data={loading ? Array(10).fill(null) : data}
        isLoading={loading}
      />

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
