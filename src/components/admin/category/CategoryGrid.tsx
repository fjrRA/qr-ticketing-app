'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

import { useToast } from '@/hooks/use-toast'

import CategoryForm from './CategoryForm'
import CategoryCard from './CategoryCard'
import CategoryDeleteDialog from './CategoryDeleteDialog'

import SkeletonDestinationCard from '@/components/skeleton/SkeletonDestinationCard'

type Category = {
  category_id: string
  category_name: string
  category_desc: string | null
  category_icon: string | null
}

export function CategoryGrid() {
  const [data, setData] = useState<Category[]>([])
  const [editData, setEditData] = useState<Category | null>(null)
  const [openForm, setOpenForm] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<Category | null>(null)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/admin/category/route')
      .then(res => res.json())
      .then(setData)
      .finally(() => setIsLoading(false))
  }, [])

  const handleDelete = async (id: string) => {
    await fetch(`/api/admin/category/delete/${id}`, { method: 'DELETE' })
    setData(prev => prev.filter(item => item.category_id !== id))
    setConfirmDelete(null)
    toast({ title: 'Data dihapus', description: 'Data Kategori telah dihapus.' })
  }

  const handleSubmit = (newData: Category, isEdit: boolean) => {
    if (isEdit) {
      setData(prev =>
        prev.map(item =>
          item.category_id === newData.category_id ? newData : item
        )
      )
    } else {
      setData(prev => [...prev, newData])
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Kategori Wisata</h1>
        <Button
          onClick={() => {
            setEditData(null)
            setOpenForm(true)
          }}
        >
          + Tambah Kategori
        </Button>
      </div>

      {/* Grid Kategori */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonDestinationCard key={i} />)
          : data.map((item) => (
            <CategoryCard
              key={item.category_id}
              item={item}
              onEdit={() => {
                setEditData(item)
                setOpenForm(true)
              }}
              onDelete={() => setConfirmDelete(item)}
            />
          ))}
      </div>

      {/* Dialog Form Tambah/Edit */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent>
          <CategoryForm
            editData={editData}
            onClose={() => {
              setEditData(null)
              setOpenForm(false)
            }}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog Konfirmasi Hapus */}
      <CategoryDeleteDialog
        open={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => confirmDelete && handleDelete(confirmDelete.category_id)}
        categoryName={confirmDelete?.category_name || ""}
      />
    </>
  )
}
