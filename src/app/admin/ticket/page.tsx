import { TicketTable } from "@/components/admin/ticket/TicketTable"

export default function TicketPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Tiket</h1>
      <TicketTable />
    </div>
  )
}
