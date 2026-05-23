"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Plantas" },
  { href: "/horto", label: "Sobre o Horto" },
  { href: "/receitas", label: "Receitas" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold text-lg group">
            <div className="relative h-12 w-12 transition-transform group-hover:scale-110">
              <Image
                src="/logo-unifametro.jpg"
                alt="Herbário Digital da Unifametro Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="hidden sm:inline text-foreground">Herbário Digital da Unifametro</span>
            <span className="sm:hidden text-foreground">Herbário</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-12 w-12"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-lg font-medium transition-colors hover:text-primary rounded-lg",
                  pathname === item.href
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-foreground hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
