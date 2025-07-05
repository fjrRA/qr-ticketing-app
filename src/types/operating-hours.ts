export type OperatingHour = {
  operating_id: string;
  spot_id: string | null;
  operating_day: string;
  hours_open: string;  // Menggunakan string ISO untuk jam
  hours_closed: string;
};