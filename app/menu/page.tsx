'use client'

import { useState } from 'react'
import { Flame, Leaf } from 'lucide-react'

interface Hamburger {
  id: number
  nombre: string
  descripcion: string
  ingredientes: string[]
  calorias: number
  proteina: string
  precio: number
  imagen: string
}

const hamburguesas: Hamburger[] = [
  {
    id: 1,
    nombre: "Classic Fit",
    descripcion: "La clásica reinventada con ingredientes saludables",
    ingredientes: ["Carne magra 100g", "Pan integral", "Lechuga", "Tomate", "Cebolla"],
    calorias: 380,
    proteina: "28g",
    precio: 8.99,
    imagen: "hamburguesa-classic"
  },
  {
    id: 2,
    nombre: "Veggie Power",
    descripcion: "Para los amantes de lo verde",
    ingredientes: ["Champiñones", "Espinaca", "Queso fresco", "Pan integral", "Aguacate"],
    calorias: 320,
    proteina: "12g",
    precio: 7.99,
    imagen: "hamburguesa-veggie"
  },
  {
    id: 3,
    nombre: "Pollo Premium",
    descripcion: "Pechuga de pollo premium a la parrilla",
    ingredientes: ["Pechuga de pollo", "Pan integral", "Lechuga", "Tomate", "Salsa casera"],
    calorias: 340,
    proteina: "32g",
    precio: 8.49,
    imagen: "hamburguesa-pollo"
  },
  {
    id: 4,
    nombre: "Tri-Color",
    descripcion: "Combinación de carnes magras",
    ingredientes: ["Mezcla de carnes", "Pan integral", "Pimiento rojo", "Cebolla caramelizada"],
    calorias: 410,
    proteina: "30g",
    precio: 9.99,
    imagen: "hamburguesa-tri"
  },
]

export default function MenuPage() {
  const [filtro, setFiltro] = useState<string | null>(null)

  const handleReserve = (nombre: string) => {
    const mensaje = `Hola, me gustaría reservar: ${nombre}`
    const numeroWhatsApp = "5551234567"
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Nuestro Menú Fit</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hamburguesas.map((burger) => (
            <div key={burger.id} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition">
              <div className="bg-secondary/20 h-48 flex items-center justify-center">
                <img
                  src={`/.jpg?height=192&width=256&query=${burger.imagen}`}
                  alt={burger.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{burger.nombre}</h3>
                <p className="text-foreground/60 text-sm mb-4">{burger.descripcion}</p>

                <div className="bg-muted/30 rounded-lg p-4 mb-4 text-sm">
                  <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-1 text-foreground/70">
                      <Flame size={16} className="text-secondary" /> {burger.calorias} cal
                    </span>
                    <span className="flex items-center gap-1 text-foreground/70">
                      <Leaf size={16} className="text-primary" /> {burger.proteina}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/70 mb-2">Ingredientes:</p>
                  <ul className="text-xs text-foreground/60 space-y-1">
                    {burger.ingredientes.map((ing, i) => (
                      <li key={i}>• {ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${burger.precio}</span>
                  <button
                    onClick={() => handleReserve(burger.nombre)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
