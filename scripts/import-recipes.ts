import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"

dotenv.config({ path: ".env.local" })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Variáveis do Supabase não encontradas.")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const recipes = [
  {
    id: "mousse-de-capim-santo",
    name: "Mousse de Capim Santo",
    plant: "Capim Santo",
    time: "30 minutos + tempo de geladeira",
    servings: "6-8 porções",
    ingredients: [
      "200-300ml de água",
      "1 maço de capim santo",
      "2 caixas de creme de leite",
      "1 lata de leite condensado",
      "1 envelope de gelatina sem sabor",
      "5 colheres de sopa de água para hidratar a gelatina",
    ],
    preparation: [
      "Faça o suco do capim santo com a água no liquidificador.",
      "Coe o suco e reserve.",
      "Hidrate a gelatina sem sabor com 5 colheres de sopa de água.",
      "Leve a gelatina hidratada ao microondas por 15 segundos.",
      "Misture o suco de capim santo, o leite condensado e o creme de leite.",
      "Adicione a gelatina dissolvida e misture bem.",
      "Despeje em taças ou forma.",
      "Leve à geladeira por pelo menos 4 horas.",
    ],
  },
  {
    id: "brigadeiro-de-capim-limao",
    name: "Brigadeiro de Capim-Limão",
    plant: "Capim Santo",
    time: "25 minutos",
    servings: "20-25 brigadeiros",
    ingredients: [
      "80g de capim-limão fresco",
      "150ml de leite integral",
      "1 caixa de leite condensado",
      "75g de creme de leite",
    ],
    preparation: [
      "Pique o capim-limão e coloque no liquidificador.",
      "Adicione o leite.",
      "Bata até virar um suco.",
      "Coe e reserve.",
      "Adicione o leite condensado, o suco e o creme de leite em uma panela.",
      "Leve ao fogo e mexa até ponto de creme.",
      "Deixe esfriar.",
      "Enrole ou sirva em colher.",
    ],
  },
]

async function importRecipes() {
  const { error } = await supabase.from("recipes").upsert(recipes)

  if (error) {
    console.error("Erro ao importar receitas:", error)
    return
  }

  console.log("Receitas importadas com sucesso!")
}

importRecipes()