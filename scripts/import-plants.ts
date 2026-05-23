import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js"
import { plantsData } from "../lib/plants-data"

dotenv.config({ path: ".env.local" })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Variáveis do Supabase não encontradas no .env.local")
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function importPlants() {
  const plants = plantsData.map((plant) => ({
    id: plant.id,
    name: plant.name,
    scientific_name: plant.scientificName,
    family: plant.family,
    image_url: plant.image,
    plant_references: plant.references || [],
    description: plant.description,
    habitat: plant.habitat,
    origin: plant.origin || null,
    cultivation: plant.cultivation || null,
    medicinal_use: plant.medicinalUses || null,
    culinary_uses: plant.culinaryUses || null,
    used_parts: plant.partsUsed || null,
    how_to_use: plant.howToUse || null,
    toxicity: plant.toxicity || null,
    contraindications: plant.contraindications || null,
    characteristics: plant.characteristics || [],
    uses: plant.uses || [],
    care: plant.care || null,
  }))

  const { error } = await supabase.from("plants").upsert(plants)

  if (error) {
    console.error("Erro ao importar:", error)
    return
  }

  console.log("Plantas importadas com sucesso!")
}

importPlants()