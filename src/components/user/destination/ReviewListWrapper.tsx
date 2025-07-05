// src/components/user/destination/ReviewListWrapper.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import ReviewList from './ReviewList';
import { Review } from '@/types/review';

export default function ReviewListWrapper({ spotId }: { spotId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = useCallback(async () => {
    const res = await fetch(`/api/user/reviews?spot_id=${spotId}`);
    const data = await res.json();
    setReviews(data);
  }, [spotId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Ulasan Pengunjung</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
}
