export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, #0d2a45 0%, #0a1e35 40%, #060e1a 100%)',
      }}
    >
      {/* Grid náutico decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#d4a017 1px, transparent 1px), linear-gradient(90deg, #d4a017 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Resplandor dorado central */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-nika-gold/60 font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase mb-8">
          Fundación Nika · Dieta BARF para mascotas
        </p>

        {/* Headline principal */}
        <h1 className="font-cinzel font-black leading-tight mb-8">
          <span className="block text-2xl md:text-4xl lg:text-5xl text-nika-cream mb-3">
            ¿Sabías que podías
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-nika-gold drop-shadow-[0_0_30px_rgba(212,160,23,0.4)] mb-3">
            salvar el mundo
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-nika-cream">
            con 2.000 pesos?
          </span>
        </h1>

        {/* Subtítulo escalonado */}
        <div className="text-nika-cream/70 text-lg md:text-xl leading-loose mb-12">
          <p>¿Qué son 2.000 pesos?</p>
          <p>¿Un pastel? ¿Un par de cigarros?</p>
          <p className="text-nika-gold font-semibold text-xl md:text-2xl mt-3">
            Y esto... ¿qué es?
          </p>
        </div>

        {/* CTA */}
        <a
          href="#donaciones"
          className="inline-block bg-nika-gold text-nika-navy font-bold text-base md:text-lg
            px-10 py-4 rounded-full shadow-[0_0_40px_rgba(212,160,23,0.35)]
            hover:brightness-110 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,160,23,0.5)]
            transition-all duration-300"
        >
          ⚓ Quiero salvar el mundo
        </a>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-nika-gold/30 text-xs tracking-widest">
          <span className="animate-bounce text-xl">↓</span>
        </div>
      </div>
    </section>
  )
}
