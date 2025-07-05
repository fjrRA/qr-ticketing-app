// pages/api/auth/reset-password.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { token, password } = req.body;

  if (!token || !password || typeof token !== "string" || typeof password !== "string") {
    return res.status(400).json({ message: "Token dan password diperlukan" });
  }

  const reset = await prisma.resetToken.findUnique({ where: { token } });
  if (!reset || reset.expired_at < new Date()) {
    return res.status(400).json({ message: "Token tidak valid atau sudah expired" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.users.update({
    where: { user_id: reset.user_id },
    data: { password: hashedPassword },
  });

  await prisma.resetToken.delete({ where: { token } });

  return res.status(200).json({ message: "Password berhasil diubah" });
}
