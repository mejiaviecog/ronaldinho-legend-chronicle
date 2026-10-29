import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Sparkles,
  FileWarning,
  Menu,
  X,
  Trophy,
  History,
  Flame,
  Quote,
  Crown,
} from 'lucide-react';

export interface NavbarProps {
  readonly activeMode: 'joga-bonito' | 'expediente-2020';
  readonly onToggleMode: (mode: 'joga-bonito' | 'expediente-2020') => void;
}

interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: React.ReactNode;
  readonly badge?: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'hero', label: 'El Brujo', href: '#hero', icon: <Crown className="w-4 h-4" /> },
  { id: 'trayectoria', label: 'Trayectoria', href: '#trayectoria', icon: <History className="w-4 h-4" /> },
  { id: 'trofeos', label: 'Bóveda (6/6)', href: '#trofeos', icon: <Trophy className="w-4 h-4" /> },
  {
    id: 'paraguay-2020',
    label: 'Expediente 2020',
    href: '#paraguay-2020',
    icon: <FileWarning className="w-4 h-4 text-stamp-red" />,
    badge: '11-2',
  },
  { id: 'regates', label: 'Laboratorio R10', href: '#regates', icon: <Flame className="w-4 h-4" /> },
  { id: 'legado', label: 'Legado', href: '#legado', icon: <Quote className="w-4 h-4" /> },
];

export const Navbar: React.FC<NavbarProps> = ({ activeMode, onToggleMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sectionIds = ['hero', 'trayectoria', 'trofeos', 'paraguay-2020', 'regates', 'legado'];
      const scrollPosition = window.scrollY + 240;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleModeSwitch = () => {
    const nextMode = activeMode === 'joga-bonito' ? 'expediente-2020' : 'joga-bonito';
    onToggleMode(nextMode);
    const targetId = nextMode === 'expediente-2020' ? 'paraguay-2020' : 'hero';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    if (id === 'paraguay-2020') {
      onToggleMode('expediente-2020');
    } else if (activeMode === 'expediente-2020' && id === 'hero') {
      onToggleMode('joga-bonito');
    }
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra de progreso de lectura superior */}
      <motion.div
        style={{ scaleX }}
        className={`h-1 origin-left ${
          activeMode === 'expediente-2020'
            ? 'bg-gradient-to-r from-stamp-red via-gold-trophy to-neon-cyan'
            : 'bg-gradient-to-r from-gold-trophy via-gold-light to-emerald-pitch'
        }`}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-2 sm:pt-3">
        <nav
          aria-label="Navegación principal"
          className={`transition-all duration-300 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border ${
            isScrolled
              ? activeMode === 'expediente-2020'
                ? 'bg-noir-steel/90 backdrop-blur-xl border-stamp-red/30 shadow-noir-dossier'
                : 'bg-obsidian/85 backdrop-blur-xl border-gold-trophy/25 shadow-gold-glow'
              : 'bg-obsidian/65 backdrop-blur-md border-white/10'
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero', 'hero');
            }}
            className="flex items-center gap-3 group min-h-[44px]"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-lg transition-transform duration-300 group-hover:scale-105 ${
                activeMode === 'expediente-2020'
                  ? 'bg-gradient-to-br from-stamp-red to-amber-600 text-white shadow-lg shadow-stamp-red/20'
                  : 'bg-gradient-to-br from-gold-trophy via-amber-400 to-emerald-pitch text-obsidian shadow-lg shadow-gold-trophy/25'
              }`}
            >
              R10
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-white">
                  RONALDINHO
                </span>
                <span className="hidden xs:inline-block text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-gold-trophy/15 text-gold-light border border-gold-trophy/30">
                  99 OVR
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                {activeMode === 'expediente-2020' ? 'CASO #2020-ASU • NOIR' : 'O BRUXO • JOGA BONITO'}
              </span>
            </div>
          </a>

          {/* Enlaces Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 min-h-[44px] ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-stamp-red/20 text-stamp-red border border-stamp-red/40">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-1 left-3 right-3 h-0.5 rounded-full ${
                        item.id === 'paraguay-2020' ? 'bg-stamp-red' : 'bg-gold-trophy'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Botón Conmutador de Atmósfera + Botón Móvil */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleModeSwitch}
              aria-label={
                activeMode === 'joga-bonito'
                  ? 'Activar Modo Expediente Asunción 2020'
                  : 'Activar Modo Joga Bonito'
              }
              className={`min-h-[44px] px-3 sm:px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                activeMode === 'expediente-2020'
                  ? 'bg-stamp-red/15 border-stamp-red/50 text-red-200 hover:bg-stamp-red/25 shadow-lg shadow-stamp-red/10'
                  : 'bg-gold-trophy/15 border-gold-trophy/40 text-gold-light hover:bg-gold-trophy/25 shadow-lg shadow-gold-trophy/10'
              }`}
            >
              {activeMode === 'expediente-2020' ? (
                <>
                  <Sparkles className="w-4 h-4 text-gold-trophy shrink-0" />
                  <span className="hidden sm:inline">Modo: Expediente 2020</span>
                  <span className="sm:hidden">Noir 2020</span>
                </>
              ) : (
                <>
                  <FileWarning className="w-4 h-4 text-stamp-red shrink-0" />
                  <span className="hidden sm:inline">Ir al Expediente 2020</span>
                  <span className="sm:hidden">Caso 2020</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden min-w-[44px] min-h-[44px] rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Menú desplegable Mobile / Tablet */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-2xl bg-obsidian/95 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.id);
                      }}
                      className={`min-h-[48px] px-4 py-3 rounded-xl flex items-center justify-between text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gold-trophy/15 text-gold-light border border-gold-trophy/30'
                          : 'bg-white/5 text-slate-200 hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.icon}
                        <span>{item.label}</span>
                      </span>
                      {item.badge && (
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-stamp-red/20 text-stamp-red border border-stamp-red/40">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
