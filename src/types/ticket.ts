// src/types/ticket.ts
export type Ticket = {
  ticket_id: string;
  spot_id: string | null;
  ticket_name: string | null;
  ticket_price: number;  // Pastikan sudah dikonversi menjadi number
  ticket_desc: string | null;
  ticket_stock: number | null;
  code: string;
  url_qr: string;
};
