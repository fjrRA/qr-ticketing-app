'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'  // Hook untuk toast dari custom hook

interface Props {
  show: boolean
  onClose: () => void
  user: {
    user_id: string
    name: string
    email: string
    phone_number?: string
    address?: string
  }
  onSave: (updated: Partial<Props['user']>) => void
}

export default function UserProfileModal({ show, onClose, user, onSave }: Props) {
  const [form, setForm] = useState({ ...user })
  const [isEdit, setIsEdit] = useState(false)
  const { toast } = useToast()  // Hook untuk toast

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/user/update-profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: form.name,
          phone_number: form.phone_number,
          address: form.address,
        }),
      })

      if (res.ok) {
        const updated = await res.json()
        localStorage.setItem('user', JSON.stringify(updated))
        window.dispatchEvent(new Event('userChanged'))
        toast({ title: 'Profil berhasil disimpan!', description: '', variant: 'default' })  // Toast sukses
        onSave(updated)
        setIsEdit(false)
        onClose()
      } else {
        toast({ title: 'Gagal menyimpan profil', description: '', variant: 'destructive' })  // Toast error
      }
    } catch (error) {
      console.error(error)
      toast({ title: 'Terjadi kesalahan saat menyimpan', description: '', variant: 'destructive' })  // Toast error
    }
  }

  return (
    <>
      <Dialog open={show} onOpenChange={() => {
        setIsEdit(false)
        onClose()
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profil Saya</DialogTitle>
          </DialogHeader>

          {!isEdit ? (
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Nama:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Nomor HP:</strong> {user.phone_number || '-'}</p>
              <p><strong>Alamat:</strong> {user.address || '-'}</p>

              <div className="flex justify-end gap-2 mt-4">
                <Button onClick={() => setIsEdit(true)}>Edit</Button>
                <Button variant="outline" onClick={onClose}>Tutup</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Input name="name" value={form.name} onChange={handleChange} placeholder="Nama" />
              <Input value={form.email} readOnly className="bg-gray-100" />
              <Input name="phone_number" value={form.phone_number || ''} onChange={handleChange} placeholder="Nomor HP" />
              <Textarea name="address" value={form.address || ''} onChange={handleChange} placeholder="Alamat" />

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEdit(false)}>Batal</Button>
                <Button onClick={handleSubmit}>Simpan</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
