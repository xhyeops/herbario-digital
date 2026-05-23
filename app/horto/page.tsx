import Image from "next/image"

export default function HortoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sobre o Horto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Horto de Plantas Medicinais da Unifametro
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/167584586_805588143391897_7458908118620706225_n-Atso7MC3SxDelpv89YGPonkGKCS2kU.jpg"
            alt="Vista geral do Horto de Plantas Medicinais da Unifametro"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/167369367_218585850025377_5950853461175079924_n-AdPvL6iPH2e6ao82VBo8fxPjhfGA2F.jpg"
            alt="Área de descanso e canteiros do horto"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/167170204_160234285972508_3555634189989263053_n-O9pyDnP9jYYgxBTGrdHilhEUnHH7ug.jpg"
            alt="Canteiros elevados com plantas medicinais"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/167899458_597197931238801_3444450206735083825_n-rzheuSU5eQK6QHo4GxE9zD3L0gvWsH.jpg"
            alt="Vista lateral dos canteiros do horto"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            O Horto de Plantas Medicinais da Unifametro, localizado na unidade Carneiro da Cunha, foi criado no ano de
            2014 por iniciativa do curso de Farmácia, com o objetivo central de cultivar plantas com propriedades
            medicinais, as quais são utilizadas nas atividades de aulas práticas de disciplinas afins, projetos de
            iniciação científica e pesquisas de trabalhos de conclusão de curso, bem como na produção de fitoterápicos
            que são manipulados na Farmácia Escola da Unifametro.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Os alunos do curso de Farmácia têm a oportunidade de conhecer as plantas que lá são cultivadas, aprendendo a
            reconhecer e identificar cada espécie, suas propriedades e aplicações farmacêuticas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Além disso, o Horto da Unifametro também está integrado ao Núcleo de Fitoterápicos da Coordenadoria de
            Assistência Farmacêutica da Secretaria de Saúde do Estado do Ceará.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Créditos</h2>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            As informações deste site e as referências das plantas foram desenvolvidas pelos alunos do curso de Farmácia
            da Unifametro sob orientação da professora Julia Aparecida.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Orientação</h3>
              <p className="text-muted-foreground">Professora Julia Aparecida</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Alunos Colaboradores</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                <li>André Araújo</li>
                <li>Amanda Irismar</li>
                <li>Maria Gabryely Nunes</li>
                <li>Allana Freire</li>
                <li>Ana Georgia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
