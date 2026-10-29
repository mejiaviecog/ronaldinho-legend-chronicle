# DESIGN SYSTEM — "Contraste Cinematográfico: Joga Bonito vs Asunción 2020 Noir"

## 1. Filosofía Visual y Dirección de Arte
Este proyecto rinde homenaje a la dualidad más fascinante en la historia del fútbol mundial: **Ronaldinho Gaúcho**, el único futbolista en ganar Copa del Mundo, Champions League, Copa Libertadores, Balón de Oro, Copa América y Copa Confederaciones, y también el hombre que en marzo de 2020 transformó el patio de una prisión de máxima seguridad en Asunción, Paraguay, en una fiesta de futsal ganando un lechón de 16 kilos.

El sistema de diseño se divide en dos atmósferas cromáticas complementarias sobre un lienzo oscuro de alto contraste:

1. **Acto I — "Joga Bonito" (El Mago Inmortal):**
   - Evoca los reflectores del Camp Nou, el Maracaná y San Siro, el brillo del Balón de Oro 2005 y el césped brasileño al atardecer.
   - Superficies de obsidiana profunda bañadas por resplandores en **Oro Trofeo (`#F59E0B`)** y **Esmeralda Brasil (`#10B981`)**.
2. **Acto II — "Asunción 2020 Noir" (El Expediente Penitenciario):**
   - Estética de documental investigativo, dossier clasificado y crónica nocturna.
   - Superficies de **Acero Nocturno (`#09090B`)**, bordes técnicos tipo expediente, sellos de archivo en **Ámbar Policial (`#F59E0B`)**, alertas en **Rojo Sello (`#EF4444`)** y acentos en **Neón Cian/Lima** para las métricas del legendario partido `11-2`.

---

## 2. Paleta de Colores y Tokens Semánticos

### 2.1 Fondos (Surfaces)
| Token | Hex | Uso Semántico |
| :--- | :--- | :--- |
| `bg-obsidian` | `#07090E` | Fondo principal del universo Joga Bonito |
| `bg-noir-steel` | `#09090B` | Fondo principal del bloque documental Asunción 2020 Noir |
| `bg-card-glass` | `rgba(17, 24, 39, 0.72)` | Superficie translúcida para tarjetas interactivas con `backdrop-blur-md` |
| `bg-dossier` | `#121318` | Papel oscuro técnico para expedientes, actas y cronología policial |

### 2.2 Acentos y Luces (Accents)
| Token | Hex | Uso Semántico |
| :--- | :--- | :--- |
| `gold-trophy` | `#F59E0B` | Oro Balón de Oro / Ámbar Policial (CTAs primarios, trofeos, insignias 99 OVR) |
| `gold-light` | `#FDE68A` | Destellos tipográficos, gradientes metálicos y bordes de cartas leyenda |
| `emerald-pitch` | `#10B981` | Verde Joga Bonito / Césped sagrado / Indicadores de éxito y victoria 11-2 |
| `neon-cyan` | `#06B6D4` | Telemetría, análisis biomecánico de regates y contrastes Noir |
| `stamp-red` | `#EF4444` | Sellos de "EXPEDIENTE CLASIFICADO", alertas judiciales y fechas clave |

### 2.3 Texto y Jerarquía Lectura
| Token | Hex | Uso Semántico |
| :--- | :--- | :--- |
| `text-primary` | `#F8FAFC` | Titulares y cuerpo principal (contraste AAA sobre obsidiana) |
| `text-secondary` | `#CBD5E1` | Narrativa editorial, descripciones de hitos y citas |
| `text-muted` | `#94A3B8` | Metadatos, etiquetas técnicas, pies de foto y fechas secundarias |

---

## 3. Tipografía y Escala Editorial

- **Display / Titulares Épicos (`font-display`):** `'Outfit'`, `'Syne'`, o `'Plus Jakarta Sans'` (Pesos `700`, `800`, `900`). Tracking cerrado (`tracking-tight`), ideal para números gigantes (`99 OVR`, `11-2`, `16 KG`).
- **Cuerpo Editorial (`font-sans`):** `'Inter'` o `'Plus Jakarta Sans'` (Pesos `400`, `500`, `600`). Lectura fluida y cómoda con `leading-relaxed`.
- **Expediente & Telemetría (`font-mono`):** `'JetBrains Mono'` o `'Fira Code'`. Obligatorio para códigos de caso (`EXP-2020-ASU-0306`), fechas cronológicas, coordenadas y estadísticas (`tabular-nums`).

---

## 4. Componentes Clave y Micro-Interacciones

1. **Carta Leyenda Prime 99 OVR (Hero Card):**
   - Borde con gradiente metálico dorado/esmeralda, efecto de brillo sutil y barras de progreso animadas para `Regate 99`, `Magia 99`, `Alegría 100`, `Visión 97`, `Tiro Libre 95`.
2. **Selector de Era (Career Timeline):**
   - Píldoras horizontales interactivas con los colores oficiales de cada club (Grêmio celeste/negro, PSG azul/rojo, Barça blaugrana/oro, Brasil verdeamarela, Milan rossonero, Mineiro alvinegro).
3. **Bóveda del Único en la Historia + Easter Egg del Lechón de 16 KG:**
   - Grid asimétrico para los 6 grandes trofeos continentales/mundiales y tarjeta especial bloqueada/desbloqueable que al activarse lanza confetti dorado y revela la historia del Torneo Penitenciario 2020.
4. **Dossier Asunción 2020 (Noir Section):**
   - Cabecera con sello `"AGRUPACIÓN ESPECIALIZADA - ASUNCIÓN, PARAGUAY"`, línea de tiempo vertical/horizontal de los 171 días (32 en prisión + 139 en arresto domiciliario en el Hotel Palmaroga) y marcador estilo futsal de la final `11 - 2`.

---

## 5. Reglas de Responsividad y Accesibilidad
- **Mobile (`< 640px`):** Navegación compacta, grillas de 1 columna, selectores horizontales con scroll suave (`overflow-x-auto`), botones con área táctil mínima de `44x44px`.
- **Tablet (`640px - 1024px`):** Grillas de 2 columnas, balance entre narrativa y tarjetas de estadísticas.
- **Desktop (`> 1024px`):** Layout editorial de 12 columnas (`max-w-7xl`), composición asimétrica Hero + Carta 99 OVR, y expediente en vista panorámica.
- **Accesibilidad:** Contraste WCAG AA/AAA garantizado, atributos `aria-label` en controles interactivos y soporte completo para navegación por teclado.
