import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Droplet,
  Sun,
  Sprout,
  AlertTriangle,
  Leaf,
  Pill,
  ChefHat,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function PlantDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { data: plant, error } = await supabase
    .from("plants")
    .select("*")
    .eq("id", params.id)
    .single()

  if (error || !plant) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para plantas
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={plant.image_url || "/placeholder.svg"}
            alt={plant.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2">
            {plant.name}
          </h1>

          <p className="text-xl text-muted-foreground italic mb-4">
            {plant.scientific_name}
          </p>

          <Badge variant="secondary" className="mb-6">
            Família: {plant.family}
          </Badge>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Descrição
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {plant.description}
              </p>
            </div>

            {plant.origin && (
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Origem
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {plant.origin}
                </p>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold mb-2">
                Habitat
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {plant.habitat}
              </p>
            </div>
          </div>
        </div>
      </div>

      {plant.cultivation && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-5 w-5 text-accent" />
              Necessidades de Cultivo
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {plant.cultivation}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.characteristics && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-accent" />
              Características
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-3">
              {plant.characteristics.map(
                (char: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">
                      •
                    </span>

                    <span className="text-muted-foreground">
                      {char}
                    </span>
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      )}

      {plant.medicinal_use && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Pill className="h-5 w-5 text-accent" />
              Uso Medicinal
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {plant.medicinal_use}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.culinary_uses && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-accent" />
              Uso Culinário
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {plant.culinary_uses}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.parts_used && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Partes Utilizadas
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {plant.parts_used}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.how_to_use && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Modo de Usar
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {plant.how_to_use}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.uses && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Usos e Aplicações
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-3">
              {plant.uses.map(
                (use: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">
                      •
                    </span>

                    <span className="text-muted-foreground">
                      {use}
                    </span>
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      )}

      {plant.toxicity && (
        <Card className="mb-6 border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Possíveis Efeitos Tóxicos
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-orange-900/80 leading-relaxed whitespace-pre-line">
              {plant.toxicity}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.contraindications && (
        <Card className="mb-6 border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Contraindicações e Precauções
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-red-900/80 leading-relaxed whitespace-pre-line">
              {plant.contraindications}
            </p>
          </CardContent>
        </Card>
      )}

      {plant.care && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              Guia de Cuidados
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Sun className="h-6 w-6 text-accent" />
                </div>

                <h3 className="font-semibold mb-1">
                  Luz
                </h3>

                <p className="text-sm text-muted-foreground">
                  {plant.care.light}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Droplet className="h-6 w-6 text-accent" />
                </div>

                <h3 className="font-semibold mb-1">
                  Água
                </h3>

                <p className="text-sm text-muted-foreground">
                  {plant.care.water}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Sprout className="h-6 w-6 text-accent" />
                </div>

                <h3 className="font-semibold mb-1">
                  Solo
                </h3>

                <p className="text-sm text-muted-foreground">
                  {plant.care.soil}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {plant.plant_references &&
        plant.plant_references.length > 0 && (
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">
                Referências Bibliográficas
              </CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-2">
                {plant.plant_references.map(
                  (
                    reference: string,
                    index: number
                  ) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {index + 1}. {reference}
                    </li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
        )}
    </div>
  )
}