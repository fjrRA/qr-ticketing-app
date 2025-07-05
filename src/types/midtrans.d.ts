export interface MidtransTransactionResult {
  transaction_id: string;
  order_id: string;
  gross_amount: string;
  payment_type: string;
  transaction_status: string;
  fraud_status?: string;
  status_code?: string;
  status_message?: string;
  merchant_id?: string;
  [key: string]: unknown;
}

interface MidtransSnap {
  pay: (
    token: string,
    options?: {
      onSuccess?: (result: MidtransTransactionResult) => void;
      onPending?: (result: MidtransTransactionResult) => void;
      onError?: (error: Error) => void;
      onClose?: () => void;
    }
  ) => void;
}

// Ini bagian penting:
declare global {
  interface Window {
    snap: MidtransSnap;
  }
}
