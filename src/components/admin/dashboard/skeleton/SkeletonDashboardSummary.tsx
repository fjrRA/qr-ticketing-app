// src/components/admin/dashboard/skeleton/SkeletonDashboardSummary.tsx
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDashboardSummary() {
  return (
    <div className="space-y-6 mt-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="p-4 border rounded-lg shadow bg-white space-y-2">
          <Skeleton className="h-6 w-48" /> {/* judul */}
          <div className="space-y-1">
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-52" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
      ))}
    </div>
  )
}
