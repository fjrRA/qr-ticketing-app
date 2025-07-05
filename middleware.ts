// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'

interface DecodedToken {
  user_id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const pathname = request.nextUrl.pathname

  const publicPaths = [
    '/', // homepage
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/user',
    '/user/explore',
  ]

  if (publicPaths.some((path) => pathname === path || pathname.startsWith(path + '/'))) {
    return NextResponse.next()
  }

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(pathname.startsWith('/admin') ? '/admin/login' : '/login', request.url)
    )
  }

  try {
    const decoded = jwtDecode<DecodedToken>(token)

    // ⛔ User masuk ke /admin
    if (pathname.startsWith('/admin') && decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // ⛔ Admin masuk ke /user
    if (pathname.startsWith('/user') && decoded.role !== 'user') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // ⛔ Admin yang sudah login tidak boleh ke /admin/login
    if (pathname === '/admin/login' && decoded.role === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  } catch (err) {
    console.error('JWT decode error:', err)
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/user/:path*', '/admin/:path*'],
}
