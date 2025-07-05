'use client'

import { useState } from "react"

type Props = {
  transactionId: string
  currentStatus: string
  onUpdate: () => void
}

export function TransactionStatusSelect({ transactionId, currentStatus, onUpdate }: Props) {
  const [status, setStatus] = useState(currentStatus)

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value
    setStatus(newStatus)

    await fetch(`/api/admin/transaction/update/${transactionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transaction_status: newStatus }),
    })

    onUpdate()
  }

  return (
    <select value={status} onChange={handleChange} className="border p-1 rounded text-sm">
      <option value="pending">Pending</option>
      <option value="paid">Paid</option>
      <option value="cancelled">Cancelled</option>
    </select>
  )
}
