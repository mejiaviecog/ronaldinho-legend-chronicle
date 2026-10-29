import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FileWarning,
  ShieldAlert,
  Calendar,
  MapPin,
  Trophy,
  Sparkles,
  Quote,
  Scale,
  Clock,
  CheckCircle,
  Users,
  Flame,
} from 'lucide-react';
import { PrisonChronicleData, PrisonTimelineEvent } from '../data/ronaldinhoData';

export interface PrisonChronicleSectionProps {
  readonly data: PrisonChronicleData;
}

export const PrisonChronicleSection: React.FC<PrisonChronicleSectionProps> = ({ data }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(
    data.timeline[2]?.id ?? data.timeline[0]?.id ?? 'day-9-futsal-final'
  );
  const [celebrationCount, setCelebrationCount] = useState<number>(1);
  const [activeMatchTab, setActiveMatchTab] = useState<'overview' | 'goals-breakdown' | 'rules'>(
    'overview'
  );

  const selectedEvent: PrisonTimelineEvent =
    data.timeline.find((ev) => ev.id === selectedEventId) ?? data.timeline[0];

  const handleCelebratePigTrophy = () => {
    setCelebrationCount((prev) => prev + 1);
    try {
      confetti({
        particleCount: 95,
        spread: 75,
        origin: { y: 0.65 },
        colors: ['#F59E0B', '#EF4444', '#10B981', '#FDE68A'],
      });
    } catch {
      // Ignorar en entornos sin canvas
    }
  };

  return (
    <section
      id="paraguay-2020"
      className="py-20 sm:py-28 bg-noir-gradient relative overflow-hidden border-b border-stamp-red/30"
    >
      {/* Textura y atmósfera Noir */}
      <div className="pointer-events-none absolute top-16 right-10 w-96 h-96 rounded-full bg-stamp-red/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-16 left-10 w-96 h-96 rounded-full bg-gold-trophy/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        {/* Cabecera del Dossier Policial / Judicial */}
        <div className="dossier-card rounded-3xl p-6 sm:p-10 shadow-noir-dossier relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stamp-red/20 border border-stamp-red/50 text-red-200 font-mono text-xs font-bold uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4 text-stamp-red" />
                EXPEDIENTE CLASIFICADO • {data.caseCode}
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gold-trophy/15 border border-gold-trophy/40 text-gold-light font-mono text-xs uppercase">
                {data.dateRange}
              </span>
            </div>

            <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-stamp-red" />
              <span>{data.city}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-center">
            {/* Narrativa Documental y Métricas Judiciales (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-trophy">
                  CRÓNICA NOIR • {data.facilityName}
                </p>
                <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  {data.operationTitle}:{' '}
                  <span className="text-gradient-noir">171 DÍAS EN PARAGUAY</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                {data.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {data.editorialIntro}
              </p>

              <div className="p-4 rounded-2xl bg-black/50 border border-stamp-red/30 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-stamp-red font-bold">
                  <Scale className="w-4 h-4" />
                  <span>Causa Judicial Oficial</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{data.legalReason}</p>
              </div>

              {/* Resumen de Días y Fianza */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-stamp-red/30">
                  <div className="font-display font-black text-2xl sm:text-3xl text-stamp-red tabular-nums">
                    {data.daysInMaximumSecurity} Días
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase mt-0.5">
                    En Agrupación Especializada
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-gold-trophy/30">
                  <div className="font-display font-black text-2xl sm:text-3xl text-gold-light tabular-nums">
                    {data.daysInHouseArrest} Días
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase mt-0.5">
                    Arresto en Hotel Palmaroga
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="font-display font-black text-2xl sm:text-3xl text-white tabular-nums">
                    {data.totalDaysInParaguay} Días
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase mt-0.5">
                    Total en Asunción (2020)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-emerald-pitch/30">
                  <div className="font-display font-black text-2xl sm:text-3xl text-emerald-pitch tabular-nums">
                    $1.6M
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase mt-0.5">
                    Fianza Real USD
                  </div>
                </div>
              </div>
            </div>

            {/* Evidencia Fotográfica Ilustrada (/assets/paraguay-2020.jpg) (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-black/80 border-2 border-gold-trophy/40 p-3 shadow-2xl relative">
                <div className="absolute top-6 right-6 z-20 rotate-6 px-3 py-1 rounded bg-stamp-red/90 text-white font-mono font-black text-xs uppercase tracking-widest shadow-lg border border-white/20">
                  EVIDENCIA #11-2 • 16 KG
                </div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-zinc-900">
                  <img
                    src="/assets/paraguay-2020.jpg"
                    alt="Expediente Asunción 2020 - Ronaldinho en el torneo de futsal de la Agrupación Especializada"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 space-y-1">
                    <span className="inline-block px-2 py-0.5 rounded bg-gold-trophy/20 border border-gold-trophy/50 font-mono text-[10px] text-gold-light uppercase">
                      14 de marzo de 2020 • Asunción, Paraguay
                    </span>
                    <p className="font-display font-bold text-sm sm:text-base text-white">
                      Polideportivo de la Agrupación Especializada: Campeón 11-2
                    </p>
                  </div>
                </div>
                <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>ARCHIVO: ASU-POL-2020</span>
                  <span className="text-emerald-pitch font-bold">ESTADO: CASO CERRADO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea de Tiempo Interactiva de las 6 Fases del Caso */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-stamp-red flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Bitácora Día por Día • 6 de Marzo al 24 de Agosto de 2020
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                Cronología de las 6 Fases del Expediente
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              Selecciona una fecha para abrir el parte oficial
            </span>
          </div>

          {/* Botones de las 6 Fases */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {data.timeline.map((event) => {
              const isSelected = event.id === selectedEvent.id;
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedEventId(event.id)}
                  className={`min-h-[76px] p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-stamp-red/20 border-stamp-red text-white shadow-lg shadow-stamp-red/15'
                      : 'bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.07]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 w-full">
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-black/50 text-gold-light">
                      Día {event.dayNumber}
                    </span>
                    {event.highlightMetric && (
                      <span className="font-mono text-[10px] text-emerald-pitch font-bold truncate">
                        {event.highlightMetric}
                      </span>
                    )}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm line-clamp-2 mt-2">
                    {event.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Vista del Parte Oficial Seleccionado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEvent.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="dossier-card rounded-3xl p-6 sm:p-8 border border-gold-trophy/30 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md bg-gold-trophy text-obsidian font-mono font-black text-xs uppercase">
                    DÍA {selectedEvent.dayNumber} DE 171
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-gold-light font-semibold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-trophy" />
                    {selectedEvent.date}
                  </span>
                </div>
                <span className="font-mono text-xs text-stamp-red uppercase tracking-wider px-3 py-1 rounded bg-stamp-red/15 border border-stamp-red/30">
                  {selectedEvent.officialNote}
                </span>
              </div>

              <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                {selectedEvent.title}
              </h4>

              <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-pitch" />
                Ubicación: {selectedEvent.location}
              </p>

              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                {selectedEvent.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5">
                {selectedEvent.details}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Marcador Táctico Interactivo de la Final Penitenciaria (11 - 2) */}
        <div className="rounded-3xl p-[2px] bg-gradient-to-r from-gold-trophy via-stamp-red to-emerald-pitch shadow-gold-glow">
          <div className="rounded-[22px] bg-obsidian/95 p-6 sm:p-10 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-pitch/15 border border-emerald-pitch/40 text-emerald-pitch font-mono text-xs font-bold uppercase">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{data.finalMatchReport.title}</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {data.finalMatchReport.tournamentName}
                </h3>
                <p className="font-mono text-xs text-slate-400">
                  📅 {data.finalMatchReport.date} • 📍 {data.finalMatchReport.venue}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCelebratePigTrophy}
                className="min-h-[48px] px-5 py-3 rounded-2xl bg-gradient-to-r from-gold-trophy to-amber-500 text-obsidian font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-2 self-start"
              >
                <Sparkles className="w-4 h-4" />
                <span>Celebrar el Lechón de {data.finalMatchReport.prizeWeightKg} KG</span>
                <span className="px-2 py-0.5 rounded-full bg-obsidian/20 font-mono text-xs">
                  x{celebrationCount}
                </span>
              </button>
            </div>

            {/* Tablero Electrónico 11 - 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-black/60 rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="lg:col-span-4 text-center lg:text-left space-y-1">
                <span className="font-mono text-[11px] uppercase text-emerald-pitch tracking-widest">
                  EQUIPO CAMPEÓN (RONALDINHO #10)
                </span>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  {data.finalMatchReport.teamRonaldinho}
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Internos & Oficiales de la Agrupación
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 px-6 rounded-2xl bg-obsidian border border-gold-trophy/40 shadow-inner">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-light mb-1">
                  RESULTADO OFICIAL FINAL
                </span>
                <div className="font-display font-black text-5xl sm:text-6xl text-gradient-gold tracking-tight tabular-nums">
                  {data.finalMatchReport.finalScore}
                </div>
                <span className="mt-2 px-3 py-0.5 rounded-full bg-emerald-pitch/20 text-emerald-pitch font-mono text-[11px] font-bold">
                  100% PARTICIPACIÓN DE DINHO (5G + 6A)
                </span>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right space-y-1">
                <span className="font-mono text-[11px] uppercase text-slate-400 tracking-widest">
                  RIVAL FINALISTA
                </span>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-slate-200">
                  {data.finalMatchReport.opponentTeam}
                </div>
                <p className="text-xs font-mono text-slate-400">
                  Subcampeón del Torneo Interno
                </p>
              </div>
            </div>

            {/* Tarjetas de Estadísticas del Partido 11-2 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {data.finalMatchReport.scoreboardStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1"
                >
                  <div className="text-[11px] font-mono uppercase text-slate-400">{stat.label}</div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-gold-light">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-300">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Pestañas Interactivas del Acta del Partido */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'overview', label: 'Crónica del Partido en el Cemento' },
                  { id: 'goals-breakdown', label: 'Desglose Táctico: 5 Goles + 6 Asistencias' },
                  { id: 'rules', label: 'La Regla Prohibida & El Premio de 16 KG' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveMatchTab(tab.id as 'overview' | 'goals-breakdown' | 'rules')
                    }
                    className={`min-h-[42px] px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all ${
                      activeMatchTab === tab.id
                        ? 'bg-gold-trophy text-obsidian'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10">
                {activeMatchTab === 'overview' && (
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                      <Flame className="w-5 h-5 text-gold-trophy" />
                      Crónica desde el Pabellón de Asunción
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {data.finalMatchReport.narrative}
                    </p>
                  </div>
                )}

                {activeMatchTab === 'goals-breakdown' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-gold-trophy/30 space-y-1">
                      <div className="font-mono text-xs text-gold-trophy uppercase font-bold">
                        5 Goles de Futsal Puro
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Dos goles dejando sentado al arquero con amague de cintura, dos remates de
                        puntera seca rasante al primer palo y un toque sutil tras pared con un oficial.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-pitch/30 space-y-1">
                      <div className="font-mono text-xs text-emerald-pitch uppercase font-bold">
                        6 Asistencias (No-Look)
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Habilitó a sus compañeros de pabellón dejándolos solos frente a la línea de gol
                        con pases sin mirar y pisadas de suela sobre el cemento.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-neon-cyan/30 space-y-1">
                      <div className="font-mono text-xs text-neon-cyan uppercase font-bold">
                        100% de Efectividad Colectiva
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Participó directamente en los 11 tantos de su equipo ({data.finalMatchReport.ronaldinhoGoals}{' '}
                        Goles + {data.finalMatchReport.ronaldinhoAssists} Asistencias = 11/11).
                      </p>
                    </div>
                  </div>
                )}

                {activeMatchTab === 'rules' && (
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-lg text-gold-light">
                      Reglamento Especial y El Lechón de {data.finalMatchReport.prizeWeightKg} Kilos
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {data.finalMatchReport.rulesNote}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gold-trophy/15 border border-gold-trophy/40 text-gold-light font-mono text-xs">
                      🏆 Premio Oficial Entregado: {data.finalMatchReport.prizeTitle}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Rutina Diaria en el Penal & Testimonios Reales */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Actividades dentro del penal (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-white flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-emerald-pitch" />
              Vida Cotidiana en Reclusión (Piki-Vóley, Carpintería y Cumpleaños #40)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.dailyRoutineAndActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="dossier-card rounded-2xl p-5 space-y-2.5 border border-white/10"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-gold-trophy/15 text-gold-light">
                    {activity.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-white">{activity.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{activity.description}</p>
                  <p className="text-xs font-mono text-emerald-pitch pt-1 border-t border-white/10">
                    ✦ {activity.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonios Verificados (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display font-extrabold text-2xl text-white flex items-center gap-2.5">
              <Users className="w-5 h-5 text-gold-trophy" />
              Testimonios Oficiales desde Asunción
            </h3>
            <div className="space-y-4">
              {data.testimonials.map((item) => (
                <div
                  key={item.id}
                  className="dossier-card rounded-2xl p-5 border border-white/10 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-gold-trophy shrink-0 mt-1" />
                    <blockquote className="text-sm text-slate-200 italic leading-relaxed">
                      “{item.quote}”
                    </blockquote>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs font-mono">
                    <div>
                      <span className="font-bold text-white">{item.speaker}</span>
                      <span className="text-slate-400"> — {item.role}</span>
                    </div>
                    <span className="text-gold-trophy">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrisonChronicleSection;
