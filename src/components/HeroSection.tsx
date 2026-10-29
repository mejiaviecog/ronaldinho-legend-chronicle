import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Trophy,
  Flame,
  FileWarning,
  Quote,
  MapPin,
  Calendar,
  Award,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { HeroData } from '../data/ronaldinhoData';

export interface HeroSectionProps {
  readonly data: HeroData;
  readonly onExploreChronicle: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, onExploreChronicle }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [magicCount, setMagicCount] = useState(10);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [selectedStatKey, setSelectedStatKey] = useState<string>(data.primeStats[0]?.key ?? 'dribbling');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleInvokeMagic = () => {
    setQuoteIndex((prev) => (prev + 1) % data.iconicQuotes.length);
    setMagicCount((prev) => prev + 1);

    try {
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FDE68A', '#10B981', '#06B6D4'],
      });
    } catch {
      // Fallback silencioso en entornos de test sin canvas nativo
    }
  };

  const currentQuote = data.iconicQuotes[quoteIndex] ?? data.iconicQuotes[0];
  const selectedStat =
    data.primeStats.find((s) => s.key === selectedStatKey) ?? data.primeStats[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-joga-gradient"
    >
      {/* Luces ambientales y partículas decorativas */}
      <div className="pointer-events-none absolute top-20 left-1/4 w-96 h-96 rounded-full bg-gold-trophy/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-emerald-pitch/15 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Narrativa Principal (7 columnas en Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Etiquetas Superiores */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-gold-trophy/15 text-gold-light border border-gold-trophy/40 shadow-gold-glow">
                <Trophy className="w-3.5 h-3.5 text-gold-trophy" />
                {data.cardEdition}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-pitch bg-emerald-pitch/10 border border-emerald-pitch/30">
                <Sparkles className="w-3.5 h-3.5" />
                Único Campeón de los 6 Grandes Tronos
              </span>
            </div>

            {/* Titular Épico */}
            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-400">
                {data.fullName} • {data.nicknames.join(' / ')}
              </p>
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.03] text-white">
                LA SONRISA QUE{' '}
                <span className="text-gradient-brasil">INMORTALIZÓ</span> EL FÚTBOL.
              </h1>
            </div>

            {/* Subtítulo y Biografía */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed">
              {data.subheadline}
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed border-l-2 border-gold-trophy/50 pl-4">
              {data.biographyLead}
            </p>

            {/* Botones de Acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleInvokeMagic}
                className="min-h-[52px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold-trophy via-amber-400 to-gold-trophy text-obsidian font-display font-black text-sm sm:text-base tracking-wide shadow-gold-glow hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5" />
                <span>Invocar Magia de O Bruxo</span>
                <span className="px-2 py-0.5 rounded-full bg-obsidian/20 font-mono text-xs">
                  R{magicCount}
                </span>
              </button>

              <button
                type="button"
                onClick={onExploreChronicle}
                className="min-h-[52px] px-6 py-3.5 rounded-2xl bg-stamp-red/15 hover:bg-stamp-red/25 text-red-100 border border-stamp-red/40 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
              >
                <FileWarning className="w-4 h-4 text-stamp-red shrink-0" />
                <span>Expediente Asunción 2020 (11-2)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Cita Rotativa Interactiva */}
            <div className="card-glass rounded-2xl p-4 sm:p-5 border border-gold-trophy/20 relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gold-trophy/15 text-gold-trophy shrink-0">
                  <Quote className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm sm:text-base italic text-slate-100 font-medium"
                    >
                      “{currentQuote.quote}”
                    </motion.blockquote>
                  </AnimatePresence>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                    <span>
                      — {currentQuote.context} ({currentQuote.year})
                    </span>
                    <span className="text-gold-trophy">
                      Cita {quoteIndex + 1} de {data.iconicQuotes.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contadores Rápidos de Carrera */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
              <div className="card-glass rounded-xl p-3.5 border border-white/10">
                <div className="font-display font-black text-2xl sm:text-3xl text-white tabular-nums">
                  {data.careerTotals.officialMatches}
                </div>
                <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                  Partidos Oficiales
                </div>
              </div>
              <div className="card-glass rounded-xl p-3.5 border border-white/10">
                <div className="font-display font-black text-2xl sm:text-3xl text-gold-light tabular-nums">
                  {data.careerTotals.officialGoals}
                </div>
                <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                  Goles Oficiales
                </div>
              </div>
              <div className="card-glass rounded-xl p-3.5 border border-white/10">
                <div className="font-display font-black text-2xl sm:text-3xl text-emerald-pitch tabular-nums">
                  {data.careerTotals.officialAssists}
                </div>
                <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                  Asistencias
                </div>
              </div>
              <div className="card-glass rounded-xl p-3.5 border border-white/10">
                <div className="font-display font-black text-2xl sm:text-3xl text-gold-trophy tabular-nums">
                  {data.careerTotals.majorTrophies}
                </div>
                <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                  Títulos Oficiales
                </div>
              </div>
              <div className="card-glass rounded-xl p-3.5 border border-white/10">
                <div className="font-display font-black text-2xl sm:text-3xl text-neon-cyan tabular-nums">
                  {data.careerTotals.freeKickGoals}
                </div>
                <div className="text-[11px] font-mono uppercase text-slate-400 mt-0.5">
                  Goles Tiro Libre
                </div>
              </div>
              <div className="card-glass rounded-xl p-3.5 border border-gold-trophy/30 bg-gold-trophy/5">
                <div className="font-display font-black text-2xl sm:text-3xl text-gold-light tabular-nums">
                  16 KG
                </div>
                <div className="text-[11px] font-mono uppercase text-gold-trophy mt-0.5">
                  Lechón Asunción
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Carta Interactiva 3D Tilt "PRIME R10 - 99 OVR" (5 columnas) */}
          <div className="lg:col-span-5 perspective-1000">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative rounded-3xl p-[2px] bg-gradient-to-br from-gold-light via-gold-trophy to-emerald-pitch shadow-gold-glow"
            >
              <div className="rounded-[22px] bg-obsidian/95 p-5 sm:p-6 space-y-5 relative overflow-hidden">
                {/* Cabecera de la Carta Prime 99 OVR */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-2xl bg-gradient-to-b from-gold-light to-gold-trophy text-obsidian text-center shadow-md">
                      <div className="font-display font-black text-2xl sm:text-3xl leading-none">
                        {data.overallRating}
                      </div>
                      <div className="font-mono font-extrabold text-[10px] tracking-widest uppercase">
                        CAM / LW
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-black text-xl text-white tracking-tight">
                          RONALDINHO
                        </span>
                        <Award className="w-4 h-4 text-gold-trophy" />
                      </div>
                      <p className="text-xs font-mono text-slate-400">
                        BRA • ICON PRIME IMMORTAL
                      </p>
                    </div>
                  </div>
                  <div className="text-right font-mono text-[11px] text-emerald-pitch bg-emerald-pitch/10 border border-emerald-pitch/30 px-2.5 py-1 rounded-lg">
                    5★ SKILLS / 5★ MAGIA
                  </div>
                </div>

                {/* Ilustración / Fotografía Hero de O Bruxo */}
                <div className="relative rounded-2xl overflow-hidden border border-gold-trophy/30 group aspect-[4/3] bg-slate-900">
                  <img
                    src="/assets/hero-bruxo.jpg"
                    alt="Ronaldinho Gaúcho - O Bruxo Prime 99 OVR"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-obsidian/80 backdrop-blur-md border border-gold-trophy/40 font-mono text-[10px] text-gold-light uppercase tracking-wider">
                        Porto Alegre, 1980
                      </span>
                      <h2 className="font-display font-extrabold text-lg text-white drop-shadow">
                        O Bruxo • El Rey del Joga Bonito
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-pitch/90 text-obsidian font-mono font-bold text-xs shadow">
                      #10 ETERNO
                    </span>
                  </div>
                </div>

                {/* Barras Animadas de Atributos Prime */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-gold-trophy" />
                      Telemetría Prime (Haz clic en un atributo)
                    </span>
                    <span className="text-gold-light font-bold">MÁXIMO HISTÓRICO</span>
                  </div>

                  <div className="space-y-2.5">
                    {data.primeStats.map((stat) => {
                      const isSelected = stat.key === selectedStat.key;
                      const barColor =
                        stat.accentColor === 'gold'
                          ? 'from-gold-trophy to-gold-light'
                          : stat.accentColor === 'emerald'
                          ? 'from-emerald-pitch to-teal-300'
                          : 'from-neon-cyan to-sky-300';

                      return (
                        <button
                          key={stat.key}
                          type="button"
                          onClick={() => setSelectedStatKey(stat.key)}
                          className={`w-full text-left p-2.5 rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-white/10 border-gold-trophy/50'
                              : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-semibold text-slate-200 flex items-center gap-2">
                              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-gold-light">
                                {stat.shortLabel}
                              </span>
                              {stat.label}
                            </span>
                            <span className="font-mono font-black text-sm text-gold-light tabular-nums">
                              {stat.value}
                              <span className="text-slate-500 text-[10px]">/{stat.maxValue}</span>
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(stat.value / stat.maxValue) * 100}%` }}
                              transition={{ duration: 0.9, ease: 'easeOut' }}
                              className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detalle del atributo seleccionado */}
                  <div className="p-3 rounded-xl bg-obsidian border border-white/10 text-xs text-slate-300 flex items-start gap-2.5">
                    <Flame className="w-4 h-4 text-gold-trophy shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">{selectedStat.label}: </span>
                      <span>{selectedStat.description}</span>
                    </div>
                  </div>
                </div>

                {/* Metadatos biográficos inferiores */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-trophy" />
                    {data.birthDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-pitch" />
                    {data.birthPlace}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
