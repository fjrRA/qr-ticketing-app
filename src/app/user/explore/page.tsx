// src/app/user/explore/page.tsx
'use client'

import { useEffect, useState } from 'react'
import DestinationCard from '@/components/user/explore/DestinationCard'

type Spot = {
  spot_id: string
  spot_name: string
  spot_thumbnail: string
  category: {
    category_name: string
  }
}

export default function ExplorePage() {
  const [spots, setSpots] = useState<Spot[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    fetch('/api/user/destination/route')
      .then(res => res.json())
      .then(data => setSpots(data))
      .finally(() => setLoading(false))
  }, [])

  const filteredSpots = spots.filter(spot =>
    spot.spot_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredSpots.length / itemsPerPage)
  const paginatedSpots = filteredSpots.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Eksplorasi Wisata</h1>

      {/* 🔍 Input Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari wisata..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1)
          }}
          className="w-full p-2 border rounded"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : paginatedSpots.length === 0 ? (
        <p className="text-gray-500">Tidak ada destinasi yang cocok.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedSpots.map((spot) => (
              <DestinationCard
                key={spot.spot_id}
                spot_id={spot.spot_id}
                spot_name={spot.spot_name}
                spot_thumbnail={spot.spot_thumbnail}
                category={spot.category}
              />
            ))}
          </div>

          {/* 🔁 Pagination */}
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
