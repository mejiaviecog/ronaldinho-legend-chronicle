import React, { useState } from 'react';
import {
  heroData,
  careerMilestones,
  trophiesData,
  prisonChronicleData,
  skillMovesData,
  legendsQuotes,
} from './data/ronaldinhoData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { CareerTimeline } from './components/CareerTimeline';
import { TrophyVault } from './components/TrophyVault';
import { PrisonChronicleSection } from './components/PrisonChronicleSection';
import { SkillMovesInteractive } from './components/SkillMovesInteractive';
import { FooterLegacy } from './components/FooterLegacy';

export interface AppProps {
  readonly initialMode?: 'joga-bonito' | 'expediente-2020';
}

export const App: React.FC<AppProps> = ({ initialMode = 'joga-bonito' }) => {
  const [activeMode, setActiveMode] = useState<'joga-bonito' | 'expediente-2020'>(initialMode);

  const handleExploreChronicle = () => {
    setActiveMode('expediente-2020');
    const target = document.getElementById('paraguay-2020');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-gold-trophy/30 selection:text-gold-light ${
        activeMode === 'expediente-2020'
          ? 'bg-noir-steel text-slate-50'
          : 'bg-obsidian text-slate-50'
      }`}
    >
      <Navbar activeMode={activeMode} onToggleMode={setActiveMode} />

      <main>
        <HeroSection data={heroData} onExploreChronicle={handleExploreChronicle} />
        <InfiniteMarquee variant={activeMode === 'expediente-2020' ? 'noir' : 'primary'} />
        <CareerTimeline milestones={careerMilestones} />
        <TrophyVault trophies={trophiesData} />
        <PrisonChronicleSection data={prisonChronicleData} />
        <SkillMovesInteractive skills={skillMovesData} />
      </main>

      <FooterLegacy
        quotes={legendsQuotes}
        onResetToTop={() => setActiveMode('joga-bonito')}
      />
    </div>
  );
};

export default App;
