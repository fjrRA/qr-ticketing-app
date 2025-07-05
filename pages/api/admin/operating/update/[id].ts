import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const { operating_day, hours_open, hours_closed } = req.body

  if (req.method === "PUT") {
    try {
      const updated = await prisma.operating_hours.update({
        where: { operating_id: id as string },
        data: {
          operating_day,
          hours_open: new Date(hours_open),
          hours_closed: new Date(hours_closed),
        },
      })
      res.status(200).json(updated)
    } catch (error) {
      console.error("Failed to update operating hour:", error)
      res.status(500).json({ error: "Failed to update operating hour" })
    }
  } else {
    res.status(405).end()
  }
}
