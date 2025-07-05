// src/app/login/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@lib/firebase'
import { toast } from '@/hooks/use-toast'
import UserLayoutWrapper from '@/components/layouts/UserLayoutWrapper'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loadingManual, setLoadingManual] = useState(false)
  const [loadingGmail, setLoadingGmail] = useState(false)

  const handleManualLogin = async () => {
    setLoadingManual(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        toast({ variant: 'destructive', title: data.message || 'Login gagal' })
        return
      }

      document.cookie = `token=${data.token}; path=/; max-age=86400; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`

      if (data.user.role === 'admin') {
        router.push('/admin')
      } else {
        localStorage.setItem('user', JSON.stringify({
          user_id: data.user.user_id,
          name: data.user.name,
          email: data.user.email,
        }))
        window.dispatchEvent(new Event('userChanged'))
        router.push('/user')
      }
    } catch (err) {
      console.error('Login error:', err)
      toast({ variant: 'destructive', title: 'Terjadi kesalahan saat login' })
    } finally {
      setLoadingManual(false)
    }
  }

  const handleGmailLogin = async () => {
    setLoadingGmail(true)
    try {
      const result = await signInWithPopup(auth, provider)
      const firebaseUser = result.user

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: firebaseUser.displayName,
          email: firebaseUser.email,
        }),
      })

      const data = await res.json()

      localStorage.setItem('user', JSON.stringify({
        user_id: data.user.user_id,
        name: data.user.name,
        email: data.user.email,
      }))
      window.dispatchEvent(new Event('userChanged'))
      router.push('/user')
    } catch (err) {
      console.error('Gmail Login error:', err)
      toast({ variant: 'destructive', title: 'Gagal login dengan Gmail' })
    } finally {
      setLoadingGmail(false)
    }
  }

  return (
    <UserLayoutWrapper>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-8 max-w-md w-full mt-10 mb-20">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <p className="text-sm text-right mb-4">
            <a href="/user/forgot-password" className="text-blue-600 hover:underline">
              Lupa Password?
            </a>
          </p>

          <button
            onClick={handleManualLogin}
            disabled={loadingManual || loadingGmail}
            className="w-full px-4 py-2 mb-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            {loadingManual ? 'Memproses...' : 'Login Manual'}
          </button>

          <div className="text-center text-sm text-gray-500 mb-4">atau</div>

          <button
            onClick={handleGmailLogin}
            disabled={loadingManual || loadingGmail}
            className="w-full px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
          >
            {loadingGmail ? 'Memproses...' : 'Login dengan Gmail'}
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            Belum punya akun?{' '}
            <button
              onClick={() => router.push('/user/register')}
              className="text-blue-600 hover:underline"
            >
              Daftar sekarang
            </button>
          </div>

          <button
            onClick={() => {
              document.cookie = 'token=; path=/; max-age=0'
              localStorage.clear()
              window.location.href = '/login'
            }}
            className="mt-4 text-sm text-red-500 underline"
          >
            Debug Logout
          </button>
        </div>
      </div>
    </UserLayoutWrapper>
  )
}
