'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

export default function CancelButton({ orderId }: { orderId: string }) {
  const [open, setOpen] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)

  const handleCancel = async () => {
    setIsCancelling(true)

    try {
      const res = await fetch('/api/user/transaction/cancel', {
        method: 'POST',
        body: JSON.stringify({ transaction_code: orderId }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error('Gagal membatalkan pesanan.')
      }

      toast({ title: 'Pesanan berhasil dibatalkan.' })
      window.location.reload()
    } catch (err) {
      console.error(err)
      toast({
        title: 'Terjadi kesalahan',
        description: 'Gagal membatalkan pesanan.',
        variant: 'destructive',
      })
    } finally {
      setIsCancelling(false)
      setOpen(false)
    }
  }

  return (
    <>
      <Button
        variant="link"
        className="text-red-600 p-0 h-auto text-sm"
        onClick={() => setOpen(true)}
      >
        Batalkan Pesanan
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Pembatalan</DialogTitle>
            <DialogDescription>
              Apakah kamu yakin ingin membatalkan pesanan ini? Tindakan ini tidak bisa dibatalkan.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)} disabled={isCancelling}>
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={handleCancel}
              disabled={isCancelling}
            >
              {isCancelling ? 'Membatalkan...' : 'Ya, Batalkan'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
