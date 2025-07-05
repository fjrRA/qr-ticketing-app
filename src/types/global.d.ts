// export {}

// declare global {
//   interface Window {
//     snap: unknown
//     midtransClient: unknown
//   }
// }

declare global {
  interface Window {
    midtransClient: typeof import('midtrans-client').default; // Menggunakan tipe dari midtrans-client
  }
}

export {};
