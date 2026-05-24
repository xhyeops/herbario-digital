"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export function RecipeEditForm({ recipe }: any) {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: recipe.name || "",
    plant: recipe.plant || "",
    time: recipe.time || "",
    servings: recipe.servings || "",
    ingredients: (recipe.ingredients || []).join("\n"),
    preparation: (recipe.preparation || []).join("\n"),
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSave() {
    setLoading(true)

    const ingredientsArray = formData.ingredients
      .split("\n")
      .filter(Boolean)

    const preparationArray = formData.preparation
      .split("\n")
      .filter(Boolean)

    const { error } = await supabase
      .from("recipes")
      .update({
        name: formData.name,
        plant: formData.plant,
        time: formData.time,
        servings: formData.servings,
        ingredients: ingredientsArray,
        preparation: preparationArray,
      })
      .eq("id", recipe.id)

    setLoading(false)

    if (error) {
      console.error(error)
      alert("Erro ao salvar receita.")
      return
    }

    alert("Receita atualizada!")
    window.location.href = "/admin/receitas"
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Editar receita</h1>
          <p className="text-muted-foreground">
            Atualize as informações da receita
          </p>
        </div>

        <Link
          href="/admin/receitas"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Voltar
        </Link>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl border bg-card p-6 space-y-5">
          <Field label="Nome da receita">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Planta utilizada">
            <input
              name="plant"
              value={formData.plant}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Tempo de preparo">
            <input
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Porções">
            <input
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-5">
          <Field label="Ingredientes (1 por linha)">
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows={8}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Modo de preparo (1 passo por linha)">
            <textarea
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
              rows={10}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>
        </section>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/receitas"
            className="rounded-md border px-5 py-2"
          >
            Cancelar
          </Link>

          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-md bg-primary px-6 py-2 text-primary-foreground"
          >
            {loading ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </div>
    </div>
  )
}
function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}