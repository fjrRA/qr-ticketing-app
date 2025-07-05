'use client'

import { useEffect, useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import { Trash2, Pencil, Plus } from 'lucide-react'
import Image from 'next/image'
import GalleryForm from './GalleryForm'
import { toast } from '@/hooks/use-toast'
import GalleryDeleteDialog from './GalleryDeleteDialog'
import { Dialog, DialogContent } from '@/components/ui/dialog'

type Gallery = {
  gallery_id: string
  spot_id: string | null
  gallery_img: string | null
  gallery_caption: string | null
  spot?: {
    spot_name: string
  }
}

export function GalleryTable() {
  const [data, setData] = useState<Gallery[]>([])
  const [openForm, setOpenForm] = useState(false)
  const [editData, setEditData] = useState<Gallery | null>(null)
  const [deleteOpenId, setDeleteOpenId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    setIsLoading(true)
    fetch('/api/admin/gallery/route')
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/admin/gallery/delete/${id}`, { method: 'DELETE' })
    if (res.ok) {
      toast({ title: 'Galeri berhasil dihapus' })
      fetchData()
    } else {
      toast({ title: 'Gagal menghapus galeri', variant: 'destructive' })
    }
  }

  const columns: ColumnDef<Gallery>[] = [
    { accessorKey: 'gallery_id', header: 'ID' },
    {
      header: 'Destinasi',
      cell: ({ row }) => row.original.spot?.spot_name || '-',
    },
    { accessorKey: 'gallery_caption', header: 'Caption' },
    {
      accessorKey: 'gallery_img',
      header: 'Gambar',
      cell: ({ row }) => {
        const url = row.original.gallery_img
        return url ? (
          <Image src={url} alt="gallery" width={64} height={64} className="object-cover rounded" />
        ) : <span>-</span>
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
            onClick={() => setDeleteOpenId(row.original.gallery_id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          {deleteOpenId === row.original.gallery_id && (
            <GalleryDeleteDialog
              open
              onClose={() => setDeleteOpenId(null)}
              onConfirm={() => handleDelete(row.original.gallery_id)}
              caption={row.original.gallery_caption || 'Galeri'}
            />
          )}
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
          Tambah Galeri
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={isLoading ? Array(10).fill(null) : data}
        isLoading={isLoading}
      />

      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent>
          <GalleryForm
            mode={editData ? 'edit' : 'create'}
            defaultValues={
              editData
                ? {
                  gallery_id: editData.gallery_id,
                  spot_id: editData.spot_id || '',
                  gallery_caption: editData.gallery_caption || '',
                }
                : undefined
            }
            onSuccess={() => {
              fetchData()
              setOpenForm(false)
              setEditData(null)
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
