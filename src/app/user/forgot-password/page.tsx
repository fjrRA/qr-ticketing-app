// src/app/user/forgot-password/page.tsx
'use client'
import { useState } from 'react'
import { toast } from '@/hooks/use-toast'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      toast({ title: 'Berhasil', description: data.message })
    } else {
      toast({ title: 'Gagal', description: data.message, variant: 'destructive' })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream py-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Lupa Password</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Mengirim...' : 'Kirim Link Reset'}
        </button>
      </form>
    </div>
  )
}
