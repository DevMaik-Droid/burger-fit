'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-primary hidden sm:inline">FitBurger</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Inicio
            </Link>
            <Link href="/menu" className="text-foreground hover:text-primary transition">
              Menú
            </Link>
            <Link href="/nosotros" className="text-foreground hover:text-primary transition">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition">
              Contacto
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-foreground hover:text-primary transition">
              Inicio
            </Link>
            <Link href="/menu" className="block py-2 text-foreground hover:text-primary transition">
              Menú
            </Link>
            <Link href="/nosotros" className="block py-2 text-foreground hover:text-primary transition">
              Nosotros
            </Link>
            <Link href="/contacto" className="block py-2 text-foreground hover:text-primary transition">
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
