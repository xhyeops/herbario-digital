"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { ImageUpload } from "@/components/image-upload"

export function PlantNewForm() {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    scientific_name: "",
    family: "",
    image_url: "",
    description: "",
    origin: "",
    habitat: "",
    cultivation: "",
    medicinal_use: "",
    used_parts: "",
    how_to_use: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function generateId(name: string) {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  async function handleSave() {
    setLoading(true)

    const id = formData.id || generateId(formData.name)

    const { error } = await supabase.from("plants").insert({
      ...formData,
      id,
      characteristics: [],
      uses: [],
      plant_references: [],
      care: null,
    })

    setLoading(false)

    if (error) {
      console.error(error)
      alert("Erro ao cadastrar planta.")
      return
    }

    alert("Planta cadastrada com sucesso!")
    window.location.href = "/admin/plants"
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Nova planta</h1>
          <p className="text-muted-foreground">
            Cadastre uma nova espécie no herbário
          </p>
        </div>

        <Link href="/admin/plants" className="rounded-md border px-4 py-2 text-sm hover:bg-muted">
          Voltar
        </Link>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Informações principais</h2>

          <Field label="ID da página">
            <input name="id" placeholder="Ex: erva-doce" value={formData.id} onChange={handleChange} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Nome popular">
            <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Nome científico">
            <input name="scientific_name" value={formData.scientific_name} onChange={handleChange} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Família botânica">
            <input name="family" value={formData.family} onChange={handleChange} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Imagem da planta">
            <ImageUpload
              value={formData.image_url}
              onChange={(url) =>
                setFormData({
                  ...formData,
                  image_url: url,
                })
              }
            />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Descrição e localização</h2>

          <Field label="Descrição">
            <textarea name="description" value={formData.description} onChange={handleChange} rows={5} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Origem">
            <textarea name="origin" value={formData.origin} onChange={handleChange} rows={3} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Habitat">
            <textarea name="habitat" value={formData.habitat} onChange={handleChange} rows={3} className="w-full rounded-md border px-3 py-2" />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Cultivo e uso medicinal</h2>

          <Field label="Necessidades de cultivo">
            <textarea name="cultivation" value={formData.cultivation} onChange={handleChange} rows={4} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Uso medicinal">
            <textarea name="medicinal_use" value={formData.medicinal_use} onChange={handleChange} rows={4} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Partes utilizadas">
            <textarea name="used_parts" value={formData.used_parts} onChange={handleChange} rows={3} className="w-full rounded-md border px-3 py-2" />
          </Field>

          <Field label="Modo de usar">
            <textarea name="how_to_use" value={formData.how_to_use} onChange={handleChange} rows={4} className="w-full rounded-md border px-3 py-2" />
          </Field>
        </section>

        <div className="flex justify-end gap-3">
          <Link href="/admin/plants" className="rounded-md border px-5 py-2 text-sm hover:bg-muted">
            Cancelar
          </Link>

          <button onClick={handleSave} disabled={loading} className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground disabled:opacity-60">
            {loading ? "Salvando..." : "Cadastrar planta"}
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}