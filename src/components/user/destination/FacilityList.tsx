// src/components/user/destination/FacilityList.tsx
import Image from "next/image";

interface FacilityListProps {
  facilities: {
    facility: {
      facility_name: string;
      facility_icon: string | null;
    };
  }[];
}

export default function FacilityList({ facilities }: FacilityListProps) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-1">Fasilitas</h2>
      <div className="flex flex-wrap gap-4">
        {facilities.map((item, index) => {
          const iconUrl = item.facility.facility_icon
            ? `/uploads/facility/${item.facility.facility_icon}`
            : "/no-icon.png"; // fallback

          return (
            <div key={index} className="flex items-center gap-2 p-2 rounded border shadow-sm bg-white">
              <Image
                src={iconUrl}
                alt={item.facility.facility_name}
                width={24}
                height={24}
                className="object-cover w-6 h-6"
              />
              <span className="text-sm text-gray-700">{item.facility.facility_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
