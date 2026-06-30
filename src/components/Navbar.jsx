export default function Navbar() {
  return (
    <nav aria-label="Navegación principal" className="fixed top-0 w-full z-50 bg-nika-navy/95 backdrop-blur-sm border-b border-nika-gold/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#hero"
          className="font-pirata text-nika-gold text-2xl tracking-wider hover:brightness-110 transition"
        >
          ⚓ Fundación Nika
        </a>

        <div className="hidden md:flex gap-8 text-nika-cream text-sm font-semibold tracking-wide">
          <a href="#about" className="hover:text-nika-gold transition-colors duration-200">
            Nosotros
          </a>
          <a href="#donaciones" className="hover:text-nika-gold transition-colors duration-200">
            Donar
          </a>
        </div>

        <a
          href="#donaciones"
          className="bg-nika-gold text-nika-navy px-4 py-2 rounded font-bold text-sm
            hover:brightness-110 hover:scale-105 transition-all duration-200"
        >
          ¡Donar ahora!
        </a>
      </div>
    </nav>
  )
}
