// src/app/admin/layout.tsx
'use client'

import { useEffect } from "react"
import Sidebar from "@/components/admin/Sidebar"
import { Toaster } from "@/components/ui/toaster"
import { isTokenExpired } from "@lib/auth" // ← tambahkan ini

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cookies = document.cookie
    const token = cookies.split('; ').find(c => c.startsWith('token='))?.split('=')[1]

    if (token && isTokenExpired(token)) {
      // Hapus cookie token
      document.cookie = 'token=; path=/; max-age=0'
      // Redirect ke halaman login
      window.location.href = '/login'
    }
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-screen ml-64">
        <main className="flex-1 p-6">
          {children}
          <Toaster />
        </main>
        <footer className="p-4 text-center text-xs text-muted-foreground border-t bg-white">
          © {new Date().getFullYear()} Baturraden Admin. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
