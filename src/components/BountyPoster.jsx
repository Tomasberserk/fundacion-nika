export default function BountyPoster({ bank, accountHolder, accountType, accountNumber, qrSrc, reward, accentColor }) {
  return (
    <div
      className="relative bg-nika-cream text-nika-navy rounded-sm overflow-hidden
        shadow-2xl shadow-black/50
        hover:scale-105 hover:-rotate-1
        transition-all duration-300 cursor-default"
      style={{ border: `5px solid ${accentColor}` }}
    >
      {/* Header */}
      <div
        className="py-3 px-4 text-center text-white"
        style={{ backgroundColor: accentColor }}
      >
        <p className="font-pirata text-2xl tracking-[0.2em]">SE BUSCA</p>
        <p className="text-[10px] tracking-[0.5em] uppercase opacity-75 mt-0.5">
          — Donación —
        </p>
      </div>

      {/* Cuerpo */}
      <div className="p-5 text-center">
        {/* QR */}
        <div className="inline-block bg-white border-2 border-gray-200 rounded p-2 mb-4 shadow-inner select-none">
          <img
            src={qrSrc}
            alt={`Código QR para donar a Fundación Nika vía ${bank}`}
            className="w-36 h-36 object-contain"
          />
        </div>

        {/* Banco */}
        <h3
          className="font-cinzel font-black text-2xl mb-3 tracking-wide"
          style={{ color: accentColor }}
        >
          {bank}
        </h3>

        {/* Datos */}
        <div className="bg-stone-100 border border-stone-200 rounded p-3 mb-4 text-left text-xs space-y-1.5">
          <p className="text-stone-500">
            <span className="font-bold text-stone-700">Titular:</span>{' '}
            {accountHolder}
          </p>
          <p className="text-stone-500">
            <span className="font-bold text-stone-700">Tipo:</span>{' '}
            {accountType}
          </p>
          <p className="font-mono font-bold text-sm text-center text-stone-800 pt-1 tracking-wider select-all cursor-copy" title="Click para seleccionar">
            {accountNumber}
          </p>
        </div>

        {/* Recompensa */}
        <div
          className="border-t-2 border-dashed pt-3"
          style={{ borderColor: accentColor }}
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400 mb-1">
            Recompensa
          </p>
          <p
            className="font-pirata text-4xl leading-none"
            style={{ color: accentColor }}
          >
            {reward}
          </p>
          <p className="text-[10px] text-stone-400 mt-1.5">
            ∞ amor peludo garantizado
          </p>
        </div>
      </div>

      {/* Textura papel envejecido sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23000'/%3E%3C/svg%3E\")",
          backgroundSize: '4px 4px',
        }}
      />
    </div>
  )
}
