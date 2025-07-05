import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'
import { PaymentStatus } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const page = parseInt((req.query.page as string) || '1')
    const limit = 10
    const skip = (page - 1) * limit
    const status = (req.query.status as string) || ''
    const sort = (req.query.sort as string) || 'desc'
    const search = (req.query.search as string) || ''

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const where: any = {
  ...(status && status !== 'all' ? { payment_status: status as PaymentStatus } : {}),
  AND: [
    {
      OR: [
        { reference_number: { contains: search.toLowerCase() } },
        { transaction: { transaction_code: { contains: search.toLowerCase() } } },
      ]
    }
  ]
}


    const [data, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        skip,
        take: limit,
        include: {
          transaction: {
            select: { transaction_code: true }
          }
        },
        orderBy: {
          payment_time: sort === 'asc' ? 'asc' : 'desc'
        }
      }),
      prisma.payment.count({ where })
    ])

    res.status(200).json({ data, total })
  } catch (error) {
    console.error('Error fetching payments:', error)
    res.status(500).json({ error: 'Failed to fetch payments' })
  }
}
