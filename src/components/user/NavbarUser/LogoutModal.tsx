// src/components/user/NavbarUser/LogoutModal.tsx
'use client'

interface Props {
  show: boolean
  onCancel: () => void
  onConfirm: () => void
}

export default function LogoutModal({ show, onCancel, onConfirm }: Props) {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Konfirmasi Logout</h2>
        <p className="mb-6">Apakah Anda yakin ingin keluar dari akun?</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded focus:outline-none focus:ring-1 focus:ring-red-400"
          >
            Ya, Keluar
          </button>
        </div>
      </div>
    </div>
  )
}
