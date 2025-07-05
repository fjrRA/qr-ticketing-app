// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, password } = req.body
  if (!email) {
    return res.status(400).json({ error: 'Email wajib diisi' })
  }

  let user = await prisma.users.findUnique({ where: { email } })

  try {
    // 🔐 LOGIN DENGAN PASSWORD
    if (password) {
      if (!user) {
        return res.status(404).json({ error: 'Akun tidak ditemukan' })
      }

      if (!user.password || user.password === '-') {
        return res.status(403).json({ error: 'Akun ini hanya bisa login via Gmail' })
      }

      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) {
        return res.status(401).json({ error: 'Email atau password salah' })
      }

    } else {
      // 🔐 LOGIN DENGAN GMAIL
      if (!user) {
        const newUserId = `U${Date.now().toString().slice(-9)}`
        user = await prisma.users.create({
          data: {
            user_id: newUserId,
            name,
            email,
            password: '-', // Gmail login tidak pakai password
            role: 'user',
          },
        })
      }
    }

    // 🔑 GENERATE JWT
    const token = jwt.sign(
      {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    )

    // 🍪 SET COOKIE
    const cookie = serialize('token', token, {
      httpOnly: false, // ← false agar bisa dibaca via document.cookie
      path: '/',
      maxAge: 60 * 60 * 24, // 1 hari
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })

    res.setHeader('Set-Cookie', cookie)

    // ✅ RETURN
    return res.status(200).json({
      message: 'Login berhasil',
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token, // ← agar bisa digunakan di frontend jika dibutuhkan
    })

  } catch (err) {
    console.error('Login error:', err)
    return res.status(500).json({ error: 'Terjadi kesalahan saat login' })
  }
}
