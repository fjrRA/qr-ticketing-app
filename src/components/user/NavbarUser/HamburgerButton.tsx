// src/components/user/NavbarUser/HamburgerButton.tsx
'use client'

interface Props {
  open: boolean
  toggleOpen: () => void
}

export default function HamburgerButton({ open, toggleOpen }: Props) {
  return (
    <button
      onClick={toggleOpen}
      className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-label={open ? 'Tutup menu' : 'Buka menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      {open ? (
        // Ikon “X” (close)
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        // Ikon hamburger
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  )
}
