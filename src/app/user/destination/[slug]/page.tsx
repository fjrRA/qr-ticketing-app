// src/app/user/destination/[slug]/page.tsx
import { fetchDestinationDetail } from "@/modules/destination/controller/fetchDetail";
import { DestinationData } from "@/types/destination";  // Import tipe data destinasi

import { notFound } from "next/navigation";

import SpotHeader from "@/components/user/destination/SpotHeader";
import SpotInfoGrid from "@/components/user/destination/SpotInfoGrid";
import SpotMap from "@/components/user/destination/SpotMap";
import SpotGallery from "@/components/user/destination/SpotGallery";
import SpotTicketSection from "@/components/user/destination/SpotTicketSection";
import ReviewSection from '@/components/user/destination/ReviewSection';

import { Facility } from "@/types/facility";
import { Gallery } from "@/types/gallery";
import { OperatingHour } from "@/types/operating-hours";
import { Ticket } from "@/types/ticket";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function DetailDestinationPage({ params }: { params: { slug: string } }) {
  const data: DestinationData | null = await fetchDestinationDetail(params.slug);
  if (!data) return notFound();

  const filteredFacilities = data.facility_tourisms
    .filter((f: { facility: Facility | null }) => f.facility !== null)
    .map(f => ({
      facility: {
        facility_name: f.facility?.facility_name ?? '',
        facility_icon: f.facility?.facility_icon ?? null
      }
    }));

  const galleries: Gallery[] = data.galleries.map(gallery => ({
    gallery_id: gallery.gallery_id,
    spot_id: gallery.spot_id ?? '',
    gallery_img: gallery.gallery_img ?? '',
    gallery_caption: gallery.gallery_caption ?? 'No caption',
  }));

  const operatingHours: OperatingHour[] = data.operating_hours.map(operating => ({
    operating_id: operating.operating_id,
    spot_id: operating.spot_id,
    operating_day: operating.operating_day,
    hours_open: new Date(operating.hours_open).toLocaleTimeString(),
    hours_closed: new Date(operating.hours_closed).toLocaleTimeString(),
  }));


  const tickets: Ticket[] = data.tickets.map(ticket => ({
    ticket_id: ticket.ticket_id,
    spot_id: ticket.spot_id ?? '',
    ticket_name: ticket.ticket_name ?? 'No ticket name',
    ticket_price: parseFloat(ticket.ticket_price.toString()),
    ticket_desc: ticket.ticket_desc ?? 'No description',
    ticket_stock: ticket.ticket_stock ?? 0,
    code: ticket.code,
    url_qr: ticket.url_qr,
  }));


  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Spot Header */}
      <SpotHeader
        name={data.spot_name}
        desc={data.spot_desc}
        address={data.spot_address}
        rating={Number(data.spot_rating ?? 0)}
        totalReviews={data.reviews?.length ?? 0}
        category={data.category?.category_name}
        village={data.village?.village_name}
        thumbnail={data.spot_thumbnail} // ✅ ini WAJIB dioper!
      />

      {/* Konten utama: kiri isi, kanan tiket */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8">
        {/* KONTEN UTAMA */}
        <section className="space-y-8">
          {galleries.length > 0 && <SpotGallery galleries={galleries} />}

          {data.category && data.village && (
            <SpotInfoGrid
              category={data.category.category_name}
              village={`${data.village.village_name}, ${data.village.village_city}`}
              schedule={operatingHours}
              facilities={filteredFacilities}
            />
          )}

          {data.spot_maps && <SpotMap embedUrl={data.spot_maps} />}

          {/* {reviews.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Ulasan Pengunjung</h2>
              <ReviewListWrapper spotId={data.spot_id} />
            </div>
          )} */}

          <ReviewSection spotId={data.spot_id} />
        </section>

        {/* SIDEBAR TIKET */}
        {tickets.length > 0 && <SpotTicketSection tickets={tickets} />}
      </div>
    </main>
  );
}