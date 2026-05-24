import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { HortoEditForm } from "./horto-edit-form"

export const dynamic = "force-dynamic"

export default async function AdminHortoPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const { data: horto } = await supabase
    .from("horto_page")
    .select("*")
    .eq("id", "main")
    .single()

  return <HortoEditForm horto={horto} />
}