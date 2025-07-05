import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') return res.status(405).end()

  const { id } = req.query

  const form = formidable({
    uploadDir: path.join(process.cwd(), 'public/uploads/facility'),
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filename: (name, ext) => {
      const timestamp = Date.now()
      const cleanName = name.replace(/\s+/g, '_').replace(/\.[^/.]+$/, '')
      return `${cleanName}_${timestamp}${ext}`
    },
  })

  return form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Gagal parsing data form' })

    try {
      const facility_name = String(fields.facility_name)
      const newIcon = Array.isArray(files.facility_icon)
        ? files.facility_icon[0]
        : files.facility_icon

      const oldData = await prisma.facility.findUnique({
        where: { facility_id: id as string },
      })

      if (!oldData) return res.status(404).json({ error: 'Fasilitas tidak ditemukan' })

      let iconPath = oldData.facility_icon

      if (newIcon && newIcon.filepath) {
        const filename = path.basename(newIcon.filepath)
        iconPath = filename // hanya nama file

        // Hapus file lama
        if (oldData.facility_icon) {
          const oldFile = path.join(
            process.cwd(),
            'public/uploads/facility',
            oldData.facility_icon
          )
          if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile)
        }
      }

      const updated = await prisma.facility.update({
        where: { facility_id: id as string },
        data: {
          facility_name,
          facility_icon: iconPath,
        },
      })

      return res.status(200).json(updated)
    } catch (error) {
      console.error('Update gagal:', error)
      return res.status(500).json({ error: 'Gagal update fasilitas' })
    }
  })
}
