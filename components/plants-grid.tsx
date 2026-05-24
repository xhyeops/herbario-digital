"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Plant {
  id: string
  name: string
  scientific_name: string
  image_url: string
}

export function PlantsGrid({
  plants,
}: {
  plants: Plant[]
}) {
  const [search, setSearch] = useState("")

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const value = search.toLowerCase()

      return (
        plant.name.toLowerCase().includes(value) ||
        plant.scientific_name?.toLowerCase().includes(value)
      )
    })
  }, [plants, search])

  return (
    <>
      <div className="sticky top-[72px] z-20 mb-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-background/90 p-3 shadow-lg backdrop-blur-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar plantas..."
              className="h-12 rounded-xl border-0 bg-transparent pl-11 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      {filteredPlants.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <p className="text-lg font-medium">
            Nenhuma planta encontrada
          </p>

          <p className="mt-2 text-muted-foreground">
            Tente pesquisar por outro nome.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPlants.map((plant) => (
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
    </>
  )
}