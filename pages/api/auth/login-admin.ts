// pages/api/auth/login-admin.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi' })
  }

  const user = await prisma.users.findUnique({ where: { email } })

  if (!user || user.role !== 'admin') {
    return res.status(401).json({ message: 'Email atau password salah atau bukan admin' })
  }

  if (!user.password) {
    return res.status(403).json({ message: 'Akun ini tidak memiliki password untuk login manual' })
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    return res.status(401).json({ message: 'Email atau password salah' })
  }

  const token = jwt.sign(
    {
      user_id: user.user_id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '1d' }
  )

  return res.status(200).json({
    token,
    user: {
      role: user.role,
      user_id: user.user_id,
      name: user.name,
      email: user.email,
    },
  })
}
