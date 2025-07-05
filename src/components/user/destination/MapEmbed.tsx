interface MapEmbedProps {
  mapsUrl: string;
}

export default function MapEmbed({ mapsUrl }: MapEmbedProps) {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mt-6">
      <iframe
        src={mapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
