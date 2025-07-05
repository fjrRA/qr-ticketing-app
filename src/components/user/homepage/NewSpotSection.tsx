// src/components/user/homepage/NewSpotSection.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Destination = {
  id: string
  name: string
  slug: string
  desc: string;
  thumbnail_url: string | null
}

export default function NewSpotSection() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch('/api/user/destination?new=true')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()

        // Mapping data dari API ke tipe Destination
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mappedData = data.map((item: any) => ({
          id: item.spot_id,
          name: item.spot_name,
          slug: item.spot_id, // Ganti jika kamu punya slug berbeda
          thumbnail_url: item.spot_thumbnail,
          desc: item.spot_desc,
        }))

        setDestinations(mappedData)
      } catch (error) {
        console.error('Error fetching destinations:', error)
        setDestinations([])
      } finally {
        setLoading(false)
      }
    }
    fetchDestinations()
  }, [])

  if (loading) {
    return <p className="text-center py-10">Loading destinasi baru...</p>
  }

  return (
    <section className="py-10 px-6 bg-cream">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-forest">Destinasi Baru</h2>
      {destinations.length === 0 ? (
        <p className="text-center text-muted-foreground">Tidak ada destinasi baru saat ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/user/destination/${dest.slug}`}
              className="block bg-white rounded-md shadow p-2 overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={
                  dest.thumbnail_url
                    ? `${process.env.NEXT_PUBLIC_BASE_URL}${dest.thumbnail_url}`
                    : '/default-image.jpg'
                }
                alt={dest.name || 'Gambar destinasi'}
                width={400}   // Sesuaikan dengan ukuran halaman utama
                height={250}  // Sesuaikan dengan ukuran halaman utama
                className="object-cover w-full h-60 mb-2 rounded"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-forest">{dest.name}</h3>
                <p className="text-sm text-gray-600">{dest.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
