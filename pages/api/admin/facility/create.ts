// pages/api/admin/facility/create.ts
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'

// Disable default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Pastikan folder upload ada
const createUploadDir = async () => {
  const uploadDir = path.join(process.cwd(), 'public/uploads/facility')
  try {
    await fs.mkdir(uploadDir, { recursive: true })
  } catch (err) {
    console.error('Gagal membuat folder upload:', err)
  }
  return uploadDir
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const uploadDir = await createUploadDir()

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFiles: 1,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filename: (name, ext) => {
      const timestamp = Date.now()
      const cleanName = name.replace(/\s+/g, '_').replace(/\.[^/.]+$/, '')
      return `${cleanName}_${timestamp}${ext}`
    },
  })

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Parsing error:', err)
      return res.status(500).json({ error: 'Error parsing form data' })
    }

    try {
      const { facility_id, facility_name } = fields
      const iconFile = files.facility_icon?.[0]
      const iconPath = iconFile ? path.basename(iconFile.filepath) : null

      const created = await prisma.facility.create({
        data: {
          facility_id: String(facility_id),
          facility_name: String(facility_name),
          facility_icon: iconPath,
        },
      })

      res.status(200).json(created)
    } catch (error) {
      console.error('Create facility failed:', error)
      res.status(500).json({ error: 'Failed to create facility' })
    }
  })
}
