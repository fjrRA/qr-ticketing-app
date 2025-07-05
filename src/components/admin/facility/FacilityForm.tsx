'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { toast } from '@/hooks/use-toast'

type Props = {
  editData: Facility | null
  onClose: () => void
  onSubmit: (newData: Facility, isEdit: boolean) => void
}

type Facility = {
  facility_id: string
  facility_name: string
  facility_icon: string | null
}

export default function FacilityForm({ editData, onClose, onSubmit }: Props) {
  const [form, setForm] = useState({
    facility_id: editData?.facility_id || '',
    facility_name: editData?.facility_name || '',
    facility_icon: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('facility_name', form.facility_name)
    if (form.facility_icon) formData.append('facility_icon', form.facility_icon)
    if (!editData) formData.append('facility_id', form.facility_id)

    const url = editData
      ? `/api/admin/facility/update/${editData.facility_id}`
      : `/api/admin/facility/create`

    const res = await fetch(url, {
      method: editData ? 'PUT' : 'POST',
      body: formData,
    })

    if (res.ok) {
      const result = await res.json()
      onSubmit(result, !!editData)

      toast({
        title: 'Berhasil',
        description: editData ? 'Data berhasil diperbarui.' : 'Data berhasil ditambahkan.',
      })

      onClose()
    } else {
      toast({
        title: 'Gagal menyimpan data',
        variant: 'destructive',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <DialogHeader>
        <DialogTitle>{editData ? 'Edit Fasilitas' : 'Tambah Fasilitas'}</DialogTitle>
      </DialogHeader>

      {!editData && (
        <Input
          placeholder="ID Fasilitas"
          required
          value={form.facility_id}
          onChange={(e) => setForm({ ...form, facility_id: e.target.value })}
        />
      )}

      <Input
        placeholder="Nama Fasilitas"
        required
        value={form.facility_name}
        onChange={(e) => setForm({ ...form, facility_name: e.target.value })}
      />

      <Input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setForm({ ...form, facility_icon: e.target.files?.[0] || null })
        }
      />

      <Button type="submit">
        {editData ? 'Simpan Perubahan' : 'Simpan'}
      </Button>
    </form>
  )
}
