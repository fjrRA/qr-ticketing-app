'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'

import DestinationForm from './DestinationForm'
import DestinationCard from './DestinationCard'
import DestinationDeleteDialog from './DestinationDeleteDialog'

import SkeletonDestinationCard from '@/components/skeleton/SkeletonDestinationCard'

type Destination = {
  spot_id: string
  spot_name: string
  spot_address: string | null
  spot_thumbnail: string | null
}

export function DestinationGrid() {
  const [data, setData] = useState<Destination[]>([])
  const [editData, setEditData] = useState<Destination | null>(null)
  const [openForm, setOpenForm] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<Destination | null>(null)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/admin/destination/route')
      .then(res => res.json())
      .then(setData)
      .finally(() => setIsLoading(false))
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/destination/delete/${id}`, { method: 'DELETE' })
    setData(prev => prev.filter(item => item.spot_id !== id))
    setConfirmDelete(null)
    toast({ title: 'Data dihapus', description: 'Data destinasi telah dihapus.' })
  }

  const handleSubmit = (newData: Destination, isEdit: boolean) => {
    if (isEdit) {
      setData(prev =>
        prev.map(item =>
          item.spot_id === newData.spot_id ? newData : item
        )
      )
    } else {
      setData(prev => [...prev, newData])
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Destinasi Wisata</h1>
        <Button
          onClick={() => {
            setEditData(null)
            setOpenForm(true)
          }}
        >
          + Tambah Destinasi
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonDestinationCard key={i} />)
          : data.map((item) => (
            <DestinationCard
              key={item.spot_id}
              item={item}
              onEdit={() => {
                setEditData(item)
                setOpenForm(true)
              }}
              onDelete={() => setConfirmDelete(item)}
            />
          ))}
      </div>

      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent className="max-h-screen overflow-y-auto">
          <div className="py-6">
            <DestinationForm
              editData={editData}
              onClose={() => {
                setEditData(null)
                setOpenForm(false)
              }}
              onSubmit={handleSubmit}
            />
          </div>
        </DialogContent>
      </Dialog>

      <DestinationDeleteDialog
        open={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => confirmDelete && handleDelete(confirmDelete.spot_id)}
        spotName={confirmDelete?.spot_name || ""}
      />
    </>
  )
}
