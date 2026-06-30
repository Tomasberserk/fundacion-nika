import BountyPoster from './BountyPoster'
import qrBancolombia from '../assets/qr-bancolombia.svg'
import qrNequi from '../assets/qr-nequi.svg'
import qrDaviplata from '../assets/qr-daviplata.svg'

// ⚠️  REEMPLAZAR antes del deploy final:
//     accountNumber → número de cuenta real
//     qrSrc        → imagen QR real generada en qr-code-generator.com
const bancos = [
  {
    bank: 'Bancolombia',
    accountHolder: 'Fundación Nika',
    accountType: 'Cuenta de Ahorros',
    accountNumber: '000-000000-00',
    qrSrc: qrBancolombia,
    reward: '$2.000',
    accentColor: '#c68d1a',
  },
  {
    bank: 'Nequi',
    accountHolder: 'Fundación Nika',
    accountType: 'Billetera Digital',
    accountNumber: '300 000 0000',
    qrSrc: qrNequi,
    reward: '$5.000',
    accentColor: '#6b21a8',
  },
  {
    bank: 'Daviplata',
    accountHolder: 'Fundación Nika',
    accountType: 'Billetera Digital',
    accountNumber: '310 000 0000',
    qrSrc: qrDaviplata,
    reward: '$10.000',
    accentColor: '#b91c1c',
  },
]

export default function Donaciones() {
  return (
    <section id="donaciones" className="py-24 px-4 bg-nika-navy relative overflow-hidden">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nika-gold to-transparent" />

      {/* Fondo textura náutica */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #d4a017 0, #d4a017 1px, transparent 0, transparent 40px), repeating-linear-gradient(90deg, #d4a017 0, #d4a017 1px, transparent 0, transparent 40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-nika-gold font-pirata text-xl tracking-widest mb-4">
            — Carteles de Recompensa —
          </p>
          <h2 className="font-cinzel font-black text-3xl md:text-5xl text-nika-cream mb-6 leading-tight">
            ¿Cuánto vale un sueño?
          </h2>
          <p className="text-nika-cream/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Escanea el QR o copia el número de cuenta. Cada peso que donas
            se convierte en comida para un perro que te lo agradecerá con todo su corazón.
          </p>
        </div>

        {/* Grid de Bounty Posters */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bancos.map((b) => (
            <BountyPoster key={b.bank} {...b} />
          ))}
        </div>

        {/* Footer de sección */}
        <p className="text-center text-nika-cream/30 text-xs mt-14 tracking-widest">
          🏴‍☠️ "Yo seré el Rey de los Piratas" — nosotros seremos la tripulación que salvó a los perritos.
        </p>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nika-gold to-transparent" />
    </section>
  )
}
