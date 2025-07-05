export type Gallery = {
  gallery_id: string;
  spot_id: string; // pastikan tipe ini tidak nullable jika tidak dibutuhkan
  gallery_img: string; // pastikan gallery_img tidak nullable
  gallery_caption: string;
};
