'use client'

import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import { Trash2, Pencil, Plus } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import FacilityForm from './FacilityForm'
import FacilityDeleteDialog from './FacilityDeleteDialog'
import { toast } from '@/hooks/use-toast'

type Facility = {
  facility_id: string
  facility_name: string
  facility_icon: string | null
}

export function FacilityTable() {
  const [data, setData] = useState<Facility[]>([])
  const [openForm, setOpenForm] = useState(false)
  const [editData, setEditData] = useState<Facility | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<Facility | null>(null)

  const fetchData = async () => {
    const res = await fetch('/api/admin/facility/route')
    const json = await res.json()
    setData(json)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/facility/delete/${id}`, { method: 'DELETE' })
    setData(prev => prev.filter(item => item.facility_id !== id))
    toast({ title: 'Data telah dihapus' })
    setConfirmDelete(null)
  }

  const handleSubmit = (newData: Facility, isEdit: boolean) => {
    if (isEdit) {
      setData(prev =>
        prev.map(item =>
          item.facility_id === newData.facility_id ? newData : item
        )
      )
    } else {
      setData(prev => [...prev, newData])
    }
  }

  const columns: ColumnDef<Facility>[] = [
    { accessorKey: 'facility_id', header: 'ID' },
    { accessorKey: 'facility_name', header: 'Nama Fasilitas' },
    {
      accessorKey: 'facility_icon',
      header: 'Icon',
      cell: ({ row }) => {
        const rawIcon = row.getValue('facility_icon')
        const iconUrl = rawIcon ? `/uploads/facility/${rawIcon}` : null

        return iconUrl ? (
          <Image
            src={iconUrl}
            alt="icon"
            width={32}
            height={32}
            className="object-contain"
            unoptimized // agar tidak error 400
          />
        ) : (
          <span>-</span>
        )
      },
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
          Tambah Fasilitas
        </Button>
      </div>

      <DataTable columns={columns} data={data} />

      {/* Modal Form */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent>
          <FacilityForm
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
      <FacilityDeleteDialog
        open={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() =>
          confirmDelete && handleDelete(confirmDelete.facility_id)
        }
        facilityName={confirmDelete?.facility_name || ''}
      />
    </div>
  )
}
