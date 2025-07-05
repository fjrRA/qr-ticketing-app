"use client"

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"

import UserDeleteDialog from "./UserDeleteDialog"
import { useToast } from "@/hooks/use-toast"

type User = {
  user_id: string
  name: string
  email: string
  phone_number: string | null
  address: string | null
  role: "admin" | "user" | "tourism_owner"
}

export function UserTable() {
  const [data, setData] = useState<User[]>([])

  useEffect(() => {
    fetch("/api/admin/user/route")
      .then(res => res.json())
      .then(setData)
  }, [])

  const { toast } = useToast()

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/admin/user/route?id=${id}`, {
      method: "DELETE",
    })

    if (res.ok) {
      toast({
        title: "Pengguna dihapus",
        description: "Data pengguna berhasil dihapus.",
      })
      setData(prev => prev.filter(user => user.user_id !== id))
    } else {
      toast({
        title: "Gagal menghapus",
        description: "Terjadi kesalahan saat menghapus pengguna.",
        variant: "destructive",
      })
    }
  }

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "user_id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Nama",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone_number",
      header: "No. HP",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <UserDeleteDialog
            userId={row.original.user_id}
            onDelete={handleDelete}
            disabled={row.original.role === "admin"}
          />
        </div>
      ),
    },
  ]

  return <DataTable columns={columns} data={data} />
}
