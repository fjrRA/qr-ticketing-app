// src/app/user/reset-password/page.tsx
'use client'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { toast } from '@/hooks/use-toast'

export default function ResetPasswordPage() {
  const params = useSearchParams()
  const router = useRouter()
  const token = params?.get('token') ?? ''

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })

    const data = await res.json()

    if (res.ok) {
      toast({ title: 'Sukses', description: data.message })
      router.push('/login')
    } else {
      toast({ title: 'Gagal', description: data.message, variant: 'destructive' })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream py-20">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Atur Ulang Password</h1>
        <input
          type="password"
          placeholder="Password Baru"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Memproses...' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}
