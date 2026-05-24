import { Leaf, Sparkles, BookOpen } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { PlantsGrid } from "@/components/plants-grid"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { data: plants, error } = await supabase
    .from("plants")
    .select("id, name, scientific_name, image_url")
    .order("name", { ascending: true })

  if (error) console.error(error)

  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(92,170,103,0.18),transparent_38%)]" />

        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              Herbário Digital da Unifametro
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Conheça as plantas medicinais do nosso horto
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Explore espécies, usos tradicionais, características botânicas,
              cuidados de cultivo e informações educativas reunidas em um só lugar.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <InfoCard icon={<Leaf className="h-5 w-5" />} text="Espécies medicinais" />
              <InfoCard icon={<BookOpen className="h-5 w-5" />} text="Informações educativas" />
              <InfoCard icon={<Sparkles className="h-5 w-5" />} text="Receitas e usos" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <PlantsGrid plants={plants || []} />
      </section>
    </div>
  )
}

function InfoCard({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="rounded-2xl border bg-card/80 p-4 text-center shadow-sm backdrop-blur">
      <div className="mx-auto mb-2 flex justify-center text-primary">
        {icon}
      </div>

      <p className="text-sm font-medium">{text}</p>
    </div>
  )
}