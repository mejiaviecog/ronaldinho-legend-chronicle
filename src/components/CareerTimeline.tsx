import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  History,
  Trophy,
  Sparkles,
  Calendar,
  MapPin,
  Shirt,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import { CareerMilestone } from '../data/ronaldinhoData';

export interface CareerTimelineProps {
  readonly milestones: readonly CareerMilestone[];
}

type EraRegionFilter = 'all' | 'europa' | 'sudamerica';

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ milestones }) => {
  const [selectedId, setSelectedId] = useState<string>(milestones[2]?.id ?? milestones[0]?.id ?? 'barcelona');
  const [regionFilter, setRegionFilter] = useState<EraRegionFilter>('all');

  const filteredMilestones = milestones.filter((item) => {
    if (regionFilter === 'all') return true;
    if (regionFilter === 'europa') {
      return ['FRA', 'ESP', 'ITA'].includes(item.countryCode);
    }
    return item.countryCode.includes('BRA') || item.countryCode.includes('MEX');
  });

  const activeMilestone =
    milestones.find((m) => m.id === selectedId) ?? filteredMilestones[0] ?? milestones[0];

  const currentIndex = milestones.findIndex((m) => m.id === activeMilestone.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + milestones.length) % milestones.length;
    setSelectedId(milestones[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % milestones.length;
    setSelectedId(milestones[nextIndex].id);
  };

  const totalGoalContributions = activeMilestone.goals + activeMilestone.assists;
  const contributionRate =
    activeMilestone.matches > 0
      ? (totalGoalContributions / activeMilestone.matches).toFixed(2)
      : '0.00';

  return (
    <section
      id="trayectoria"
      className="py-20 sm:py-28 bg-obsidian relative overflow-hidden border-b border-white/10"
    >
      {/* Resplandor dinámico según el color del club activo */}
      <div
        className="pointer-events-none absolute top-1/4 right-10 w-[420px] h-[420px] rounded-full blur-[150px] opacity-20 transition-colors duration-700"
        style={{ backgroundColor: activeMilestone.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-trophy/10 border border-gold-trophy/30 text-gold-light font-mono text-xs uppercase tracking-widest">
              <History className="w-3.5 h-3.5 text-gold-trophy" />
              <span>Atlas Cronológico • 1998 – 2015</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              LAS 8 ERAS DE <span className="text-gradient-gold">UN GENIO NÓMADA</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Selecciona cada capítulo de su travesía desde Porto Alegre hasta París, Barcelona, Milán,
              Río, Belo Horizonte y México para explorar sus números, títulos y noches inmortales.
            </p>
          </div>

          {/* Filtro rápido por continente */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 self-start">
            {[
              { id: 'all', label: 'Todas (8)' },
              { id: 'europa', label: 'Europa (3)' },
              { id: 'sudamerica', label: 'América & Selección (5)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  const nextFilter = tab.id as EraRegionFilter;
                  setRegionFilter(nextFilter);
                  const firstMatch = milestones.find((m) => {
                    if (nextFilter === 'all') return true;
                    if (nextFilter === 'europa') return ['FRA', 'ESP', 'ITA'].includes(m.countryCode);
                    return m.countryCode.includes('BRA') || m.countryCode.includes('MEX');
                  });
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                  regionFilter === tab.id
                    ? 'bg-gold-trophy text-obsidian shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selector Horizontal de Clubes / Etapas */}
        <div
          role="tablist"
          aria-label="Etapas de la carrera de Ronaldinho"
          className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2"
        >
          {filteredMilestones.map((item) => {
            const isSelected = item.id === activeMilestone.id;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`min-h-[56px] px-4 py-3 rounded-2xl border text-left transition-all shrink-0 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-white/15 border-gold-trophy text-white shadow-gold-glow scale-[1.02]'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:bg-white/[0.07] hover:text-slate-200'
                }`}
              >
                <span
                  className="w-3.5 h-10 rounded-full shrink-0"
                  style={{
                    background: `linear-gradient(180deg, ${item.primaryColor} 0%, ${item.secondaryColor} 100%)`,
                  }}
                />
                <div>
                  <div className="font-display font-bold text-sm sm:text-base leading-tight">
                    {item.shortName}
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">{item.period}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tarjeta Detallada de la Era Activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="card-glass rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Barra superior de acento con los colores del club */}
            <div
              className="absolute top-0 left-0 right-0 h-2"
              style={{
                background: `linear-gradient(90deg, ${activeMilestone.primaryColor} 0%, ${activeMilestone.secondaryColor} 50%, #F59E0B 100%)`,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-2">
              {/* Columna Izquierda: Historia, Rol y Momento Cumbre (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className="px-3 py-1 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-white border border-white/20"
                      style={{ backgroundColor: `${activeMilestone.primaryColor}33` }}
                    >
                      {activeMilestone.badgeText}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-gold-trophy" />
                      {activeMilestone.period} ({activeMilestone.yearsCount}{' '}
                      {activeMilestone.yearsCount === 1 ? 'año' : 'años'})
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-pitch" />
                      {activeMilestone.country}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gold-trophy/15 border border-gold-trophy/30 text-gold-light font-mono text-xs font-bold">
                    <Shirt className="w-3.5 h-3.5 text-gold-trophy" />
                    Dorsal #{activeMilestone.shirtNumber}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-gold-trophy mb-1">
                    {activeMilestone.roleTitle}
                  </p>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                    {activeMilestone.club}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                  {activeMilestone.summary}
                </p>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {activeMilestone.detailedStory}
                </p>

                {/* Tarjeta del Momento Cumbre (Iconic Moment) */}
                <div className="rounded-2xl bg-obsidian/90 border border-gold-trophy/30 p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-gold-trophy">
                      <Flame className="w-4 h-4" />
                      Partido & Obra Cumbre de la Era
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {activeMilestone.iconicMoment.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display font-extrabold text-lg sm:text-xl text-white">
                      {activeMilestone.iconicMoment.title}
                    </h4>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-pitch/15 border border-emerald-pitch/40 font-mono text-xs font-bold text-emerald-pitch">
                      vs {activeMilestone.iconicMoment.opponent} ({activeMilestone.iconicMoment.score})
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeMilestone.iconicMoment.description}
                  </p>
                </div>
              </div>

              {/* Columna Derecha: Telemetría Estadística, Hitos y Trofeos (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                {/* Grid de Estadísticas Animadas */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                    Registro Oficial en {activeMilestone.shortName}
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-obsidian/80 border border-white/10">
                      <div className="font-display font-black text-3xl text-white tabular-nums">
                        {activeMilestone.matches}
                      </div>
                      <div className="text-xs font-mono text-slate-400 uppercase mt-1">
                        Partidos
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-obsidian/80 border border-gold-trophy/30">
                      <div className="font-display font-black text-3xl text-gold-light tabular-nums">
                        {activeMilestone.goals}
                      </div>
                      <div className="text-xs font-mono text-gold-trophy uppercase mt-1">
                        Goles
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-obsidian/80 border border-emerald-pitch/30 col-span-2 sm:col-span-1">
                      <div className="font-display font-black text-3xl text-emerald-pitch tabular-nums">
                        {activeMilestone.assists}
                      </div>
                      <div className="text-xs font-mono text-emerald-pitch uppercase mt-1">
                        Asistencias
                      </div>
                    </div>
                  </div>

                  {/* Barra de impacto G+A */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">
                        Impacto Directo (Goles + Asistencias)
                      </div>
                      <div className="font-display font-bold text-lg text-white mt-0.5">
                        {totalGoalContributions} contribuciones en {activeMilestone.matches} PJ
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-black text-2xl text-neon-cyan tabular-nums">
                        {contributionRate}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase">
                        G+A / Partido
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hitos Clave */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-trophy" />
                    Hitos Clave de la Etapa
                  </h4>
                  <ul className="space-y-2">
                    {activeMilestone.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-pitch shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Palmarés de la Etapa */}
                <div className="space-y-2.5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-gold-trophy" />
                    Palmarés Conquistado ({activeMilestone.trophiesWon.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.trophiesWon.map((trophy) => (
                      <span
                        key={trophy}
                        className="px-3 py-1.5 rounded-xl bg-gold-trophy/10 border border-gold-trophy/30 text-gold-light font-mono text-xs font-medium"
                      >
                        🏆 {trophy}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Controles Anterior / Siguiente Era */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Era Anterior</span>
                  </button>
                  <span className="font-mono text-xs text-slate-400">
                    Etapa {currentIndex + 1} de {milestones.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-slate-200 flex items-center gap-2 transition-all"
                  >
                    <span>Siguiente Era</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareerTimeline;
