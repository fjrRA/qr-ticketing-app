// lib/email.ts
import nodemailer from "nodemailer";

export async function sendResetPasswordEmail(to: string, name: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/user/reset-password?token=${token}`;

  const html = `
    <div style="font-family:sans-serif; background:#fff; padding:20px; border-radius:8px">
      <h2>Halo, ${name}</h2>
      <p>Kami menerima permintaan untuk mengatur ulang password akun Anda.</p>
      <p>Silakan klik tombol berikut untuk melanjutkan:</p>
      <p>
        <a href="${resetLink}" style="background-color:#0d6efd;color:#fff;padding:10px 20px;border-radius:5px;text-decoration:none;">
          Reset Password
        </a>
      </p>
      <p>Link hanya berlaku selama <strong>30 menit</strong>.</p>
      <p>Jika Anda tidak meminta ini, abaikan saja email ini.</p>
    </div>
  `;

  await transporter.sendMail({
    from: '"Baturraden Tourism" <noreply@baturraden.com>',
    to,
    subject: "Reset Password Akun Baturraden",
    html,
  });
}
