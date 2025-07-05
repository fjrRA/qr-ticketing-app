// pages/api/auth/forgot-password.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";
import { sendResetPasswordEmail } from "@lib/email";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email || typeof email !== "string")
    return res.status(400).json({ message: "Email tidak valid" });

  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "Email tidak ditemukan" });

  const token = uuidv4();
  const expiredAt = new Date(Date.now() + 30 * 60 * 1000); // 30 menit

  console.log('🧪 Mailtrap user:', process.env.MAIL_USER)
console.log('🧪 Mailtrap pass:', process.env.MAIL_PASS)

  // Hapus token sebelumnya jika ada
  await prisma.resetToken.deleteMany({ where: { user_id: user.user_id } });

  // Simpan token baru
  await prisma.resetToken.create({
    data: {
      user_id: user.user_id,
      token,
      expired_at: expiredAt,
    },
  });

  // Kirim email
  await sendResetPasswordEmail(user.email, user.name, token);

  return res.status(200).json({ message: "Link reset telah dikirim ke email kamu." });
}
