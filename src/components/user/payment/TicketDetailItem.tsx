// src/components/user/payment/TicketDetailItem.tsx
type Props = {
  ticket: {
    ticket_name: string
  }
  visitor_name: string
  detail_price: number
  detail_subtotal: number
  transaction_detail_id: number
  isPaid: boolean
}

export default function TicketDetailItem({
  ticket,
  visitor_name,
  detail_subtotal,
  transaction_detail_id,
  isPaid,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 border-b last:border-none gap-3">
      <div className="space-y-1 text-sm text-gray-700">
        <p>
          <span className="inline-block mr-2">👤</span>
          <span className="font-medium">Nama Pengunjung:</span> {visitor_name}
        </p>
        <p>
          <span className="inline-block mr-2">🎟️</span>
          <span className="font-medium">Nama Tiket:</span> {ticket.ticket_name}
        </p>
        <p>
          <span className="inline-block mr-2">💰</span>
          <span className="font-medium">Subtotal:</span> Rp {detail_subtotal.toLocaleString('id-ID')}
        </p>
      </div>

      {isPaid && (
        <a
          href={`/api/ticket/pdf?id=${transaction_detail_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto"
        >
          <button className="mt-2 md:mt-0 bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">
            Download Tiket
          </button>
        </a>
      )}
    </div>
  )
}
