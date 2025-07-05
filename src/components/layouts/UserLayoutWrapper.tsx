// src/components/layouts/UserLayoutWrapper.tsx
'use client'

import React, { useEffect } from 'react'
import NavbarUser from '@/components/user/NavbarUser'
import FooterSection from '@/components/user/homepage/FooterSection'
import { Toaster } from "@/components/ui/toaster"
import { isTokenExpired } from '@lib/auth'

export default function UserLayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cookies = document.cookie
    const token = cookies.split('; ').find(c => c.startsWith('token='))?.split('=')[1]

    if (token && isTokenExpired(token)) {
      document.cookie = 'token=; path=/; max-age=0'
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <header>
        <NavbarUser />
      </header>
      <main>
        <div className="bg-cream">
          {children}
          <Toaster />
        </div>
      </main>
      <FooterSection />
    </>
  )
}
