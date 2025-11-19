import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">FitBurger</h3>
            <p className="text-sm opacity-90">
              Hamburguesas saludables hechas con los mejores ingredientes para tu bienestar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ubicación & Horarios</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@fitburger.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 FitBurger. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
