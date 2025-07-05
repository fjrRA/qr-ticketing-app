import { Gallery } from "@/types/gallery";
import Image from "next/image";

interface SpotGalleryProps {
  galleries: Gallery[];
}

export default function SpotGallery({ galleries }: SpotGalleryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-forest mb-3">Galeri Wisata</h3>
      <div className="grid grid-cols-2 gap-4">
        {galleries.map((item) => (
          <div key={item.gallery_id} className="bg-white p-4 rounded shadow">
            <Image
              src={item.gallery_img || "/placeholder.jpg"}
              alt={item.gallery_caption || "Gambar wisata"}
              width={500}
              height={300}
              className="w-full h-40 object-cover mb-2"
            />
            <p className="text-sm text-gray-500">{item.gallery_caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
