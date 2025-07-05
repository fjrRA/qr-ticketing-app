'use client'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Parser } from "json2csv"
import { Transaction } from "./TransactionTable"

type Props = {
  statusFilter: string
  setStatusFilter: (v: string) => void
  searchTerm: string
  setSearchTerm: (v: string) => void
  sort: string
  setSort: (v: string) => void
  onRefresh: () => void
  data: Transaction[]
}

export function TransactionToolbar({
  statusFilter,
  setStatusFilter,
  searchTerm,
  setSearchTerm,
  sort,
  setSort,
  onRefresh,
  data
}: Props) {
  const handleExport = () => {
    const parser = new Parser()
    const csv = parser.parse(data)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "transaksi.csv")
    link.click()
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Kiri: Filter & Search */}
      <div className="flex gap-3 flex-wrap">
        <Select onValueChange={setStatusFilter} defaultValue={statusFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSort} defaultValue={sort}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Urutkan Waktu" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Terbaru</SelectItem>
            <SelectItem value="asc">Terlama</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Cari nama atau kode transaksi..."
          className="w-[250px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Kanan: Action */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={onRefresh}>🔁 Refresh</Button>
        <Button variant="default" onClick={handleExport} disabled={data.length === 0}>
          📦 Export CSV
        </Button>
      </div>
    </div>
  )
}
