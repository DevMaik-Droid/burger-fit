import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/5 to-accent/5 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Nuestra Historia</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Nació de una pasión: demostrar que la comida rápida y saludable no son incompatibles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl border border-border p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">¿Por Qué FitBurger?</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Cansados de ver que la comida rápida sacrificaba la salud por la comodidad, decidimos cambiar el juego. En 2023, FitBurger nació con una misión simple: ofrecer hamburguesas deliciosas que no comprometan tu bienestar.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Cada hamburguesa es cuidadosamente preparada con ingredientes seleccionados, carnes magras, panes integrales y vegetales frescos. Porque creemos que todos merecen disfrutar de buena comida sin culpa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Filosofía</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Ingredientes 100% naturales y sin aditivos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Información nutricional transparente</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Sabor incomparable en cada bocado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Atención al cliente excepcional</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-xl p-8 border border-secondary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4">Nuestro Compromiso</h3>
              <p className="text-foreground/70 mb-4">
                Nos comprometemos a:
              </p>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span>Usar solo carnes de la mejor calidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span>Preparar cada pedido con dedicación</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span>Ofrecer opciones para todos los gustos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span>Innovar constantemente en nuestro menú</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-linear-to-r from-primary to-accent rounded-xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-6">Ubicación y Horarios</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-3">Dirección</h3>
                <p className="opacity-90 mb-4">
                  Calle Principal 123<br />
                  Ciudad, Estado 12345<br />
                  📞 +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Horarios</h3>
                <p className="opacity-90">
                  Lunes a Viernes: 11:00 AM - 10:00 PM<br />
                  Sábado y Domingo: 12:00 PM - 11:00 PM<br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>
            <div className="aspect-video bg-primary-foreground/20 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Visitarás nuestro local?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Ven a experimentar la diferencia. Nuestro equipo está listo para servirte la mejor hamburguesa saludable.
          </p>
          <Link href="/contacto" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  )
}
