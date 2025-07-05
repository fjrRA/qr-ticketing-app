'use client'

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Trash2, Pencil, Plus } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import VillageForm from "./VillageForm"

type Village = {
  village_id: string
  village_name: string
  village_city: string
}

export function VillageTable() {
  const [data, setData] = useState<Village[]>([])
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Village | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    setIsLoading(true)
    fetch("/api/admin/village/route")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/village/delete/${id}`, { method: "DELETE" })
    setData(prev => prev.filter(item => item.village_id !== id))
    toast({ title: "Desa berhasil dihapus" })
  }

  const columns: ColumnDef<Village>[] = [
    { accessorKey: "village_id", header: "ID" },
    { accessorKey: "village_name", header: "Nama Desa" },
    { accessorKey: "village_city", header: "Kecamatan/Kota" },
    {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setEditing(row.original)
              setOpen(true)
            }}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleDelete(row.original.village_id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => {
            setEditing(null)
            setOpen(true)
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Desa
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={isLoading ? Array(10).fill(null) : data}
        isLoading={isLoading} />

      <VillageForm
        open={open}
        onClose={() => {
          setOpen(false)
          setEditing(null)
        }}
        onSuccess={() => {
          fetchData()
          setEditing(null)
        }}
        initialData={editing}
      />
    </div>
  )
}
