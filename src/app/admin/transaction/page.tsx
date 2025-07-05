import { TransactionTable } from "@/components/admin/transaction/TransactionTable"

export default function TransactionPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transaksi</h1>
      <TransactionTable />
    </div>
  )
}
