// ⚠️  REEMPLAZAR antes del deploy final:
//     href de Instagram y Facebook → URLs reales
//     href de mailto → email real de la fundación
const links = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/fundacionnika', // ← REEMPLAZAR
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/fundacionnika', // ← REEMPLAZAR
  },
  {
    label: 'Contacto',
    href: 'mailto:contacto@fundacionnika.com', // ← REEMPLAZAR
  },
]

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-nika-gold/20 py-12 px-4">
      {/* Separador decorativo */}
      <div className="w-16 h-px bg-nika-gold/40 mx-auto mb-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <p className="font-pirata text-nika-gold text-3xl tracking-wider mb-2">
          ⚓ Fundación Nika
        </p>

        {/* Tagline */}
        <p className="text-nika-cream/50 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
          Alimentando sueños, un plato a la vez.<br />
          La aventura de cuidar no tiene fin.
        </p>

        {/* Links sociales */}
        <nav aria-label="Redes sociales y contacto">
          <ul className="flex justify-center gap-8 mb-10 flex-wrap">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-nika-cream/45 text-sm tracking-wide hover:text-nika-gold transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divisor */}
        <div className="w-full h-px bg-nika-gold/10 mb-6" />

        {/* Copyright */}
        <p className="text-nika-cream/25 text-xs tracking-widest">
          © {new Date().getFullYear()} Fundación Nika — Hecho con ❤️ y mucho BARF
        </p>
      </div>
    </footer>
  )
}
