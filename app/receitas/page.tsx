import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, Clock, Users } from "lucide-react"

const receitas = [
  {
    nome: "Mousse de Capim Santo",
    planta: "Capim Santo",
    tempo: "30 minutos + tempo de geladeira",
    porcoes: "6-8 porções",
    ingredientes: [
      "200-300ml de água",
      "1 maço de capim santo",
      "2 caixas de creme de leite",
      "1 lata de leite condensado",
      "1 envelope de gelatina sem sabor",
      "5 colheres de sopa de água (para hidratar a gelatina)",
    ],
    preparo: [
      "Faça o suco do capim santo com a água no liquidificador.",
      "Coe o suco e reserve.",
      "Hidrate a gelatina sem sabor com 5 colheres de sopa de água.",
      "Leve a gelatina hidratada ao microondas por 15 segundos.",
      "Em uma tigela, misture o suco de capim santo, o leite condensado e o creme de leite.",
      "Adicione a gelatina dissolvida e misture bem.",
      "Despeje em taças ou em uma forma.",
      "Leve à geladeira por pelo menos 4 horas antes de servir.",
    ],
  },
  {
    nome: "Brigadeiro de Capim-Limão",
    planta: "Capim Santo",
    tempo: "25 minutos",
    porcoes: "20-25 brigadeiros",
    ingredientes: [
      "80g de capim-limão fresco",
      "150ml de leite integral",
      "1 caixa de leite condensado",
      "75g de creme de leite",
    ],
    preparo: [
      "Pique e coloque o capim-limão dentro do liquidificador.",
      "Adicione o leite.",
      "Bata até que vire um 'suco'.",
      "Coe e reserve.",
      "Adicione o leite condensado em uma panela junto ao 'suco' e o creme de leite.",
      "Leve ao fogo e mexa até o ponto de creme (aproximadamente 10 minutos).",
      "Deixe esfriar.",
      "Enrole os brigadeiros, se preferir.",
      "Coloque em forminhas.",
      "Sirva.",
    ],
  },
  {
    nome: "Bolo de Capim Santo com Limão",
    planta: "Capim Santo",
    tempo: "50 minutos",
    porcoes: "12 fatias",
    ingredientes: [
      "15 folhas de capim santo (cidreira) picadas",
      "1 limão tahiti grande (suco)",
      "1 xícara de chá de leite",
      "Raspa de limão tahiti",
      "1/2 xícara de chá de óleo",
      "3 ovos",
      "2 xícaras de chá de açúcar",
      "2 xícaras de chá de farinha de trigo",
      "1 colher de sopa de fermento",
      "Para a calda: 1 e 1/2 xícara de chá de açúcar, 1 suco de limão, raspa de limão a gosto",
    ],
    preparo: [
      "Em um liquidificador coloque o leite, as folhas de capim santo, o suco de limão e bata tudo.",
      "Despeje em um recipiente, peneirando o líquido.",
      "Acrescente em uma batedeira os ovos, o óleo, o açúcar, as raspas de limão, a farinha de trigo e bata tudo.",
      "Adicione o fermento e misture com o auxílio de uma colher ou fouet.",
      "Despeje em uma forma com furo ao meio untada e enfarinhada.",
      "Leve para o forno pré-aquecido (180°C) por aproximadamente 35 minutos.",
      "Retire do forno.",
      "Sirva como preferir.",
    ],
  },
  {
    nome: "Torta de Alecrim com Tomate e Manjericão",
    planta: "Alecrim e Manjericão",
    tempo: "1 hora",
    porcoes: "8 fatias",
    ingredientes: [
      "Massa: 2 xícaras de farinha de trigo, 150g de manteiga, 1 colher de chá rasa de sal, 5 colheres de água, 1 gema",
      "Recheio: 4 ovos, 2 caixinhas de creme de leite, 50g de queijo parmesão ralado (opcional), uma pitada de sal, uma pitada de pimenta em pó, 1/2 xícara de requeijão, 1 folha de alecrim, 150g de tomate cereja, 200g de mussarela, manjericão fresco",
    ],
    preparo: [
      "Massa: Misture todos os ingredientes em um bowl até a massa ficar firme.",
      "Coloque em forma redonda de fundo removível de tamanho médio.",
      "Pré-aqueça por 15 minutos a 180°C.",
      "Recheio: Misture os ovos, creme de leite, parmesão, sal, pimenta, requeijão e alecrim em um bowl.",
      "Pique os tomates cereja e adicione à mistura.",
      "Antes de adicionar o alho poró, refogue-o com uma colher de manteiga.",
      "Adicione essa mistura à massa que foi pré-aquecida.",
      "Coloque por cima os 200g de mussarela e o manjericão fresco.",
      "Leve ao forno por 180°C até o queijo derreter.",
    ],
  },
]

export default function ReceitasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <ChefHat className="h-10 w-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Receitas com Plantas Medicinais</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Descubra deliciosas receitas que utilizam as plantas medicinais do nosso horto
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed mb-4">
          As plantas medicinais do Horto da Unifametro não servem apenas para chás e preparações terapêuticas. Muitas
          delas podem ser incorporadas em receitas culinárias, agregando sabor, aroma e propriedades benéficas aos
          pratos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Explore estas receitas desenvolvidas especialmente para aproveitar o melhor das nossas plantas medicinais na
          cozinha.
        </p>
      </section>

      {/* Recipes Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {receitas.map((receita, idx) => (
          <Card key={idx} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl leading-tight mb-2">{receita.nome}</CardTitle>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{receita.tempo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{receita.porcoes}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  {receita.planta}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6">
              {/* Ingredientes */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Ingredientes</h3>
                <ul className="space-y-2">
                  {receita.ingredientes.map((ingrediente, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{ingrediente}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modo de Preparo */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Modo de Preparo</h3>
                <ol className="space-y-2">
                  {receita.preparo.map((passo, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="font-semibold text-accent min-w-[1.5rem]">{i + 1}.</span>
                      <span>{passo}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Notes */}
      <section className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="font-semibold mb-3 text-lg">Avisos Importantes</h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            • Utilize apenas plantas que você tem certeza da identificação. Em caso de dúvida, consulte um especialista.
          </p>
          <p>
            • Algumas pessoas podem ter alergias ou sensibilidades a determinadas plantas. Teste pequenas quantidades
            primeiro.
          </p>
          <p>
            • Gestantes, lactantes e pessoas com condições médicas específicas devem consultar um profissional de saúde
            antes de consumir plantas medicinais.
          </p>
          <p>• Utilize plantas frescas e de qualidade, preferencialmente orgânicas ou do próprio horto.</p>
          <p>
            • As receitas aqui apresentadas são para fins culinários e não substituem orientação médica ou tratamentos
            prescritos.
          </p>
        </div>
      </section>

      {/* Citation */}
      <section className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Sobre as Receitas</h3>
        <p className="text-sm text-muted-foreground">
          As receitas apresentadas foram desenvolvidas e testadas utilizando as plantas medicinais cultivadas no Horto
          da Unifametro. Elas combinam conhecimento tradicional com técnicas culinárias modernas, proporcionando uma
          experiência gastronômica única e saudável.
        </p>
      </section>
    </div>
  )
}
