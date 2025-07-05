// src/app/admin/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TransactionChart from '@/components/admin/dashboard/TransactionChart'
import RevenueChart from '@/components/admin/dashboard/RevenueChart'
import PaymentPieChart from '@/components/admin/dashboard/PaymentPieChart'

type JwtPayload = { role?: string }

type Summary = {
  transaksi: { total: number; paid: number; cancelled: number; pending: number }
  pendapatan: { total: number; metodeTerbanyak: string }
  kunjungan: { hariIni: number; mingguIni: number }
  pengguna: { total: number; beli: number }
  populer: { nama: string }
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Summary | null>(null)

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]
    console.log('Token:', token)

    if (!token) {
      router.push('../login') // perbaikan: arahkan ke /login
      return
    }

    try {
      const decoded: JwtPayload = jwtDecode(token)
      if (decoded.role !== 'admin') {
        router.push('/login') // perbaikan: arahkan ke /login
      } else {
        setLoading(false) // hanya set loading false jika valid
      }
    } catch {
      router.push('/login') // perbaikan
    }
  }, [router])

  // ⛔️ Perbaiki penggunaan hooks di luar kondisi
  useEffect(() => {
    if (!loading) {
      fetch('/api/admin/dashboard/summary')
        .then(res => res.json())
        .then(setData)
    }
  }, [loading])
  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Memuat halaman...
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>Transaksi</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data ? data.transaksi.total : '-'}</p>
            <p className="text-sm text-muted-foreground">Total transaksi</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Pembayaran</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data ? `Rp ${data.pendapatan.total.toLocaleString()}` : '-'}</p>
            <p className="text-sm text-muted-foreground">Total pembayaran</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Kunjungan Hari Ini</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{data ? data.kunjungan.hariIni : '-'}</p>
            <p className="text-sm text-muted-foreground">Jadwal kunjungan hari ini</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Destinasi Populer</CardTitle></CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{data ? data.populer.nama : '-'}</p>
            <p className="text-sm text-muted-foreground">Berdasarkan tiket terbanyak</p>
          </CardContent>
        </Card>
      </div>

      <PaymentPieChart />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12"><TransactionChart /></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12"><RevenueChart /></div>
      </div>
    </div>
  )
}