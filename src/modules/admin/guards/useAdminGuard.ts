// src/modules/admin/guards/useAdminGuard.ts
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

type JwtPayload = {
  role?: string
}

export function useAdminGuard() {
  const router = useRouter()

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))
    const value = token?.split('=')[1]

    if (!value) {
      router.push('/user/login')
      return
    }

    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(value)
      if (decoded.role !== 'admin') {
        router.push('/user/login')
      }
    } catch {
      router.push('/user/login')
    }
  }, [router])
}
