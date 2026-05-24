import Image from "next/image"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function HortoPage() {
  const { data: horto } = await supabase
    .from("horto_page")
    .select("*")
    .eq("id", "main")
    .single()

  if (!horto) {
    return null
  }

  const images = [
    horto.image_1,
    horto.image_2,
    horto.image_3,
    horto.image_4,
  ].filter(Boolean)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          {horto.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          {horto.subtitle}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
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

      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          {[horto.paragraph_1, horto.paragraph_2, horto.paragraph_3]
            .filter(Boolean)
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Créditos</h2>

        <div className="bg-muted/50 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            {horto.credits_text}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Orientação</h3>
              <p className="text-muted-foreground">{horto.orientation}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Alunos Colaboradores</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
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