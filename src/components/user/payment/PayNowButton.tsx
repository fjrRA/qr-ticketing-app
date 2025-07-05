// src/components/user/payment/PayNowButton.tsx
'use client'

import { useState, useEffect } from 'react'

export default function PayNowButton({ orderId }: { orderId: string }) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
    script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!)
    document.body.appendChild(script)
  }, [])

  const handlePayNow = async () => {
    setIsLoading(true)

    try {
      const res = await fetch('/api/payment/retry', {
        method: 'POST',
        body: JSON.stringify({ order_id: orderId }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await res.json()

      if (res.ok && data?.snap_token) {
        window.snap.pay(data.snap_token, {
          onSuccess: () => {
            alert('Pembayaran berhasil!')
            window.location.href = '/user/payment' // ✅ Tambahkan redirect ini
          },
          onPending: () => alert('Pembayaran sedang diproses.'),
          onError: () => alert('Terjadi kesalahan pembayaran.'),
          onClose: () => alert('Kamu menutup popup sebelum menyelesaikan pembayaran.'),
        })
      } else {
        alert(data?.error || 'Gagal memproses pembayaran.')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan saat menghubungi Midtrans.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handlePayNow}
      disabled={isLoading}
      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {isLoading ? 'Memproses...' : 'Bayar Sekarang'}
    </button>
  )
}
