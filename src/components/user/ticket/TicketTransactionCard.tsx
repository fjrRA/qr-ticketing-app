// components/user/ticket/TicketTransactionCard.tsx
import TicketDetailItem from './TicketDetailItem';

export type TicketDetail = {
  transaction_detail_id: number;
  visitor_name: string;
  detail_price: number;
  detail_subtotal: number;
  is_used: 'verified' | 'unverified';
  ticket: {
    ticket_name: string;
  };
};

export type TicketTransactionCardProps = {
  transaction_code: string;
  transaction_date: string;
  transaction_status: string;
  total_price: number;
  transaction_details: TicketDetail[];
  filterUsed?: 'verified' | 'unverified';
};

export default function TicketTransactionCard({
  transaction_code,
  transaction_date,
  transaction_status,
  total_price,
  transaction_details,
  filterUsed,
}: TicketTransactionCardProps) {
  const filteredDetails = filterUsed
    ? transaction_details.filter((d) => d.is_used === filterUsed)
    : transaction_details;

  if (filteredDetails.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between px-6 py-4 bg-gray-50 border-b">
        <div>
          <p className="text-sm text-gray-500">Kode Transaksi:</p>
          <p className="font-semibold text-gray-800">{transaction_code}</p>
        </div>
        <div className="text-sm mt-2 md:mt-0">
          <p className="text-gray-500">Tanggal: {new Date(transaction_date).toLocaleString('id-ID')}</p>
          <span className="inline-block mt-1 px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">
            {transaction_status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Detail Tiket */}
      <div className="divide-y divide-gray-200">
        {filteredDetails.map((detail) => (
          <TicketDetailItem key={detail.transaction_detail_id} {...detail} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t text-right text-sm text-blue-600 font-semibold">
        Total Harga: Rp {total_price.toLocaleString('id-ID')}
      </div>
    </div>
  );
}
