import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Leaf,
  MapPin,
  Users,
} from "lucide-react"

import { supabase } from "@/lib/supabase"
import { HortoGallery } from "@/components/horto-gallery"

export const dynamic = "force-dynamic"

export default async function SobrePage() {
  const { data: horto, error } = await supabase
    .from("horto_page")
    .select("*")
    .eq("id", "main")
    .single()

  if (error) console.error(error)

  if (!horto) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Página não configurada</h1>
        <p className="mt-2 text-muted-foreground">
          Cadastre o conteúdo da página Sobre o Horto no painel administrativo.
        </p>
      </div>
    )
  }

  const images = [
    horto.image_1,
    horto.image_2,
    horto.image_3,
    horto.image_4,
  ].filter(Boolean)

  const paragraphs = [
    horto.paragraph_1,
    horto.paragraph_2,
    horto.paragraph_3,
  ].filter(Boolean)

  return (
    <div className="relative overflow-hidden">
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(92,170,103,0.18),transparent_38%)]" />

        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              Horto de Plantas Medicinais
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {horto.title || "Sobre o Horto"}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {horto.subtitle || "Horto de Plantas Medicinais da Unifametro"}
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10">
        {images.length > 0 && <HortoGallery images={images} />}

        <section className="mb-10 rounded-3xl border bg-card p-6 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-bold">
                Um espaço de aprendizado vivo
              </h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                O horto reúne espécies medicinais utilizadas em atividades
                acadêmicas, pesquisas científicas e práticas relacionadas ao uso
                racional de plantas com potencial terapêutico.
              </p>
            </div>

            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-3">
          <InfoCard
            icon={<MapPin />}
            title="Localização"
            text="Unidade Carneiro da Cunha"
          />

          <InfoCard
            icon={<BookOpen />}
            title="Ensino e pesquisa"
            text="Aulas práticas, iniciação científica e trabalhos acadêmicos"
          />

          <InfoCard
            icon={<HeartHandshake />}
            title="Integração"
            text="Projetos ligados à fitoterapia e assistência farmacêutica"
          />
        </section>

        <section className="rounded-3xl border bg-muted/40 p-6 shadow-sm md:p-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>

              <h2 className="text-3xl font-bold">Créditos</h2>

              <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {horto.credits_text}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-2xl border bg-card p-5">
                <h3 className="mb-2 font-semibold">Orientação</h3>
                <p className="text-muted-foreground">{horto.orientation}</p>
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <div className="mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Alunos Colaboradores</h3>
                </div>

                <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                  {(horto.students || []).map((student: string) => (
                    <li
                      key={student}
                      className="rounded-full bg-muted px-4 py-2 text-sm"
                    >
                      {student}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    <div className="rounded-3xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>

      <h3 className="mb-2 text-lg font-bold">{title}</h3>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  )
}