import Link from "next/link"
import { createClient } from "@/lib/supabase-server"

export const dynamic = "force-dynamic"

export default async function AdminRecipesPage() {
  const supabase = await createClient()

  const { data: recipes } = await supabase
    .from("recipes")
    .select("*")
    .order("name", { ascending: true })

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Receitas</h1>
          <p className="text-muted-foreground">
            Gerencie as receitas do herbário
          </p>
        </div>

        <Link
          href="/admin/receitas/new"
          className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          Nova receita
        </Link>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          Receitas cadastradas
        </h2>

        <div className="space-y-4">
          {recipes?.map((recipe) => (
            <div
              key={recipe.id}
              className="flex items-center justify-between rounded-xl border p-5"
            >
              <div>
                <h3 className="text-2xl font-semibold">
                  {recipe.name}
                </h3>

                <p className="text-muted-foreground">
                  {recipe.plant}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/receitas"
                  className="rounded-md border px-4 py-2 text-sm"
                >
                  Ver
                </Link>

                <Link
                  href={`/admin/receitas/${recipe.id}`}
                  className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                  Editar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}