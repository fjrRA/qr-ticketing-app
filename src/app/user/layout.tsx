// src/app/user/layout.tsx
import type { Metadata } from 'next'
import UserLayoutWrapper from '@/components/layouts/UserLayoutWrapper'

export const metadata: Metadata = {
  title: 'User Area - Baturraden Tourism',
  description: 'Halaman pengguna Baturraden Tourism',
}

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserLayoutWrapper>
      {children}
    </UserLayoutWrapper>
  )
}
