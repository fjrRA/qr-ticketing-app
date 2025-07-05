/* Ini cuma buat testing POST ke Mailtrap aja
*/

import nodemailer from "nodemailer";

async function main() {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1fab3abbe59fbc", // ganti manual dulu untuk cek
      pass: "a6ddc5cd4efbbb",
    },
  });

  const info = await transporter.sendMail({
    from: '"Tester" <test@example.com>',
    to: "test@example.com",
    subject: "Hello from Dev",
    html: "<p>This is a test email</p>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
