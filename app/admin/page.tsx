import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <p className="text-muted-foreground">Gerencie o herbário digital</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/admin/plants">
          <div className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer">
            <h2 className="font-semibold mb-2">Plantas</h2>
            <p className="text-sm text-muted-foreground">
              Gerenciar espécies cadastradas
            </p>
          </div>
        </Link>

        <Link href="/admin/receitas">
          <div className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer">
            <h2 className="font-semibold mb-2">Receitas</h2>
            <p className="text-sm text-muted-foreground">
              Gerenciar receitas medicinais
            </p>
          </div>
        </Link>

        <Link href="/admin/dashboard">
          <div className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer">
            <h2 className="font-semibold mb-2">Analytics</h2>
            <p className="text-sm text-muted-foreground">
              Visualizar acessos do site
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}