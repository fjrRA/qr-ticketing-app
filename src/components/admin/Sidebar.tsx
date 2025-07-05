// src/components/admin/Sidebar.tsx
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@lib/utils"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { LogOut } from "lucide-react" // Ikon logout
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { clearAuthAndRedirect } from '@lib/auth'

type JwtPayload = {
  name?: string
}

const adminMenu = [
  { name: "Dashboard", href: "/admin" },
  { name: "Transaksi", href: "/admin/transaction" },
  { name: "Pembayaran", href: "/admin/payment" },
  { name: "Tiket", href: "/admin/ticket" },
  { name: "Destinasi", href: "/admin/destination" },
  { name: "Review", href: "/admin/reviews" },
  { name: "Kategori Wisata", href: "/admin/category" },
  { name: "Desa", href: "/admin/village" },
  { name: "Galeri", href: "/admin/gallery" },
  { name: "Hari Kerja", href: "/admin/operating" },
  { name: "Pengguna", href: "/admin/user" },
  { name: "Fasilitas", href: "/admin/facility" },
  { name: "Scan Tiket", href: "/admin/scan" },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [adminName, setAdminName] = useState('')

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))
    const value = token?.split('=')[1]

    if (value) {
      try {
        const decoded: JwtPayload = jwtDecode(value)
        if (decoded?.name) {
          setAdminName(decoded.name)
        }
      } catch {
        setAdminName('')
      }
    }
  }, [])

  const handleLogout = () => {
    clearAuthAndRedirect()
  }

  return (
    <aside className="w-64 bg-white border-r h-screen fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <div className="p-4 font-bold text-xl border-b">
          Admin Panel
          {adminName && (
            <p className="text-xs font-normal text-gray-500 mt-1 truncate">
              {adminName}
            </p>
          )}
        </div>
        <nav className="p-4 space-y-2">
          {adminMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded hover:bg-blue-100 text-sm",
                pathname === item.href ? "bg-blue-200 font-semibold" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* 🔴 Logout dengan konfirmasi */}
      <div className="p-4 border-t">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex items-center gap-2 text-red-600 hover:underline text-sm w-full text-left">
              <LogOut size={16} /> Logout
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah ingin keluar akun?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Tidak</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogout}>
                Ya, Keluar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </div>

    </aside>
  )
}
