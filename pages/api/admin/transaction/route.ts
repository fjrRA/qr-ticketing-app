import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const page = parseInt((req.query.page as string) || '1')
    const search = (req.query.search as string) || ''
    const status = (req.query.status as string) || ''
    const sort = (req.query.sort as string) || 'desc' // ✅ sort by waktu
    const limit = 10
    const skip = (page - 1) * limit

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {
      ...(status && status !== 'all' ? { transaction_status: status } : {}),
      OR: [
        { transaction_code: { contains: search.toLowerCase() } },
        {
          user: {
            name: { contains: search.toLowerCase() },
          }
        }
      ]
    }

    const [data, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        skip,
        take: limit,
        include: {
          user: {
            select: { name: true }
          },
          transaction_details: {
            select: {
              ticket: {
                select: {
                  spot_id: true
                }
              }
            }
          }
        },
        orderBy: {
          transaction_date: sort === 'asc' ? 'asc' : 'desc', // ✅ sesuai permintaan urutan
        },
      }),
      prisma.transaction.count({ where }),
    ])

    return res.status(200).json({ data, total })
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return res.status(500).json({ error: 'Failed to fetch transactions' })
  }
}
