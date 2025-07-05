import Image from "next/image";

interface Gallery {
  gallery_id: string;
  spot_id: string;
  gallery_img: string;
  gallery_caption: string;
}

export default function GalleryList({ items }: { items: Gallery[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">Galeri Wisata</h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.gallery_id} className="bg-white p-4 rounded shadow">
            <Image
              src={item.gallery_img}
              alt={item.gallery_caption}
              width={400} // Tentukan lebar yang sesuai
              height={200} // Tentukan tinggi yang sesuai
              className="w-full h-40 object-cover mb-2"
            />
            <p className="text-sm text-gray-500">{item.gallery_caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
