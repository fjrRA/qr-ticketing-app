import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { Category } from "@/types/category"


type Props = {
  item: Category
  onEdit: () => void
  onDelete: () => void
}

export default function CategoryCard({ item, onEdit, onDelete }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        {item.category_icon ? (
          <Image
            src={item.category_icon}
            alt="icon"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200" />
        )}
        <div>
          <p className="text-sm text-gray-500">{item.category_id}</p>
          <p className="text-lg font-semibold">{item.category_name}</p>
        </div>
      </div>
      {item.category_desc && (
        <p className="text-sm text-gray-600">{item.category_desc}</p>
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
