import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function AdminPlantsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/login")
  }

  const { data: plants, error } = await supabase
    .from("plants")
    .select("id, name, scientific_name, family")
    .order("name", { ascending: true })

  if (error) {
    console.error(error)
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Plantas</h1>
          <p className="text-muted-foreground">
            Gerencie as espécies cadastradas no herbário
          </p>
        </div>

        <Link href="/admin/plants/new">
          <Button>Nova planta</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plantas cadastradas</CardTitle>
        </CardHeader>

        <CardContent>
          {!plants || plants.length === 0 ? (
            <p className="text-muted-foreground">
              Nenhuma planta cadastrada.
            </p>
          ) : (
            <div className="space-y-3">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h2 className="font-semibold">{plant.name}</h2>
                    <p className="text-sm text-muted-foreground italic">
                      {plant.scientific_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {plant.family}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/planta/${plant.id}`}>
                      <Button variant="outline" size="sm">
                        Ver
                      </Button>
                    </Link>

                    <Link href={`/admin/plants/${plant.id}`}>
                      <Button size="sm">Editar</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}