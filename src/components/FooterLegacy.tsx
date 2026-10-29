import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Quote,
  ArrowUp,
  Trophy,
  Sparkles,
  Heart,
  ShieldAlert,
  Crown,
} from 'lucide-react';
import { LegendQuote } from '../data/ronaldinhoData';

export interface FooterLegacyProps {
  readonly quotes: readonly LegendQuote[];
  readonly onResetToTop: () => void;
}

export const FooterLegacy: React.FC<FooterLegacyProps> = ({ quotes, onResetToTop }) => {
  const [highlightedId, setHighlightedId] = useState<string>(quotes[0]?.id ?? 'messi');

  const scrollToTop = () => {
    onResetToTop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="legado" className="bg-obsidian pt-20 sm:pt-28 pb-14 relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 left-1/3 w-96 h-96 rounded-full bg-gold-trophy/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Muro de Citas de Leyendas Mundiales */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-trophy/15 border border-gold-trophy/30 text-gold-light font-mono text-xs uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-gold-trophy" />
              <span>El Veredicto de los Dioses del Fútbol</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              CUANDO LAS LEYENDAS SE <span className="text-gradient-gold">RINDEN AL BRUJO</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Lo que dijeron Lionel Messi, Diego Armando Maradona, Zinedine Zidane, Pelé e Iker
              Casillas sobre el hombre que transformó el fútbol en felicidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((item, idx) => {
              const isHighlighted = item.id === highlightedId;
              const isWide = idx === 0;
              return (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  onClick={() => setHighlightedId(item.id)}
                  className={`cursor-pointer rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all border ${
                    isWide ? 'md:col-span-2 lg:col-span-2' : ''
                  } ${
                    isHighlighted
                      ? 'card-glass border-gold-trophy shadow-gold-glow'
                      : 'card-glass border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-gold-trophy/15 border border-gold-trophy/30 font-mono text-xs text-gold-light font-bold">
                        “{item.highlightPhrase}”
                      </span>
                      <Quote className="w-6 h-6 text-gold-trophy/60 shrink-0" />
                    </div>

                    <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                      “{item.quote}”
                    </blockquote>
                  </div>

                  <div className="pt-5 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white">
                        {item.author}
                      </h3>
                      <p className="text-xs font-mono text-emerald-pitch">{item.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.context}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 font-mono text-xs text-slate-300">
                      {item.year}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Epílogo Editorial y Cierre */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-gold-trophy uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>RONALDINHO GAÚCHO • ARCHIVO DOCUMENTAL INTERACTIVO</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              “Mientras haya una pelota en mis pies, yo soy libre y soy feliz.”
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Desde Porto Alegre (1980) hasta el Camp Nou, Yokohama, Belo Horizonte y la Agrupación
              Especializada de Asunción (2020). Tributo interactivo a la sonrisa eterna del fútbol.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#paraguay-2020"
              className="min-h-[48px] px-5 py-3 rounded-2xl bg-stamp-red/15 hover:bg-stamp-red/25 border border-stamp-red/40 text-red-200 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <ShieldAlert className="w-4 h-4 text-stamp-red" />
              <span>Releer Expediente 11-2</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver a la cima"
              className="min-h-[48px] px-5 py-3 rounded-2xl bg-gold-trophy text-obsidian font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-all flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Volver a la Cima</span>
            </button>
          </div>
        </div>

        {/* Créditos e Información de Pie de Página */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gold-trophy" />
            <span>RONALDINHO 99 OVR • THE IMMORTAL LEGEND & THE ASUNCIÓN CHRONICLE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-emerald-pitch fill-emerald-pitch" />
            <span>al Joga Bonito • 786 PJ • 313 Goles • 1 Lechón de 16 KG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLegacy;
