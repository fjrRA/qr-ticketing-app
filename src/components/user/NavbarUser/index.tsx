// src/components/user/NavbarUser/index.tsx
'use client'

import { useEffect, useState, useRef } from 'react'

import DesktopMenu from './DesktopMenu'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import LogoutModal from './LogoutModal'
import UserProfileModal from '@/components/user/profile/UserProfileModal'

import { clearAuthAndRedirect } from '@lib/auth'

type UserData = {
  user_id: string
  name: string
  email: string
  phone_number?: string
  address?: string
}

export default function NavbarUser() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Ambil data user dari localStorage saat mount dan saat event userChanged dipicu
  useEffect(() => {
    const loadUser = () => {
      const data = localStorage.getItem('user')
      if (data) {
        setUser(JSON.parse(data))
      } else {
        setUser(null)
      }
    }

    loadUser()
    window.addEventListener('userChanged', loadUser)
    return () => window.removeEventListener('userChanged', loadUser)
  }, [])

  // Tutup mobile menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('button[aria-label^="Tutup menu"]')
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  // Logout
  const doLogout = () => {
    clearAuthAndRedirect()
  }

  // Simpan perubahan profil
  const handleSaveProfile = async (data: Partial<UserData>) => {
    const res = await fetch('/api/user/update-profile', {
      method: 'PUT',
      body: JSON.stringify({ ...data, email: user?.email }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
      const updated = await res.json()
      localStorage.setItem('user', JSON.stringify(updated))
      setUser(updated)
      window.dispatchEvent(new Event('userChanged'))
    }
  }

  return (
    <>
      <nav className="bg-white shadow px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Title */}
          <span className="text-xl font-bold">
            <a href="/user" aria-label="Beranda" className="hover:bg-gray-100 px-2 py-1 rounded">
              Baturraden Tourism
            </a>
          </span>

          {/* Desktop Menu */}
          <DesktopMenu
            user={user}
            onLogoutClick={() => setShowConfirm(true)}
            onProfileClick={() => setShowProfile(true)}
          />

          {/* Hamburger untuk mobile */}
          <HamburgerButton open={open} toggleOpen={() => setOpen(prev => !prev)} />
        </div>

        {/* Mobile Menu */}
        {open && (
          <MobileMenu
            user={user}
            onLogoutClick={() => setShowConfirm(true)}
            closeMenu={() => setOpen(false)}
            menuRef={menuRef}
            onProfileClick={() => {
              setShowProfile(true)
              setOpen(false)
            }}
          />
        )}
      </nav>

      {/* Modal Profil */}
      {user && showProfile && (
        <UserProfileModal
          show={showProfile}
          onClose={() => setShowProfile(false)}
          user={user}
          onSave={handleSaveProfile}
        />
      )}

      {/* Modal Logout */}
      <LogoutModal
        show={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={doLogout}
      />
    </>
  )
}
