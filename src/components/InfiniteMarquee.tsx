import React from 'react';
import { Trophy, Sparkles, Flame, ShieldAlert, Star } from 'lucide-react';

export interface InfiniteMarqueeProps {
  readonly variant?: 'primary' | 'noir';
}

interface MarqueeItem {
  readonly text: string;
  readonly highlight: string;
  readonly tag: 'gold' | 'emerald' | 'red' | 'cyan';
}

const TOP_RIBBON_ITEMS: readonly MarqueeItem[] = [
  {
    text: 'ÚNICO EN LA HISTORIA CON LOS 6 GRANDES TÍTULOS',
    highlight: 'MUNDIAL • CHAMPIONS • LIBERTADORES • BALÓN DE ORO • COPA AMÉRICA • CONFEDERACIONES',
    tag: 'gold',
  },
  {
    text: 'BALÓN DE ORO 2005',
    highlight: '225 PUNTOS EN PARÍS',
    tag: 'gold',
  },
  {
    text: 'CAMPEÓN DEL MUNDO 2002',
    highlight: 'TIRO LIBRE DE 35M A SEAMAN',
    tag: 'emerald',
  },
  {
    text: 'CHAMPIONS LEAGUE 2006',
    highlight: 'MVP DE LA UEFA CON EL FC BARCELONA',
    tag: 'gold',
  },
  {
    text: 'COPA LIBERTADORES 2013',
    highlight: 'REY DE AMÉRICA CON ATLÉTICO MINEIRO',
    tag: 'emerald',
  },
  {
    text: 'FINAL PENITENCIARIA 11-2 • LECHÓN DE 16KG',
    highlight: '5 GOLES + 6 ASISTENCIAS EN ASUNCIÓN 2020',
    tag: 'red',
  },
];

const BOTTOM_RIBBON_ITEMS: readonly MarqueeItem[] = [
  {
    text: 'OVACIÓN DE PIE EN EL SANTIAGO BERNABÉU',
    highlight: '19 NOV 2005 • REAL MADRID 0 - 3 BARÇA',
    tag: 'gold',
  },
  {
    text: 'CASO #EXP-2020-ASU-0306-R10',
    highlight: '32 DÍAS EN LA AGRUPACIÓN ESPECIALIZADA + 139 EN HOTEL PALMAROGA',
    tag: 'red',
  },
  {
    text: '66 GOLES DE TIRO LIBRE OFICIAL',
    highlight: 'CREADOR DEL TIRO RASO BAJO LA BARRERA',
    tag: 'cyan',
  },
  {
    text: 'APADRINÓ EL PRIMER GOL DE LIONEL MESSI',
    highlight: '1 DE MAYO DE 2005 • CAMBIO DE ERA EN EL CAMP NOU',
    tag: 'emerald',
  },
  {
    text: 'ELÁSTICA • ESPALDINHA • NO-LOOK PASS',
    highlight: 'PRIME 99 OVR • ALEGRÍA 100/100',
    tag: 'gold',
  },
];

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ variant = 'primary' }) => {
  const renderBadgeIcon = (tag: MarqueeItem['tag']) => {
    switch (tag) {
      case 'gold':
        return <Trophy className="w-4 h-4 text-gold-trophy shrink-0" />;
      case 'emerald':
        return <Sparkles className="w-4 h-4 text-emerald-pitch shrink-0" />;
      case 'red':
        return <ShieldAlert className="w-4 h-4 text-stamp-red shrink-0" />;
      case 'cyan':
        return <Flame className="w-4 h-4 text-neon-cyan shrink-0" />;
    }
  };

  return (
    <section
      aria-label="Cinta cinética de récords históricos"
      className={`relative py-4 overflow-hidden border-y select-none ${
        variant === 'noir'
          ? 'bg-noir-steel border-stamp-red/25'
          : 'bg-obsidian/95 border-white/10'
      }`}
    >
      {/* Sombra lateral izquierda y derecha para fundido suave */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-obsidian to-transparent z-10" />

      <div className="flex flex-col gap-3">
        {/* Dirección 1: Izquierda */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex items-center gap-6 pr-6">
            {[...TOP_RIBBON_ITEMS, ...TOP_RIBBON_ITEMS].map((item, idx) => (
              <div
                key={`top-${idx}`}
                className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 whitespace-nowrap"
              >
                {renderBadgeIcon(item.tag)}
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-wide text-white">
                  {item.text}
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-mono text-[11px] sm:text-xs text-gold-light uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dirección 2: Derecha */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex items-center gap-6 pr-6">
            {[...BOTTOM_RIBBON_ITEMS, ...BOTTOM_RIBBON_ITEMS].map((item, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/5 whitespace-nowrap"
              >
                <Star className="w-3.5 h-3.5 text-emerald-pitch shrink-0" />
                <span className="font-mono text-xs font-semibold text-slate-300">
                  {item.text}
                </span>
                <span className="text-slate-600">/</span>
                <span className="font-mono text-[11px] text-emerald-pitch uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;
