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
- **Próximo paso:** Ejecutar Bloque 0 — Scaffolding del proyecto Vite + React + Tailwind
- **Pendiente de usuario:** Aprobación del roadmap para iniciar generación de código
