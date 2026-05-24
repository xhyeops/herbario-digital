import { unstable_noStore as noStore } from "next/cache"
import { Leaf, Sparkles, BookOpen } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { PlantsGrid } from "@/components/plants-grid"

export const dynamic = "force-dynamic"
export const revalidate = 0

export default async function HomePage() {
  noStore()

  const { data: plants, error } = await supabase
    .from("plants")
    .select("id, name, scientific_name, image_url")
    .order("name", { ascending: true })

  if (error) {
    console.error(error)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_40%)] pointer-events-none" />

      <section className="relative">
        <div className="container mx-auto px-4 pt-10 pb-6">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                  Catálogo de plantas
                </h2>

                <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
                  Explore espécies medicinais cultivadas no Horto da Unifametro
                  com informações botânicas, usos tradicionais e aplicações
                  terapêuticas.
                </p>
              </div>

              <div className="text-sm text-muted-foreground bg-card border rounded-2xl px-5 py-4 shadow-sm">
                <span className="block text-2xl font-bold text-primary">
                  {plants?.length || 0}
                </span>
                espécies cadastradas
              </div>
            </div>

            <PlantsGrid plants={plants || []} />

            <div className="grid md:grid-cols-3 gap-4 mt-14">
              <div className="rounded-3xl border bg-card/70 backdrop-blur p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Espécies medicinais
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Informações detalhadas sobre plantas utilizadas na fitoterapia.
                </p>
              </div>

              <div className="rounded-3xl border bg-card/70 backdrop-blur p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Conteúdo educativo
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Aprenda sobre características botânicas e aplicações das espécies.
                </p>
              </div>

              <div className="rounded-3xl border bg-card/70 backdrop-blur p-6 shadow-sm">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  Receitas e usos
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conheça formas tradicionais de utilização das plantas medicinais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}