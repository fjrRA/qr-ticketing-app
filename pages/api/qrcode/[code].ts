// pages/api/qrcode/[code].ts
import type { NextApiRequest, NextApiResponse } from "next";
import QRCode from "qrcode";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (typeof code !== "string" || !code.trim()) {
    return res.status(400).json({ error: "Kode tidak valid" });
  }

  try {
    const qrDataUrl = await QRCode.toDataURL(code);

    const base64Data = qrDataUrl.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", `inline; filename="${code}.png"`);
    res.status(200).send(buffer);
  } catch (error) {
    console.error("Gagal generate QR", error);
    res.status(500).json({ error: "Gagal generate QR code" });
  }
}
