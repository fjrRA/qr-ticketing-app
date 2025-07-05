import prisma from "@lib/prisma";
import { DestinationData } from "@/types/destination"; // pastikan ini sesuai struktur spot_tourism & relasinya

export const fetchDestinationDetail = async (
  slug: string
): Promise<DestinationData | null> => {
  return await prisma.spot_tourism.findUnique({
    where: { spot_id: slug },
    include: {
      facility_tourisms: {
        include: {
          facility: true,
        },
      },
      galleries: true,
      operating_hours: true,
      reviews: {
        include: { user: true },
      },
      tickets: true,
      category: true,
      village: true, // ⬅ Tambahkan ini!
    },
  });
};

