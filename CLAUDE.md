# Fundación Nika — Guía del Proyecto

## ¿Qué es esto?
Landing page estática para **Fundación Nika**: vende dieta BARF para mascotas y destina las ganancias a alimentar perros callejeros. Temática visual sutil de **One Piece**.

## Stack
- **Framework:** React 18 + Vite 5
- **Estilos:** Tailwind CSS 4 (`@tailwindcss/vite`)
- **Fuentes:** Cinzel (títulos), Pirata One (decorativo), Inter (cuerpo) — Google Fonts
- **Hosting:** Vercel free tier (CI/CD automático desde `main` en GitHub)
- **Sin backend, sin APIs, sin base de datos**

## Paleta de colores
| Token | Valor | Uso |
|---|---|---|
| `nika-navy` | `#0a1628` | Fondo principal |
| `nika-gold` | `#d4a017` | Acentos, títulos destacados |
| `nika-cream` | `#f5f0e8` | Texto principal |
| `nika-red` | `#c0392b` | Alertas, acento secundario |

Definidos en `src/index.css` usando `@theme { }` de Tailwind v4.

## Estructura de archivos
```
fundacion-nika/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/           # Imágenes + QR codes estáticos
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── AboutUs.jsx
│       ├── Donaciones.jsx
│       ├── BountyPoster.jsx
│       └── Footer.jsx
├── index.html
├── vite.config.js
└── vercel.json
```

## Secciones de la página
1. **Hero** — Headline "¿Sabías que podías salvar el mundo con 2000 pesos?" + CTA → `#donaciones`
2. **About Us** — Qué es BARF, propósito de la fundación, quote One Piece sutil
3. **Donaciones** — 3 "Carteles de Recompensa" (Bounty Posters) con QR estático: Bancolombia, Nequi, Daviplata
4. **Footer** — Redes sociales + contacto

## Datos a reemplazar antes del deploy final
- Números de cuenta bancaria en `src/components/Donaciones.jsx` → array `bancos`
- QR codes reales en `src/assets/qr-bancolombia.png`, `qr-nequi.png`, `qr-daviplata.png`
- URLs de Instagram y Facebook en `src/components/Footer.jsx`
- Email de contacto en `src/components/Footer.jsx`
- Logo real en `src/assets/logo-nika.png`

## Repositorio GitHub
`https://github.com/Tomasberserk/fundacion-nika` — rama `main`

## Plan maestro
Ver: `docs/superpowers/plans/2026-06-30-fundacion-nika-landing.md`

---

## Log de iteraciones

### [2026-06-30] — Inicio del proyecto
- **Estado:** Planificación completa ✅
- **Completado:**
  - Roadmap de 48 horas definido (8 bloques)
  - Plan técnico detallado con código completo por bloque
  - CLAUDE.md inicializado
- **Próximo paso:** ~~Ejecutar Bloque 0~~ → completado ✅

---

### [2026-06-30] — Bloque 0: Scaffolding ✅

- **Estado:** Completo — proyecto listo para desarrollo
- **Archivos creados:**
  - `fundacion-nika/` — directorio raíz del proyecto y repo git
  - `vite.config.js` — Vite 5 con plugin Tailwind CSS v4
  - `src/index.css` — tokens `@theme` (nika-navy, nika-gold, nika-cream, nika-red) + fuentes
  - `index.html` — lang=es, meta SEO, Google Fonts (Cinzel, Pirata One, Inter)
  - `src/App.jsx` — esqueleto limpio sin código Vite default
  - `src/main.jsx` — sin cambios (ya importaba index.css)
  - `vercel.json` — rewrite SPA
  - `src/assets/.gitkeep` — carpeta lista para imágenes
  - `CLAUDE.md` y `docs/` — incluidos en el repo
- **Dependencias instaladas:** `tailwindcss@^4`, `@tailwindcss/vite`
- **Build verificado:** `npm run build` → ✅ sin errores, 252ms
- **Git:** `git init` + commit inicial (`390fea4`)
- **Próximo paso:** ~~Bloque 1 — Navbar~~ → completado ✅

---

### [2026-06-30] — Bloque 1: Navbar ✅

- **Estado:** Completo
- **Archivos creados/modificados:**
  - `src/components/Navbar.jsx` — nav fija (z-50), logo ⚓ con `font-pirata`, links "Nosotros" / "Donar" ocultos en mobile (`hidden md:flex`), botón "¡Donar ahora!" siempre visible
  - `src/App.jsx` — layout raíz con `<Navbar />` + 3 secciones placeholder (`#hero`, `#about`, `#donaciones`)
- **Build verificado:** ✅ 267ms, sin errores
- **Git commit:** pendiente push a GitHub
- **Próximo paso:** ~~Bloque 2 — Sección Hero~~ → completado ✅

---

### [2026-06-30] — Bloque 2: Hero ✅

- **Estado:** Completo
- **Archivos creados/modificados:**
  - `src/components/Hero.jsx` — headline 3 líneas (Cinzel black), grid náutico decorativo, resplandor gold radial, CTA con glow, scroll hint animado
  - `src/App.jsx` — `<Hero />` integrado, placeholders about/donaciones mantenidos
- **Build verificado:** ✅ 388ms, sin errores
- **Próximo paso:** Bloque 3 — About Us

---

### Conectar GitHub + Vercel (acción manual del usuario)

1. Ir a [github.com/new](https://github.com/new) → crear repo `fundacion-nika` (público)
2. En terminal, desde `fundacion-nika/`:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/fundacion-nika.git
   git push -u origin master
   ```
3. Ir a [vercel.com](https://vercel.com) → **New Project** → importar `fundacion-nika`
4. Configurar:
   - **Root Directory:** `fundacion-nika` (si el repo contiene solo esta carpeta, dejar vacío)
   - **Framework Preset:** Vite (auto-detectado)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** → URL pública lista en ~60s
