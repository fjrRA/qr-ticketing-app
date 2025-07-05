// src/components/skeleton/SkeletonDestinationCard.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDestinationCard() {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-md" />
        <div className="flex-1 space-y-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-16 rounded" />
        <Skeleton className="h-8 w-16 rounded" />
      </div>
    </div>
  )
}
