# Fundación Nika Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir y desplegar una landing page estática para Fundación Nika — venta de dieta BARF para mascotas con propósito social y temática One Piece — en 48 horas con presupuesto $0.

**Architecture:** Single-page React app renderizada completamente en cliente. Sin rutas dinámicas, sin API calls, sin estado persistente. Los QR codes son imágenes estáticas en `/assets`. Vercel sirve el `dist/` generado por Vite como sitio estático.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 4, PostCSS, GitHub + Vercel (CI/CD gratuito)

## Global Constraints

- Sin backend, sin base de datos, sin pasarelas de pago
- Hosting: Vercel free tier, deploy vía GitHub push a `main`
- Presupuesto: $0 — solo herramientas gratuitas
- Temática One Piece: sutil, no kitsch. Paleta náutica (navy, dorado, crema), tipografía bold, carteles de recompensa en sección Donaciones
- Contenido de texto: en español
- Responsive: mobile-first
- Sin dependencias de pago ni licencias privadas para imágenes/fuentes

---

## File Structure

```
fundacion-nika/
├── index.html                          # Entry point HTML (Vite)
├── package.json
├── vite.config.js                      # Vite config + base path
├── tailwind.config.js                  # Colores custom One Piece
├── postcss.config.js
├── .gitignore
├── vercel.json                         # Rewrites para SPA (por si se añaden rutas)
├── public/
│   └── favicon.ico
├── src/
│   ├── main.jsx                        # Monta <App /> en #root
│   ├── App.jsx                         # Layout raíz: Navbar + secciones + Footer
│   ├── index.css                       # @tailwind directives + fuentes
│   ├── assets/
│   │   ├── logo-nika.png               # Logo de la fundación (placeholder inicial)
│   │   ├── hero-bg.jpg                 # Imagen de fondo del Hero
│   │   ├── barf-dog.jpg                # Foto para AboutUs
│   │   ├── qr-bancolombia.png          # QR estático Bancolombia
│   │   ├── qr-nequi.png                # QR estático Nequi
│   │   └── qr-daviplata.png            # QR estático Daviplata
│   └── components/
│       ├── Navbar.jsx                  # Logo + links de navegación ancla
│       ├── Hero.jsx                    # Sección hero con headline + CTA
│       ├── AboutUs.jsx                 # Explicación fundación + BARF
│       ├── Donaciones.jsx              # Grid de 3 BountyPosters
│       ├── BountyPoster.jsx            # Tarjeta individual estilo cartel de recompensa
│       └── Footer.jsx                  # Contacto + redes sociales
```

---

## 48-Hour Agile Roadmap

### BLOQUE 0 — Horas 0–2: Scaffolding & Repositorio

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `.gitignore`, `vercel.json`

**Interfaces:**
- Produces: proyecto corriendo en `localhost:5173` con "Hello Nika" visible

- [ ] **Step 1: Crear proyecto Vite + React**

```bash
cd "C:\Users\merid\Documents\FUNDACION NIKA"
npm create vite@latest fundacion-nika -- --template react
cd fundacion-nika
npm install
```

- [ ] **Step 2: Instalar Tailwind CSS v4**

```bash
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configurar Tailwind en Vite**

Reemplazar contenido de `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 4: Configurar `src/index.css`**

```css
@import "tailwindcss";

@theme {
  --color-nika-navy: #0a1628;
  --color-nika-gold: #d4a017;
  --color-nika-cream: #f5f0e8;
  --color-nika-red: #c0392b;
  --font-family-pirata: 'Pirata One', cursive;
  --font-family-cinzel: 'Cinzel', serif;
}
```

- [ ] **Step 5: Agregar fuentes Google en `index.html`**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Pirata+One&family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

- [ ] **Step 6: Limpiar App.jsx a esqueleto mínimo**

```jsx
export default function App() {
  return <h1 className="text-4xl text-nika-gold font-cinzel">Hello Nika</h1>
}
```

- [ ] **Step 7: Verificar que corre**

```bash
npm run dev
```
Esperado: `localhost:5173` muestra "Hello Nika" en dorado con fuente Cinzel.

- [ ] **Step 8: Crear repo GitHub y primer commit**

```bash
git init
git add .
git commit -m "chore: scaffold vite+react+tailwind project"
```
Crear repo público en github.com/TU_USUARIO/fundacion-nika, luego:
```bash
git remote add origin https://github.com/TU_USUARIO/fundacion-nika.git
git push -u origin main
```

- [ ] **Step 9: Conectar Vercel**

1. Ir a vercel.com → New Project → Import Git Repository → `fundacion-nika`
2. Framework: Vite (auto-detectado)
3. Build Command: `npm run build` | Output Dir: `dist`
4. Deploy → copiar URL pública

---

### BLOQUE 1 — Horas 2–5: Navbar + Layout base

**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Produces: `<Navbar />` con logo texto + links ancla a `#hero`, `#about`, `#donaciones`

- [ ] **Step 1: Crear `src/components/Navbar.jsx`**

```jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-nika-navy/95 backdrop-blur border-b border-nika-gold/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-pirata text-nika-gold text-2xl tracking-wider">
          ⚓ Fundación Nika
        </a>
        <div className="hidden md:flex gap-6 text-nika-cream text-sm font-semibold tracking-wide">
          <a href="#about" className="hover:text-nika-gold transition-colors">Nosotros</a>
          <a href="#donaciones" className="hover:text-nika-gold transition-colors">Donar</a>
        </div>
        <a
          href="#donaciones"
          className="bg-nika-gold text-nika-navy px-4 py-2 rounded font-bold text-sm hover:brightness-110 transition"
        >
          ¡Donar ahora!
        </a>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Actualizar `src/App.jsx` con layout**

```jsx
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-gold text-2xl">Hero — próximamente</p>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-cream text-2xl">About Us — próximamente</p>
        </section>
        <section id="donaciones" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-cream text-2xl">Donaciones — próximamente</p>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verificar visualmente**

`npm run dev` → confirmar Navbar fija, scroll a secciones, hover effects funcionan en mobile y desktop.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/App.jsx
git commit -m "feat: add fixed navbar with anchor navigation"
```

---

### BLOQUE 2 — Horas 5–10: Sección Hero

**Files:**
- Create: `src/components/Hero.jsx`, `src/assets/hero-bg.jpg` (placeholder o imagen real)

**Interfaces:**
- Consumes: nada
- Produces: `<Hero />` con headline multilínea + CTA button que scrollea a `#donaciones`

- [ ] **Step 1: Obtener imagen de fondo**

Opción gratuita: descargar imagen de mar/barco de unsplash.com (licencia free) y guardar como `src/assets/hero-bg.jpg`. Alternativamente usar gradiente CSS puro (ver Step 3).

- [ ] **Step 2: Crear `src/components/Hero.jsx`**

```jsx
import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 pt-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.95) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decoración náutica sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d4a017 0, #d4a017 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-nika-gold/70 font-cinzel text-sm tracking-[0.3em] uppercase mb-6">
          Fundación Nika — Dieta BARF para mascotas
        </p>

        <h1 className="font-cinzel font-black text-nika-cream leading-tight mb-6">
          <span className="block text-3xl md:text-5xl lg:text-6xl mb-4">
            ¿Sabías que podías
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-nika-gold mb-4">
            salvar el mundo
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl mb-4">
            con 2.000 pesos?
          </span>
        </h1>

        <div className="text-nika-cream/80 text-lg md:text-xl space-y-2 mb-10 font-light">
          <p>¿Qué son 2.000 pesos?</p>
          <p>¿Un pastel? ¿Un par de cigarros?</p>
          <p className="text-nika-gold font-semibold text-2xl mt-4">
            Y esto... ¿qué es?
          </p>
        </div>

        <a
          href="#donaciones"
          className="inline-block bg-nika-gold text-nika-navy font-bold text-lg px-10 py-4 rounded-full
            hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg shadow-nika-gold/30"
        >
          ⚓ Quiero salvar el mundo
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-nika-gold/50 text-2xl">
          ↓
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Si no hay imagen, usar gradiente puro**

Reemplazar el `style` del section con:
```jsx
style={{
  background: 'radial-gradient(ellipse at top, #0d2137 0%, #0a1628 60%, #060e1a 100%)',
}}
```
Y eliminar el import de heroBg.

- [ ] **Step 4: Integrar en App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-cream text-2xl">About Us — próximamente</p>
        </section>
        <section id="donaciones" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-cream text-2xl">Donaciones — próximamente</p>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 5: Verificar responsive**

Revisar en DevTools en 375px, 768px y 1280px. El texto H1 no debe desbordarse en móvil.

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero.jsx src/App.jsx src/assets/
git commit -m "feat: add hero section with headline and CTA"
```

---

### BLOQUE 3 — Horas 10–16: Sección About Us

**Files:**
- Create: `src/components/AboutUs.jsx`, `src/assets/barf-dog.jpg` (placeholder)

**Interfaces:**
- Produces: `<AboutUs />` con 3 columnas de features + imagen

- [ ] **Step 1: Crear `src/components/AboutUs.jsx`**

```jsx
const features = [
  {
    icon: '🐾',
    title: 'Dieta BARF',
    desc: 'Biologically Appropriate Raw Food. Alimentación natural, cruda y balanceada que imita la dieta ancestral de los perros y gatos. Proteínas reales, sin conservantes, sin rellenos.',
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
      {/* Separador decorativo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nika-gold to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-nika-gold font-pirata text-lg tracking-widest mb-3">— Nuestra misión —</p>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl text-nika-cream mb-6">
            Una tripulación con propósito
          </h2>
          <p className="text-nika-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            La Fundación Nika nació de una idea simple: el alimento de calidad no debería ser un lujo,
            y ningún perro debería pasar hambre. Vendemos dieta BARF y usamos esas ganancias
            para alimentar a quienes más lo necesitan.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 border border-nika-gold/20 rounded-xl p-8
                hover:border-nika-gold/50 hover:bg-white/8 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-cinzel font-bold text-nika-gold text-xl mb-3">{f.title}</h3>
              <p className="text-nika-cream/70 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote One Piece sutil */}
        <div className="text-center border-t border-nika-gold/20 pt-12">
          <blockquote className="font-pirata text-2xl md:text-3xl text-nika-gold/80 italic mb-3">
            "Un sueño que muere no es un sueño — es solo una promesa rota."
          </blockquote>
          <p className="text-nika-cream/40 text-sm">— Inspirado en la Gran Era de los Piratas 🏴‍☠️</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nika-gold to-transparent" />
    </section>
  )
}
```

- [ ] **Step 2: Integrar en App.jsx**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <section id="donaciones" className="min-h-screen flex items-center justify-center">
          <p className="text-nika-cream text-2xl">Donaciones — próximamente</p>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verificar**

`npm run dev` → confirmar grid colapsa a 1 columna en mobile, separadores dorados visibles, quote legible.

- [ ] **Step 4: Commit**

```bash
git add src/components/AboutUs.jsx src/App.jsx
git commit -m "feat: add about us section with BARF explanation"
```

---

### BLOQUE 4 — Horas 16–24: Sección Donaciones — Bounty Posters

**Files:**
- Create: `src/components/BountyPoster.jsx`, `src/components/Donaciones.jsx`
- Create: `src/assets/qr-bancolombia.png`, `src/assets/qr-nequi.png`, `src/assets/qr-daviplata.png`

**Interfaces:**
- `BountyPoster` props: `{ bank: string, accountNumber: string, accountType: string, accountHolder: string, qrSrc: string, reward: string, color: string }`
- Produces: `<Donaciones />` con 3 BountyPosters en grid

- [ ] **Step 1: Preparar QR codes estáticos**

Generar QR codes gratuitos en qr-code-generator.com con los datos de cada banco.
Descargar como PNG y guardar en:
- `src/assets/qr-bancolombia.png`
- `src/assets/qr-nequi.png`
- `src/assets/qr-daviplata.png`

(Si aún no tienes los datos, crear placeholders de 200x200 con texto por ahora)

- [ ] **Step 2: Crear `src/components/BountyPoster.jsx`**

```jsx
export default function BountyPoster({ bank, accountNumber, accountType, accountHolder, qrSrc, reward, color }) {
  return (
    <div
      className="relative bg-nika-cream text-nika-navy rounded-sm shadow-2xl overflow-hidden
        hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-default"
      style={{ fontFamily: 'serif', border: `4px solid ${color}` }}
    >
      {/* Header del cartel */}
      <div
        className="text-white text-center py-3 px-4"
        style={{ backgroundColor: color }}
      >
        <p className="font-pirata text-xl tracking-widest">SE BUSCA</p>
        <p className="text-xs tracking-[0.4em] uppercase opacity-80">— Donación —</p>
      </div>

      {/* Cuerpo del cartel */}
      <div className="p-5 text-center">
        {/* QR Code */}
        <div className="bg-white border-2 border-gray-200 rounded p-2 inline-block mb-4 shadow-inner">
          <img
            src={qrSrc}
            alt={`QR ${bank}`}
            className="w-36 h-36 object-contain"
          />
        </div>

        {/* Nombre del banco */}
        <h3 className="font-cinzel font-black text-2xl mb-1" style={{ color }}>
          {bank}
        </h3>

        {/* Datos de cuenta */}
        <div className="text-xs text-gray-600 space-y-1 mb-4 bg-gray-50 rounded p-3">
          <p><span className="font-bold">Titular:</span> {accountHolder}</p>
          <p><span className="font-bold">Tipo:</span> {accountType}</p>
          <p className="font-mono font-bold text-sm text-gray-800">{accountNumber}</p>
        </div>

        {/* Recompensa */}
        <div className="border-t-2 border-dashed pt-3" style={{ borderColor: color }}>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Recompensa</p>
          <p className="font-pirata text-3xl" style={{ color }}>
            {reward}
          </p>
          <p className="text-xs text-gray-400 mt-1">∞ amor peludo garantizado</p>
        </div>
      </div>

      {/* Texture overlay sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'  }}
      />
    </div>
  )
}
```

- [ ] **Step 3: Crear `src/components/Donaciones.jsx`**

```jsx
import BountyPoster from './BountyPoster'
import qrBancolombia from '../assets/qr-bancolombia.png'
import qrNequi from '../assets/qr-nequi.png'
import qrDaviplata from '../assets/qr-daviplata.png'

const bancos = [
  {
    bank: 'Bancolombia',
    accountHolder: 'Fundación Nika',
    accountType: 'Cuenta de Ahorros',
    accountNumber: '000-000000-00',   // <-- REEMPLAZAR
    qrSrc: qrBancolombia,
    reward: '$2.000',
    color: '#c68d1a',
  },
  {
    bank: 'Nequi',
    accountHolder: 'Fundación Nika',
    accountType: 'Billetera Digital',
    accountNumber: '300 000 0000',   // <-- REEMPLAZAR
    qrSrc: qrNequi,
    reward: '$5.000',
    color: '#6b21a8',
  },
  {
    bank: 'Daviplata',
    accountHolder: 'Fundación Nika',
    accountType: 'Billetera Digital',
    accountNumber: '310 000 0000',   // <-- REEMPLAZAR
    qrSrc: qrDaviplata,
    reward: '$10.000',
    color: '#c0392b',
  },
]

export default function Donaciones() {
  return (
    <section id="donaciones" className="py-24 px-4 bg-nika-navy relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nika-gold to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-nika-gold font-pirata text-lg tracking-widest mb-3">— Carteles de Recompensa —</p>
          <h2 className="font-cinzel font-black text-4xl md:text-5xl text-nika-cream mb-6">
            ¿Cuánto vale un sueño?
          </h2>
          <p className="text-nika-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Escanea el QR o copia el número de cuenta. Cada peso que donas
            se convierte en comida para un perro que te lo agradecerá con todo su corazón.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {bancos.map((b) => (
            <BountyPoster key={b.bank} {...b} />
          ))}
        </div>

        <p className="text-center text-nika-cream/40 text-xs mt-12">
          🏴‍☠️ "Yo seré el Rey de los Piratas" — nosotros seremos la tripulación que salvó a los perritos.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Integrar todo en App.jsx (versión final sin placeholders de sección)**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Donaciones from './components/Donaciones'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-nika-navy min-h-screen text-nika-cream">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Donaciones />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 5: Verificar Bounty Posters**

- Los 3 carteles se ven diferenciados por color
- QR se muestra correctamente (o placeholder visible)
- Hover animación funciona
- En mobile los carteles se apilan en 1 columna

- [ ] **Step 6: Commit**

```bash
git add src/components/BountyPoster.jsx src/components/Donaciones.jsx src/App.jsx src/assets/
git commit -m "feat: add donaciones section with one-piece bounty poster cards"
```

---

### BLOQUE 5 — Horas 24–28: Footer

**Files:**
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Produces: `<Footer />` con links sociales + copyright

- [ ] **Step 1: Crear `src/components/Footer.jsx`**

```jsx
export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-nika-gold/20 py-10 px-4 text-center">
      <p className="font-pirata text-nika-gold text-2xl mb-3">⚓ Fundación Nika</p>
      <p className="text-nika-cream/50 text-sm mb-6 max-w-md mx-auto">
        Alimentando sueños, un plato a la vez. La aventura de cuidar no tiene fin.
      </p>
      <div className="flex justify-center gap-6 text-sm mb-6">
        <a
          href="https://instagram.com/TUUSUARIO"  // <-- REEMPLAZAR
          target="_blank"
          rel="noopener noreferrer"
          className="text-nika-cream/50 hover:text-nika-gold transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com/TUUSUARIO"  // <-- REEMPLAZAR
          target="_blank"
          rel="noopener noreferrer"
          className="text-nika-cream/50 hover:text-nika-gold transition-colors"
        >
          Facebook
        </a>
        <a
          href="mailto:contacto@fundacionnika.com"  // <-- REEMPLAZAR
          className="text-nika-cream/50 hover:text-nika-gold transition-colors"
        >
          Contacto
        </a>
      </div>
      <p className="text-nika-cream/30 text-xs">
        © {new Date().getFullYear()} Fundación Nika. Hecho con ❤️ y mucho BARF.
      </p>
    </footer>
  )
}
```

- [ ] **Step 2: Reemplazar placeholders**

Actualizar URLs de Instagram, Facebook y email con los datos reales.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add footer with social links"
```

---

### BLOQUE 6 — Horas 28–36: Polish, Responsive & Accesibilidad

**Files:**
- Modify: todos los componentes según hallazgos

- [ ] **Step 1: Test en DevTools — 3 breakpoints**

Abrir Chrome DevTools → Toggle Device Toolbar → probar:
- 375px (iPhone SE) — sin overflow horizontal
- 768px (iPad) — grid 2 col o 1 col según diseño
- 1280px (Desktop) — layout completo

- [ ] **Step 2: Verificar contraste de color**

Instalar extensión "axe DevTools" en Chrome → Run Analysis.
Todos los textos deben pasar WCAG AA (ratio ≥ 4.5:1).
`text-nika-cream/70` sobre `bg-nika-navy` debe revisarse — si falla, subir a `/80`.

- [ ] **Step 3: Agregar `alt` text a todas las imágenes**

Confirmar que cada `<img>` tiene `alt` descriptivo. BountyPoster ya lo tiene; verificar Hero si usa `<img>`.

- [ ] **Step 4: Agregar `<title>` y meta description en index.html**

```html
<title>Fundación Nika — Dieta BARF y ayuda a perros callejeros</title>
<meta name="description" content="Compra dieta BARF de calidad para tu mascota y ayuda a alimentar perros callejeros. Fundación Nika — Colombia.">
<meta property="og:title" content="Fundación Nika">
<meta property="og:description" content="Alimenta a tu mascota, salva al mundo.">
```

- [ ] **Step 5: Lighthouse audit**

Chrome DevTools → Lighthouse → Mobile → Generate Report.
Objetivo: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90.

- [ ] **Step 6: Commit polish**

```bash
git add -A
git commit -m "chore: polish responsive layout, a11y fixes, meta tags"
```

---

### BLOQUE 7 — Horas 36–40: Build & Deploy final

- [ ] **Step 1: Build de producción local**

```bash
npm run build
npm run preview
```
Verificar que `localhost:4173` muestra el sitio completo sin errores en consola.

- [ ] **Step 2: Push a main**

```bash
git push origin main
```
Vercel despliega automáticamente (CI/CD). Esperar ~60 segundos.

- [ ] **Step 3: Verificar en URL de Vercel**

Abrir la URL pública → confirmar todas las secciones, QR codes cargados, links del Footer funcionan.

- [ ] **Step 4: Dominio custom (opcional, gratuito)**

Si tienen dominio propio: Vercel → Settings → Domains → Add → seguir instrucciones DNS.
Si no: usar la URL `fundacion-nika.vercel.app` (gratuita).

- [ ] **Step 5: Commit final**

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

### BLOQUE 8 — Horas 40–48: Buffer & Contenido real

**Tareas de contenido (no código):**
- [ ] Reemplazar textos placeholder (`// <-- REEMPLAZAR`) con datos reales
- [ ] Subir logo real de la fundación como `src/assets/logo-nika.png`
- [ ] Subir foto real de perros/BARF como `src/assets/barf-dog.jpg`
- [ ] Generar y subir QR codes reales con números de cuenta reales
- [ ] Reemplazar URLs de redes sociales en Footer
- [ ] Re-desplegar con `git push origin main`

---

## Self-Review

### Spec coverage
| Requisito | Tarea que lo implementa |
|---|---|
| React + Vite + Tailwind | Bloque 0 |
| Hosting Vercel vía GitHub | Bloque 0 (Step 8-9) + Bloque 7 |
| Sin backend/DB/APIs | ✅ Toda la app es estática |
| Hero con headline específico | Bloque 2 |
| CTA button | Bloque 2 |
| About Us + BARF + propósito | Bloque 3 |
| 3 Bounty Poster cards | Bloque 4 |
| QR estático por banco | Bloque 4 (Step 1) |
| Número de cuenta por banco | Bloque 4 (datos en `bancos` array) |
| Temática One Piece sutil | Paleta, fuentes Pirata/Cinzel, quote, ancla en todo el diseño |
| Mobile responsive | Bloque 6 |
| $0 de presupuesto | ✅ Vite free, Tailwind free, Vercel free, Google Fonts free |

### Placeholder scan
- `000-000000-00`, `300 000 0000`, `310 000 0000` — marcados con `// <-- REEMPLAZAR` intencionalmente, cubiert en Bloque 8
- URLs de redes sociales — ídem
- Email de contacto — ídem

### Type consistency
- `BountyPoster` props definidas en Bloque 4 Step 2 y consumidas exactamente igual en Bloque 4 Step 3 vía spread `{...b}`
- Nombres de componentes consistentes a través de todos los imports

---

*Plan guardado: `docs/superpowers/plans/2026-06-30-fundacion-nika-landing.md`*
