import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

type Props = {
  item: {
    spot_id: string
    spot_name: string
    spot_address: string | null
    spot_thumbnail: string | null
  }
  onEdit: () => void
  onDelete: () => void
}

export default function DestinationCard({ item, onEdit, onDelete }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        {item.spot_thumbnail && item.spot_thumbnail.startsWith('/')
          ? (
            <Image
              src={item.spot_thumbnail}
              alt="Thumbnail"
              width={40}
              height={40}
              className="rounded-md object-cover w-10 h-10"
            />
          ) : (
            <div className="w-10 h-10 rounded-md bg-gray-200" />
          )}
        <div>
          <p className="text-sm text-gray-500">{item.spot_id}</p>
          <p className="text-lg font-semibold">{item.spot_name}</p>
        </div>
      </div>
      {item.spot_address && (
        <p className="text-sm text-gray-600">{item.spot_address}</p>
      )}
      <div className="flex gap-2 mt-2">
        <Button size="sm" variant="outline" onClick={onEdit}>
          <Pencil className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
