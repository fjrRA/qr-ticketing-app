'use client'

import { OperatingHour } from "@/types/operating-hours"
import FacilityList from "./FacilityList"

type Props = {
  category: string
  village: string
  schedule: OperatingHour[]
  facilities: {
    facility: {
      facility_name: string
      facility_icon: string | null
    }
  }[]
}

export default function SpotInfoGrid({ category, village, schedule, facilities }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Kategori */}
      <div>
        <h3 className="text-sm font-medium text-gray-500">Kategori</h3>
        <p className="text-base text-gray-800">{category}</p>
      </div>

      {/* Desa */}
      <div>
        <h3 className="text-sm font-medium text-gray-500">Desa</h3>
        <p className="text-base text-gray-800">{village}</p>
      </div>

      {/* Jam Operasional */}
      <div className="md:col-span-2">
        <h3 className="text-sm font-medium text-gray-500">Jam Operasional</h3>
        <ul className="text-sm text-gray-700 space-y-1 mt-1">
          {schedule.map((day) => (
            <li key={day.operating_id}>
              {day.operating_day}: {day.hours_open} – {day.hours_closed}
            </li>
          ))}
        </ul>
      </div>

      {/* Fasilitas */}
      <div className="md:col-span-2">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Fasilitas</h3>
        <FacilityList facilities={facilities} />
      </div>
    </div>
  )
}
