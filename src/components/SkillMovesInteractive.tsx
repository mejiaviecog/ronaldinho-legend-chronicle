import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Sparkles,
  Star,
  Zap,
  Crosshair,
  Play,
  RotateCcw,
  Award,
} from 'lucide-react';
import { SkillMove } from '../data/ronaldinhoData';

export interface SkillMovesInteractiveProps {
  readonly skills: readonly SkillMove[];
}

const SVG_PATHS_BY_SKILL: Readonly<Record<string, { ballPath: string; defenderX: number; defenderY: number; label: string }>> = {
  elastica: {
    ballPath: 'M 40 130 Q 110 40, 165 115 T 290 65',
    defenderX: 155,
    defenderY: 95,
    label: 'Amague Exterior → Latigazo Interno (0.18s)',
  },
  espaldinha: {
    ballPath: 'M 45 35 Q 145 140, 165 110 Q 210 60, 290 85',
    defenderX: 180,
    defenderY: 125,
    label: 'Parábola Aérea → Rebote de Omóplato al Espacio',
  },
  'no-look-pass': {
    ballPath: 'M 45 110 L 150 110 L 285 40',
    defenderX: 195,
    defenderY: 125,
    label: 'Mirada al Flanco Sur (Señuelo) → Pase Filtrado al Norte',
  },
  'sombrero-taco': {
    ballPath: 'M 50 135 Q 160 10, 275 130',
    defenderX: 160,
    defenderY: 115,
    label: 'Elevación de Taco sobre el Marcador → Control de Empeine',
  },
  'under-wall-freekick': {
    ballPath: 'M 40 125 L 165 128 L 295 118',
    defenderX: 165,
    defenderY: 65,
    label: 'Salto de Barrera (Arriba) → Disparo Raso a Ras de Césped',
  },
  'toe-poke-chelsea': {
    ballPath: 'M 65 110 Q 95 95, 115 110 L 295 35',
    defenderX: 155,
    defenderY: 100,
    label: 'Triple Cadereo Estático → Punterazo Seco al Ángulo',
  },
};

export const SkillMovesInteractive: React.FC<SkillMovesInteractiveProps> = ({ skills }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(skills[0]?.id ?? 'elastica');
  const [replayKey, setReplayKey] = useState<number>(0);

  const activeSkill = skills.find((s) => s.id === selectedSkillId) ?? skills[0];
  const vectorConfig = SVG_PATHS_BY_SKILL[activeSkill.id] ?? SVG_PATHS_BY_SKILL.elastica;

  const handleSelectSkill = (id: string) => {
    setSelectedSkillId(id);
    setReplayKey((prev) => prev + 1);
  };

  return (
    <section
      id="regates"
      className="py-20 sm:py-28 bg-obsidian relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute top-20 left-10 w-96 h-96 rounded-full bg-neon-cyan/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-trophy/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/15 border border-neon-cyan/30 text-neon-cyan font-mono text-xs uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" />
              <span>Laboratorio Biomecánico • Joga Bonito Lab</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              ANATOMÍA DE SUS <span className="text-gradient-brasil">6 REGATES SAGRADOS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Explora la física, el engaño visual y la ejecución paso a paso de las jugadas con las
              que Ronaldinho reescribió la geometría del fútbol mundial.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setReplayKey((prev) => prev + 1)}
            className="min-h-[44px] px-4 py-2.5 rounded-xl bg-neon-cyan/15 hover:bg-neon-cyan/25 border border-neon-cyan/40 text-neon-cyan font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 self-start transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Simular Trayectoria SVG</span>
          </button>
        </div>

        {/* Selector de los 6 Regates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill, idx) => {
            const isSelected = skill.id === activeSkill.id;
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => handleSelectSkill(skill.id)}
                className={`min-h-[72px] p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-trophy/20 to-neon-cyan/15 border-gold-trophy text-white shadow-gold-glow'
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-gold-light">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">
                    🇧🇷 {skill.portugueseName}
                  </div>
                </div>

                <div className="flex items-center gap-0.5 shrink-0" aria-label={`Dificultad ${skill.difficulty} de 5`}>
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-3.5 h-3.5 ${
                        starIdx < skill.difficulty
                          ? 'text-gold-trophy fill-gold-trophy'
                          : 'text-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Panel Principal del Laboratorio */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
            className="card-glass rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Columna Izquierda: Visualizador Táctico SVG Animado + Barras (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl bg-obsidian border border-neon-cyan/30 p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neon-cyan uppercase tracking-wider flex items-center gap-1.5">
                    <Crosshair className="w-4 h-4" />
                    Telemetría de Trayectoria R10
                  </span>
                  <span className="text-gold-light">{vectorConfig.label}</span>
                </div>

                {/* Cancha Táctica SVG */}
                <div className="relative rounded-xl bg-[#071318] border border-emerald-pitch/30 overflow-hidden">
                  <svg
                    key={`${activeSkill.id}-${replayKey}`}
                    viewBox="0 0 340 165"
                    className="w-full h-48 sm:h-56"
                    role="img"
                    aria-label={`Diagrama táctico de ${activeSkill.name}`}
                  >
                    {/* Grilla de cancha */}
                    <rect width="340" height="165" fill="#071318" />
                    <line x1="170" y1="0" x2="170" y2="165" stroke="rgba(16,185,129,0.18)" strokeDasharray="4 4" />
                    <circle cx="170" cy="82.5" r="32" fill="none" stroke="rgba(16,185,129,0.18)" />
                    <rect x="295" y="45" width="45" height="75" fill="none" stroke="rgba(16,185,129,0.28)" />

                    {/* Rival / Defensor */}
                    <circle
                      cx={vectorConfig.defenderX}
                      cy={vectorConfig.defenderY}
                      r="11"
                      fill="rgba(239, 68, 68, 0.25)"
                      stroke="#EF4444"
                      strokeWidth="2"
                    />
                    <text
                      x={vectorConfig.defenderX}
                      y={vectorConfig.defenderY + 4}
                      textAnchor="middle"
                      fill="#FCA5A5"
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      DEF
                    </text>

                    {/* Trayectoria animada del balón */}
                    <motion.path
                      d={vectorConfig.ballPath}
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.3 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.4, ease: 'easeInOut' }}
                    />

                    {/* Punto de inicio R10 */}
                    <circle cx="45" cy="118" r="11" fill="#10B981" />
                    <text
                      x="45"
                      y="121"
                      textAnchor="middle"
                      fill="#07090E"
                      fontWeight="bold"
                      fontSize="8"
                      fontFamily="monospace"
                    >
                      R10
                    </text>

                    {/* Destino / Gol o Pase */}
                    <circle cx="290" cy="65" r="8" fill="#06B6D4" />
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-pitch inline-block" />
                    Inicio Ronaldinho (#10)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-trophy inline-block" />
                    Vector de Balón
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-stamp-red inline-block" />
                    Defensor Superado
                  </span>
                </div>
              </div>

              {/* Barras de Ejecución Biomecánica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 uppercase">Índice de Magia</span>
                    <span className="text-gold-light font-bold">{activeSkill.magicRating}/100</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkill.magicRating}%` }}
                      transition={{ duration: 0.7 }}
                      className="h-full bg-gradient-to-r from-gold-trophy to-gold-light"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 uppercase">Imprevisibilidad</span>
                    <span className="text-neon-cyan font-bold">
                      {activeSkill.unpredictability}/100
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeSkill.unpredictability}%` }}
                      transition={{ duration: 0.7 }}
                      className="h-full bg-gradient-to-r from-neon-cyan to-emerald-pitch"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Explicación Biomecánica y Partido Icónico (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold-trophy/15 border border-gold-trophy/40 text-gold-light font-mono text-xs font-bold">
                    {activeSkill.portugueseName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-xs">
                    Alias: {activeSkill.alsoKnownAs}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {activeSkill.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {activeSkill.description}
              </p>

              {/* Secuencia Biomecánica en 3 Fases */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-widest text-neon-cyan flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Secuencia Biomecánica de Ejecución
                </h4>
                <div className="space-y-2">
                  {activeSkill.biomechanics.map((step, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-obsidian/80 border border-white/10 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
                    >
                      <Play className="w-4 h-4 text-gold-trophy shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Víctima / Partido Icónico */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-trophy/10 to-emerald-pitch/10 border border-gold-trophy/30 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-gold-light font-bold uppercase flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-gold-trophy" />
                    Momento Inmortal: {activeSkill.iconicVictimOrMatch.year}
                  </span>
                  <span className="text-emerald-pitch">
                    Víctima: {activeSkill.iconicVictimOrMatch.victim}
                  </span>
                </div>
                <div className="font-display font-bold text-base text-white">
                  {activeSkill.iconicVictimOrMatch.match}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeSkill.iconicVictimOrMatch.story}
                </p>
              </div>

              {/* Etiquetas Técnicas */}
              <div className="flex flex-wrap gap-2">
                {activeSkill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillMovesInteractive;
