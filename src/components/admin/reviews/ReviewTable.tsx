'use client'

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"

type Review = {
  reviews_id: string
  spot_id: string | null
  user_id: string | null
  reviews_rating: number | null
  reviews_desc: string | null
  reviews_created_at: string
}

export function ReviewTable() {
  const [data, setData] = useState<Review[]>([])

  useEffect(() => {
    fetch("/api/admin/reviews/route")
      .then(res => res.json())
      .then(setData)
  }, [])

  const columns: ColumnDef<Review>[] = [
    {
      accessorKey: "reviews_id",
      header: "ID",
    },
    {
      accessorKey: "user_id",
      header: "User",
    },
    {
      accessorKey: "spot_id",
      header: "Spot",
    },
    {
      accessorKey: "reviews_rating",
      header: "Rating",
    },
    {
      accessorKey: "reviews_desc",
      header: "Ulasan",
    },
    {
      accessorKey: "reviews_created_at",
      header: "Tanggal",
      cell: ({ row }) => {
        const date = new Date(String(row.getValue("reviews_created_at")))
        return date.toLocaleDateString()
      },
    },
  ]

  return <DataTable columns={columns} data={data} />
}
