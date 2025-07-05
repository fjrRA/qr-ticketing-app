// src/components/skeleton/SkeletonTableRow.tsx
import { Skeleton } from "@/components/ui/skeleton"

interface SkeletonTableRowProps {
  columns: number // jumlah kolom
}

export default function SkeletonTableRow({ columns }: SkeletonTableRowProps) {
  return (
    <tr>
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-2">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  )
}
