// src/components/user/payment/TransactionCard.tsx
'use client'

import { useEffect, useState } from 'react'
import TicketDetailItem from './TicketDetailItem'
import CountdownTimer from './CountdownTimer'
import CancelButton from './CancelButton'
import PayNowButton from './PayNowButton'
import { toast } from '@/hooks/use-toast'

type Props = {
  transaction_code: string
  transaction_date: string
  transaction_status: 'pending' | 'paid' | 'cancelled'
  total_price: number
  expired_at?: string
  transaction_details: {
    ticket: {
      ticket_name: string
    }
    visitor_name: string
    detail_price: number
    detail_subtotal: number
    transaction_detail_id: number
  }[]
}

export default function TransactionCard(props: Props) {
  const {
    transaction_code,
    transaction_date,
    transaction_status,
    total_price,
    expired_at,
    transaction_details,
  } = props

  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    if (transaction_status !== 'pending' || !expired_at) return
    const expiredTime = new Date(expired_at).getTime()

    const interval = setInterval(async () => {
      const now = new Date().getTime()
      if (now >= expiredTime) {
        setIsExpired(true)
        clearInterval(interval)

        try {
          const res = await fetch('/api/payment/auto-cancel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order_id: transaction_code }),
          })

          if (res.ok) {
            toast({
              title: 'Transaksi dibatalkan otomatis karena melebihi batas waktu.',
            })
          }
        } catch (err) {
          console.error('Auto-cancel gagal:', err)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [expired_at, transaction_code, transaction_status])

  const statusStyle = {
    paid: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    cancelled: 'bg-red-100 text-red-700',
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap justify-between px-6 py-4 bg-gray-50 border-b text-sm text-gray-600 gap-2">
        <div className="flex flex-col">
          <span className="text-xs">Kode Transaksi:</span>
          <span className="font-bold text-gray-800">{transaction_code}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 px-2 py-1 rounded-md">
            {new Date(transaction_date).toLocaleString('id-ID')}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${statusStyle[transaction_status]}`}
          >
            {transaction_status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Detail Tiket */}
      <div className="divide-y divide-gray-200">
        {transaction_details.map((detail, idx) => (
          <TicketDetailItem
            key={idx}
            {...detail}
            isPaid={transaction_status === 'paid'}
          />
        ))}
      </div>

      {/* Countdown + Aksi */}
      {transaction_status === 'pending' && expired_at && !isExpired && (
        <div className="px-6 pt-4 pb-3">
          <CountdownTimer expiredAt={expired_at} />
          <div className="flex gap-2 mt-3">
            <CancelButton orderId={transaction_code} />
            <PayNowButton orderId={transaction_code} />
          </div>
        </div>
      )}

      {/* Transaksi kadaluwarsa */}
      {transaction_status === 'pending' && isExpired && (
        <div className="px-6 py-4 text-sm text-red-600">
          ⛔ Transaksi telah melewati batas waktu pembayaran dan dibatalkan otomatis.
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t text-right text-sm text-gray-800 font-semibold">
        💰 Total Harga: Rp {total_price.toLocaleString('id-ID')}
      </div>
    </div>
  )
}
