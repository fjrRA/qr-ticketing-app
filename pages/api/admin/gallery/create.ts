import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"
import { parseFormWithSubfolder, config as formConfig } from "@lib/parseFormWithSubfolder"

export const config = formConfig

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end()

  try {
    const { fields, savedFileUrl } = await parseFormWithSubfolder(req, "gallery", "spot_id")

    const gallery_id = Array.isArray(fields.gallery_id) ? fields.gallery_id[0] : fields.gallery_id || ""
    const spot_id = Array.isArray(fields.spot_id) ? fields.spot_id[0] : fields.spot_id || ""
    const gallery_caption = Array.isArray(fields.gallery_caption) ? fields.gallery_caption[0] : fields.gallery_caption || ""

    const newGallery = await prisma.gallery.create({
      data: {
        gallery_id,
        spot_id,
        gallery_caption,
        gallery_img: savedFileUrl || null,
      },
    })

    res.status(200).json(newGallery)
  } catch (error) {
    console.error("Failed to create gallery:", error)
    res.status(500).json({ error: "Failed to create gallery" })
  }
}
