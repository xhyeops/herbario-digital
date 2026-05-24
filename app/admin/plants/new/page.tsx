import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { PlantNewForm } from "./plant-new-form"

export default async function NewPlantPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return <PlantNewForm />
}