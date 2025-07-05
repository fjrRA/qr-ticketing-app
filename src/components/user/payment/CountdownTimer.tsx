'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer({ expiredAt }: { expiredAt: string }) {
  const calculateRemaining = () => {
    const now = new Date().getTime()
    const expire = new Date(expiredAt).getTime()
    const diff = Math.max(expire - now, 0)

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
  }

  const [remaining, setRemaining] = useState(calculateRemaining())

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(calculateRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 p-3 rounded-md flex items-center gap-2 text-sm shadow-sm">
      ⏳ Transaksi akan expired dalam
      <span className="font-mono text-base font-bold text-yellow-900">
        {pad(remaining.hours)}:{pad(remaining.minutes)}:{pad(remaining.seconds)}
      </span>
    </div>
  )
}

