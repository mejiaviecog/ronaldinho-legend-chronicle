import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Crown,
  Lock,
  Unlock,
  Sparkles,
  MapPin,
  Calendar,
  X,
  Award,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import { TrophyItem } from '../data/ronaldinhoData';

export interface TrophyVaultProps {
  readonly trophies: readonly TrophyItem[];
}

type TrophyFilter =
  | 'all'
  | 'historic-six'
  | 'seleccion'
  | 'clubes'
  | 'individual'
  | 'insolito';

export const TrophyVault: React.FC<TrophyVaultProps> = ({ trophies }) => {
  const [activeFilter, setActiveFilter] = useState<TrophyFilter>('all');
  const [secretUnlocked, setSecretUnlocked] = useState<boolean>(false);
  const [selectedTrophy, setSelectedTrophy] = useState<TrophyItem | null>(null);

  const triggerGoldenConfetti = () => {
    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FDE68A', '#EF4444', '#10B981'],
      });
    } catch {
      // Fallback en test environment
    }
  };

  const handleUnlockSecretTrophy = () => {
    setSecretUnlocked(true);
    triggerGoldenConfetti();
    const prisonTrophy = trophies.find((t) => t.id === 'prison-futsal-cup-2020');
    if (prisonTrophy) {
      setSelectedTrophy(prisonTrophy);
    }
  };

  const filteredTrophies = trophies.filter((trophy) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'historic-six') return trophy.category === 'historic-six';
    if (activeFilter === 'insolito') return trophy.category === 'secret-unlockable';
    if (activeFilter === 'seleccion') {
      return trophy.team.toLowerCase().includes('brasil');
    }
    if (activeFilter === 'individual') {
      return (
        trophy.id.includes('ballon-dor') ||
        trophy.id.includes('fifa-world-player')
      );
    }
    if (activeFilter === 'clubes') {
      return (
        !trophy.team.toLowerCase().includes('brasil') &&
        !trophy.id.includes('ballon-dor') &&
        !trophy.id.includes('fifa-world-player') &&
        trophy.category !== 'secret-unlockable'
      );
    }
    return true;
  });

  const filterButtons: { id: TrophyFilter; label: string; badge?: string }[] = [
    { id: 'all', label: 'Todos los Trofeos', badge: `${trophies.length}` },
    { id: 'historic-six', label: 'Los 6 Únicos en la Historia', badge: '6/6' },
    { id: 'seleccion', label: 'Selección Brasil' },
    { id: 'clubes', label: 'Clubes (Europa & América)' },
    { id: 'individual', label: 'Individuales' },
    { id: 'insolito', label: 'Insólito (Asunción 2020)', badge: '16 KG' },
  ];

  return (
    <section
      id="trofeos"
      className="py-20 sm:py-28 bg-obsidian relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-gold-trophy/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        {/* Cabecera */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-trophy/15 border border-gold-trophy/40 text-gold-light font-mono text-xs uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-gold-trophy" />
              <span>La Corona Completa del Fútbol Mundial</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              LA BÓVEDA DEL <span className="text-gradient-gold">SEXTETE INMORTAL</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Ni Pelé, ni Maradona, ni Messi, ni Cristiano Ronaldo: Ronaldinho Gaúcho es el{' '}
              <strong className="text-white">único futbolista en la historia de la humanidad</strong>{' '}
              que ha ganado Mundial, Champions League, Copa Libertadores, Balón de Oro, Copa América y
              Copa Confederaciones... además de un torneo penitenciario por un lechón de 16 kilos.
            </p>
          </div>

          {/* Botón Especial para Desbloquear/Celebrar el Trofeo Secreto 2020 */}
          <button
            type="button"
            onClick={handleUnlockSecretTrophy}
            className={`min-h-[52px] px-5 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-3 self-start border ${
              secretUnlocked
                ? 'bg-gradient-to-r from-emerald-pitch/20 to-gold-trophy/20 border-emerald-pitch/50 text-emerald-300 shadow-emerald-glow'
                : 'bg-gradient-to-r from-stamp-red/20 via-gold-trophy/20 to-stamp-red/20 border-gold-trophy/50 text-gold-light hover:border-gold-light shadow-gold-glow'
            }`}
          >
            {secretUnlocked ? (
              <>
                <Unlock className="w-4 h-4 text-emerald-pitch shrink-0" />
                <span>¡Trofeo Lechón 16 KG Desbloqueado! (Celebrar)</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 text-gold-trophy shrink-0" />
                <span>Desbloquear Trofeo Secreto Asunción 2020 (16 KG)</span>
              </>
            )}
          </button>
        </div>

        {/* Banner del Sextete de la Inmortalidad */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-gold-trophy/60 via-emerald-pitch/50 to-gold-trophy/60">
          <div className="rounded-[23px] bg-obsidian/95 p-5 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-trophy">
                <ShieldCheck className="w-4 h-4" />
                <span>Récord Histórico Irrepetible • 6 de 6 Tronos Mayores</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                El Sextete de la Inmortalidad: Nadie más completó el mapa mundial
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Haz clic en cualquier joya de la bóveda para inspeccionar sus estadísticas en el torneo,
                sede e impacto histórico.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 w-full lg:w-auto">
              {[
                { label: 'Mundial', year: '2002' },
                { label: 'Champions', year: '2006' },
                { label: 'Libertadores', year: '2013' },
                { label: 'Balón de Oro', year: '2005' },
                { label: 'Copa América', year: '1999' },
                { label: 'Confederaciones', year: '2005' },
              ].map((crown) => (
                <div
                  key={crown.label}
                  className="px-3 py-2 rounded-xl bg-gold-trophy/10 border border-gold-trophy/30 text-center"
                >
                  <div className="font-display font-black text-sm text-gold-light">
                    {crown.year}
                  </div>
                  <div className="font-mono text-[10px] uppercase text-slate-300 truncate">
                    {crown.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra de Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => setActiveFilter(btn.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-gold-trophy text-obsidian border-gold-trophy shadow-gold-glow'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{btn.label}</span>
                {btn.badge && (
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive ? 'bg-obsidian/20 text-obsidian' : 'bg-white/10 text-gold-light'
                    }`}
                  >
                    {btn.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid de Trofeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrophies.map((trophy) => {
            const isSecretCard = trophy.category === 'secret-unlockable';
            const isLockedSecret = isSecretCard && !secretUnlocked;

            return (
              <motion.div
                key={trophy.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all border relative overflow-hidden ${
                  isSecretCard
                    ? 'dossier-card border-stamp-red/50 shadow-noir-dossier'
                    : trophy.category === 'historic-six'
                    ? 'card-glass border-gold-trophy/40 hover:border-gold-trophy'
                    : 'card-glass border-white/10 hover:border-white/25'
                }`}
              >
                <div className="space-y-4">
                  {/* Cabecera de la tarjeta */}
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider border ${
                        isSecretCard
                          ? 'bg-stamp-red/20 text-red-200 border-stamp-red/40'
                          : trophy.category === 'historic-six'
                          ? 'bg-gold-trophy/15 text-gold-light border-gold-trophy/40'
                          : 'bg-emerald-pitch/15 text-emerald-pitch border-emerald-pitch/30'
                      }`}
                    >
                      {trophy.uniqueCrownBadge ?? 'PALMARÉS ÉLITE'}
                    </span>

                    <span className="font-mono font-black text-lg text-gold-trophy">
                      {trophy.year}
                    </span>
                  </div>

                  {/* Título e Ícono */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isSecretCard
                          ? 'bg-stamp-red/20 text-stamp-red border border-stamp-red/40'
                          : 'bg-gold-trophy/15 text-gold-trophy border border-gold-trophy/30'
                      }`}
                    >
                      {isLockedSecret ? (
                        <Lock className="w-6 h-6" />
                      ) : isSecretCard ? (
                        <Flame className="w-6 h-6" />
                      ) : (
                        <Trophy className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-white leading-snug">
                        {trophy.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {trophy.team} • {trophy.competition}
                      </p>
                    </div>
                  </div>

                  {/* Descripción o estado bloqueado */}
                  {isLockedSecret ? (
                    <div className="p-4 rounded-2xl bg-obsidian/90 border border-dashed border-stamp-red/40 space-y-2">
                      <p className="text-xs font-mono text-red-200 uppercase tracking-wider">
                        EXPEDIENTE CLASIFICADO • ASUNCIÓN 2020
                      </p>
                      <p className="text-xs text-slate-300">
                        Este trofeo fue conquistado el 14 de marzo de 2020 en el patio de cemento de la
                        Agrupación Especializada. Desbloquéalo para revelar el botín de 16 KG.
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-300 leading-relaxed">{trophy.description}</p>
                  )}

                  {/* Estadísticas en el Torneo */}
                  <div className="p-3 rounded-xl bg-obsidian/70 border border-white/10 font-mono text-xs text-gold-light">
                    📊 {trophy.statsInTournament}
                  </div>

                  {trophy.rewardWeight && (
                    <div className="p-3 rounded-xl bg-stamp-red/15 border border-stamp-red/40 font-mono text-xs text-red-200 font-bold">
                      🥩 {trophy.rewardWeight}
                    </div>
                  )}
                </div>

                {/* Pie de tarjeta y botón de inspección */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1 truncate">
                    <MapPin className="w-3.5 h-3.5 text-emerald-pitch shrink-0" />
                    {trophy.location}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      if (isSecretCard && !secretUnlocked) {
                        handleUnlockSecretTrophy();
                      } else {
                        if (isSecretCard) triggerGoldenConfetti();
                        setSelectedTrophy(trophy);
                      }
                    }}
                    className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-gold-trophy hover:text-obsidian text-xs font-mono font-bold text-white transition-all shrink-0"
                  >
                    {isLockedSecret ? 'Desbloquear 16 KG' : 'Ver Detalle'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal / Vista Expandida del Trofeo Seleccionado */}
        <AnimatePresence>
          {selectedTrophy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedTrophy(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={selectedTrophy.name}
                className="max-w-xl w-full rounded-3xl bg-obsidian border border-gold-trophy/50 p-6 sm:p-8 shadow-gold-glow space-y-5 relative"
              >
                <button
                  type="button"
                  onClick={() => setSelectedTrophy(null)}
                  aria-label="Cerrar detalle de trofeo"
                  className="absolute top-5 right-5 min-w-[44px] min-h-[44px] rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-trophy/15 border border-gold-trophy/40 text-gold-light font-mono text-xs uppercase">
                  <Award className="w-4 h-4 text-gold-trophy" />
                  <span>{selectedTrophy.uniqueCrownBadge ?? selectedTrophy.competition}</span>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {selectedTrophy.name} ({selectedTrophy.year})
                  </h3>
                  <p className="font-mono text-xs text-emerald-pitch mt-1">
                    {selectedTrophy.team} • {selectedTrophy.location}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {selectedTrophy.description}
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs font-mono uppercase text-gold-trophy">
                    Importancia Histórica
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">{selectedTrophy.significance}</p>
                </div>

                <div className="p-4 rounded-2xl bg-gold-trophy/10 border border-gold-trophy/30 font-mono text-xs text-gold-light space-y-1">
                  <div className="uppercase text-[10px] text-slate-400">Registro Estadístico</div>
                  <div className="font-bold">{selectedTrophy.statsInTournament}</div>
                  {selectedTrophy.rewardWeight && (
                    <div className="text-emerald-pitch pt-1">{selectedTrophy.rewardWeight}</div>
                  )}
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  {selectedTrophy.category === 'secret-unlockable' && (
                    <button
                      type="button"
                      onClick={triggerGoldenConfetti}
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-gold-trophy text-obsidian font-mono text-xs font-bold uppercase flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Celebrar el 11-2 y el Lechón
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedTrophy(null)}
                    className="min-h-[44px] px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold uppercase"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrophyVault;
