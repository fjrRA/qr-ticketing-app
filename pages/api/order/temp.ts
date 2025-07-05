import prisma from "@lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type TempOrderItem = {
  ticket_id: string;
  visitor_name?: string;
  quantity: number;
  price: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { user_id, visit_date, items } = req.body;

    if (!user_id || !visit_date || !Array.isArray(items)) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const orderId = `ORD-${Date.now()}-${user_id}`;

    let total = 0;
    for (const item of items as TempOrderItem[]) {
      total += item.quantity * item.price;
    }

    const tempOrder = await prisma.temp_order.create({
      data: {
        order_id: orderId,
        user_id,
        visit_date: new Date(visit_date),
        status: "pending",
        details: {
          create: (items as TempOrderItem[]).map((item) => ({
            ticket_id: item.ticket_id,
            visitor_name: item.visitor_name,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.quantity * item.price,
          })),
        },
      },
      include: {
        details: true,
      },
    });

    return res.status(200).json({
      message: "Temp order created",
      order_id: tempOrder.order_id,
      total_price: total,
      order: tempOrder,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
