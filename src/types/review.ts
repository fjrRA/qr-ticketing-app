export type Review = {
  reviews_id: string;
  spot_id: string | null;
  user_id: string | null;
  reviews_rating: number;
  reviews_desc: string;
  reviews_created_at: string;
  user?: {
    name: string;
  };
};
