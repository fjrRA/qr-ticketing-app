import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import { parseForm, config as formidableConfig } from '@lib/parseForm'

export const config = formidableConfig

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fields, savedFileUrl } = await parseForm(req, 'category')

    if (!savedFileUrl) {
      return res.status(400).json({ error: 'Icon file is required' })
    }

    const getField = (f: string | string[] | undefined): string =>
      Array.isArray(f) ? f[0] : f || ''

    const created = await prisma.category_tourism.create({
      data: {
        category_id: getField(fields.category_id),
        category_name: getField(fields.category_name),
        category_desc: getField(fields.category_desc),
        category_icon: savedFileUrl,
      },
    })

    res.status(200).json(created)
  } catch (err) {
    console.error('UPLOAD ERROR:', err)
    res.status(500).json({ error: 'Failed to create category' })
  }
}
