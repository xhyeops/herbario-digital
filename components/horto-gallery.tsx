"use client"

import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { useState } from "react"

export function HortoGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {images.map((image, index) => {
            const className =
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                  ? "md:col-span-1 md:row-span-1"
                  : index === 2
                    ? "md:col-span-1 md:row-span-1"
                    : "md:col-span-2 md:row-span-1"

            return (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`group relative min-h-[220px] overflow-hidden rounded-3xl border bg-muted shadow-sm ${className}`}
              >
                <Image
                  src={image}
                  alt={`Imagem do Horto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/25" />

                <div className="absolute right-3 top-3 rounded-full bg-background/85 p-2 opacity-0 shadow backdrop-blur transition group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-foreground" />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-2xl">
            <Image
              src={selectedImage}
              alt="Imagem ampliada do Horto"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}