const features = [
  {
    icon: '🦴',
    title: 'Dieta BARF',
    desc: 'Biologically Appropriate Raw Food. Alimentación cruda y natural que imita la dieta ancestral de perros y gatos. Proteínas reales, sin conservantes, sin rellenos artificiales — solo lo que su cuerpo pide.',
  },
  {
    icon: '🌊',
    title: 'Nuestro propósito',
    desc: 'Cada compra de dieta BARF financia la alimentación de perros callejeros. También aceptamos donaciones directas. Juntos somos una tripulación que cuida a los que no tienen voz.',
  },
  {
    icon: '❤️',
    title: '¿Cómo funciona?',
    desc: 'Compras alimento de calidad para tu mascota → nosotros destinamos parte de las ganancias → perros de la calle reciben comida digna. Simple. Directo. Sin intermediarios.',
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-4 bg-nika-navy relative overflow-hidden">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nika-gold to-transparent" />

      {/* Fondo textura sutil */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #d4a017 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d4a017 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-nika-gold font-pirata text-xl tracking-widest mb-4">
            — Nuestra misión —
          </p>
          <h2 className="font-cinzel font-black text-3xl md:text-5xl text-nika-cream mb-6 leading-tight">
            Una tripulación con propósito
          </h2>
          <p className="text-nika-cream/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            La Fundación Nika nació de una idea simple: el alimento de calidad no debería
            ser un lujo, y ningún perro debería pasar hambre. Vendemos dieta BARF y
            usamos esas ganancias para alimentar a quienes más lo necesitan.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white/[0.04] border border-nika-gold/20 rounded-xl p-8
                hover:border-nika-gold/50 hover:bg-white/[0.07]
                transition-all duration-300"
            >
              <div className="text-5xl mb-5">{f.icon}</div>
              <h3 className="font-cinzel font-bold text-nika-gold text-xl mb-3">
                {f.title}
              </h3>
              <p className="text-nika-cream/65 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="w-24 h-px bg-nika-gold/30 mx-auto mb-12" />

        {/* Quote One Piece sutil */}
        <div className="text-center max-w-2xl mx-auto">
          <blockquote className="font-pirata text-2xl md:text-3xl text-nika-gold/75 leading-relaxed mb-3">
            "Un sueño que muere no es un sueño —<br className="hidden md:block" />
            es solo una promesa rota."
          </blockquote>
          <p className="text-nika-cream/30 text-sm tracking-widest">
            — Inspirado en la Gran Era de los Piratas 🏴‍☠️
          </p>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nika-gold to-transparent" />
    </section>
  )
}
