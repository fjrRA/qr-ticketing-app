// src/components/skeleton/SkeletonChart.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonChart() {
  return (
    <div className="mt-8 p-4 border rounded-xl bg-white shadow-sm w-full overflow-x-auto">
      <div className="h-6 w-64 mb-4">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="min-w-[500px]">
        <Skeleton className="h-[300px] w-full" />
      </div>
    </div>
  );
}
