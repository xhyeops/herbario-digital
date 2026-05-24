import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Sparkles, BookOpen } from "lucide-react"
import { supabase } from "@/lib/supabase"

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

            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative rounded-2xl border border-primary/25 bg-card p-2 shadow-sm">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                <Input
                  type="search"
                  placeholder="Buscar plantas..."
                  className="h-12 border-0 bg-transparent pl-11 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <InfoCard icon={<Leaf className="h-5 w-5" />} text="Espécies medicinais" />
              <InfoCard icon={<BookOpen className="h-5 w-5" />} text="Informações educativas" />
              <InfoCard icon={<Sparkles className="h-5 w-5" />} text="Receitas e usos" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Catálogo de plantas</h2>
            <p className="text-muted-foreground">
              Selecione uma espécie para visualizar detalhes completos.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            {plants?.length || 0} espécies cadastradas
          </p>
        </div>

        {!plants || plants.length === 0 ? (
          <p className="text-center text-muted-foreground">
            Nenhuma planta cadastrada ainda.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {plants.map((plant) => (
              <Link key={plant.id} href={`/planta/${plant.id}`}>
                <Card className="group h-full overflow-hidden rounded-2xl border bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    <Image
                      src={plant.image_url || "/placeholder.svg"}
                      alt={plant.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-70" />

                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                        Planta medicinal
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary">
                      {plant.name}
                    </h3>

                    <p className="mt-1 line-clamp-1 text-sm italic text-muted-foreground">
                      {plant.scientific_name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
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