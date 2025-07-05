// src/components/user/destination/ReviewList.tsx
interface Review {
  reviews_rating: number;
  reviews_desc: string;
  user?: {
    name: string;
  };
}

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null;

  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Ulasan Pengunjung</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded shadow">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold">{review.user?.name ?? "Pengguna"}</p>
              <span className="text-yellow-500">⭐ {review.reviews_rating}/5</span>
            </div>
            <p className="text-sm text-gray-700">{review.reviews_desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
