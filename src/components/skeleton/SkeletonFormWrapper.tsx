// src/components/skeleton/SkeletonFormWrapper.tsx
import { Skeleton } from "@/components/ui/skeleton"
import SkeletonFormField from "./SkeletonFormField"

export default function SkeletonFormWrapper() {
  return (
    <div className="p-4 space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonFormField key={i} />
      ))}
      <SkeletonFormField />
      <div className="flex justify-end">
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}
