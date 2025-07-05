// src/components/user/homepage/PopularSpotSection.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Decimal } from '@prisma/client/runtime/library' // ✅ Import Prisma Decimal

interface Spot {
  spot_id: string
  spot_name: string
  spot_thumbnail: string | null
  spot_rating: Decimal | null
  _count: {
    reviews: number
  }
}

export default function PopularSpotSection() {
  const [spots, setSpots] = useState<Spot[]>([])

  useEffect(() => {
    const fetchPopularSpots = async () => {
      try {
        const res = await fetch('/api/user/popular-spot')
        if (!res.ok) throw new Error('Failed to fetch popular spots')
        const data: Spot[] = await res.json()
        setSpots(data)
      } catch (error) {
        console.error('Gagal memuat spot populer:', error)
      }
    }

    fetchPopularSpots()
  }, [])

  return (
    <section className="py-10 px-6 bg-cream">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-forest">Wisata Terpopuler</h2>

      {spots.length === 0 ? (
        <p className="text-center text-muted-foreground">Belum ada wisata populer.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {spots.map((spot) => (
            <Link
              key={spot.spot_id}
              href={`/user/destination/${spot.spot_id}`}
              className="block bg-white rounded-md shadow p-2 overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={spot.spot_thumbnail ?? "/default-image.jpg"}
                  alt={spot.spot_name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-forest">{spot.spot_name}</h3>
                <p className="text-sm text-yellow-600">
                  ⭐ {Number(spot.spot_rating ?? 0).toFixed(1)} ({spot._count.reviews} ulasan)
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )

}
