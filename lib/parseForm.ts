import formidable, { File, Fields, Files, Part } from 'formidable'
import fs from 'fs-extra'
import path from 'path'
import { NextApiRequest } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function parseForm(
  req: NextApiRequest,
  targetFolder: string
): Promise<{
  fields: Fields
  files: Files
  savedFileName?: string
  savedFileUrl?: string
}> {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', targetFolder)
  await fs.ensureDir(uploadDir)

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false,
    filename: (_name: string, _ext: string, part: Part) => {
      const timestamp = Date.now()
      return `${timestamp}-${part.originalFilename || 'file'}`
    },
  })

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err)

      const raw = files.file as unknown
      const rawFile = Array.isArray(raw) ? raw[0] as File : raw as File

      if (!rawFile?.filepath || !rawFile?.originalFilename) {
        return resolve({ fields, files })
      }

      const savedFileName = path.basename(rawFile.filepath)
      const savedFileUrl = `/uploads/${targetFolder}/${savedFileName}`

      resolve({ fields, files, savedFileName, savedFileUrl })
    })
  })
}
