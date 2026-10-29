# Arquitectura del Sistema — Ronaldinho Gaúcho: The Immortal Legend & The Asunción Chronicle

## 1. Visión General y Patrón Arquitectónico
Aplicación web interactiva tipo **Editorial Sports Documentary & Interactive Museum** construida como Single Page Application (SPA) modular en **React 19 + TypeScript + Vite + Tailwind CSS v3 + Framer Motion**.

- **Patrón de Diseño:** Feature-Sliced Component Architecture con Contrato de Datos Estático Tipado (`src/data/ronaldinhoData.ts`) y Gestión de Estado de Tema Dual (`Joga Bonito Gold/Emerald` vs `Asunción 2020 Noir`).
- **Renderizado y Animaciones:** Hardware-accelerated CSS + Framer Motion con soporte para reducción de movimiento (`prefers-reduced-motion`).
- **Responsividad:** Mobile-First 100% adaptable (Mobile `< 640px`, Tablet `640px - 1024px`, Desktop `> 1024px`).

---

## 2. Estructura de Directorios
```text
/home/mejiaviecog/proyectos/gil/
├── index.html                  # SEO, OpenGraph, Twitter Cards, JSON-LD (Person/Athlete), Google Fonts
├── package.json                # React 19, Vite, Tailwind v3, Framer Motion, Lucide, canvas-confetti, Vitest
├── tsconfig.json               # Configuración estricta de TypeScript
├── vite.config.ts              # Configuración de Vite + Vitest (jsdom)
├── tailwind.config.js          # Tokens de color Joga Bonito y Asunción Noir, fuentes y animaciones
├── postcss.config.js           # Tailwind + Autoprefixer
├── DESIGN.md                   # Sistema de diseño "Contraste Cinematográfico"
├── plans/
│   └── architecture.md         # Este documento de especificación técnica
└── src/
    ├── main.tsx                # Punto de entrada React 19
    ├── App.tsx                 # Orquestador principal, navegación sticky, selector de modo y secciones
    ├── index.css               # Directivas Tailwind, variables CSS, utilidades glassmorphism y grain
    ├── setupTests.ts           # Configuración de @testing-library/jest-dom para Vitest
    ├── data/
    │   └── ronaldinhoData.ts   # Fuente única de verdad (SSOT) fuertemente tipada
    └── components/             # Componentes modulares (a construir/expandir por frontend-web-ui)
        ├── Navbar.tsx          # Navegación con salto a secciones y toggle "Modo Joga Bonito / Modo Expediente 2020"
        ├── HeroSection.tsx     # Hero cinematográfico + Carta Prime 99 OVR interactiva
        ├── CareerTimeline.tsx  # Línea de tiempo interactiva con filtro por club/selección (1998-2015)
        ├── TrophyVault.tsx     # Bóveda de los 6 trofeos únicos + desbloqueo del Lechón de 16 KG con confetti
        ├── PrisonChronicle.tsx # Expediente Asunción 2020 (Marzo-Agosto 2020): cronología, acta 11-2, anécdotas
        ├── SkillMovesLab.tsx   # Laboratorio interactivo de regates (Elástica, Espaldinha, No-Look Pass, etc.)
        ├── LegendsWall.tsx     # Muro de citas de Messi, Zidane, Maradona, Pelé y Rijkaard/Ramos
        └── Footer.tsx          # Créditos editoriales y resumen estadístico
```

---

## 3. Contratos de Datos (`src/data/ronaldinhoData.ts`)

### 3.1 Interfaces Principales
- `HeroData`: Nombre completo, apodos, fecha/lugar de nacimiento, resumen biográfico, atributos Prime 99 OVR (`pace`, `shooting`, `passing`, `dribbling`, `magic`, `joy`, `freeKick`, `vision`), estadísticas globales (partidos, goles, asistencias, títulos) y citas célebres.
- `CareerMilestone`: `id`, `club`, `country`, `period`, `years`, `role`, `matches`, `goals`, `assists`, `primaryColor`, `secondaryColor`, `badgeText`, `summary`, `highlights[]`, `iconicMoment`, `trophiesWon[]`.
- `TrophyItem`: `id`, `name`, `year`, `competition`, `team`, `category` (`'historic-six' | 'major' | 'secret-unlockable'`), `description`, `significance`, `statsInTournament`, `isSecret`, `rewardWeight`.
- `PrisonChronicleData`:
  - `caseNumber`, `location`, `detentionPeriod`, `totalDaysDetained`, `bailAmountUSD`, `summary`.
  - `timeline`: Eventos día por día (`date`, `dayCount`, `title`, `phase`, `description`, `highlight`, `location`).
  - `finalMatchStats`: Partido final del torneo penitenciario (Resultado `11-2`, `5` goles, `6` asistencias, `100%` participación de gol, premio `Lechón de 16 KG`).
  - `activities`: Talleres de carpintería, footvolley, asado de cumpleaños #40, firma de autógrafos.
  - `testimonials`: Citas verificadas y anécdotas de guardias, reclusos y periodistas.
- `SkillMove`: `id`, `name`, `portugueseName`, `difficulty` (1-5), `signatureRating`, `description`, `biomechanics`, `iconicVictimOrMatch`, `videoCueDescription`, `tags[]`.
- `LegendQuote`: `id`, `author`, `role`, `nationality`, `quote`, `context`, `year`.

---

## 4. Contratos de Interfaz y Experiencia de Usuario (Para `frontend-web-ui`)
1. **Navegación & Conmutador de Atmósfera (`Atmosphere Mode`):**
   - Permite alternar o hacer scroll fluido entre la estética luminosa dorada/esmeralda de **Joga Bonito** y la estética documental **Asunción 2020 Noir** (cambiando acentos o resaltando la sección del Expediente).
2. **Interactividad Obligatoria:**
   - **Filtro de Clubes (`CareerTimeline`):** Selección activa de etapa (Grêmio, PSG, Barcelona, Brasil, Milan, Flamengo, Atlético Mineiro, Querétaro/Fluminense) con transición animada de métricas e historia.
   - **Bóveda de Trofeos (`TrophyVault`):** Filtro por categoría ("Los 6 Únicos en la Historia", "Todos los Títulos", "Expediente Secreto 2020") y botón interactivo para **Desbloquear el Trofeo Penitenciario (Lechón de 16 KG)** disparando `canvas-confetti`.
   - **Expediente Policial / Crónica de Asunción (`PrisonChronicle`):** Selector de fases (Detención, Agrupación Especializada, Torneo de Futsal 11-2, Cumpleaños #40, Hotel Palmaroga, Libertad) y tarjeta técnica del partido 11-2.
   - **Laboratorio de Regates (`SkillMovesLab`):** Tarjetas interactivas con desglose biomecánico y víctima histórica.

---

## 5. Contratos de SEO y Metadatos (Para `seo-web-growth`)
- `index.html` con título optimizado, meta description, canonical, OpenGraph, Twitter Cards y bloque `<script type="application/ld+json">` de tipo `Person` / `Athlete` detallando los premios y trayectoria de Ronaldinho Gaúcho.
- Archivos `public/robots.txt` y `public/sitemap.xml` válidos.

---

## 6. Riesgos y Seguridad (Para `security-auditor` y `qa-test-runner`)
- Cero uso de `dangerouslySetInnerHTML` con contenido no confiable (excepto JSON-LD estático en `index.html`).
- Cero secretos o claves API expuestas en cliente.
- Pruebas unitarias en Vitest verificando la integridad del contrato de datos (`src/data/ronaldinhoData.ts`) y el renderizado e interacción de la interfaz sin errores de consola.
