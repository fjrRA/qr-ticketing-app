import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === "DELETE") {
    try {
      await prisma.operating_hours.delete({
        where: { operating_id: id as string },
      })
      res.status(200).json({ message: "Deleted successfully" })
    } catch (error) {
      console.error("Failed to delete operating hour:", error)
      res.status(500).json({ error: "Failed to delete operating hour" })
    }
  } else {
    res.status(405).end()
  }
}
