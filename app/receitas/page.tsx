import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Clock, Users } from "lucide-react"
import { supabase } from "@/lib/supabase"

export const dynamic = "force-dynamic"

export default async function ReceitasPage() {
  const { data: receitas, error } = await supabase
    .from("recipes")
    .select("*")
    .order("name", { ascending: true })

  if (error) {
    console.error(error)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ChefHat className="h-10 w-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Receitas com Plantas Medicinais
          </h1>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Descubra deliciosas receitas que utilizam as plantas medicinais do nosso horto
        </p>
      </header>

      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed mb-4">
          As plantas medicinais do Horto da Unifametro não servem apenas para chás e preparações terapêuticas. Muitas delas podem ser incorporadas em receitas culinárias, agregando sabor, aroma e propriedades benéficas aos pratos.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Explore estas receitas desenvolvidas especialmente para aproveitar o melhor das nossas plantas medicinais na cozinha.
        </p>
      </section>

      {!receitas || receitas.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Nenhuma receita cadastrada ainda.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {receitas.map((receita) => (
            <Card key={receita.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl leading-tight mb-2">
                  {receita.name}
                </CardTitle>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{receita.time}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{receita.servings}</span>
                  </div>
                </div>

                {receita.plant && (
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                      {receita.plant}
                    </span>
                  </div>
                )}
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Ingredientes
                  </h3>

                  <ul className="space-y-2">
                    {(receita.ingredients || []).map(
                      (ingrediente: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1">•</span>
                          <span>{ingrediente}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Modo de Preparo
                  </h3>

                  <ol className="space-y-2">
                    {(receita.preparation || []).map(
                      (passo: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-3"
                        >
                          <span className="font-semibold text-accent min-w-[1.5rem]">
                            {i + 1}.
                          </span>
                          <span>{passo}</span>
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <section className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="font-semibold mb-3 text-lg">Avisos Importantes</h3>

        <div className="text-sm text-muted-foreground space-y-2">
          <p>• Utilize apenas plantas que você tem certeza da identificação.</p>
          <p>• Algumas pessoas podem ter alergias ou sensibilidades.</p>
          <p>• Gestantes, lactantes e pessoas com condições médicas devem consultar um profissional de saúde.</p>
          <p>• Utilize plantas frescas e de qualidade.</p>
          <p>• As receitas não substituem orientação médica.</p>
        </div>
      </section>
    </div>
  )
}