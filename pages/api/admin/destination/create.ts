// pages/api/admin/destination/create.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import { parseForm, config as formidableConfig } from '@lib/parseForm'

export const config = formidableConfig

function generateId(index: number): string {
  const prefix = "FT";
  const rand = Math.floor(10 + Math.random() * 90);
  const short = Date.now().toString().slice(-4);
  return `${prefix}${short}${index}${rand}`.slice(0, 10);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fields, savedFileUrl } = await parseForm(req, 'destination')
    const getField = (f: string | string[] | undefined): string =>
      Array.isArray(f) ? f[0] : f || ''

    const latString = getField(fields.latitude)
    const lngString = getField(fields.longitude)

    const latitude = latString !== '' ? parseFloat(latString) : null
    const longitude = lngString !== '' ? parseFloat(lngString) : null

    const created = await prisma.spot_tourism.create({
      data: {
        spot_id: getField(fields.spot_id),
        spot_name: getField(fields.spot_name),
        spot_desc: getField(fields.spot_desc),
        spot_address: getField(fields.spot_address),
        spot_rating: parseFloat(getField(fields.spot_rating) || '0.00'),
        spot_contact: getField(fields.spot_contact),
        spot_maps: getField(fields.spot_maps),
        village_id: getField(fields.village_id) || null,
        category_id: getField(fields.category_id) || null,
        spot_thumbnail: savedFileUrl || null,
        latitude: latitude,
        longitude: longitude,
      },
    })

    const facilityIds = JSON.parse(getField(fields.facilities) || '[]')

    if (facilityIds.length > 0) {
      await prisma.facility_tourism.createMany({
        data: facilityIds.map((facility_id: string, index: number) => ({
          facility_tourism_id: generateId(index),
          spot_id: created.spot_id,
          facility_id,
        })),
      })
    }

    res.status(201).json(created)
  } catch (err) {
    console.error('UPLOAD ERROR:', err)
    res.status(500).json({ error: 'Failed to create destination' })
  }
}
