import { useEffect, useState } from "react"

export type Destination = {
  spot_id: string
  spot_name: string
  spot_address?: string | null
  spot_desc?: string | null
  spot_contact?: string | null
  spot_maps?: string | null
  spot_rating?: number | null
  spot_thumbnail?: string | null
  village_id?: string | null
  category_id?: string | null
}

type Village = {
  village_id: string
  village_name: string
}

type Category = {
  category_id: string
  category_name: string
}

export function useDestinationForm(editData: Destination | null) {
  const [form, setForm] = useState({
    spot_id: editData?.spot_id || '',
    spot_name: editData?.spot_name || '',
    spot_address: editData?.spot_address || '',
    spot_desc: editData?.spot_desc || '',
    spot_contact: editData?.spot_contact || '',
    spot_maps: editData?.spot_maps || '',
    spot_rating: editData?.spot_rating?.toString() || '',
    village_id: editData?.village_id || '',
    category_id: editData?.category_id || '',
    spot_thumbnail: null as File | null,
  })

  const [villages, setVillages] = useState<Village[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetch("/api/admin/village/route").then(res => res.json()).then(setVillages)
    fetch("/api/admin/category/route").then(res => res.json()).then(setCategories)
  }, [])

  return { form, setForm, villages, categories }
}
