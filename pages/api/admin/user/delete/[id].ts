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
  } else if (req.method === "DELETE") {
    const { id } = req.query
    if (typeof id !== "string") {
      return res.status(400).json({ error: "Invalid user ID" })
    }

    try {
      await prisma.users.delete({ where: { user_id: id } })
      res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
      console.error("DELETE user error:", error)
      res.status(500).json({ error: "Failed to delete user" })
    }
  } else {
    res.status(405).end()
  }
}
