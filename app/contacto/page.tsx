'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    teléfono: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mensaje = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.teléfono}\nMensaje: ${formData.mensaje}`
    window.open(`https://wa.me/5551234567?text=${encodeURIComponent(mensaje)}`, "_blank")
    setFormData({ nombre: '', email: '', teléfono: '', mensaje: '' })
  }

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground">Contáctanos</h1>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-2xl mx-auto">
          ¿Tienes preguntas? Nos encantaría saber de ti. Contáctanos por cualquiera de estos medios.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Teléfono</h3>
            <p className="text-foreground/70">+1 (555) 123-4567</p>
            <p className="text-sm text-foreground/50 mt-2">Lun-Dom 11 AM - 10 PM</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-accent" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70">info@fitburger.com</p>
            <p className="text-sm text-foreground/50 mt-2">Respuesta en 24 horas</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Ubicación</h3>
            <p className="text-foreground/70">Calle Principal 123</p>
            <p className="text-sm text-foreground/50 mt-2">Ciudad, Estado</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-card rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Envía tu mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="teléfono" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="teléfono"
                  name="teléfono"
                  value={formData.teléfono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none transition resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Horarios de Atención</h3>
              <div className="space-y-3 text-foreground/70">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes:</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo:</span>
                  <span>12:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 rounded-xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-accent mb-4">Redes Sociales</h3>
              <p className="text-foreground/70 mb-4">Síguenos para conocer nuestras promociones y nuevos platillos:</p>
              <div className="flex gap-4">
                <a href="#" className="text-primary font-semibold hover:opacity-75 transition">
                  Facebook
                </a>
                <a href="#" className="text-primary font-semibold hover:opacity-75 transition">
                  Instagram
                </a>
                <a href="#" className="text-primary font-semibold hover:opacity-75 transition">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-secondary/5 rounded-xl p-8 border border-secondary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4">Preguntas Frecuentes</h3>
              <ul className="space-y-3 text-foreground/70 text-sm">
                <li>• ¿Tienen opciones vegetarianas? Sí, nuestro menú incluye opciones fit.</li>
                <li>• ¿Hacen entregas a domicilio? Contáctanos para más detalles.</li>
                <li>• ¿Aceptan tarjetas? Sí, efectivo y todas las tarjetas.</li>
                <li>• ¿Pueden modificar los ingredientes? Claro, personaliza tu burger.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
