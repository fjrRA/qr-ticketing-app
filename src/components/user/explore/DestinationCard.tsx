'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {
  spot_id: string
  spot_name: string
  spot_thumbnail: string | null
  category?: {
    category_name: string
  }
}

export default function DestinationCard({ spot_id, spot_name, spot_thumbnail, category }: Props) {
  const resolvedThumbnail =
    spot_thumbnail && spot_thumbnail.startsWith('/uploads')
      ? spot_thumbnail
      : `/uploads/destination/${spot_thumbnail ?? 'default-image.jpg'}`

  return (
    <Link href={`/user/destination/${spot_id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
        <Image
          src={resolvedThumbnail}
          alt={spot_name}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{spot_name}</h3>
          {category && (
            <p className="text-sm text-gray-500 mt-1">Kategori: {category.category_name}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
