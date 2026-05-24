import Image from "next/image"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function SobrePage() {
  const { data: horto, error } = await supabase
    .from("horto_page")
    .select("*")
    .eq("id", "main")
    .single()

  if (error) {
    console.error(error)
  }

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

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          {horto.title || "Sobre o Horto"}
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {horto.subtitle || "Horto de Plantas Medicinais da Unifametro"}
        </p>
      </header>

      {images.length > 0 && (
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg border bg-muted"
            >
              <Image
                src={image}
                alt={`Imagem do Horto ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      )}

      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          {[horto.paragraph_1, horto.paragraph_2, horto.paragraph_3]
            .filter(Boolean)
            .map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Créditos
        </h2>

        <div className="mx-auto max-w-3xl rounded-lg bg-muted/50 p-6 md:p-8">
          <p className="mb-6 text-center leading-relaxed text-muted-foreground">
            {horto.credits_text}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Orientação
              </h3>

              <p className="text-muted-foreground">
                {horto.orientation}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Alunos Colaboradores
              </h3>

              <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                {(horto.students || []).map((student: string) => (
                  <li key={student}>{student}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}