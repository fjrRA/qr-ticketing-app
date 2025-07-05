// src/components/user/NavbarUser/MobileMenu.tsx
'use client'

import Link from 'next/link'
import { RefObject } from 'react'

interface Props {
  user: { name: string; email: string } | null
  onLogoutClick: () => void
  closeMenu: () => void
  menuRef: RefObject<HTMLDivElement>
  onProfileClick: () => void
}

export default function MobileMenu({ user, onLogoutClick, closeMenu, menuRef, onProfileClick }: Props) {
  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      className="md:hidden mt-2 bg-white shadow rounded-lg overflow-hidden"
      aria-hidden={false}
    >
      <ul className="px-4 py-5 space-y-3">
        {user && (
          <li>
            <button
              onClick={onProfileClick}
              className="text-sm text-gray-600 bg-slate-400 p-2 rounded-lg text-center hover:bg-slate-500"
            >
              Hi, {user.name}
            </button>

          </li>
        )}

        <li>
          <Link href="/user/explore" className="text-gray-700 hover:text-gray-900" onClick={closeMenu} >
            Eksplorasi Wisata
          </Link>
        </li>

        {user && (
          <li>
            <Link href="/user/ticket" className="text-gray-700 hover:text-gray-900" onClick={closeMenu}>
              Tiket Saya
            </Link>
          </li>
        )}

        {user && (
          <li>
            <Link href="/user/payment" className="text-gray-700 hover:text-gray-900" onClick={closeMenu}>
              Riwayat
            </Link>
          </li>
        )}

        {user ? (
          <li>
            <button
              onClick={() => {
                onLogoutClick()
                closeMenu()
              }}
              className="w-full text-left text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link href="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
