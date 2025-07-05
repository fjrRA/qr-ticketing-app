// src/components/user/homepage/LeafletMap.tsx
'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import Image from 'next/image'

export interface Destination {
  spot_id: string
  spot_name: string
  latitude: number | null
  longitude: number | null
  spot_thumbnail?: string | null
  tickets?: {
    ticket_price: number
  }[]
}

interface Props {
  destinations: Destination[]
  center: LatLngExpression
  zoom: number
}

export default function LeafletMap({ destinations, center, zoom }: Props) {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {destinations.map((dest) => {
        const lat = Number(dest.latitude)
        const lng = Number(dest.longitude)

        // Log debug
        console.log('📍 Marker:', {
          name: dest.spot_name,
          lat,
          lng,
          hasTicket: dest.tickets?.length
        })

        // Validasi koordinat sebelum render marker
        if (isNaN(lat) || isNaN(lng)) return null

        return (
          <Marker
            key={dest.spot_id}
            position={[lat, lng]}
          >
            <Popup>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{dest.spot_name}</h3>
                {dest.spot_thumbnail && (
                  <div className="relative w-32 h-20 mt-2 rounded overflow-hidden">
                    <Image
                      src={dest.spot_thumbnail}
                      alt={dest.spot_name}
                      className="object-cover"
                      width={128} // 32 x 4 (tailwind = 8px per unit)
                      height={80} // 20 x 4
                    />
                  </div>
                )}
                {dest.tickets?.[0] && (
                  <p className="text-sm text-green-600 mt-2">
                    Mulai dari Rp{Number(dest.tickets[0].ticket_price).toLocaleString()}
                  </p>
                )}
                <a
                  href={`user/destination/${dest.spot_id}`}
                  className="text-blue-600 mt-2 underline text-sm"
                >
                  Lihat Detail
                </a>
              </div>
            </Popup>
          </Marker>
        )
      })}

    </MapContainer>

  )
}
