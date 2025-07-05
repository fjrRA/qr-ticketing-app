// src/components/admin/destination/DestinationForm.tsx
'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Destination = {
  spot_id: string
  spot_name: string
  spot_address: string | null
  spot_desc?: string | null
  spot_contact?: string | null
  spot_maps?: string | null
  spot_rating?: number
  spot_thumbnail: string | null
  village_id?: string | null
  category_id?: string | null
  latitude?: number | null    // ← baru
  longitude?: number | null   // ← baru
}


type Props = {
  editData: Destination | null
  onClose: () => void
  onSubmit: (newData: Destination, isEdit: boolean) => void
}

export default function DestinationForm({ editData, onClose, onSubmit }: Props) {
  const [form, setForm] = useState({
    spot_id: editData?.spot_id || '',
    spot_name: editData?.spot_name || '',
    spot_address: editData?.spot_address || '',
    spot_desc: editData?.spot_desc || '',
    spot_contact: editData?.spot_contact || '',
    spot_maps: editData?.spot_maps || '',
    spot_rating: editData?.spot_rating?.toString() || '',
    village_id: editData?.village_id || '',
    category_id: editData?.category_id || '',
    latitude: editData?.latitude != null ? editData.latitude.toString() : '',   // ← baru
    longitude: editData?.longitude != null ? editData.longitude.toString() : '', // ← baru
    spot_thumbnail: null as File | null,
  })

  const [villages, setVillages] = useState<{ village_id: string; village_name: string }[]>([])
  const [categories, setCategories] = useState<{ category_id: string; category_name: string }[]>([])
  const { toast } = useToast()
  const [availableFacilities, setAvailableFacilities] = useState<{ facility_id: string; facility_name: string }[]>([])
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([])


  useEffect(() => {
    fetch('/api/admin/village/route')
      .then((res) => res.json())
      .then(setVillages)

    fetch('/api/admin/category/route')
      .then((res) => res.json())
      .then(setCategories)
  }, [])

  useEffect(() => {
    fetch('/api/admin/facility/route')
      .then(res => res.json())
      .then(setAvailableFacilities)
  }, [])


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi dan olah maps URL
    let mapsUrl = form.spot_maps.trim()
    if (mapsUrl.includes("<iframe")) {
      const match = mapsUrl.match(/src="([^"]+)"/)
      if (match) mapsUrl = match[1]
    }
    if (!mapsUrl.startsWith("https://www.google.com/maps/embed")) {
      toast({ title: "URL tidak valid", description: "Masukkan embed URL", variant: "destructive" })
      return
    }

    const formData = new FormData()
    formData.append('spot_name', form.spot_name)
    formData.append('spot_address', form.spot_address)
    formData.append('spot_desc', form.spot_desc)
    formData.append('spot_contact', form.spot_contact)
    formData.append('spot_maps', mapsUrl)
    formData.append('spot_rating', form.spot_rating)
    formData.append('village_id', form.village_id)
    formData.append('category_id', form.category_id)

    formData.append('latitude', form.latitude || '')
    formData.append('longitude', form.longitude || '')

    // ✅ INI BAGIAN PENTING YANG WAJIB
    formData.append('facilities', JSON.stringify(selectedFacilities))

    if (form.spot_thumbnail) formData.append('file', form.spot_thumbnail)
    if (!editData) formData.append('spot_id', form.spot_id)

    const url = editData
      ? `/api/admin/destination/update/${editData.spot_id}`
      : `/api/admin/destination/create`

    const res = await fetch(url, {
      method: editData ? 'PUT' : 'POST',
      body: formData,
    })

    if (res.ok) {
      const result = await res.json()
      onSubmit(result, !!editData)
      toast({ title: editData ? 'Data berhasil diubah' : 'Data berhasil ditambahkan' })
      onClose()
    } else {
      toast({ title: 'Gagal menyimpan data', variant: 'destructive' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-2">
      <DialogHeader>
        <DialogTitle>{editData ? 'Edit Destinasi' : 'Tambah Destinasi'}</DialogTitle>
      </DialogHeader>

      {!editData && (
        <Input
          placeholder="ID Tempat Wisata"
          required
          value={form.spot_id}
          onChange={(e) => setForm({ ...form, spot_id: e.target.value })}
        />
      )}

      <Input
        placeholder="Nama Tempat Wisata"
        required
        value={form.spot_name}
        onChange={(e) => setForm({ ...form, spot_name: e.target.value })}
      />

      <Input
        placeholder="Alamat"
        value={form.spot_address || ''}
        onChange={(e) => setForm({ ...form, spot_address: e.target.value })}
      />

      <Textarea
        placeholder="Deskripsi"
        value={form.spot_desc || ''}
        onChange={(e) => setForm({ ...form, spot_desc: e.target.value })}
      />

      <Input
        placeholder="Kontak"
        value={form.spot_contact || ''}
        onChange={(e) => setForm({ ...form, spot_contact: e.target.value })}
      />

      <Input
        placeholder="Embed Google Maps URL (contoh: https://www.google.com/maps/embed?pb=...)"
        value={form.spot_maps || ''}
        onChange={(e) => setForm({ ...form, spot_maps: e.target.value })}
      />
      <p className="text-xs text-muted-foreground italic -mt-1 mb-2">
        Hanya masukkan <b>URL embed</b>, bukan link biasa atau tag iframe.
      </p>

      <Input
        placeholder="Rating"
        type="number"
        value={form.spot_rating}
        onChange={(e) => setForm({ ...form, spot_rating: e.target.value })}
        step="0.01"
        min="0"
        max="5"
      />

      {/* === Tambahkan blok input Latitude === */}
      <div>
        <Input
          placeholder="Latitude (contoh: -7.31972)"
          type="number"
          step="0.000001"
          value={form.latitude}
          onChange={(e) => setForm({ ...form, latitude: e.target.value })}
        />
        <p className="text-xs text-muted-foreground italic -mt-1 mb-2">
          Masukkan angka latitude (contoh: -7.31972). Kosongkan jika belum tersedia.
        </p>
      </div>

      {/* === Tambahkan blok input Longitude === */}
      <div>
        <Input
          placeholder="Longitude (contoh: 109.24182)"
          type="number"
          step="0.000001"
          value={form.longitude}
          onChange={(e) => setForm({ ...form, longitude: e.target.value })}
        />
        <p className="text-xs text-muted-foreground italic -mt-1 mb-2">
          Masukkan angka longitude (contoh: 109.24182). Kosongkan jika belum tersedia.
        </p>
      </div>

      <div className="grid gap-2">
        <Label>Fasilitas</Label>
        <div className="grid grid-cols-2 gap-2">
          {availableFacilities.map((f) => (
            <label key={f.facility_id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={f.facility_id}
                checked={selectedFacilities.includes(f.facility_id)}
                onChange={() => {
                  setSelectedFacilities((prev) =>
                    prev.includes(f.facility_id)
                      ? prev.filter((id) => id !== f.facility_id)
                      : [...prev, f.facility_id]
                  )
                }}
              />
              {f.facility_name}
            </label>
          ))}
        </div>
      </div>


      <div className="grid gap-2">
        <Label>Desa</Label>
        <Select
          value={form.village_id}
          onValueChange={(val) => setForm({ ...form, village_id: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Desa" />
          </SelectTrigger>
          <SelectContent>
            {villages.map((village) => (
              <SelectItem key={village.village_id} value={village.village_id}>
                {village.village_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Kategori</Label>
        <Select
          value={form.category_id}
          onValueChange={(val) => setForm({ ...form, category_id: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.category_id} value={cat.category_id}>
                {cat.category_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setForm({ ...form, spot_thumbnail: e.target.files?.[0] || null })
        }
      />
      <Button type="submit">{editData ? 'Simpan Perubahan' : 'Simpan'}</Button>
    </form>
  )
}
