import { NextApiRequest, NextApiResponse } from "next"
import prisma from "@lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const users = await prisma.users.findMany({
        orderBy: { name: "asc" },
      })
      res.status(200).json(users)
    } catch (error) {
      console.error("GET users error:", error)
      res.status(500).json({ error: "Failed to fetch users" })
    }
  } else {
    res.status(405).end()
  }
}