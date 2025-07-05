// src/components/user/NavbarUser/DesktopMenu.tsx
'use client'

import Link from 'next/link'

interface Props {
  user: { name: string; email: string } | null
  onLogoutClick: () => void
  onProfileClick: () => void
}

export default function DesktopMenu({ user, onLogoutClick, onProfileClick }: Props) {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {user && (
        <button
          onClick={onProfileClick}
          className="text-sm text-gray-600 bg-slate-400 p-2 rounded-lg text-center hover:bg-slate-500"
        >
          Hi, {user.name}
        </button>

      )}

      <Link href="/user/explore" className="text-gray-700 hover:text-gray-900">Eksplorasi Wisata</Link>

      {user && (
        <Link href="/user/ticket" className="text-gray-700 hover:text-gray-900">
          Tiket Saya
        </Link>
      )}

      {user && (
        <Link href="/user/payment" className="text-gray-700 hover:text-gray-900">
          Riwayat
        </Link>
      )}

      {user ? (
        <button
          onClick={onLogoutClick}
          className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-1 focus:ring-red-400"
        >
          Logout
        </button>
      ) : (
        <Link href="/login" className="text-gray-700 hover:text-gray-900">
          Login
        </Link>
      )}
    </div>
  )
}
