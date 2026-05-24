"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Upload, ImageIcon, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function ImageUpload({
  value,
  onChange,
}: {
  value: string
  onChange: (url: string) => void
}) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [uploading, setUploading] = useState(false)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)

    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExt}`
    const filePath = fileName

    const { error } = await supabase.storage
      .from("plants")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      })

    if (error) {
      console.error(error)
      alert("Erro ao enviar imagem.")
      setUploading(false)
      return
    }

    const { data } = supabase.storage.from("plants").getPublicUrl(filePath)

    onChange(data.publicUrl)
    setUploading(false)
  }

  return (
    <div className="space-y-4">
      <div className="relative flex min-h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-dashed bg-muted/30">
        {value ? (
          <Image
            src={value}
            alt="Imagem da planta"
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 p-8 text-center text-muted-foreground">
            <ImageIcon className="h-10 w-10" />
            <p className="text-sm">Nenhuma imagem selecionada</p>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            Escolher imagem
          </>
        )}
      </button>

      {value && (
        <p className="break-all text-xs text-muted-foreground">
          {value}
        </p>
      )}
    </div>
  )
}