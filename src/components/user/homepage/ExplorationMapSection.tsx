// src/components/user/homepage/ExplorationMapSection.tsx
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { LatLngExpression } from 'leaflet'
import type { Destination } from '@/components/user/homepage/LeafletMap'
import { Skeleton } from '@/components/ui/skeleton'

// ⛔ Jangan gunakan .then(mod => mod.default)
const LeafletMap = dynamic(() => import('@/components/user/homepage/LeafletMap'), {
  ssr: false,
})

export default function ExplorationMapSection() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch('/api/user/destination/route')
        const data = await res.json()
        setDestinations(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDestinations()

  }, [])

  const defaultCenter: LatLngExpression = [-7.3251716, 109.2185825]
  const defaultZoom = 14

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Skeleton className="h-10 w-10" />
        <span className="ml-2 text-sm text-gray-500">Memuat data destinasi…</span>
      </div>
    )
  }

  return (
    // <div className="w-full flex justify-center mb-8">
    //   <div className="w-[80%] h-[500px]">
    //     <LeafletMap
    //       destinations={destinations}
    //       center={defaultCenter}
    //       zoom={defaultZoom}
    //     />
    //   </div>
    // </div>

    <section className="py-10 px-6 bg-cream">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-forest">
        Eksplorasi Peta Wisata
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-6xl h-[500px]">
          <LeafletMap
            destinations={destinations}
            center={defaultCenter}
            zoom={defaultZoom}
          />
        </div>
      </div>
    </section>

  )
}
