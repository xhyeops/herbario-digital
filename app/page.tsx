import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const { data: plants, error } = await supabase
    .from("plants")
    .select("id, name, scientific_name, image_url")
    .order("name", { ascending: true })

  if (error) {
    console.error(error)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Explore nossa coleção de plantas medicinais com informações detalhadas sobre cada espécie
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-primary via-accent to-primary">
          <div className="bg-background rounded-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
              <Input
                type="search"
                placeholder="Buscar plantas..."
                className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {!plants || plants.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Nenhuma planta cadastrada ainda.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <Link key={plant.id} href={`/planta/${plant.id}`}>
              <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer bg-card border-2 border-primary/20 hover:border-primary/50 rounded-xl overflow-hidden p-0">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={plant.image_url || "/placeholder.svg"}
                    alt={plant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-2 space-y-0.5">
                  <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors duration-200">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-muted-foreground italic leading-tight line-clamp-1">
                    {plant.scientific_name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}