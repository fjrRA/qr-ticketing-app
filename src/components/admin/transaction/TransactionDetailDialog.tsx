'use client'

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Props = {
  transactionId: number
}

type Detail = {
  detail_quantity: number
  detail_subtotal: number
  ticket: {
    ticket_name: string
    ticket_price: number
    url_qr?: string
  }
}

export function TransactionDetailDialog({ transactionId }: Props) {
  const [details, setDetails] = useState<Detail[]>([])

  useEffect(() => {
    fetch(`/api/admin/transaction/detail/${transactionId}`)
      .then(res => res.json())
      .then(setDetails)
  }, [transactionId])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Lihat Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Detail Tiket Transaksi</DialogTitle>

        <div className="space-y-4">
          {details.map((item, index) => (
            <div key={index} className="border p-3 rounded shadow-sm text-sm">
              <p><strong>Nama Tiket:</strong> {item.ticket.ticket_name}</p>
              <p><strong>Harga:</strong> Rp {Number(item.ticket.ticket_price).toLocaleString()}</p>
              <p><strong>Jumlah:</strong> {item.detail_quantity}</p>
              <p><strong>Subtotal:</strong> Rp {Number(item.detail_subtotal).toLocaleString()}</p>

              {item.ticket.url_qr && (
                <div className="mt-2">
                  <p className="mb-1 text-xs text-muted-foreground">QR Code:</p>
                  <Image
                    src={item.ticket.url_qr || "/fallback-qr.png"}
                    alt={`QR for ${item.ticket.ticket_name}`}
                    width={128}
                    height={128}
                    className="border rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
