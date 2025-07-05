// src/components/skeleton/SkeletonPie.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonPie() {
  return (
    <div className="mt-8 p-4 border rounded-xl bg-white shadow-sm w-full max-w-2xl mx-auto">
      <div className="h-6 w-64 mb-4">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex justify-center">
        <Skeleton className="h-[300px] w-[300px] rounded-full" />
      </div>
    </div>
  );
}
