'use client'

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

import { Trash2 } from "lucide-react"

type Props = {
  userId: string
  disabled?: boolean
  onDelete: (userId: string) => void
}

export default function UserDeleteDialog({ userId, onDelete, disabled }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          disabled={disabled}
          className="text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded disabled:opacity-50"
          title={disabled ? "Tidak bisa menghapus admin" : "Hapus pengguna"}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Yakin ingin menghapus pengguna ini?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => onDelete(userId)}>
            Ya, Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
