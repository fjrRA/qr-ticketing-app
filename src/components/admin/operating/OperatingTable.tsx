'use client'

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Trash2, Pencil, Plus } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

import OperatingForm from "./OperatingForm"
import OperatingDeleteDialog from "./OperatingDeleteDialog"

type Operating = {
  operating_id: string
  operating_day: string
  hours_open: string
  hours_closed: string
  spot_id?: string
  spot?: {
    spot_name: string
  }
}

export function OperatingTable() {
  const [data, setData] = useState<Operating[]>([])
  const [openForm, setOpenForm] = useState(false)
  const [editData, setEditData] = useState<Operating | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<Operating | null>(null)

  const fetchData = async () => {
    const res = await fetch("/api/admin/operating/route")
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/operating/delete/${id}`, { method: "DELETE" })
    setData(prev => prev.filter(item => item.operating_id !== id))
    toast({ title: "Data telah dihapus" })
    setConfirmDelete(null)
  }

  const handleSubmit = async (newData: Operating, isEdit: boolean) => {
    if (isEdit) {
      await fetchData()
      toast({ title: "Data berhasil diubah" })
    } else {
      await fetchData()
      toast({ title: "Data berhasil ditambahkan" })
    }
  }


  const columns: ColumnDef<Operating>[] = [
    { accessorKey: "operating_id", header: "ID" },
    {
      header: "Tempat Wisata",
      accessorKey: "spot.spot_name",
      cell: ({ row }) =>
        row.original.spot?.spot_name || <span className="text-gray-400 italic">Tidak ditemukan</span>,
    },
    { accessorKey: "operating_day", header: "Hari" },
    {
      accessorKey: "hours_open",
      header: "Jam Buka",
      cell: ({ row }) =>
        new Date(row.getValue("hours_open")).toLocaleTimeString("id-ID", {
          hour: "2-digit", minute: "2-digit"
        }),
    },
    {
      accessorKey: "hours_closed",
      header: "Jam Tutup",
      cell: ({ row }) =>
        new Date(row.getValue("hours_closed")).toLocaleTimeString("id-ID", {
          hour: "2-digit", minute: "2-digit"
        }),
    },
    {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setEditData(row.original)
              setOpenForm(true)
            }}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => setConfirmDelete(row.original)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button
          onClick={() => {
            setEditData(null)
            setOpenForm(true)
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Tambah Jam Operasional
        </Button>
      </div>

      <DataTable columns={columns} data={data} />

      {/* Dialog Tambah/Edit */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent>
          <OperatingForm
            editData={editData}
            onClose={() => {
              setOpenForm(false)
              setEditData(null)
            }}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog Konfirmasi Hapus */}
      <OperatingDeleteDialog
        open={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() =>
          confirmDelete && handleDelete(confirmDelete.operating_id)
        }
        dayInfo={confirmDelete?.operating_day || ""}
        spotName={confirmDelete?.spot?.spot_name || ""}
      />
    </div>
  )
}
