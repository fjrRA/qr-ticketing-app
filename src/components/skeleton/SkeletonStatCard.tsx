// src/components/skeleton/SkeletonStatCard.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonStatCard() {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm space-y-2">
      <Skeleton className="w-1/2 h-4" />
      <Skeleton className="w-3/4 h-6" />
    </div>
  )
}
