// pages/api/admin/destination/update/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import { parseForm } from '@lib/parseForm'

export { config } from '@lib/parseForm'

function generateId(index: number): string {
  const prefix = "FT";
  const rand = Math.floor(10 + Math.random() * 90);
  const short = Date.now().toString().slice(-4);
  return `${prefix}${short}${index}${rand}`.slice(0, 10);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const existing = await prisma.spot_tourism.findUnique({
      where: { spot_id: id as string },
    })

    if (!existing) {
      return res.status(404).json({ error: 'Spot not found' })
    }

    const { fields, savedFileUrl } = await parseForm(req, 'destination')
    const getField = (f: string | string[] | undefined): string =>
      Array.isArray(f) ? f[0] : f || ''

    const latString = getField(fields.latitude)
    const lngString = getField(fields.longitude)
    const latitude = latString !== '' ? parseFloat(latString) : null
    const longitude = lngString !== '' ? parseFloat(lngString) : null

    const updated = await prisma.spot_tourism.update({
      where: { spot_id: id as string },
      data: {
        spot_name: getField(fields.spot_name),
        spot_desc: getField(fields.spot_desc),
        spot_address: getField(fields.spot_address),
        spot_rating: parseFloat(getField(fields.spot_rating) || '0.00'),
        spot_contact: getField(fields.spot_contact),
        spot_maps: getField(fields.spot_maps),
        village_id: getField(fields.village_id) || null,
        category_id: getField(fields.category_id) || null,
        spot_thumbnail: savedFileUrl ?? existing.spot_thumbnail,
        latitude: latitude,
        longitude: longitude,
      },
    })

    const facilityIds = JSON.parse(getField(fields.facilities) || '[]')

    await prisma.facility_tourism.deleteMany({
      where: { spot_id: id as string },
    })

    if (facilityIds.length > 0) {
      await prisma.facility_tourism.createMany({
        data: facilityIds.map((facility_id: string, index: number) => ({
          facility_tourism_id: generateId(index),
          spot_id: id as string,
          facility_id,
        })),
      })
    }

    res.status(200).json(updated)
  } catch (err) {
    console.error('UPDATE ERROR:', err)
    res.status(500).json({ error: 'Failed to update destination' })
  }
}
