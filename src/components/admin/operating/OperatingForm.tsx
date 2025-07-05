'use client'

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

type Spot = {
  spot_id: string
  spot_name: string
}

type Operating = {
  operating_id: string
  operating_day: string
  hours_open: string
  hours_closed: string
  spot_id?: string
}

type Props = {
  editData: Operating | null
  onClose: () => void
  onSubmit: (newData: Operating, isEdit: boolean) => void
}

const days = [
  "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
]

export default function OperatingForm({ editData, onClose, onSubmit }: Props) {
  const [form, setForm] = useState<Operating>({
    operating_id: editData?.operating_id || "",
    spot_id: editData?.spot_id || "",
    operating_day: editData?.operating_day || "",
    hours_open: editData?.hours_open?.substring(0, 5) || "",
    hours_closed: editData?.hours_closed?.substring(0, 5) || "",
  })

  const [spots, setSpots] = useState<Spot[]>([])
  const [existingData, setExistingData] = useState<Operating[]>([])

  useEffect(() => {
    fetch("/api/admin/destination/route")
      .then(res => res.json())
      .then(setSpots)

    fetch("/api/admin/operating/route")
      .then(res => res.json())
      .then(setExistingData)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🚫 Validasi frontend: hari sudah ada untuk spot yang sama
    if (!editData && existingData.some(item =>
      item.spot_id === form.spot_id && item.operating_day === form.operating_day
    )) {
      toast({
        title: "Hari sudah ada untuk tempat wisata ini",
        variant: "destructive"
      })
      return
    }

    const payload = {
      ...form,
      hours_open: `1970-01-01T${form.hours_open}:00`,
      hours_closed: `1970-01-01T${form.hours_closed}:00`,
    }

    const res = await fetch(editData
      ? `/api/admin/operating/update/${form.operating_id}`
      : `/api/admin/operating/create`, {
      method: editData ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      const result = await res.json()
      onSubmit(result, !!editData)
      onClose()
      toast({ title: editData ? "Data berhasil diubah" : "Data berhasil ditambahkan" })
    } else {
      toast({ title: "Gagal menyimpan data", variant: "destructive" })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <DialogHeader>
        <DialogTitle>{editData ? "Edit Jam Operasional" : "Tambah Jam Operasional"}</DialogTitle>
      </DialogHeader>

      {!editData && (
        <Input
          placeholder="ID Jam Operasional"
          required
          value={form.operating_id}
          onChange={(e) => setForm({ ...form, operating_id: e.target.value })}
        />
      )}

      <select
        required
        value={form.spot_id}
        onChange={(e) => setForm({ ...form, spot_id: e.target.value })}
        className="border rounded px-3 py-2"
        disabled={!!editData}
      >
        <option value="">Pilih Tempat Wisata</option>
        {spots.map(spot => (
          <option key={spot.spot_id} value={spot.spot_id}>{spot.spot_name}</option>
        ))}
      </select>

      <select
        required
        value={form.operating_day}
        onChange={(e) => setForm({ ...form, operating_day: e.target.value })}
        className="border rounded px-3 py-2"
      >
        <option value="">Pilih Hari</option>
        {days.map(day => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <Input
        type="time"
        required
        value={form.hours_open}
        onChange={(e) => setForm({ ...form, hours_open: e.target.value })}
      />
      <Input
        type="time"
        required
        value={form.hours_closed}
        onChange={(e) => setForm({ ...form, hours_closed: e.target.value })}
      />

      <Button type="submit">{editData ? "Simpan Perubahan" : "Simpan"}</Button>
    </form>
  )
}
