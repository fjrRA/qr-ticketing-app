import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const data = await prisma.operating_hours.findMany({
        include: {
          spot: true,
        },
      })
      res.status(200).json(data)
    } catch (error) {
      console.error("Failed to fetch operating hours:", error)
      res.status(500).json({ error: "Failed to fetch operating hours" })
    }
  } else {
    res.status(405).end()
  }
}
