import { ReviewTable } from "@/components/admin/reviews/ReviewTable"

export default function ReviewPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ulasan Pengguna</h1>
      <ReviewTable />
    </div>
  )
}
