'use client'

import { useEffect, useState } from 'react'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'

type Spot = { spot_id: string; spot_name: string }

type GalleryFormProps = {
  mode: 'create' | 'edit'
  defaultValues?: {
    gallery_id: string
    spot_id: string
    gallery_caption: string
  }
  onSuccess: () => void
  onClose?: () => void
}

// Fungsi ID acak dengan awalan G
function generateGalleryId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = 'G'
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export default function GalleryForm({ mode, defaultValues, onSuccess, onClose }: GalleryFormProps) {
  const [caption, setCaption] = useState(defaultValues?.gallery_caption || '')
  const [spotId, setSpotId] = useState(defaultValues?.spot_id || '')
  const [file, setFile] = useState<File | null>(null)
  const [spots, setSpots] = useState<Spot[]>([])

  useEffect(() => {
    fetch('/api/admin/destination/route')
      .then((res) => res.json())
      .then((data) => setSpots(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!spotId || (mode === 'create' && !file)) {
      toast({ title: 'Form belum lengkap', variant: 'destructive' })
      return
    }

    const formData = new FormData()
    formData.append('spot_id', spotId)
    formData.append('gallery_caption', caption)
    if (file) formData.append('file', file)

    let url = '/api/admin/gallery/create'
    if (mode === 'create') {
      formData.append('gallery_id', generateGalleryId())
    } else if (mode === 'edit' && defaultValues?.gallery_id) {
      url = `/api/admin/gallery/update/${defaultValues.gallery_id}`
    }

    const res = await fetch(url, {
      method: mode === 'create' ? 'POST' : 'PUT',
      body: formData,
    })

    if (res.ok) {
      toast({ title: `${mode === 'create' ? 'Tambah' : 'Edit'} galeri berhasil` })
      onSuccess()
      if (onClose) onClose()
    } else {
      toast({ title: 'Gagal menyimpan data', variant: 'destructive' })
    }
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle>{mode === 'create' ? 'Tambah Galeri Baru' : 'Edit Galeri'}</DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4">
        <div>
          <Label>Destinasi</Label>
          <select
            value={spotId}
            onChange={(e) => setSpotId(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Pilih Destinasi</option>
            {spots.map((spot) => (
              <option key={spot.spot_id} value={spot.spot_id}>
                {spot.spot_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Caption</Label>
          <Input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <div>
          <Label>Gambar</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <div className="text-right">
          <Button type="submit">{mode === 'create' ? 'Simpan' : 'Perbarui'}</Button>
        </div>
      </form>
    </div>
  )
}
