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
    challenge: 'Klient szukał partnera, który zaproponuje coś więcej niż kolejny „ładny, poprawny event". Po wcześniejszych doświadczeniach pojawiły się obawy: powtarzalność, ryzyko nudy przy 1500 osobach, brak zabezpieczenia pogodowego i kolejki przy recepcji — w obiekcie zabytkowym z licznymi ograniczeniami technicznymi.',
    solution: 'Stworzyliśmy motyw „W rytmie Grupy" — nowoczesną interpretację klimatu dworskiego, inspirowaną Bridgertonami, przełamaną humorem i energią marki. 20 aktorów w strojach z epoki, Król Jankes III Waza, zawody Hobby Horse z CSR (darowizna na Fundację Pegazus po 1000 skokach), koncert IGO, Brass Federacja prowadząca paradę muzyczną.',
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
    relatedSlugs: ['ocean-mozliwosci', 'cordia-integracja'],
  },
  {
    slug: 'onlybio-wedel',
    title: 'Premiera Kalendarza Adwentowego — OnlyBio × E. Wedel',
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
    solution: 'Cały event jako fizyczne wejście do świata opakowania kalendarza adwentowego. Scenografia odwzorowana 1:1 z opakowania produktu — ruchomy diabelski młyn, otwierane okienka z produktami, różowe krzesełka inspirowane Paryżem. Aktywizacje: test zapachów z zasłoniętymi oczami, degustacja czekolady „w ciemno", baloniki z QR kodami.',
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
    relatedSlugs: ['benefit-systems', 'cordia-integracja'],
  },
  {
    slug: 'cordia-integracja',
    title: 'Integracja, która zadziałała — Cordia',
    client: 'Cordia',
    industry: 'Budowlana / Deweloperska',
    industryTag: 'deweloperska',
    decisionMaker: 'Dział HR',
    eventType: 'Integracja po fuzji',
    attendees: '~60',
    duration: '2 dni',
    location: 'Hotel Bonifacio',
    prepTime: '~2 miesiące',
    heroImage: '/images/cordia-integracja/hero.jpeg',
    thumbnailImage: '/images/cordia-integracja/thumb.jpeg',
    imageExt: 'jpeg',
    challenge: 'Firma po fuzji — 2 lata integracji, które nie przyniosły żadnego efektu. Pracownicy nie chcieli brać udziału w zabawach, trzymali się swoich „obozów", traktowali integrację jako przykry obowiązek.',
    solution: 'Zmiana kontekstu zamiast kolejnych gier. Hotel Bonifacio — basen, palmy, klimat wakacji all inclusive. Aztecki Mistrz Gry z fabularną integracją, zadania wymagające współpracy (nie da się wykonać solo), spływ kajakowy. Zero przymusu — animatorzy stopniowo wciągali w zabawę.',
    highlights: [
      '2 lata nieudanych integracji wcześniej',
      'Zmiana narracji z „integracji" na „przygodę"',
      'Mieszane zespoły + zadania kooperacyjne',
      'Spływ kajakowy jako kulminacja',
      'Kolacja bankietowa + impreza do rana',
    ],
    results: [
      'Pierwszy raz od 2 lat integracja uznana za „naprawdę udaną"',
      'Przełamanie barier między zespołami',
      'Klient wrócił z zapytaniem na kolejną edycję',
    ],
    relatedSlugs: ['benefit-systems', 'onlybio-wedel'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map(slug => caseStudies.find(cs => cs.slug === slug)).filter(Boolean) as CaseStudy[];
}
