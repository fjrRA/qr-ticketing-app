// src/modules/review/controller/updateSpotRating.ts
import prisma from '@lib/prisma';

export async function updateSpotRating(spotId: string) {
  const reviews = await prisma.reviews.findMany({
    where: { spot_id: spotId, reviews_rating: { not: null } },
    select: { reviews_rating: true },
  });

  if (!reviews || reviews.length === 0) {
    await prisma.spot_tourism.update({
      where: { spot_id: spotId },
      data: { spot_rating: 0 },
    });
    return;
  }

  const sum = reviews.reduce(
    (total: number, r: { reviews_rating: number | null }) =>
      total + (r.reviews_rating ?? 0),
    0
  );
  const avg = sum / reviews.length;

  await prisma.spot_tourism.update({
    where: { spot_id: spotId },
    data: { spot_rating: parseFloat(avg.toFixed(2)) },
  });
}
