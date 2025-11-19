import Link from 'next/link'
import { ArrowRight, Leaf, Heart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/5 to-accent/5 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hamburguesas <span className="text-primary">Saludables</span> para tu Estilo de Vida
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Ingredientes premium, recetas cuidadas y sabor incomparable. Disfruta de comida rápida sin comprometer tu salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/menu" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center">
                  Explora nuestro menú
                </Link>
                <Link href="/contacto" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition text-center">
                  Contáctanos
                </Link>
              </div>
            </div>
            <div className="bg-secondary/20 rounded-2xl h-96 flex items-center justify-center">
              <img
                src="/images/productos/header.jpg"
                alt="Hamburguesa saludable"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Por Qué Elegir FitBurger</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Ingredientes Naturales</h3>
              <p className="text-foreground/60">
                Solo utilizamos ingredientes frescos y de alta calidad, sin aditivos ni conservantes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Nutrición Balanceada</h3>
              <p className="text-foreground/60">
                Información nutricional completa. Carnes magras, panes integrales y vegetales frescos.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border text-center">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Sabor Incomparable</h3>
              <p className="text-foreground/60">
                No sacrificamos el sabor por la salud. Cada hamburguesa es una experiencia deliciosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para probar la diferencia?</h2>
          <p className="text-xl opacity-90 mb-8">
            Reserva tu pedido hoy y recibe un 10% de descuento en tu primera compra.
          </p>
          <Link
            href="https://wa.me/5551234567"
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Encargue por WhatsApp
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
