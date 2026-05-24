"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { ImageUpload } from "@/components/image-upload"

export function HortoEditForm({ horto }: { horto: any }) {
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: horto?.title || "",
    subtitle: horto?.subtitle || "",
    image_1: horto?.image_1 || "",
    image_2: horto?.image_2 || "",
    image_3: horto?.image_3 || "",
    image_4: horto?.image_4 || "",
    paragraph_1: horto?.paragraph_1 || "",
    paragraph_2: horto?.paragraph_2 || "",
    paragraph_3: horto?.paragraph_3 || "",
    credits_text: horto?.credits_text || "",
    orientation: horto?.orientation || "",
    students: (horto?.students || []).join("\n"),
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleImageChange(field: string, url: string) {
    setFormData({
      ...formData,
      [field]: url,
    })
  }

  async function handleSave() {
    setLoading(true)

    const { error } = await supabase.from("horto_page").upsert({
      id: "main",
      title: formData.title,
      subtitle: formData.subtitle,
      image_1: formData.image_1,
      image_2: formData.image_2,
      image_3: formData.image_3,
      image_4: formData.image_4,
      paragraph_1: formData.paragraph_1,
      paragraph_2: formData.paragraph_2,
      paragraph_3: formData.paragraph_3,
      credits_text: formData.credits_text,
      orientation: formData.orientation,
      students: formData.students
        .split("\n")
        .map((student) => student.trim())
        .filter(Boolean),
      updated_at: new Date().toISOString(),
    })

    setLoading(false)

    if (error) {
      console.error(error)
      alert("Erro ao salvar página do horto.")
      return
    }

    alert("Página do horto atualizada com sucesso!")
    window.location.href = "/admin"
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Editar Sobre o Horto</h1>
          <p className="text-muted-foreground">
            Atualize textos, créditos e imagens da página
          </p>
        </div>

        <Link
          href="/admin"
          className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
        >
          Voltar
        </Link>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Cabeçalho</h2>

          <Field label="Título">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Subtítulo">
            <input
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-6">
          <h2 className="text-xl font-semibold">Imagens do Horto</h2>

          <Field label="Imagem 1">
            <ImageUpload
              value={formData.image_1}
              onChange={(url) => handleImageChange("image_1", url)}
            />
          </Field>

          <Field label="Imagem 2">
            <ImageUpload
              value={formData.image_2}
              onChange={(url) => handleImageChange("image_2", url)}
            />
          </Field>

          <Field label="Imagem 3">
            <ImageUpload
              value={formData.image_3}
              onChange={(url) => handleImageChange("image_3", url)}
            />
          </Field>

          <Field label="Imagem 4">
            <ImageUpload
              value={formData.image_4}
              onChange={(url) => handleImageChange("image_4", url)}
            />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Texto principal</h2>

          <Field label="Parágrafo 1">
            <textarea
              name="paragraph_1"
              value={formData.paragraph_1}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Parágrafo 2">
            <textarea
              name="paragraph_2"
              value={formData.paragraph_2}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Parágrafo 3">
            <textarea
              name="paragraph_3"
              value={formData.paragraph_3}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>
        </section>

        <section className="rounded-xl border bg-card p-6 space-y-5">
          <h2 className="text-xl font-semibold">Créditos</h2>

          <Field label="Texto dos créditos">
            <textarea
              name="credits_text"
              value={formData.credits_text}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Orientação">
            <input
              name="orientation"
              value={formData.orientation}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>

          <Field label="Alunos colaboradores (1 por linha)">
            <textarea
              name="students"
              value={formData.students}
              onChange={handleChange}
              rows={6}
              className="w-full rounded-md border px-3 py-2"
            />
          </Field>
        </section>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin"
            className="rounded-md border px-5 py-2 text-sm hover:bg-muted"
          >
            Cancelar
          </Link>

          <button
            onClick={handleSave}
            disabled={loading}
            className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground disabled:opacity-60"
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
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}