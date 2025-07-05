// pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from "@lib/prisma";
import { transporter } from '@lib/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, password } = req.body;

  // Validasi input
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Semua field wajib diisi' });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Format email tidak valid' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password minimal 6 karakter' });
  }

  // Cek apakah email sudah terdaftar
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(409).json({ message: 'Email sudah terdaftar' });
  }

  // Hash password sebelum disimpan
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser;
  try {
    newUser = await prisma.users.create({
      data: {
        user_id: `U${Date.now().toString().slice(-9)}`, // Unique ID sederhana
        name,
        email,
        password: hashedPassword,
        role: 'user',
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Gagal menyimpan pengguna', error });
  }

  // Kirim email konfirmasi
  try {
    await transporter.sendMail({
      from: '"Baturraden Tourism" <noreply@baturraden.com>',
      to: email,
      subject: 'Registrasi Berhasil',
      html: `
        <h2>Halo, ${name}!</h2>
        <p>Akun kamu berhasil dibuat di <strong>Baturraden Tourism</strong>.</p>
        <p>Silakan login untuk mulai membeli tiket wisata dan eksplorasi tempat menarik!</p>
        <p>Salam hangat,<br>Tim Baturraden</p>
      `,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Gagal mengirim email konfirmasi', error });
  }

  return res.status(201).json({ 
    message: 'Registrasi berhasil, silakan login.',
    user: newUser 
  });
}
