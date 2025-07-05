interface OperatingHour {
  operating_day: string;
  hours_open: string;
  hours_closed: string;
}

export default function OperatingHoursList({ hours }: { hours: OperatingHour[] }) {
  if (hours.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Jam Operasional</h2>
      <ul className="space-y-1">
        {hours.map((item, idx) => (
          <li key={idx} className="text-sm text-gray-700">
            {item.operating_day}: {item.hours_open} - {item.hours_closed}
          </li>
        ))}
      </ul>
    </section>
  );
}
