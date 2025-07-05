// src/components/user/homepage/HeroSection.tsx
'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative bg-forest bg-cover bg-center h-72 sm:h-96 flex flex-col justify-center items-center pt-0 mt-0 text-white px-6 text-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Overlay gelap untuk meningkatkan kontras */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold mb-3 drop-shadow-lg">
          Explore <span className="text-gold">Baturraden</span>
        </h1>
        <p className="mb-6 text-sm sm:text-lg drop-shadow-md">
          Temukan destinasi terbaik di alam pegunungan yang menakjubkan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/user/explore"
            className="bg-gold text-forest px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Explore Now
          </Link>
          <Link
            href="/user/ticket"
            className="bg-forest border border-gold px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </section>
  )
}
