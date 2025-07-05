'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Parser } from "json2csv"
import { Payment } from "./PaymentTable"
import { Input } from "@/components/ui/input"

interface Props {
  status: string
  setStatus: (v: string) => void
  sort: string
  setSort: (v: string) => void
  searchTerm: string
  setSearchTerm: (v: string) => void
  data: Payment[]
  onRefresh: () => void
}

export function PaymentToolbar({ status,
  setStatus,
  sort,
  setSort,
  data,
  onRefresh,
  searchTerm,
  setSearchTerm
}: Props) {
  const handleExport = () => {
    const parser = new Parser()
    const csv = parser.parse(data)
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "data-pembayaran.csv")
    link.click()
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
      <div className="flex gap-3">
        <Select onValueChange={setStatus} defaultValue={status}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="success">Success</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSort} defaultValue={sort}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Urutkan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Terbaru</SelectItem>
            <SelectItem value="asc">Terlama</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="Cari transaksi atau referensi..."
          className="w-[250px]"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onRefresh}>🔁 Refresh</Button>
        <Button variant="default" onClick={handleExport} disabled={!data || data.length === 0}>📦 Export CSV</Button>
      </div>
    </div>
  )
}
