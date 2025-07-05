'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { toast } from '@/hooks/use-toast'
import { DialogTitle } from '@radix-ui/react-dialog'

type TicketFormProps = {
  mode: 'create' | 'edit'
  defaultValues?: {
    ticket_id: string
    spot_id: string
    ticket_name: string
    ticket_price: number
    ticket_stock: number
    code: string
  }
  onSuccess: () => void
  onClose: () => void
}

type Spot = {
  spot_id: string
  spot_name: string
}

export default function TicketForm({ mode, defaultValues, onSuccess, onClose }: TicketFormProps) {
  const [ticketName, setTicketName] = useState(defaultValues?.ticket_name || '')
  const [spotId, setSpotId] = useState(defaultValues?.spot_id || '')
  const [ticketPrice, setTicketPrice] = useState(defaultValues?.ticket_price || 0)
  const [ticketStock, setTicketStock] = useState(defaultValues?.ticket_stock || 0)
  const [ticketCode, setTicketCode] = useState(defaultValues?.code || '')
  const [spots, setSpots] = useState<Spot[]>([]) // State untuk menyimpan data spot

  useEffect(() => {
    fetch('/api/admin/destination/route') // Ganti dengan endpoint yang sesuai
      .then((res) => res.json())
      .then((data) => setSpots(data)) // Simpan data spot_tourism ke state
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!ticketName || !spotId || !ticketPrice || !ticketStock || !ticketCode) {
      toast({ title: 'Form belum lengkap', variant: 'destructive' })
      return
    }

    const response = await fetch(mode === 'create' ? '/api/admin/ticket/create' : `/api/admin/ticket/update/${defaultValues?.ticket_id}`, {
      method: mode === 'create' ? 'POST' : 'PUT',
      body: JSON.stringify({
        spot_id: spotId,
        ticket_name: ticketName,
        ticket_price: ticketPrice,
        ticket_stock: ticketStock,
        code: ticketCode,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      toast({ title: mode === 'create' ? 'Tiket berhasil ditambahkan' : 'Tiket berhasil diperbarui' })
      onSuccess()
      onClose()
    } else {
      toast({ title: 'Gagal menambah tiket', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-4">
      <DialogTitle>{mode === 'create' ? 'Tambah Tikekt Baru' : 'Edit Tiket'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Nama Tiket</Label>
          <Input value={ticketName} onChange={(e) => setTicketName(e.target.value)} placeholder="Nama Tiket" />
        </div>

        <div>
          <Label>Harga Tiket</Label>
          <Input
            type="number"
            value={ticketPrice}
            onChange={(e) => setTicketPrice(Number(e.target.value))}
            placeholder="Harga Tiket"
          />
        </div>

        <div>
          <Label>Stok Tiket</Label>
          <Input
            type="number"
            value={ticketStock}
            onChange={(e) => setTicketStock(Number(e.target.value))}
            placeholder="Jumlah Stok"
          />
        </div>

        <div>
          <Label>Kode Tiket</Label>
          <Input value={ticketCode} onChange={(e) => setTicketCode(e.target.value)} placeholder="Kode Tiket" />
        </div>

        <div>
          <Label>Spot</Label>
          <select
            value={spotId}
            onChange={(e) => setSpotId(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          >
            <option value="">Pilih Spot</option>
            {spots.map((spot) => (
              <option key={spot.spot_id} value={spot.spot_id}>
                {spot.spot_name}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">{mode === 'create' ? 'Simpan' : 'Perbarui'}</Button>
      </form>
    </div>
  )
}
