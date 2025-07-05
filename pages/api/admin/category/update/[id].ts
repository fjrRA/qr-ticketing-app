import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import { parseForm, config as formidableConfig } from '@lib/parseForm'

export const config = formidableConfig

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const existing = await prisma.category_tourism.findUnique({
      where: { category_id: id as string },
    })

    if (!existing) {
      return res.status(404).json({ error: 'Category not found' })
    }

    const { fields, savedFileUrl } = await parseForm(req, 'category')

    const getField = (f: string | string[] | undefined): string =>
      Array.isArray(f) ? f[0] : f || ''

    const updated = await prisma.category_tourism.update({
      where: { category_id: id as string },
      data: {
        category_name: getField(fields.category_name),
        category_desc: getField(fields.category_desc),
        category_icon: savedFileUrl ?? existing.category_icon,
      },
    })

    res.status(200).json(updated)
  } catch (error) {
    console.error('UPDATE ERROR:', error)
    res.status(500).json({ error: 'Failed to update category' })
  }
}
