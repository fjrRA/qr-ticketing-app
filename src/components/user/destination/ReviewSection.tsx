// src/components/user/destination/ReviewSection.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import ReviewList from './ReviewList';
import ReviewFormWrapper from './ReviewFormWrapper';
import { Review } from '@/types/review';

export default function ReviewSection({ spotId }: { spotId: string }) {
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
    <div className="space-y-6 mt-6">
      <ReviewFormWrapper
        spotId={spotId}
        allReviews={reviews}
        onReviewSubmit={fetchReviews}
      />
      <ReviewList reviews={reviews} />
    </div>
  );
}
