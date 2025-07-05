// src/components/admin/payment/PaymentButton.tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function PaymentButton({ orderId, amount }: { orderId: string, amount: number }) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    const response = await fetch('/api/admin/payment/createTransaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_id: orderId, amount }),
    })
    const data = await response.json()

    if (data.redirect_url) {
      window.location.href = data.redirect_url
    } else {
      alert('Gagal mengarahkan ke halaman pembayaran')
    }
    setIsLoading(false)
  }

  return (
    <Button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? 'Proses Pembayaran...' : 'Bayar Sekarang'}
    </Button>
  )
}
