'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Transaction } from "./TransactionTable"
import { TransactionStatusSelect } from "./TransactionStatusSelect"
import { TransactionDetailDialog } from "./TransactionDetailDialog"

export const columns = (
  fetchData: (status?: string) => void,
  currentFilter: string
): ColumnDef<Transaction>[] => [
    { header: "ID", accessorKey: "transaction_id" },
    { header: "Kode", accessorKey: "transaction_code" },
    { header: "Nama Pengguna", accessorKey: "user.name" },
    { header: "User ID", accessorKey: "user_id" },
    {
      accessorKey: 'spot_id',
      header: 'Spot ID',
      cell: ({ row }) => {
        const trx = row.original;
        const spotId =
          trx.transaction_details.find(d => d.ticket?.spot_id)?.ticket?.spot_id || '-';
        return <span>{spotId}</span>;
      }
    },
    {
      header: "Total",
      accessorKey: "total_price",
      cell: ({ row }) => `Rp ${Number(row.getValue("total_price")).toLocaleString()}`
    },
    {
      header: "Status",
      accessorKey: "transaction_status",
      cell: ({ row }) => (
        <Badge variant={
          row.getValue("transaction_status") === "pending" ? "outline" :
            row.getValue("transaction_status") === "paid" ? "default" :
              "destructive"
        }>
          {row.getValue("transaction_status")}
        </Badge>
      )
    },
    {
      header: "Detail",
      cell: ({ row }) => (
        <TransactionDetailDialog transactionId={Number(row.original.transaction_id)} />
      )
    },
    {
      header: "Tanggal Kunjungan",
      accessorKey: "visit_date",
      cell: ({ row }) => new Date(row.getValue("visit_date")).toLocaleDateString(),
    },
    {
      header: "Waktu Transaksi",
      accessorKey: "transaction_date", // sesuai field di database dan prisma
      cell: ({ row }) => {
        const date = row.getValue("transaction_date")
        return date
          ? new Date(date as string).toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
          })
          : "-"
      },
    },
    {
      header: "Ubah Status",
      cell: ({ row }) => (
        <TransactionStatusSelect
          transactionId={row.original.transaction_id}
          currentStatus={row.original.transaction_status}
          onUpdate={() => fetchData(currentFilter)}
        />
      )
    }
  ]
