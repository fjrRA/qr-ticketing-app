import formidable, { File, Fields, Files, Part } from 'formidable'
import fs from 'fs-extra'
import path from 'path'
import { NextApiRequest } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function parseFormWithSubfolder(
  req: NextApiRequest,
  baseFolder: string,
  subfolderField: string
): Promise<{
  fields: Fields
  files: Files
  savedFileName?: string
  savedFileUrl?: string
}> {
  const form = formidable({
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

      const subfolder = Array.isArray(fields[subfolderField])
        ? fields[subfolderField][0]
        : fields[subfolderField] || 'unknown'

      const uploadDir = path.join(process.cwd(), 'public', 'uploads', baseFolder, subfolder)
      await fs.ensureDir(uploadDir)

      if (!rawFile?.filepath || !rawFile?.originalFilename) {
        return resolve({ fields, files })
      }

      const newFileName = `${Date.now()}-${rawFile.originalFilename}`
      const destPath = path.join(uploadDir, newFileName)
      await fs.move(rawFile.filepath, destPath, { overwrite: true })

      const savedFileUrl = `/uploads/${baseFolder}/${subfolder}/${newFileName}`
      resolve({ fields, files, savedFileName: newFileName, savedFileUrl })
    })
  })
}
