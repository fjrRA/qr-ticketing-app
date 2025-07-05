// src/components/user/destination/SpotHeader.tsx
import Image from "next/image"

type SpotHeaderProps = {
  name: string
  desc?: string | null
  address?: string | null
  rating?: number
  totalReviews?: number
  category?: string
  village?: string
  thumbnail?: string | null // ⬅ sudah benar
}

export default function SpotHeader({
  name,
  desc,
  address,
  rating,
  totalReviews,
  category,
  village,
  thumbnail, // ✅ tambahkan destructure ini!
}: SpotHeaderProps) {
  return (
    <section className="bg-white rounded-xl shadow p-6 mb-6 flex flex-col md:flex-row gap-6">
      {/* ✅ Tampilkan thumbnail jika ada */}
      {thumbnail && (
        <div className="w-full md:w-1/3">
          <Image
            src={thumbnail?.startsWith("/uploads") ? thumbnail : `/uploads/destination/${thumbnail}`}
            alt={`Foto ${name}`}
            className="rounded-lg object-cover w-full h-48 md:h-60 shadow-md border"
            priority
            width={200}
            height={200}
          />
        </div>
      )}

      {/* Informasi utama */}
      <div className="flex-1 space-y-2 my-auto">
        <h1 className="text-2xl font-bold text-forest">{name}</h1>
        <p className="text-muted-foreground text-sm">
          {village}
          {village && category && " • "}
          {category}
        </p>
        {desc && <p className="text-sm text-gray-600">{desc}</p>}
        {address && <p className="text-sm text-gray-500">📍{address}</p>}
        {rating !== undefined && (
          <p className="text-sm text-yellow-500">
            ⭐ {rating.toFixed(1)}
            {totalReviews !== undefined && ` (${totalReviews} ulasan)`}
          </p>
        )}
      </div>
    </section>
  )
}
