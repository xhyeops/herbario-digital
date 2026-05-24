import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { RecipeEditForm } from "./recipe-edit-form"

export const dynamic = "force-dynamic"

export default async function EditRecipePage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()

  const { data: recipe } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", params.id)
    .single()

  if (!recipe) {
    notFound()
  }

  return <RecipeEditForm recipe={recipe} />
}