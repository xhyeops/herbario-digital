import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { PlantEditForm } from "./plant-edit-form"

export default async function EditPlantPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const { data: plant, error } = await supabase
    .from("plants")
    .select("*")
    .eq("id", params.id)
    .single()

  if (error || !plant) {
    redirect("/admin/plants")
  }

  return <PlantEditForm plant={plant} />
}