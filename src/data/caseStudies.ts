export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  isAnonymous?: boolean;
  anonymousLabel?: string;
  industry: string;
  industryTag: 'beauty' | 'deweloperska' | 'farmaceutyczna' | 'korporacyjna' | 'sport';
  decisionMaker: string;
  eventType: string;
  attendees: string;
  duration: string;
  location: string;
  prepTime: string;
  heroImage: string;
  thumbnailImage: string;
  imageExt?: string;
  quote?: string;
  quoteAuthor?: string;
  challenge: string;
  solution: string;
  highlights: string[];
  results: string[];
  videoUrl?: string;
  socialLinks?: string[];
  relatedSlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'benefit-systems',
    title: 'W rytmie Grupy Benefit Systems',
    client: 'Benefit Systems',
    isAnonymous: true,
    anonymousLabel: 'Lider rynku kart sportowych',
    industry: 'Sport / Benefity pracownicze',
    industryTag: 'sport',
    decisionMaker: 'Dział HR',
    eventType: 'Integracja ogólnofirmowa',
    attendees: '1 500',
    duration: '1 dzień (10:00–02:00)',
    location: 'Arkady Kubickiego & Ogrody Zamku Królewskiego, Warszawa',
    prepTime: '4 miesiące',
    heroImage: '/images/benefit-systems/hero.jpg',
    thumbnailImage: '/images/benefit-systems/thumb.jpg',
    quote: 'To była najbardziej kreatywna, a jednocześnie najbardziej spokojna współpraca eventowa, jaką mieliśmy. Wszystko było dopięte na ostatni guzik, a my czuliśmy się zaopiekowani od początku do końca.',
    quoteAuthor: 'Dział HR, korporacja',
    challenge: 'Klient szukał partnera, który zaproponuje coś więcej niż kolejny „ładny, poprawny event". Po wcześniejszych doświadczeniach pojawiły się obawy: powtarzalność, ryzyko nudy przy 1500 osobach, brak zabezpieczenia pogodowego i kolejki przy recepcji, w obiekcie zabytkowym z licznymi ograniczeniami technicznymi.',
    solution: 'Stworzyliśmy motyw „W rytmie Grupy": nowoczesną interpretację klimatu dworskiego, inspirowaną Bridgertonami, przełamaną humorem i energią marki. 20 aktorów w strojach z epoki, Król Jankes III Waza, zawody Hobby Horse z CSR (darowizna na Fundację Pegazus po 1000 skokach), koncert IGO, Brass Federacja prowadząca paradę muzyczną.',
    highlights: [
      '1500 uczestników z całej Polski',
      '20 aktorów w interakcji z gośćmi',
      'Aplikacja eventowa z QR — zero kolejek',
      '6 barów rozbitych po terenie',
      'Plany A, B, C i D na pogodę',
      'Zero waste — nadwyżki jedzenia do jadłodzielni',
      'Koce i wykładziny przekazane do schronisk',
    ],
    results: [
      'Same 5★ w ankietach pracowniczych',
      'Ogromny entuzjazm i zaangażowanie do 2:00 w nocy',
      'Event wspominany jako najlepszy w historii firmy',
    ],
    videoUrl: 'https://www.youtube.com/watch?v=JO7Z8hrY7Rw',
    relatedSlugs: ['ocean-mozliwosci', 'neuca-pikniki'],
  },
  {
    slug: 'ocean-mozliwosci',
    title: 'Ocean Możliwości. Benefit Systems Fitness',
    client: 'Benefit Systems Oddział Fitness',
    isAnonymous: true,
    anonymousLabel: 'Lider rynku benefitów fitness',
    industry: 'Korporacyjna / Fitness',
    industryTag: 'korporacyjna',
    decisionMaker: 'Dział HR / Marketing',
    eventType: 'Konferencja integracyjna z galą wieczorną',
    attendees: '360',
    duration: '2 dni (Dzień 1: 10:00–03:00)',
    location: 'Hotel Warszawianka',
    prepTime: '4 miesiące',
    heroImage: '/images/ocean-mozliwosci/hero.jpg',
    thumbnailImage: '/images/ocean-mozliwosci/thumb.jpg',
    quote: 'Nie wiem co wymyślicie za rok, żeby to przebić.',
    quoteAuthor: 'Uczestnik wydarzenia, Benefit Systems Fitness',
    challenge: 'Powtarzalna lokalizacja (hotel Warszawianka wybierany od kilku lat), racjonalnie zaplanowany budżet bez przestrzeni na kosztowne eksperymenty, ekstremalnie krótki czas na transformację sali z trybu konferencyjnego w spektakularną przestrzeń wieczorową oraz bardzo wysokie oczekiwania uczestników, dla których był to kolejny event w tym samym miejscu.',
    solution: 'Motyw „Ocean Możliwości" jako metafora rozwoju i nowych horyzontów. Pełna, immersyjna transformacja przestrzeni: ogromne podwieszane meduzy i ukwiałowe rafy, balonowe instalacje oceaniczne, syreny robiące pokazy na kołach, błękitne koktajle, wizualizacje egzotycznych oceanów na ekranach LED. Spektakularne wejście przez kurtynę pary wodnej Leia Display. Finał: koncert Mrozu z utworem „Na szerokie wody mnie weź".',
    highlights: [
      '360 uczestników z całej Polski',
      'Podwieszane meduzy wielkogabarytowe na podnośnikach',
      'Kurtyna pary wodnej Leia Display z animowanym logo',
      'Transformacja sali w kilka godzin między częścią dzienną a wieczorną',
      'Nocne montaże elementów scenograficznych',
      'Koncert Mrozu dobrany do motywu przewodniego',
      'Syreny na kołach jako żywa scenografia',
    ],
    results: [
      'Same 5★ w ocenach uczestników',
      'Hotel udostępnił materiały z realizacji w swoich kanałach',
      'Event wspominany jako najlepszy w historii oddziału',
      'Największe uznanie: scenografia, klimat i spójność koncepcji',
    ],
    relatedSlugs: ['benefit-systems', 'onlybio-invisibobble'],
  },
  {
    slug: 'onlybio-wedel',
    title: 'Premiera Kalendarza Adwentowego. OnlyBio × E. Wedel',
    client: 'OnlyBio × E. Wedel',
    industry: 'Beauty / Kosmetyczna',
    industryTag: 'beauty',
    decisionMaker: 'Brand Manager / Marketing',
    eventType: 'Event influencerski / premiera produktu',
    attendees: '~80',
    duration: 'Kilka godzin',
    location: 'Fabryka Czekolady E. Wedel, Warszawa',
    prepTime: '1 miesiąc',
    heroImage: '/images/onlybio-wedel/hero.jpg',
    thumbnailImage: '/images/onlybio-wedel/thumb.jpg',
    challenge: 'Tylko 1 miesiąc na przygotowanie. Ograniczony budżet przy bardzo wysokich oczekiwaniach wizualnych. Nocny montaż w muzeum, ekspresowy demontaż przed otwarciem. Koordynacja 4 niezależnych marek z różnymi wizjami.',
    solution: 'Cały event jako fizyczne wejście do świata opakowania kalendarza adwentowego. Scenografia odwzorowana 1:1 z opakowania produktu: ruchomy diabelski młyn, otwierane okienka z produktami, różowe krzesełka inspirowane Paryżem. Aktywizacje: test zapachów z zasłoniętymi oczami, degustacja czekolady „w ciemno", baloniki z QR kodami.',
    highlights: [
      'Scenografia 1:1 z opakowania produktu',
      'Ruchomy diabelski młyn w kształcie fabryki',
      'Nocny montaż i ekspresowy demontaż',
      'Koordynacja 4 marek w 1 spójnej narracji',
      'Każdy element = tło do Reels i Stories',
      'Fotograf zabezpieczony last minute',
    ],
    results: [
      'Ogromne zasięgi w social mediach',
      'Najczęściej oznaczany element: scenografia',
      'Marki otrzymały gotowy content bez sesji',
      'Jedno z najbardziej instagramowych wydarzeń sezonu',
    ],
    relatedSlugs: ['onlybio-invisibobble', 'ocean-mozliwosci'],
  },
  {
    slug: 'onlybio-invisibobble',
    title: 'Natural Beauty Experience. OnlyBio × Invisibobble',
    client: 'OnlyBio × Invisibobble',
    industry: 'Beauty / Kosmetyczna',
    industryTag: 'beauty',
    decisionMaker: 'Brand Manager / Marketing',
    eventType: 'Event influencerski / premiera produktu',
    attendees: '~80',
    duration: 'Kilka godzin',
    location: 'Belvedere, Łazienki Królewskie, Warszawa',
    prepTime: 'Niecały 1 miesiąc',
    heroImage: '/images/onlybio-invisibobble/hero.jpg',
    thumbnailImage: '/images/onlybio-invisibobble/thumb.jpg',
    quote: 'Nawet nie spodziewałam się, że będzie tak pięknie.',
    quoteAuthor: 'Klientka, OnlyBio',
    challenge: 'Niecały miesiąc na przygotowanie premiery nowej linii kosmetyków i gumek do włosów. Surowe obostrzenia Łazienek Królewskich: brak widocznego brandingu, brak wysokich zabudów zasłaniających fasadę, ograniczenia montażowe. Pierwsza współpraca, decyzja oparta wyłącznie na zaufaniu zbudowanym podczas rozmów online.',
    solution: 'Koncepcja „Natural Beauty Experience": slow, self-care event bez sceny i ekranów LED. Cała przestrzeń zewnętrzna wyłożona różową wykładziną. Okrągłe stoły w jeden długi ciąg, kwiaty przechodzące tonalnie z koloru w kolor, neony z logotypami. Zajęcia Chillates z Igą Majewską, warsztaty robienia matchy, spektakularna kwiatowa huśtawka. Dyfuzory zapachowe, aromat kosmetyków unosił się w całej przestrzeni.',
    highlights: [
      '~80 influencerek i przedstawicielek mediów',
      'Cała przestrzeń wyłożona różową wykładziną',
      'Projekt szyte pod restrykcje Łazienek Królewskich',
      'Zajęcia Chillates z Igą Majewską',
      'Kwiatowa huśtawka — najczęściej fotografowany element',
      'Zapach kosmetyków jako element doświadczenia',
      'Plan A i B na wypadek niepogody',
    ],
    results: [
      'Bardzo duża liczba publikacji (reels, stories)',
      'Świetne recenzje w mediach',
      'Realny wpływ na sprzedaż po evencie',
      'Klient wrócił z kolejnymi zapytaniami i realizacjami',
    ],
    socialLinks: [
      'https://www.tiktok.com/@onlybio.life/video/7512743597318409494',
      'https://www.instagram.com/reels/DKj9gUDNEVa/',
    ],
    relatedSlugs: ['onlybio-wedel', 'benefit-systems'],
  },
  {
    slug: 'neuca-pikniki',
    title: 'NEUCA: Siła z Relacji',
    client: 'NEUCA',
    industry: 'Farmaceutyczna / Dystrybutorska',
    industryTag: 'farmaceutyczna',
    decisionMaker: 'Dział Sprzedaży / Marketing',
    eventType: 'Ogólnopolski cykl pikników rodzinnych',
    attendees: '8–11 lokalizacji rocznie',
    duration: '3 weekendy w czerwcu',
    location: 'Cała Polska (jeziora, morze, obiekty premium)',
    prepTime: 'Coroczna produkcja (2011–2023)',
    heroImage: '/images/neuca-pikniki/hero.jpg',
    thumbnailImage: '/images/neuca-pikniki/thumb.jpg',
    quote: 'Zarządzamy nie eventem, lecz systemem relacji — na dużą skalę, przez lata, bez kompromisów jakościowych.',
    quoteAuthor: "Buddy's Events",
    challenge: 'Ogólnopolski cykl pikników rodzinnych dla kluczowych partnerów biznesowych NEUCA, właścicieli aptek z najwyższymi wynikami sprzedażowymi. Realizowany nieprzerwanie przez kilkanaście lat, 8–11 lokalizacji rocznie. Każda lokalizacja musiała utrzymać najwyższy standard jakości, być spójna wizualnie we wszystkich miastach, a jednocześnie zaskakiwać nową koncepcją kreatywną.',
    solution: 'Hasło przewodnie to „NEUCA: Siła z Relacji". Co roku nowa koncepcja kreatywna i pełne KV z identyczną identyfikacją wizualną we wszystkich lokalizacjach. Ok. 30 osób załogi na każdą lokalizację. Program dla całych rodzin: strefy animatorów, dmuchańce, pokazy magików, 100+ różnych warsztatów na przestrzeni lat, sporty wodne. CSR: warsztaty budowy bud dla psów, edukacja ekologiczna. Prowadzący m.in.: Filip Chajzer, Omenaa Mensah, Olivier Janiak, Piotr Gąsowski, Krzysztof Ibisz.',
    highlights: [
      '13 lat nieprzerwanych realizacji (2011–2023)',
      '8–11 lokalizacji rocznie w całej Polsce',
      'Ok. 30 osób załogi na każdą lokalizację',
      '100+ różnych warsztatów na przestrzeni lat',
      'Równoległe realizacje — 2 miasta jednego dnia',
      'Medialnie prowadzący: Chajzer, Mensah, Janiak, Gąsowski, Ibisz',
      'Pełne zabezpieczenie: WOPR, karetki, straż pożarna',
      'Zezwolenia z Urzędu Morskiego dla lokalizacji nadmorskich',
    ],
    results: [
      'Cykl realizowany przez 13 lat — największy dowód zaufania klienta',
      'Bardzo wysokie frekwencje w każdej lokalizacji',
      'Pikniki uznane za benchmark jakości w branży',
      'Format stale rozwijany i aktualizowany koncepcyjnie',
    ],
    relatedSlugs: ['benefit-systems', 'ocean-mozliwosci'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map(slug => caseStudies.find(cs => cs.slug === slug)).filter(Boolean) as CaseStudy[];
}
