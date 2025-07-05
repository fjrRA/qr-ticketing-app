// src/components/user/homepage/TodayScheduleSection.tsx
'use client'

import { useEffect, useState } from 'react'

type Schedule = {
  spot: {
    spot_id: string;
    spot_name: string;
  };
  operating_day: string;
  hours_open: string;
  hours_closed: string;
}

// Fungsi untuk format waktu dari DateTime menjadi HH:MM
function formatTime(timeString: string): string {
  const date = new Date(timeString)
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

export default function TodayScheduleSection() {
  const [schedule, setSchedule] = useState<Schedule[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch('/api/user/today-schedule')
        if (!res.ok) throw new Error('Failed to fetch schedule')
        const data = await res.json()
        setSchedule(data)
      } catch (error) {
        console.error('Error fetching today schedule:', error)
        setSchedule([])
      } finally {
        setLoading(false)
      }
    }
    fetchSchedule()
  }, [])

  if (loading) {
    return <p className="text-center py-10">Loading schedule...</p>
  }

  return (
    <section className="py-10 px-6 bg-cream">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-forest">Jadwal Hari Ini</h2>
      {schedule.length === 0 ? (
        <p className="text-center text-muted-foreground">Tidak ada jadwal untuk hari ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {schedule.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow p-4 overflow-hidden hover:shadow-lg transition">
              <a
                href={`/user/destination/${item.spot.spot_id}`}
                className="font-semibold text-lg text-forest hover:underline"
              >
                {item.spot.spot_name}
              </a>
              <p className="text-sm text-gray-600">Operasi hari ini: {item.operating_day}</p>
              <p className="text-sm text-gray-600">
                Jam: {formatTime(item.hours_open)} - {formatTime(item.hours_closed)}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
