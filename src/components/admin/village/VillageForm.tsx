import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

type Props = {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  initialData?: {
    village_id: string
    village_name: string
    village_city: string
  } | null
}

export default function VillageForm({ open, onClose, onSuccess, initialData }: Props) {
  const [form, setForm] = useState({
    village_id: "",
    village_name: "",
    village_city: "",
  })

  useEffect(() => {
    if (initialData) {
      setForm({
        village_id: initialData.village_id,
        village_name: initialData.village_name,
        village_city: initialData.village_city,
      })
    } else {
      setForm({
        village_id: "",
        village_name: "",
        village_city: "",
      })
    }
  }, [initialData])

  const handleSubmit = async () => {
    if (!form.village_id && !initialData) {
      toast({ title: "ID Desa wajib diisi", variant: "destructive" })
      return
    }

    const method = initialData ? "PUT" : "POST"
    const url = initialData
      ? `/api/admin/village/update/${initialData.village_id}`
      : "/api/admin/village/create"

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      toast({ title: `Desa ${initialData ? "diperbarui" : "ditambahkan"}!` })
      onSuccess()
      onClose()
    } else {
      toast({ title: "Gagal menyimpan data", variant: "destructive" })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Desa" : "Tambah Desa"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {!initialData && (
            <Input
              placeholder="ID Desa (misal: V001)"
              value={form.village_id}
              onChange={(e) => setForm((f) => ({ ...f, village_id: e.target.value }))}
            />
          )}
          {initialData && (
            <Input
              value={form.village_id}
              disabled
              className="opacity-70"
            />
          )}
          <Input
            placeholder="Nama Desa"
            value={form.village_name}
            onChange={(e) => setForm((f) => ({ ...f, village_name: e.target.value }))}
          />
          <Input
            placeholder="Kecamatan/Kota"
            value={form.village_city}
            onChange={(e) => setForm((f) => ({ ...f, village_city: e.target.value }))}
          />
          <Button onClick={handleSubmit} className="w-full">
            {initialData ? "Simpan Perubahan" : "Tambah"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
