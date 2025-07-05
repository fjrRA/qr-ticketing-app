// lib/mailer.ts
import nodemailer from 'nodemailer'

console.log("📦 ENV Mailer:", {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  from: process.env.MAIL_FROM,
});

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html,
  })
}

