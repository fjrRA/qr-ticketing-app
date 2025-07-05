// src/components/skeleton/SkeletonFormField.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonFormField() {
  return (
    <div className="space-y-1">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}
