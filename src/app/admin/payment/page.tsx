import { PaymentTable } from "@/components/admin/payment/PaymentTable"

export default function PaymentPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data Pembayaran</h1>
      <PaymentTable />
    </div>
  )
}
