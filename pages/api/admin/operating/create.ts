import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { operating_id, spot_id, operating_day, hours_open, hours_closed } = req.body

  if (req.method === "POST") {
    try {
      const created = await prisma.operating_hours.create({
        data: {
          operating_id,
          spot_id,
          operating_day,
          hours_open: new Date(hours_open),
          hours_closed: new Date(hours_closed),
        },
      })
      res.status(200).json(created)
    } catch (error) {
      console.error("Failed to create operating hour:", error)
      res.status(500).json({ error: "Failed to create operating hour" })
    }
  } else {
    res.status(405).end()
  }
}
