// src/components/user/destination/ReviewFromWrapper.tsx
import { useEffect, useState } from 'react';
import { auth } from '@lib/firebase';
import { onAuthStateChanged, User } from "firebase/auth";
import { toast } from '@/hooks/use-toast';
import { Star } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Review } from '@/types/review';

interface Props {
  spotId: string;
  allReviews: Review[];
  onReviewSubmit?: () => void;
}

export default function ReviewFormWrapper({ spotId, allReviews, onReviewSubmit }: Props) {
  const [firebaseUid, setFirebaseUid] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [eligible, setEligible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userReview, setUserReview] = useState<Review | null>(null);

  // ✅ Step 1: Dapatkan firebaseUid
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        setFirebaseUid(user.uid);

        // 🔍 Ambil user_id dari backend menggunakan firebase_uid
        const res = await fetch(`/api/user/by-firebase-uid?uid=${user.uid}`);
        const data = await res.json();
        console.log("🔍 Firebase UID:", user.uid);
        if (data.user_id) setUserId(data.user_id);
      } else {
        setFirebaseUid(null);
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Step 2: Cek eligibility dan prefill form jika pernah review
  useEffect(() => {
    const checkEligibility = async () => {
      if (!userId) return;

      const res = await fetch(`/api/user/review-eligible?spot_id=${spotId}&firebase_uid=${firebaseUid}`);
      const data = await res.json();
      setEligible(data.eligible);

      const foundReview = allReviews.find(r => r.user_id === userId);
      if (foundReview) {
        setUserReview(foundReview);
        setRating(foundReview.reviews_rating || 0);
        setComment(foundReview.reviews_desc || '');
      }
    };

    checkEligibility();
  }, [userId, spotId, allReviews, firebaseUid]);

  const handleSubmit = async () => {
    if (!rating || !firebaseUid) {
      toast({ title: 'Gagal', description: 'Beri rating dan login dulu', variant: 'destructive' });
      return;
    }

    if (!eligible && !userReview) {
      toast({
        title: 'Gagal',
        description: 'Kamu belum pernah mengunjungi tempat ini.',
        variant: 'destructive',
      });
      return;
    }

    console.log("👤 Check eligibility with:", {
      spotId,
      firebaseUid,
    });

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/user/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spot_id: spotId,
          firebase_uid: firebaseUid, // kirim sebagai firebase_uid
          rating,
          comment,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Gagal menyimpan review');

      toast({ title: 'Sukses', description: 'Review berhasil disimpan' });
      onReviewSubmit?.();
    } catch (error) {
      toast({
        title: 'Gagal',
        description: error instanceof Error ? error.message : 'Terjadi kesalahan yang tidak diketahui.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!firebaseUid || !userId) return null;

  return (
    <div className="space-y-4 mt-6 p-4 bg-gray-50 rounded-md border">
      <h3 className="text-lg font-semibold">
        {userReview ? 'Edit Ulasan Anda' : 'Beri Ulasan Anda'}
      </h3>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((val) => (
          <Star
            key={val}
            className={`w-6 h-6 cursor-pointer ${val <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
            onClick={() => setRating(val)}
          />
        ))}
      </div>

      <Textarea
        placeholder="Tulis komentar Anda..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Menyimpan...' : userReview ? 'Update Ulasan' : 'Kirim Ulasan'}
        </Button>
      </div>
    </div>
  );
}
