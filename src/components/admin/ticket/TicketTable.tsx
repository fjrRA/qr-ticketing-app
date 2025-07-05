'use client'

import { useEffect, useState } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from 'lucide-react'
import TicketForm from './TicketForm'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import TicketDeleteDialog from "./TicketDeleteDialog"

// Tipe data tiket

export type Ticket = {
  ticket_id: string
  spot_id: string
  ticket_name: string | null
  ticket_price: number
  ticket_stock: number
  code: string
  url_qr: string
}

export function TicketTable() {
  const [data, setData] = useState<Ticket[]>([])
  const [openForm, setOpenForm] = useState(false)
  const [editData, setEditData] = useState<Ticket | null>(null)
  const [deleteOpenId, setDeleteOpenId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    setIsLoading(true)
    fetch("/api/admin/ticket/route")
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns: ColumnDef<Ticket>[] = [
    { accessorKey: "ticket_id", header: "ID" },
    { accessorKey: "spot_id", header: "Spot" },
    { accessorKey: "ticket_name", header: "Nama Tiket" },
    { accessorKey: "ticket_price", header: "Harga", cell: ({ row }) => `Rp ${String(row.getValue("ticket_price"))}` },
    { accessorKey: "ticket_stock", header: "Stok" },
    { accessorKey: "code", header: "Kode" },
    {
      accessorKey: "url_qr",
      header: "QR Code",
      cell: ({ row }) => {
        const qrUrl = String(row.getValue("url_qr"))
        return qrUrl ? (
          <Image
            src={qrUrl}
            alt="QR Code"
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <span>No QR Code</span>
        )
      }
    },
    {
      id: 'actions',
      header: 'Aksi',
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
            onClick={() => setDeleteOpenId(row.original.ticket_id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ]

  const handleDelete = async (ticketId: string) => {
    const res = await fetch(`/api/admin/ticket/delete/${ticketId}`, { method: 'DELETE' })
    if (res.ok) {
      fetchData()
      setDeleteOpenId(null)
    }
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => { setEditData(null); setOpenForm(true); }}>
          <Plus className="w-4 h-4 mr-2" />
          Tambah Tiket
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={isLoading ? Array(10).fill(null) : data}
        isLoading={isLoading}
      />

      {openForm && (
        <Dialog open={openForm} onOpenChange={setOpenForm}>
          <DialogContent>
            <TicketForm
              mode={editData ? 'edit' : 'create'}
              defaultValues={{
                ...editData,
                ticket_name: editData?.ticket_name || '',
                ticket_id: editData?.ticket_id || '',
                spot_id: editData?.spot_id || '',
                ticket_price: editData?.ticket_price || 0,
                ticket_stock: editData?.ticket_stock || 0,
                code: editData?.code || '',
              }}
              onSuccess={() => {
                fetchData()
                setOpenForm(false)
              }}
              onClose={() => setOpenForm(false)}
            />
          </DialogContent>
        </Dialog>
      )}

      {deleteOpenId && (
        <TicketDeleteDialog
          open={true}
          onClose={() => setDeleteOpenId(null)}
          onConfirm={() => handleDelete(deleteOpenId)}
          caption={data.find((ticket) => ticket.ticket_id === deleteOpenId)?.ticket_name || 'Tiket'}
        />
      )}
    </div>
  )
}
