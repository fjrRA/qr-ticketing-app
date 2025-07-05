// lib/auth.ts
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  exp: number
  user_id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<DecodedToken>(token)
    const now = Math.floor(Date.now() / 1000)
    return decoded.exp < now
  } catch {
    return true
  }
}

// lib/auth.ts
export async function clearAuthAndRedirect() {
  // Panggil API untuk hapus cookie httpOnly (misal dari login Gmail)
  try {
    await fetch('/api/auth/logout', { method: 'POST' })
  } catch (err) {
    console.warn('Logout API error', err)
  }

  // Hapus localStorage juga
  localStorage.clear()

  // Redirect
  window.location.href = '/login'
}
