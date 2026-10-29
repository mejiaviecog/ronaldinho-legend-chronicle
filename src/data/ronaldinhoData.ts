export interface PrimeStat {
  key: string;
  label: string;
  shortLabel: string;
  value: number;
  maxValue: number;
  description: string;
  accentColor: 'gold' | 'emerald' | 'cyan';
}

export interface HeroData {
  fullName: string;
  artisticName: string;
  nicknames: string[];
  birthDate: string;
  birthPlace: string;
  nationality: string;
  positions: string[];
  overallRating: number;
  cardEdition: string;
  tagline: string;
  subheadline: string;
  biographyLead: string;
  primeStats: PrimeStat[];
  careerTotals: {
    officialMatches: number;
    officialGoals: number;
    officialAssists: number;
    majorTrophies: number;
    freeKickGoals: number;
    standingOvationsAtBernabeu: number;
  };
  iconicQuotes: {
    quote: string;
    context: string;
    year: string;
  }[];
}

export interface CareerMilestone {
  id: string;
  club: string;
  shortName: string;
  country: string;
  countryCode: string;
  period: string;
  yearsCount: number;
  shirtNumber: string;
  roleTitle: string;
  matches: number;
  goals: number;
  assists: number;
  primaryColor: string;
  secondaryColor: string;
  badgeText: string;
  summary: string;
  detailedStory: string;
  iconicMoment: {
    title: string;
    date: string;
    opponent: string;
    score: string;
    description: string;
  };
  highlights: string[];
  trophiesWon: string[];
}

export interface TrophyItem {
  id: string;
  name: string;
  year: string;
  competition: string;
  team: string;
  category: 'historic-six' | 'major' | 'secret-unlockable';
  uniqueCrownBadge?: string;
  description: string;
  significance: string;
  statsInTournament: string;
  location: string;
  isSecret?: boolean;
  rewardWeight?: string;
}

export interface PrisonTimelineEvent {
  id: string;
  date: string;
  dayNumber: number;
  phase: 'detencion' | 'reclusion' | 'torneo-futsal' | 'cumpleanos' | 'domiciliaria' | 'libertad';
  title: string;
  location: string;
  summary: string;
  details: string;
  officialNote: string;
  highlightMetric?: string;
}

export interface PrisonMatchStat {
  label: string;
  value: string;
  sublabel: string;
}

export interface PrisonTestimonial {
  id: string;
  speaker: string;
  role: string;
  date: string;
  quote: string;
  context: string;
}

export interface PrisonChronicleData {
  caseCode: string;
  operationTitle: string;
  subtitle: string;
  facilityName: string;
  houseArrestHotel: string;
  city: string;
  dateRange: string;
  daysInMaximumSecurity: number;
  daysInHouseArrest: number;
  totalDaysInParaguay: number;
  bailAmountUSD: string;
  finalSettlementUSD: string;
  legalReason: string;
  editorialIntro: string;
  finalMatchReport: {
    title: string;
    date: string;
    tournamentName: string;
    venue: string;
    teamRonaldinho: string;
    opponentTeam: string;
    finalScore: string;
    ronaldinhoGoals: number;
    ronaldinhoAssists: number;
    goalParticipationPercentage: number;
    prizeTitle: string;
    prizeWeightKg: number;
    rulesNote: string;
    narrative: string;
    scoreboardStats: PrisonMatchStat[];
  };
  dailyRoutineAndActivities: {
    id: string;
    title: string;
    category: string;
    description: string;
    impact: string;
  }[];
  timeline: PrisonTimelineEvent[];
  testimonials: PrisonTestimonial[];
}

export interface SkillMove {
  id: string;
  name: string;
  portugueseName: string;
  alsoKnownAs: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  magicRating: number;
  unpredictability: number;
  description: string;
  biomechanics: string[];
  iconicVictimOrMatch: {
    match: string;
    year: string;
    victim: string;
    story: string;
  };
  tags: string[];
}

export interface LegendQuote {
  id: string;
  author: string;
  title: string;
  clubOrNation: string;
  year: string;
  quote: string;
  context: string;
  highlightPhrase: string;
}

export const heroData: HeroData = {
  fullName: 'Ronaldo de Assis Moreira',
  artisticName: 'Ronaldinho Gaúcho',
  nicknames: ['O Bruxo (El Brujo)', 'Dinho', 'La Sonrisa del Fútbol', 'El Rey del Joga Bonito'],
  birthDate: '21 de marzo de 1980',
  birthPlace: 'Porto Alegre, Rio Grande do Sul, Brasil',
  nationality: 'Brasileña',
  positions: ['Mediapunta (CAM)', 'Extremo Izquierdo (LW)', 'Segundo Delantero (CF)'],
  overallRating: 99,
  cardEdition: 'ICON PRIME IMMORTAL • 99 OVR',
  tagline: 'El único hombre que conquistó todos los tronos del fútbol mundial sin borrar jamás su sonrisa.',
  subheadline:
    'De las canchas de tierra en Porto Alegre a poner de pie al Santiago Bernabéu, levantar la Copa del Mundo, el Balón de Oro, la Champions y la Libertadores... hasta ganar un lechón de 16 kilos en una prisión de máxima seguridad en Asunción.',
  biographyLead:
    'Antes de Ronaldinho, el fútbol moderno caminaba hacia la mecanización táctica. Entre 2003 y 2006, el astro gaúcho detuvo el reloj de la industria y devolvió el juego a su estado más puro: arte callejero ejecutado a velocidad de élite.',
  primeStats: [
    {
      key: 'dribbling',
      label: 'Regate & Control',
      shortLabel: 'REG',
      value: 99,
      maxValue: 99,
      description: 'Control pegado al botín, elásticas en una baldosa y cambio de ritmo indescifrable.',
      accentColor: 'gold',
    },
    {
      key: 'magic',
      label: 'Magia & Improvisación',
      shortLabel: 'MAG',
      value: 99,
      maxValue: 99,
      description: 'Espaldinhas, controles de nuca, sombreros de taco y recursos jamás vistos en televisión.',
      accentColor: 'gold',
    },
    {
      key: 'joy',
      label: 'Alegría & Carisma',
      shortLabel: 'ALE',
      value: 100,
      maxValue: 100,
      description: 'El único jugador en la historia aplaudido por su eterno rival y querido en cada rincón del planeta.',
      accentColor: 'emerald',
    },
    {
      key: 'vision',
      label: 'Visión & No-Look Pass',
      shortLabel: 'VIS',
      value: 97,
      maxValue: 99,
      description: 'Pases filtrados mirando al tendido contrario que rompían líneas defensivas enteras.',
      accentColor: 'cyan',
    },
    {
      key: 'freeKick',
      label: 'Tiro Libre & Efecto',
      shortLabel: 'TLB',
      value: 95,
      maxValue: 99,
      description: '66 goles de tiro libre oficial: por encima de la escuadra, a 35 metros o por debajo de la barrera.',
      accentColor: 'emerald',
    },
  ],
  careerTotals: {
    officialMatches: 786,
    officialGoals: 313,
    officialAssists: 262,
    majorTrophies: 21,
    freeKickGoals: 66,
    standingOvationsAtBernabeu: 1,
  },
  iconicQuotes: [
    {
      quote: 'Mi juego se basa en la improvisación. Muchas veces el delantero no tiene tiempo para pensar; el instinto y la alegría deciden antes que la mente.',
      context: 'Tras recibir el Balón de Oro en París',
      year: '2005',
    },
    {
      quote: 'Mientras haya una pelota de fútbol en mis pies, yo soy libre y soy feliz, sin importar dónde esté.',
      context: 'Reflexión durante su carrera sobre el espíritu del futsal y la calle',
      year: '2006',
    },
    {
      quote: 'Dios me dio el don de jugar al fútbol, y mi misión fue devolverle a la gente una sonrisa cada domingo.',
      context: 'Carta de despedida oficial del fútbol profesional',
      year: '2018',
    },
  ],
};

export const careerMilestones: CareerMilestone[] = [
  {
    id: 'gremio',
    club: 'Grêmio Foot-Ball Porto Alegrense',
    shortName: 'Grêmio',
    country: 'Brasil',
    countryCode: 'BRA',
    period: '1998 – 2001',
    yearsCount: 4,
    shirtNumber: '10',
    roleTitle: 'El Prodigio de Porto Alegre',
    matches: 125,
    goals: 58,
    assists: 34,
    primaryColor: '#0EA5E9',
    secondaryColor: '#0F172A',
    badgeText: 'Cuna del Brujo • Estrela Dourada',
    summary:
      'Donde el niño del futsal se transformó en fenómeno nacional. Su actuación en la final del Campeonato Gaúcho 1999 humillando con sombreros y caños a Dunga (campeón del mundo en 1994) dio la vuelta al planeta.',
    detailedStory:
      'Formado en las categorías inferiores del Tricolor Gaúcho e inspirado por su hermano Roberto de Assis y su padre João, Ronaldinho debutó en la Copa Libertadores de 1998. En 1999 explotó definitivamente: anotó el gol del título estatal ante Internacional tras tirarle un sombrero antológico al capitán brasileño Dunga.',
    iconicMoment: {
      title: 'El Sombrero a Dunga en el Gre-Nal',
      date: '20 de junio de 1999',
      opponent: 'SC Internacional',
      score: '1 - 0',
      description:
        'Con solo 19 años, levantó la pelota de taco sobre la cabeza de Dunga, amagó a la defensa y definió el título del Campeonato Gaúcho en el Olímpico Monumental.',
    },
    highlights: [
      'Anotó 23 goles en sus primeros 23 años como titular indiscutible en Porto Alegre.',
      'Máximo goleador y figura de la Copa Sul-Minas 1999.',
      'Sus exhibiciones le valieron el llamado inmediato a la Selección Absoluta de Brasil a los 19 años.',
    ],
    trophiesWon: ['Campeonato Gaúcho (1999)', 'Copa Sul-Minas (1999)'],
  },
  {
    id: 'psg',
    club: 'Paris Saint-Germain',
    shortName: 'PSG',
    country: 'Francia',
    countryCode: 'FRA',
    period: '2001 – 2003',
    yearsCount: 2,
    shirtNumber: '21 / 10',
    roleTitle: 'El Artista del Parque de los Príncipes',
    matches: 77,
    goals: 25,
    assists: 22,
    primaryColor: '#2563EB',
    secondaryColor: '#EF4444',
    badgeText: 'Desembarco en Europa • N° 21 & 10',
    summary:
      'Su laboratorio de adaptación al fútbol europeo. En París deslumbró con conducciones de 60 metros, goles imposibles en Le Classique ante el Olympique de Marsella y una fantasía que dejó pequeña la Ligue 1.',
    detailedStory:
      'Llegó a París en 2001 con la dorsal 21 antes de heredar la 10 de Jay-Jay Okocha. Aunque tuvo roces con el técnico Luis Fernández por su vida bohemia en la capital francesa, cada vez que pisaba el césped en citas grandes —especialmente contra el Marsella o el Girondins de Burdeos— firmaba obras de arte que obligaron a los gigantes de Europa a pelear por su fichaje.',
    iconicMoment: {
      title: 'Exhibición en el Vélodrome ante el Marsella',
      date: '9 de marzo de 2003',
      opponent: 'Olympique de Marsella',
      score: '3 - 0',
      description:
        'Destrozó por completo al eterno rival en su propio estadio con una carrera desde propio campo, regateando al portero Vedran Runje y regalando una asistencia tras dejar sentada a toda la zaga.',
    },
    highlights: [
      'Campeón de la Copa Intertoto de la UEFA 2001.',
      'Elegido Gol del Año en Francia en 2003 por su slalom ante el Guingamp.',
      'Durante su etapa en el PSG conquistó la Copa del Mundo de Corea-Japón 2002 con Brasil.',
    ],
    trophiesWon: ['Copa Intertoto de la UEFA (2001)'],
  },
  {
    id: 'barcelona',
    club: 'FC Barcelona',
    shortName: 'FC Barcelona',
    country: 'España',
    countryCode: 'ESP',
    period: '2003 – 2008',
    yearsCount: 5,
    shirtNumber: '10',
    roleTitle: 'El Salvador del Camp Nou y Rey del Mundo',
    matches: 207,
    goals: 94,
    assists: 71,
    primaryColor: '#A855F7',
    secondaryColor: '#F59E0B',
    badgeText: 'Prime Absoluto • Balón de Oro 2005',
    summary:
      'Cambiando la historia moderna del FC Barcelona. Llegó a un club sumido en cinco años de sequía y depresión institucional, y con su sonrisa devolvió al Barça a la cima de Europa ganando 2 Ligas y la Champions League 2006.',
    detailedStory:
      'Su debut en el Camp Nou a las 00:05 de la madrugada ante el Sevilla con un zapatazo al travesaño de 30 metros anunció una nueva era. Entre 2004 y 2006 alcanzó un pico de rendimiento artístico jamás igualado: el punterazo estático ante el Chelsea en Stamford Bridge, la chilena al Villarreal, la noche del 0-3 en el Santiago Bernabéu donde el madridismo se puso de pie para aplaudirlo, y el apadrinamiento futbolístico de un joven Lionel Messi.',
    iconicMoment: {
      title: 'La Ovación del Santiago Bernabéu (0-3)',
      date: '19 de noviembre de 2005',
      opponent: 'Real Madrid CF',
      score: '0 - 3',
      description:
        'Dos goles idénticos arrancando desde la banda izquierda, dejando en el suelo a Sergio Ramos e Iván Helguera y batiendo a Iker Casillas. El público del Bernabéu se levantó para aplaudir al 10 azulgrana.',
    },
    highlights: [
      'Ganador del Balón de Oro 2005 y dos premios FIFA World Player consecutivos (2004, 2005).',
      'Campeón de la UEFA Champions League 2005-06 en París ante el Arsenal (MVP del torneo).',
      'Asistió a Lionel Messi en el primer gol oficial del argentino el 1 de mayo de 2005 ante el Albacete.',
    ],
    trophiesWon: [
      'UEFA Champions League (2005-06)',
      'La Liga Española (2004-05, 2005-06)',
      'Supercopa de España (2005, 2006)',
      'Balón de Oro (2005)',
      'FIFA World Player (2004, 2005)',
    ],
  },
  {
    id: 'brasil',
    club: 'Selección de Brasil (Canarinha)',
    shortName: 'Brasil',
    country: 'Brasil',
    countryCode: 'BRA',
    period: '1999 – 2013',
    yearsCount: 14,
    shirtNumber: '11 / 10 / 7',
    roleTitle: 'El Eslabón de los Tres R (Rivaldo, Ronaldo, Ronaldinho)',
    matches: 97,
    goals: 33,
    assists: 29,
    primaryColor: '#10B981',
    secondaryColor: '#F59E0B',
    badgeText: 'Pentacampeón Mundial • 2002',
    summary:
      'Desde su primer gol narrado a gritos ("Olha o que ele fez!") ante Venezuela en la Copa América 1999 hasta levantar la Copa del Mundo 2002 en Yokohama y humillar a Alemania y Argentina en la Confederaciones 2005.',
    detailedStory:
      'Con la Verdeamarela, Ronaldinho conquistó todas las categorías posibles: Campeón Mundial Sub-17 en Egipto 1997, Campeón de la Copa América 1999, Campeón del Mundo en Corea-Japón 2002 (donde firmó asistencia y el mítico tiro libre de 35 metros a David Seaman en cuartos de final contra Inglaterra) y Campeón de la Copa Confederaciones 2005 goleando 4-1 a Argentina en la final.',
    iconicMoment: {
      title: 'El Tiro Libre de 35 Metros a David Seaman',
      date: '21 de junio de 2002',
      opponent: 'Inglaterra (Cuartos de Final Mundial 2002)',
      score: '2 - 1',
      description:
        'En Shizuoka, tras asistir a Rivaldo con una elástica previa, vio adelantado al arquero inglés David Seaman y colgó un globo con comba imposible al ángulo superior para sellar el pase a semifinales.',
    },
    highlights: [
      'Campeón invicto de la Copa del Mundo FIFA 2002 formando el tridente "Los Tres R".',
      'Campeón de la Copa América 1999 y de la Copa FIFA Confederaciones 2005.',
      'Balón de Oro y Bota de Oro en la Copa Confederaciones 1999 (6 goles y 3 asistencias).',
    ],
    trophiesWon: [
      'Copa Mundial de la FIFA (2002)',
      'Copa América (1999)',
      'Copa FIFA Confederaciones (2005)',
      'Copa Mundial Sub-17 de la FIFA (1997)',
    ],
  },
  {
    id: 'milan',
    club: 'AC Milan',
    shortName: 'AC Milan',
    country: 'Italia',
    countryCode: 'ITA',
    period: '2008 – 2011',
    yearsCount: 3,
    shirtNumber: '80',
    roleTitle: 'El Maestro Rossonero N° 80',
    matches: 95,
    goals: 26,
    assists: 29,
    primaryColor: '#EF4444',
    secondaryColor: '#18181B',
    badgeText: 'Líder de Asistencias • Scudetto 2011',
    summary:
      'Recibido por 40.000 hinchas en San Siro con la dorsal 80 (por su año de nacimiento). En la temporada 2009-10 reinventó su juego como organizador puro, siendo el máximo asistente de la Serie A.',
    detailedStory:
      'En Milán demostró que su talento no dependía de la explosividad física de los 24 años. Su primer gol oficial fue un cabezazo imperial en el Derby della Madonnina contra el Inter de José Mourinho a pase de Kaká. En la campaña 2009-10 firmó 15 goles y 18 asistencias, antes de contribuir al título de Serie A 2010-11.',
    iconicMoment: {
      title: 'Bautismo de Oro en el Derby della Madonnina',
      date: '28 de septiembre de 2008',
      opponent: 'Inter de Milán',
      score: '1 - 0',
      description:
        'Su primer gol con la camiseta rossonera decidió el clásico de Milán en San Siro tras una combinación brasileña con Kaká.',
    },
    highlights: [
      'Máximo asistente de la Serie A 2009-10 con 15 pases de gol en liga.',
      'Galardonado con el premio Golden Foot 2009 en Montecarlo.',
      'Campeón de la Serie A 2010-11 con el AC Milan.',
    ],
    trophiesWon: ['Serie A de Italia (2010-11)', 'Golden Foot (2009)'],
  },
  {
    id: 'flamengo',
    club: 'Clube de Regatas do Flamengo',
    shortName: 'Flamengo',
    country: 'Brasil',
    countryCode: 'BRA',
    period: '2011 – 2012',
    yearsCount: 2,
    shirtNumber: '10',
    roleTitle: 'El Regreso del Rey a Río de Janeiro',
    matches: 72,
    goals: 28,
    assists: 17,
    primaryColor: '#DC2626',
    secondaryColor: '#09090B',
    badgeText: 'Campeón Invicto • Duelo Épico vs Neymar',
    summary:
      'De vuelta en Brasil conquistó el Campeonato Carioca 2011 de forma invicta y protagonizó junto al joven Neymar Jr. en Vila Belmiro el partido más espectacular del siglo XXI en el fútbol sudamericano (Santos 4 - 5 Flamengo).',
    detailedStory:
      'Presentado ante una multitud en Río, Ronaldinho lideró al Mengão a ganar la Taça Guanabara y la Taça Rio sin perder un solo encuentro. El 27 de julio de 2011, cuando el Santos de Neymar ganaba 3-0 (con el gol Premio Puskás de Neymar), Ronaldinho respondió con un hat-trick antológico —incluyendo un tiro libre raso por debajo de la barrera— para remontar 4-5.',
    iconicMoment: {
      title: 'El Duelo de los Siglos: Santos 4 - 5 Flamengo',
      date: '27 de julio de 2011',
      opponent: 'Santos FC (de Neymar Jr.)',
      score: '4 - 5',
      description:
        'Hat-trick y asistencia en Vila Belmiro. Engañó al mundo entero ejecutando un tiro libre raso por debajo de la barrera saltarina para sellar una remontada histórica.',
    },
    highlights: [
      'Campeón invicto del Campeonato Carioca 2011.',
      'Incluido en el Equipo Ideal del Brasileirão 2011.',
      'Autor del histórico hat-trick en el 4-5 ante el Santos de Neymar.',
    ],
    trophiesWon: ['Campeonato Carioca Invicto (2011)', 'Taça Guanabara (2011)', 'Taça Rio (2011)'],
  },
  {
    id: 'atletico-mineiro',
    club: 'Clube Atlético Mineiro',
    shortName: 'Atlético Mineiro',
    country: 'Brasil',
    countryCode: 'BRA',
    period: '2012 – 2014',
    yearsCount: 3,
    shirtNumber: '49 / 10',
    roleTitle: 'La Redención Eterna: Rey de América en Belo Horizonte',
    matches: 88,
    goals: 28,
    assists: 32,
    primaryColor: '#F8FAFC',
    secondaryColor: '#18181B',
    badgeText: 'Copa Libertadores 2013 • Rey de América',
    summary:
      'Cuando muchos creían que su carrera terminaba, llegó a Belo Horizonte, eligió el número 49 en homenaje al año de nacimiento de su madre Doña Miguelina (quien luchaba contra el cáncer) y le dio al Atlético Mineiro la primera Copa Libertadores de su historia.',
    detailedStory:
      'Bajo el lema "¡Aqui é Galo!", Ronaldinho se convirtió en el director de orquesta de un equipo eléctrico junto a Bernard, Jô y Diego Tardelli. En la Copa Libertadores 2013 fue el máximo asistente del torneo y lideró épicas remontadas en semifinales (ante Newell’s) y en la gran final (ante Olimpia de Paraguay) en el Mineirão, coronándose "Rey de América" por el diario El País.',
    iconicMoment: {
      title: 'Campeón de la Copa Libertadores 2013',
      date: '24 de julio de 2013',
      opponent: 'Club Olimpia (Paraguay)',
      score: '2 - 0 (4 - 3 pen.)',
      description:
        'Tras levantar un 0-2 global en el Mineirão, el Galo conquistó América. Con este título, Ronaldinho se convirtió en el único futbolista de la historia en poseer Mundial, Champions, Libertadores y Balón de Oro.',
    },
    highlights: [
      'Campeón de la Copa Libertadores 2013 y de la Recopa Sudamericana 2014.',
      'Elegido Futbolista del Año en Sudamérica ("Rey de América") en 2013.',
      'Eligió el dorsal 49 en 2012 como tributo a su madre Doña Miguelina, quien superó un cáncer.',
    ],
    trophiesWon: [
      'Copa Libertadores de América (2013)',
      'Recopa Sudamericana (2014)',
      'Campeonato Mineiro (2013)',
      'Rey de América (2013)',
    ],
  },
  {
    id: 'queretaro-fluminense',
    club: 'Querétaro FC & Fluminense FC',
    shortName: 'Querétaro / Flu',
    country: 'México / Brasil',
    countryCode: 'MEX / BRA',
    period: '2014 – 2015',
    yearsCount: 2,
    shirtNumber: '49 / 10',
    roleTitle: 'El Último Baile en el Azteca y el Maracaná',
    matches: 41,
    goals: 8,
    assists: 7,
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    badgeText: 'Ovación en el Estadio Azteca • Epílogo',
    summary:
      'Su gira de despedida competitiva. Llevó a los Gallos Blancos de Querétaro a la primera final de Liga MX de su historia y fue ovacionado de pie en el Estadio Azteca tras marcar un doblete al América en apenas 7 minutos.',
    detailedStory:
      'En septiembre de 2014 sorprendió al continente fichando por el Querétaro de México con su dorsal 49. El 18 de abril de 2015 ingresó al minuto 84 en el Estadio Azteca ante el Club América, anotó dos goles en 7 minutos para el 0-4 definitivo y recibió la segunda gran ovación rival de su carrera (tras la del Bernabéu). Cerró su ciclo profesional en el Fluminense en 2015.',
    iconicMoment: {
      title: 'La Ovación del Estadio Azteca (0-4 al América)',
      date: '18 de abril de 2015',
      opponent: 'Club América',
      score: '0 - 4',
      description:
        'Entró en los últimos minutos en el coloso de Santa Úrsula, firmó un doblete con su sello clásico y todo el Estadio Azteca se rindió en aplausos ante el astro brasileño.',
    },
    highlights: [
      'Subcampeón de la Liga MX Clausura 2015 (primera final en la historia del Querétaro).',
      'Ovacionado de pie por la afición del Club América en el Estadio Azteca.',
      'Despedida oficial en Brasil vistiendo la camiseta tricolor del Fluminense en el Maracaná.',
    ],
    trophiesWon: ['Subcampeón Liga MX Clausura (2015)'],
  },
];

export const trophiesData: TrophyItem[] = [
  {
    id: 'world-cup-2002',
    name: 'Copa Mundial de la FIFA',
    year: '2002',
    competition: 'Corea del Sur & Japón 2002',
    team: 'Selección de Brasil',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 1 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Pieza fundamental del Pentacampeonato brasileño junto a Ronaldo Nazário y Rivaldo. Disputó 5 partidos, anotó 2 goles y dio 3 asistencias, incluyendo su obra maestra de tiro libre ante Inglaterra.',
    significance: 'El trofeo supremo del fútbol mundial conquistado a los 22 años de edad.',
    statsInTournament: '5 Partidos • 2 Goles • 3 Asistencias • Incluido en el All-Star Team FIFA',
    location: 'Yokohama, Japón',
  },
  {
    id: 'champions-league-2006',
    name: 'UEFA Champions League',
    year: '2006',
    competition: 'Temporada 2005-2006',
    team: 'FC Barcelona',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 2 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Lideró al FC Barcelona a su segunda Copa de Europa en el Stade de France de París (2-1 ante el Arsenal), tras dejar en el camino al Chelsea de Mourinho, Benfica y AC Milan.',
    significance: 'Elegido Mejor Jugador de la UEFA Champions League 2005-06 con 7 goles y 5 asistencias.',
    statsInTournament: '12 Partidos • 7 Goles • 5 Asistencias • MVP de la UEFA',
    location: 'París, Francia',
  },
  {
    id: 'copa-libertadores-2013',
    name: 'CONMEBOL Copa Libertadores',
    year: '2013',
    competition: 'Edición 2013',
    team: 'Clube Atlético Mineiro',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 3 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Condujo al Atlético Mineiro al primer título continental de su historia con 4 goles y 7 asistencias (máximo asistente del certamen), remontando dos series consecutivas por 2-0.',
    significance: 'Lo convirtió en miembro del selectísimo club de campeones de Champions League y Copa Libertadores.',
    statsInTournament: '14 Partidos • 4 Goles • 7 Asistencias • Rey de América 2013',
    location: 'Belo Horizonte, Brasil',
  },
  {
    id: 'ballon-dor-2005',
    name: 'Balón de Oro (Ballon d’Or)',
    year: '2005',
    competition: 'France Football • Edición 50° Aniversario',
    team: 'FC Barcelona / Brasil',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 4 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Arrasó en la votación de periodistas internacionales con 225 puntos (superando ampliamente a Frank Lampard con 148 y Steven Gerrard con 142) tras su año mágico y su exhibición en el Bernabéu.',
    significance: 'El único jugador en la historia en sumar el Balón de Oro a la Libertadores, Champions y Mundial.',
    statsInTournament: '225 Puntos • Ganador indiscutible en el 50° aniversario del galardón',
    location: 'París, Francia',
  },
  {
    id: 'copa-america-1999',
    name: 'CONMEBOL Copa América',
    year: '1999',
    competition: 'Paraguay 1999',
    team: 'Selección de Brasil',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 5 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Su estreno internacional con la Canarinha absoluta a los 19 años en suelo paraguayo, inmortalizado por su gol a Venezuela haciéndole un sombrero de taco a un defensor y fusilando al arquero.',
    significance: 'Su primer gran título continental con la Selección Mayor de Brasil.',
    statsInTournament: '4 Partidos • 1 Gol Antológico • Campeón Invicto',
    location: 'Asunción, Paraguay',
  },
  {
    id: 'confederations-cup-2005',
    name: 'Copa FIFA Confederaciones',
    year: '2005',
    competition: 'Alemania 2005',
    team: 'Selección de Brasil',
    category: 'historic-six',
    uniqueCrownBadge: 'JOYA 6 DE 6 • ÚNICO EN LA HISTORIA',
    description:
      'Capitán y figura en la exhibición de Frankfurt donde Brasil aplastó 4-1 a la Selección Argentina en la gran final, anotando de volea y bailando samba en el banderín de córner.',
    significance: 'Completa el Sextete Histórico Internacional que ningún otro futbolista (ni Pelé, ni Maradona, ni Messi, ni Cristiano) posee al completo.',
    statsInTournament: '5 Partidos • 3 Goles • Balón de Bronce • Gol en Semifinal y Final',
    location: 'Frankfurt, Alemania',
  },
  {
    id: 'fifa-world-player-2004-2005',
    name: 'FIFA World Player of the Year (x2)',
    year: '2004 & 2005',
    competition: 'Premio Oficial de la FIFA',
    team: 'FC Barcelona / Brasil',
    category: 'major',
    description:
      'Elegido por los capitanes y seleccionadores nacionales de todo el planeta como el mejor jugador del mundo durante dos años consecutivos.',
    significance: 'Dominio absoluto de la cúspide mundial a mitad de la década de los 2000.',
    statsInTournament: '620 pts (2004) y 956 pts (2005) • Récord de ventaja en votación',
    location: 'Zúrich, Suiza',
  },
  {
    id: 'la-liga-2005-2006',
    name: 'Bicampeonato de La Liga Española',
    year: '2005 & 2006',
    competition: 'Primera División de España',
    team: 'FC Barcelona',
    category: 'major',
    description:
      'Rompió seis años sin títulos del conjunto culé y lideró dos campeonatos de liga consecutivos bajo la dirección de Frank Rijkaard.',
    significance: 'Cimentó la hegemonía moderna del FC Barcelona en el siglo XXI.',
    statsInTournament: '70 Partidos • 35 Goles • 30 Asistencias en ambas ligas',
    location: 'Barcelona, España',
  },
  {
    id: 'serie-a-2011',
    name: 'Scudetto Serie A de Italia',
    year: '2011',
    competition: 'Temporada 2010-2011',
    team: 'AC Milan',
    category: 'major',
    description:
      'Conquistó el campeonato italiano formando parte de una plantilla de ensueño junto a Ibrahimović, Robinho, Pirlo, Seedorf y Thiago Silva.',
    significance: 'Campeón de liga tanto en España como en Italia.',
    statsInTournament: 'Campeón de la Serie A TIM 2010-11',
    location: 'Milán, Italia',
  },
  {
    id: 'recopa-sudamericana-2014',
    name: 'CONMEBOL Recopa Sudamericana',
    year: '2014',
    competition: 'Final Continental 2014',
    team: 'Clube Atlético Mineiro',
    category: 'major',
    description:
      'Su último título oficial internacional a nivel de clubes, superando a Lanús de Argentina en una final vibrante decidida en prórroga en el Mineirão.',
    significance: 'Cerró su ciclo dorado en Belo Horizonte como ídolo eterno del Galo.',
    statsInTournament: '2 Partidos • Campeón Supercopa de Sudamérica',
    location: 'Belo Horizonte, Brasil',
  },
  {
    id: 'prison-futsal-cup-2020',
    name: 'Torneo Penitenciario Agrupación Especializada',
    year: '2020',
    competition: 'Campeonato Interno de Futsal • Asunción',
    team: 'Equipo de Reclusos & Oficiales de la Agrupación',
    category: 'secret-unlockable',
    uniqueCrownBadge: 'TROFEO SECRETO DESBLOQUEABLE • PARAGUAY 2020',
    description:
      'El 14 de marzo de 2020, a solo ocho días de haber ingresado en prisión preventiva en Paraguay, Ronaldinho aceptó jugar el torneo interno del penal. La condición inicial era que "no podía marcar goles", pero sus nuevos compañeros le rogaron que jugara en serio. Ganó la final 11-2 participando en los 11 goles.',
    significance: 'El trofeo más surrealista y legendario de la cultura popular del fútbol: un lechón asado de 16 kilos compartido con todos los reclusos del pabellón.',
    statsInTournament: 'Resultado Final: 11 - 2 • 5 Goles • 6 Asistencias • 100% Participación de Gol',
    location: 'Cuartel de la Agrupación Especializada, Asunción, Paraguay',
    isSecret: true,
    rewardWeight: 'Premio Oficial: Lechón de 16 KG al Spiedo + Trofeo Artesanal de Madera',
  },
];

export const prisonChronicleData: PrisonChronicleData = {
  caseCode: 'EXP-2020-ASU-0306-R10',
  operationTitle: 'EL EXPEDIENTE ASUNCIÓN 2020',
  subtitle: '171 Días en Paraguay: Pasaportes Adulterados, El Partido 11-2 por un Lechón de 16 Kilos y La Sonrisa Tras las Rejas',
  facilityName: 'Cuartel de la Agrupación Especializada de la Policía Nacional',
  houseArrestHotel: 'Hotel Palmaroga (Centro Histórico de Asunción)',
  city: 'Asunción, Paraguay',
  dateRange: '6 de marzo de 2020 – 24 de agosto de 2020',
  daysInMaximumSecurity: 32,
  daysInHouseArrest: 139,
  totalDaysInParaguay: 171,
  bailAmountUSD: '$1,600,000 USD ($800,000 por cada hermano)',
  finalSettlementUSD: '$200,000 USD en concepto de reparación social benéfica',
  legalReason:
    'Uso de documentos públicos de contenido falso (cédulas de identidad y pasaportes paraguayos auténticos pero con datos adulterados pertenecientes a terceras personas).',
  editorialIntro:
    'En marzo de 2020, justo cuando el planeta entero se cerraba por la pandemia global, Ronaldinho Gaúcho y su hermano Roberto de Assis aterrizaron en Asunción para apadrinar una fundación benéfica infantil e inaugurar un casino. Lo que debía ser una visita de 48 horas se transformó en una odisea judicial de casi seis meses que dio origen a la crónica más inverosímil en la historia de los Balones de Oro.',
  finalMatchReport: {
    title: 'ACTA OFICIAL DEL PARTIDO: LA FINAL DEL PENAL',
    date: '14 de marzo de 2020',
    tournamentName: 'Torneo de Futsal de la Agrupación Especializada (Categoría Senior +35)',
    venue: 'Polideportivo de Cemento • Pabellón de la Agrupación Especializada, Asunción',
    teamRonaldinho: 'Villa Sofía / Pabellón del Comisario Miguel López',
    opponentTeam: 'Los Caimanes del Penal',
    finalScore: '11 - 2',
    ronaldinhoGoals: 5,
    ronaldinhoAssists: 6,
    goalParticipationPercentage: 100,
    prizeTitle: 'Lechón de 16 Kilos + Trofeo Artesanal',
    prizeWeightKg: 16,
    rulesNote:
      'Regla inicial de los organizadores: "Ronaldinho no puede patear al arco para no desnivelar". Tras los primeros minutos, tanto compañeros como rivales le pidieron que jugara a tope para vivir la experiencia real de enfrentar al Balón de Oro.',
    narrative:
      'Vestido con una musculosa blanca prestada, botines sin tapones que le facilitó un oficial de policía y su clásica vincha, Ronaldinho pisó el cemento caliente de la Agrupación Especializada. Jugó de pívot y armador. Hizo un caño sin tocar la pelota, dio seis pases de gol a la boca del arco y convirtió cinco tantos —dos de ellos definiendo con amague de cintura ante el arquero rival, quien tras el pitazo final le pidió una foto abrazado—. Al terminar, todo el penal compartió el lechón de 16 kilos.',
    scoreboardStats: [
      {
        label: 'Marcador Final',
        value: '11 - 2',
        sublabel: 'Victoria aplastante en el cemento',
      },
      {
        label: 'Goles de Dinho',
        value: '5 Goles',
        sublabel: 'Definiciones de salón y amagues',
      },
      {
        label: 'Asistencias',
        value: '6 Pases',
        sublabel: 'No-look passes entre reclusos',
      },
      {
        label: 'Participación',
        value: '100%',
        sublabel: 'Intervino en los 11 goles del equipo',
      },
      {
        label: 'Botín / Trofeo',
        value: '16 KG',
        sublabel: 'Lechón asado compartido en el penal',
      },
    ],
  },
  dailyRoutineAndActivities: [
    {
      id: 'footvolley',
      title: 'Tardes de Piki-Vóley (Footvolley)',
      category: 'Deporte & Convivencia',
      description:
        'Cada tarde, cuando bajaba el sol de Asunción, Ronaldinho armaba partidos de piki-vóley (fútbol-tenis sobre red alta, deporte rey en Paraguay) haciendo dupla con exoficiales de policía y reclusos del pabellón.',
      impact: 'Incluso en una disciplina donde los paraguayos son especialistas natos, maravilló con remates de pecho, hombro y chilena.',
    },
    {
      id: 'carpentry',
      title: 'Taller de Carpintería y Artesanía',
      category: 'Oficio en el Penal',
      description:
        'Asistió a los módulos de carpintería de la Agrupación Especializada, donde conversaba con los internos y firmaba tablas de madera para asado y camisetas que los familiares hacían llegar por la guardia.',
      impact: 'Los reclusos le tallaron a mano una bandeja de madera y el trofeo conmemorativo del torneo de futsal.',
    },
    {
      id: 'birthday-40',
      title: 'Cumpleaños #40 con Asado Tras las Rejas',
      category: 'Hito Biográfico (21 de Marzo)',
      description:
        'Cumplió sus 40 años de edad dentro de la prisión el 21 de marzo de 2020. Los internos y guardias le prepararon un asado paraguayo de costillar al fuego lento y una torta decorada con su imagen en el FC Barcelona.',
      impact: 'Lejos de esconderse, posó sonriendo junto a la parrilla agradeciendo el cariño de sus compañeros de reclusión.',
    },
    {
      id: 'palmaroga',
      title: 'Cancha Improvisada en el Salón del Hotel Palmaroga',
      category: 'Prisión Domiciliaria (Abril - Agosto)',
      description:
        'Siendo los únicos dos huéspedes del histórico Hotel Palmaroga debido a la cuarentena por COVID-19, el gerente les habilitó un salón alfombrado de 30 metros con arcos pequeños y pelotas oficiales para que practicara toques diarios.',
      impact: 'Mantuvo su rutina de dominio de balón durante 139 días hasta la audiencia definitiva.',
    },
  ],
  timeline: [
    {
      id: 'day-1-detention',
      date: '4 – 6 de marzo de 2020',
      dayNumber: 1,
      phase: 'detencion',
      title: 'Aterrizaje en Asunción, Allanamiento en el Yacht y Orden de Detención',
      location: 'Aeropuerto Silvio Pettirossi / Resort Yacht y Golf Club / Fiscalía',
      summary:
        'Ronaldinho y Roberto de Assis ingresan a Paraguay con pasaportes paraguayos que les fueron entregados al bajar del avión. Horas después, la Policía Nacional allana su suite.',
      details:
        'Aunque inicialmente la fiscalía propuso un criterio de oportunidad por considerar que habían sido engañados de buena fe por gestores locales, la jueza Clara Ruiz Díaz decretó la prisión preventiva por peligro de fuga el 6 de marzo por la noche.',
      officialNote: 'INGRESO A RECLUSIÓN PREVENTIVA • CUADRA DE OFICIALES',
      highlightMetric: 'Día 1 de 171',
    },
    {
      id: 'day-3-adaptation',
      date: '8 de marzo de 2020',
      dayNumber: 3,
      phase: 'reclusion',
      title: 'La Primera Foto Sonriendo en el Penal y Visita de Carlos Gamarra',
      location: 'Agrupación Especializada, Asunción',
      summary:
        'Se filtra la primera fotografía de Ronaldinho en prisión: vestido con camiseta sin mangas, sonriendo y firmando autógrafos a los hijos de los guardias.',
      details:
        'El histórico capitán de la selección paraguaya y excompañero suyo, Carlos "Colorado" Gamarra, junto con Nelson Cuevas ("Pipino"), lo visitan en el cuartel para llevarle apoyo anímico y calzado deportivo.',
      officialNote: 'CELDA CLIMATIZADA COMPARTIDA CON ROBERTO DE ASSIS',
      highlightMetric: '0 Quejas de Conducta',
    },
    {
      id: 'day-9-futsal-final',
      date: '14 de marzo de 2020',
      dayNumber: 9,
      phase: 'torneo-futsal',
      title: 'La Noche Inmortal: Campeón del Torneo Penitenciario (11-2) y el Lechón de 16 KG',
      location: 'Cancha de Futsal de la Agrupación Especializada',
      summary:
        'Debuta y sale campeón en el torneo interno de la cárcel. Anota 5 goles y reparte 6 asistencias en la victoria 11-2 de su equipo.',
      details:
        'Las imágenes de Ronaldinho levantando el trofeo de madera y posando junto al premio mayor —un lechón de 16 kilogramos listo para el horno— se vuelven virales en todos los diarios deportivos del planeta.',
      officialNote: 'MVP DEL TORNEO PENITENCIARIO • 5 GOLES + 6 ASISTENCIAS',
      highlightMetric: '11-2 (Lechón 16 KG)',
    },
    {
      id: 'day-16-birthday-40',
      date: '21 de marzo de 2020',
      dayNumber: 16,
      phase: 'cumpleanos',
      title: 'Cumpleaños Número 40 Entre Rejas, Humo de Parrilla y Mensajes de Leyendas',
      location: 'Patio Interno • Agrupación Especializada',
      summary:
        'Ronaldinho celebra sus cuatro décadas de vida encerrado en plena cuarentena mundial. Recibe mensajes públicos de Pelé, Ronaldo Nazário, Messi, Puyol y Samuel Eto’o.',
      details:
        'Mientras el mundo permanecía confinado, los reclusos del Cuartel de la Policía le organizaron un almuerzo con costillar a la estaca y pastel de cumpleaños.',
      officialNote: 'ANIVERSARIO N° 40 • CUARENTENA TOTAL DE VISITAS EXTERNAS',
      highlightMetric: '40 Años',
    },
    {
      id: 'day-32-house-arrest',
      date: '7 de abril de 2020',
      dayNumber: 32,
      phase: 'domiciliaria',
      title: 'Fianza de $1.6 Millones USD y Despedida con Lágrimas de los Reclusos',
      location: 'Juzgado Penal de Garantías → Hotel Palmaroga',
      summary:
        'El juez Gustavo Amarilla otorga el arresto domiciliario tras el depósito de una fianza real de 1.6 millones de dólares en una cuenta del Banco Nacional de Fomento.',
      details:
        'Antes de cruzar el portón de la Agrupación Especializada tras 32 días encerrado, los internos le hicieron un último asado de despedida y varios reclusos y policías lloraron al abrazarlo. Fue trasladado a la suite presidencial del Hotel Palmaroga.',
      officialNote: 'CAMBIO DE MEDIDA CAUTELAR • ARRESTO DOMICILIARIO CON CUSTODIA 24/7',
      highlightMetric: '$1.6M USD Fianza',
    },
    {
      id: 'day-171-freedom',
      date: '24 de agosto de 2020',
      dayNumber: 171,
      phase: 'libertad',
      title: 'Libertad Definitiva y Retorno en Jet Privado a Brasil',
      location: 'Palacio de Justicia de Asunción → Río de Janeiro',
      summary:
        'Tras 171 días en Paraguay (32 en la cárcel y 139 en el hotel), la justicia paraguaya aprueba la suspensión condicional del procedimiento y ordena su libertad inmediata.',
      details:
        'El fallo comprobó que Ronaldinho no tenía conocimiento de la adulteración previa de los documentos. Se acordó una donación de $200.000 USD destinada al Hospital de Clínicas de Asunción y al programa social "Añua". Al día siguiente voló de regreso a Brasil sin antecedentes penales vigentes en su país.',
      officialNote: 'EXPEDIENTE CERRADO • LIBERTAD AMBULATORIA PLENA',
      highlightMetric: '171 Días Totales',
    },
  ],
  testimonials: [
    {
      id: 'blas-vera',
      speaker: 'Comisario Blas Vera',
      role: 'Director del Cuartel de la Agrupación Especializada (2020)',
      date: 'Marzo de 2020',
      quote:
        'Nunca tuvimos un interno así. Desde el segundo día mantuvo su sonrisa, trató con humildad absoluta desde el último guardia hasta el recluso más antiguo y transformó el ánimo de todo el penal con una pelota.',
      context: 'Declaraciones a la prensa paraguaya e internacional tras la primera semana de detención.',
    },
    {
      id: 'pipino-cuevas',
      speaker: 'Nelson "Pipino" Cuevas',
      role: 'Exjugador de la Selección de Paraguay y amigo personal',
      date: '10 de marzo de 2020',
      quote:
        'Fui a verlo esperando encontrarlo derrumbado, pero apenas le pusieron una pelota en el patio volvió a ser el Ronaldinho de siempre. Su hábitat natural es la cancha, aunque tenga muros alrededor.',
      context: 'Tras visitarlo personalmente dentro de la Agrupación Especializada en Asunción.',
    },
    {
      id: 'ronaldinho-interview',
      speaker: 'Ronaldinho Gaúcho',
      role: 'Primera entrevista desde el arresto en Asunción',
      date: '26 de abril de 2020',
      quote:
        'Fue un golpe duro descubrir que los documentos no eran legales, pero en la Agrupación recibí un cariño que jamás voy a olvidar. Jugar al fútbol, firmar autógrafos y sacarme fotos con ellos era lo mínimo que podía hacer por gente que vivía un momento tan difícil como yo.',
      context: 'Entrevista exclusiva concedida al diario ABC Color de Paraguay en el Hotel Palmaroga.',
    },
  ],
};

export const skillMovesData: SkillMove[] = [
  {
    id: 'elastica',
    name: 'La Elástica (Flip-Flap)',
    portugueseName: 'Elástico Gaúcho',
    alsoKnownAs: 'La Culebrita / The Snakebite',
    difficulty: 5,
    magicRating: 100,
    unpredictability: 99,
    description:
      'Su firma inmortal. Con un solo movimiento de tobillo derecho, empujaba el balón hacia afuera con el empeine exterior haciendo creer al defensor que saldría hacia la banda, y en menos de 0.2 segundos lo envolvía con el borde interno en dirección opuesta.',
    biomechanics: [
      '1. Finta de cadera y hombro hacia el perfil exterior para comprometer el centro de gravedad del rival.',
      '2. Contacto suave con los tres dedos externos del pie derecho desplazando el balón 40 cm en diagonal.',
      '3. Latigazo de tobillo en el aire para enganchar la pelota con la cara interna antes de que toque el césped.',
    ],
    iconicVictimOrMatch: {
      match: 'Brasil vs Inglaterra (Mundial 2002) & FC Barcelona vs Athletic Club',
      year: '2002 – 2005',
      victim: 'Ashley Cole, Paul Scholes y Sergio Ramos',
      story:
        'En los cuartos de final del Mundial 2002 dejó congelado a Ashley Cole con una elástica en carrera antes de asistir a Rivaldo para el 1-1.',
    },
    tags: ['Firma Personal', '1 vs 1', 'Ruptura de Cintura'],
  },
  {
    id: 'espaldinha',
    name: 'La Espaldinha',
    portugueseName: 'Passe de Costas',
    alsoKnownAs: 'Back Pass / Control de Omóplato',
    difficulty: 5,
    magicRating: 99,
    unpredictability: 100,
    description:
      'Cuando un balón caía llovido del cielo y el marcador esperaba un control de pecho convencional, Ronaldinho arqueaba el torso y golpeaba la pelota con los omóplatos para habilitar a un compañero en carrera.',
    biomechanics: [
      '1. Lectura de la parábola aérea y perfilamiento de espaldas al defensor.',
      '2. Flexión rápida de rodillas e inclinación del tronco a 45 grados.',
      '3. Impulso seco con la parte alta de la espalda dirigiendo el balón al espacio vacío.',
    ],
    iconicVictimOrMatch: {
      match: 'FC Barcelona vs Real Zaragoza & AC Milan vs Siena',
      year: '2004 – 2010',
      victim: 'Defensas de La Liga y Serie A',
      story:
        'Ejecutada sin previo aviso en el Camp Nou y San Siro, provocando un murmullo de incredulidad instantáneo en 90.000 espectadores.',
    },
    tags: ['Improvisación Pura', 'Juego Aéreo', 'Joga Bonito'],
  },
  {
    id: 'no-look-pass',
    name: 'El Pase Sin Mirar (No-Look Pass)',
    portugueseName: 'Passe Sem Olhar',
    alsoKnownAs: 'El Engaño Óptico del 10',
    difficulty: 4,
    magicRating: 98,
    unpredictability: 97,
    description:
      'No era un simple adorno estético: Ronaldinho utilizaba la dirección de sus ojos y su cuello para mover a los mediocentros y laterales rivales medio metro hacia un lado mientras su botín filtraba una daga quirúrgica al lado contrario.',
    biomechanics: [
      '1. Escaneo periférico previo de la diagonal de Samuel Eto’o, Giuly o Messi.',
      '2. Giro exagerado de cabeza hacia la banda opuesta justo en el instante de armar la pierna.',
      '3. Impacto firme con el borde interno manteniendo la mirada clavada en el señuelo.',
    ],
    iconicVictimOrMatch: {
      match: 'Toda su etapa en FC Barcelona, Selección de Brasil y Atlético Mineiro',
      year: '1999 – 2015',
      victim: 'Líneas defensivas de toda Europa y Sudamérica',
      story:
        'Incluso en el partido 11-2 dentro de la cárcel de Asunción en 2020 repartió asistencias mirando hacia el otro costado del patio.',
    },
    tags: ['Visión 97', 'Asistencia', 'Psicología'],
  },
  {
    id: 'sombrero-taco',
    name: 'Sombrero de Taco y Control en el Aire',
    portugueseName: 'Chapéu de Calcanhar',
    alsoKnownAs: 'Arcoíris / Flick-Over',
    difficulty: 5,
    magicRating: 99,
    unpredictability: 98,
    description:
      'Su recurso favorito cuando estaba encerrado contra la línea de cal. Levantaba la pelota con el talón o la punta del botín por encima de la cabeza del marcador y la dormía en el empeine sin dejarla picar.',
    biomechanics: [
      '1. Protección del balón con el cuerpo para atraer la entrada frontal del marcador.',
      '2. Cuchareo ultrarrápido con la puntera o elevación de taco en un solo toque.',
      '3. Giro de 180 grados para empalmar de volea o continuar haciendo jueguitos en carrera.',
    ],
    iconicVictimOrMatch: {
      match: 'Brasil vs Venezuela (1999) & FC Barcelona vs Athletic Club (2004)',
      year: '1999 – 2006',
      victim: 'Dunga, Jorge Rojas y Gurpegi',
      story:
        'En San Mamés llegó a hacer tres sombreros consecutivos sin que la pelota tocara el césped ante el asombro de la Catedral.',
    },
    tags: ['Futsal', 'Fantasía', 'espacios reducidos'],
  },
  {
    id: 'under-wall-freekick',
    name: 'Tiro Libre Raso por Debajo de la Barrera',
    portugueseName: 'Falta por Baixo da Barreira',
    alsoKnownAs: 'ElJaque Mate al Salto',
    difficulty: 4,
    magicRating: 96,
    unpredictability: 100,
    description:
      'Como los rivales sabían que su rosca por encima de la barrera era letal, los cinco hombres del muro saltaban desesperadamente. Ronaldinho cambió las reglas del fútbol moderno pateando raso por debajo de sus botines.',
    biomechanics: [
      '1. Postura corporal idéntica a su golpeo elevado clásico (mirada al ángulo superior).',
      '2. Espera de una fracción de segundo para confirmar el despegue vertical de la barrera.',
      '3. Pase tenso y rasante con el interior del pie derecho pegado al césped hacia el palo del arquero.',
    ],
    iconicVictimOrMatch: {
      match: 'FC Barcelona vs Werder Bremen (Champions 2006) & Santos 4-5 Flamengo (2011)',
      year: '2006 & 2011',
      victim: 'Tim Wiese (Werder Bremen) y Rafael Cabral (Santos)',
      story:
        'Tras sus goles a Werder Bremen y Santos, los equipos de todo el mundo se vieron obligados a inventar la figura del "hombre acostado detrás de la barrera".',
    },
    tags: ['66 Goles TL', 'Innovación Táctica', 'Inteligencia'],
  },
  {
    id: 'toe-poke-chelsea',
    name: 'El Punterazo Estático de Futsal (Gol a Chelsea)',
    portugueseName: 'Bico de Futsal em Stamford Bridge',
    alsoKnownAs: 'El Baile en la Frontal del Área',
    difficulty: 5,
    magicRating: 100,
    unpredictability: 100,
    description:
      'Rodeado por John Terry, Ricardo Carvalho y Claude Makélélé en la media luna de Stamford Bridge, sin espacio para tomar carrera, amagó tres veces con la cadera en el sitio y sacó un punterazo seco al ángulo de Petr Čech.',
    biomechanics: [
      '1. Parada en seco del balón frente al bloque defensivo más férreo de Europa.',
      '2. Tres oscilaciones rítmicas de cadera tipo samba para congelar la reacción de Terry y Carvalho.',
      '3. Golpeo de punta pura sin recorrido de pierna trasera: máxima velocidad de salida con cero aviso.',
    ],
    iconicVictimOrMatch: {
      match: 'Chelsea FC 4 - 2 FC Barcelona (Octavos UEFA Champions League)',
      year: '8 de marzo de 2005',
      victim: 'Petr Čech, John Terry y Ricardo Carvalho',
      story:
        'Petr Čech confesó años después que ni siquiera vio salir la pelota porque ningún futbolista de campo golpea con esa potencia sin armar la pierna.',
    },
    tags: ['Champions League', 'Stamford Bridge', 'Obra Maestra'],
  },
];

export const legendsQuotes: LegendQuote[] = [
  {
    id: 'messi',
    author: 'Lionel Messi',
    title: '8 Veces Balón de Oro & Campeón del Mundo',
    clubOrNation: 'Compañero en el FC Barcelona (2004–2008)',
    year: '2018',
    quote:
      'Ronaldinho fue el responsable del cambio del Barça. La época mala pasó y el cambio que hubo en el club llegó con él. Además, a mí me apadrinó desde el primer día que entré al vestuario con 16 años, me hizo sentir cómodo y me dio la asistencia de mi primer gol oficial. Siempre le estaré eternamente agradecido.',
    context: 'Entrevista documental sobre su heredero del dorsal 10 azulgrana.',
    highlightPhrase: 'Ronaldinho fue el responsable del cambio de la historia del Barça y quien me apadrinó.',
  },
  {
    id: 'maradona',
    author: 'Diego Armando Maradona',
    title: 'Campeón del Mundo 1986 & Leyenda Inmortal',
    clubOrNation: 'Selección Argentina',
    year: '2020',
    quote:
      'Ronaldinho es uno de los jugadores más grandes que vi en mi vida. Y cuando pasó lo de Paraguay me dolió en el alma: él no es ningún delincuente, solo fue a trabajar. Su único "crimen" en la vida fue ser el jugador que más nos divirtió a todos dentro de una cancha.',
    context: 'Declaración pública defendiendo a Ronaldinho durante su detención en Asunción en 2020.',
    highlightPhrase: 'Uno de los más grandes que vi en mi vida; el que más nos divirtió a todos.',
  },
  {
    id: 'zidane',
    author: 'Zinedine Zidane',
    title: 'Balón de Oro 1998 & Campeón del Mundo',
    clubOrNation: 'Real Madrid / Selección de Francia',
    year: '2006',
    quote:
      'Ronaldinho tenía todo lo que tiene un jugador de clase mundial, pero mezclado con una creatividad técnica que nadie más podía imitar. Cuando estaba en su mejor momento entre 2004 y 2006, simplemente era imparable.',
    context: 'Rueda de prensa tras los duelos entre Real Madrid y FC Barcelona, y Francia vs Brasil.',
    highlightPhrase: 'Una creatividad técnica que nadie más podía imitar; simplemente imparable.',
  },
  {
    id: 'pele',
    author: 'Pelé (Edson Arantes do Nascimento)',
    title: 'Tricampeón del Mundo (1958, 1962, 1970)',
    clubOrNation: 'Selección de Brasil / Santos FC',
    year: '2018',
    quote:
      'Es imposible amar el fútbol y no ser fanático de Ronaldinho Gaúcho. Trajo un espectáculo y una sonrisa que cautivaron a todo el planeta. Hizo que jugar al nivel más alto pareciera tan sencillo como jugar en la playa.',
    context: 'Homenaje oficial publicado por O Rei tras el retiro definitivo de Ronaldinho.',
    highlightPhrase: 'Es imposible amar el fútbol y no ser fanático de Ronaldinho Gaúcho.',
  },
  {
    id: 'rijkaard-casillas',
    author: 'Iker Casillas & Frank Rijkaard',
    title: 'Capitán del Real Madrid / Entrenador del Barça Campeón de Europa',
    clubOrNation: 'Testigos directos de su Prime (2003–2008)',
    year: '2019',
    quote:
      'En aquel 0-3 en el Bernabéu en 2005, por primera vez en mi vida vi a mi propio estadio levantarse a aplaudir al rival después de que me marcara dos golazos. No podías enfadarte con Ronaldinho: era magia pura.',
    context: 'Recuerdo de Iker Casillas sobre la histórica noche del 19 de noviembre de 2005 en Madrid.',
    highlightPhrase: 'Vi a mi propio estadio levantarse a aplaudir al rival; era magia pura.',
  },
];
