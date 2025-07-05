import { Prisma } from "@prisma/client";

export type DestinationData = Prisma.spot_tourismGetPayload<{
  include: {
    facility_tourisms: {
      include: {
        facility: true;
      };
    };
    galleries: true;
    operating_hours: true;
    reviews: true;
    tickets: true;
    category: true;
    village: true; // ⬅ Tambahkan ini!
  };
}>;
