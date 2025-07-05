interface SpotMapProps {
  embedUrl: string;
}

export default function SpotMap({ embedUrl }: SpotMapProps) {
  return (
    <div className="mt-6 rounded-lg overflow-hidden shadow-md w-full h-[400px]">
      <iframe
        src={embedUrl}
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

