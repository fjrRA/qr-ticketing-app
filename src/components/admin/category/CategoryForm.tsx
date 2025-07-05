// CategoryForm.tsx
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Category } from "@/types/category"
import { useToast } from "@/hooks/use-toast"

type Props = {
  editData: Category | null
  onClose: () => void
  onSubmit: (newData: Category, isEdit: boolean) => void
}

export default function CategoryForm({ editData, onClose, onSubmit }: Props) {
  const [form, setForm] = useState({
    category_id: editData?.category_id || '',
    category_name: editData?.category_name || '',
    category_desc: editData?.category_desc || '',
    category_icon: null as File | null,
  })

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("category_name", form.category_name)
    formData.append("category_desc", form.category_desc || "")
    if (form.category_icon) formData.append("file", form.category_icon)
    if (!editData) formData.append("category_id", form.category_id)

    const url = editData
      ? `/api/admin/category/update/${editData.category_id}`
      : `/api/admin/category/create`

    const res = await fetch(url, {
      method: editData ? 'PUT' : 'POST',
      body: formData,
    })

    if (res.ok) {
      const result = await res.json()
      onSubmit(result, !!editData)
      toast({
        title: editData ? "Data berhasil diubah" : "Data berhasil ditambahkan",
      })
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <DialogHeader>
        <DialogTitle>{editData ? "Edit Kategori" : "Tambah Kategori"}</DialogTitle>
      </DialogHeader>

      {!editData && (
        <Input
          placeholder="ID Kategori"
          required
          value={form.category_id}
          onChange={(e) => setForm({ ...form, category_id: e.target.value })}
        />
      )}
      <Input
        placeholder="Nama Kategori"
        required
        value={form.category_name}
        onChange={(e) => setForm({ ...form, category_name: e.target.value })}
      />
      <Input
        placeholder="Deskripsi"
        value={form.category_desc}
        onChange={(e) => setForm({ ...form, category_desc: e.target.value })}
      />
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setForm({ ...form, category_icon: e.target.files?.[0] || null })}
      />
      <Button type="submit">{editData ? "Simpan Perubahan" : "Simpan"}</Button>
    </form>
  )
}
