import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  AlertTriangle,
  BookOpen,
  Droplet,
  Leaf,
  Pill,
  Sprout,
  Sun,
  MapPin,
  Globe2,
  FlaskConical,
} from "lucide-react"

import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen">
      <section className="border-b border-border/60 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para plantas
            </Button>
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-muted shadow-lg">
              <Image
                src={plant.image_url || "/placeholder.svg"}
                alt={plant.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-5">
              <Badge className="rounded-full px-3 py-1">
                Família: {plant.family}
              </Badge>

              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {plant.name}
                </h1>

                <p className="mt-2 text-xl italic text-muted-foreground">
                  {plant.scientific_name}
                </p>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {plant.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {plant.origin && (
                  <InfoMini icon={<Globe2 />} title="Origem" text={plant.origin} />
                )}

                {plant.habitat && (
                  <InfoMini icon={<MapPin />} title="Habitat" text={plant.habitat} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-6">
          {plant.cultivation && (
            <InfoCard
              icon={<Sprout />}
              title="Necessidades de Cultivo"
              text={plant.cultivation}
            />
          )}

          {plant.characteristics && plant.characteristics.length > 0 && (
            <ListCard
              icon={<Leaf />}
              title="Características"
              items={plant.characteristics}
            />
          )}

          {plant.medicinal_use && (
            <InfoCard
              icon={<Pill />}
              title="Uso Medicinal"
              text={plant.medicinal_use}
            />
          )}

          {plant.used_parts && (
            <InfoCard
              icon={<FlaskConical />}
              title="Partes Utilizadas"
              text={plant.used_parts}
            />
          )}

          {plant.how_to_use && (
            <InfoCard
              icon={<BookOpen />}
              title="Modo de Usar"
              text={plant.how_to_use}
            />
          )}

          {plant.uses && plant.uses.length > 0 && (
            <ListCard
              icon={<Leaf />}
              title="Usos e Aplicações"
              items={plant.uses}
            />
          )}

          {plant.toxicity && (
            <WarningCard
              title="Possíveis Efeitos Tóxicos"
              text={plant.toxicity}
              color="orange"
            />
          )}

          {plant.contraindications && (
            <WarningCard
              title="Contraindicações e Precauções"
              text={plant.contraindications}
              color="red"
            />
          )}

          {plant.care && (
            <section className="rounded-3xl border bg-card p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">Guia de Cuidados</h2>

              <div className="grid gap-5 md:grid-cols-3">
                <CareItem icon={<Sun />} title="Luz" text={plant.care.light} />
                <CareItem icon={<Droplet />} title="Água" text={plant.care.water} />
                <CareItem icon={<Sprout />} title="Solo" text={plant.care.soil} />
              </div>
            </section>
          )}

          {plant.plant_references && plant.plant_references.length > 0 && (
            <section className="rounded-3xl border bg-muted/40 p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold">
                Referências Bibliográficas
              </h2>

              <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {plant.plant_references.map((reference: string, index: number) => (
                  <li key={index}>
                    {index + 1}. {reference}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}

function InfoMini({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <span className="text-primary [&_svg]:h-4 [&_svg]:w-4">{icon}</span>
        {title}
      </div>

      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
          {icon}
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <p className="leading-relaxed text-muted-foreground whitespace-pre-line">
        {text}
      </p>
    </section>
  )
}

function ListCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
          {icon}
        </div>

        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-muted-foreground">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function WarningCard({
  title,
  text,
  color,
}: {
  title: string
  text: string
  color: "red" | "orange"
}) {
  const styles =
    color === "red"
      ? "border-red-300/70 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-200"
      : "border-orange-300/70 bg-orange-50 text-orange-900 dark:bg-orange-950/30 dark:text-orange-200"

  return (
    <section className={`rounded-3xl border p-6 shadow-sm ${styles}`}>
      <div className="mb-4 flex items-center gap-3 font-bold">
        <AlertTriangle className="h-5 w-5" />
        <h2 className="text-xl">{title}</h2>
      </div>

      <p className="leading-relaxed whitespace-pre-line">{text}</p>
    </section>
  )
}

function CareItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border bg-background/60 p-5 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary [&_svg]:h-6 [&_svg]:w-6">
        {icon}
      </div>

      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </div>
  )
}