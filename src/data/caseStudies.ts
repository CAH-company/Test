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
    heroImage: '/images/benefit-hero.jpg',
    thumbnailImage: '/images/benefit-thumb.jpg',
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
    heroImage: '/images/onlybio-wedel-hero.jpg',
    thumbnailImage: '/images/onlybio-wedel-thumb.jpg',
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
    relatedSlugs: ['onlybio-invisibobble', 'stonex-gatsby'],
  },
  {
    slug: 'onlybio-invisibobble',
    title: 'OnlyBio × Invisibobble — Natural Beauty Experience',
    client: 'OnlyBio × Invisibobble',
    industry: 'Beauty / Kosmetyczna',
    industryTag: 'beauty',
    decisionMaker: 'Brand Manager',
    eventType: 'Event influencerski / premiera',
    attendees: '~80',
    duration: 'Pół dnia',
    location: 'Belvedere, Łazienki Królewskie, Warszawa',
    prepTime: 'Niecały miesiąc',
    heroImage: '/images/onlybio-invisi-hero.jpg',
    thumbnailImage: '/images/onlybio-invisi-thumb.jpg',
    quote: 'Nawet nie spodziewałam się, że będzie tak pięknie.',
    quoteAuthor: 'Klientka OnlyBio (rozpłakała się widząc gotową przestrzeń)',
    challenge: 'Pierwsza współpraca — zaufanie oparte wyłącznie na rozmowach online. Surowe obostrzenia Łazienek Królewskich: brak widocznego brandingu, brak wysokich zabudów, ograniczenia montażowe. Estetyka i detal ważniejsze niż skala.',
    solution: 'Natural Beauty Experience — niska, elegancka scenografia wpisana w architekturę Belvedere. Różowa wykładzina jako „instagramowa baza", kwiaty przechodzące tonalnie z koloru w kolor, neony z logotypami. Chillates z Igą Majewską, warsztaty matchy, huśtawka z kwiatów naturalnych. Dyfuzory zapachowe — produkt „odczuwalny", nie tylko widoczny.',
    highlights: [
      'Klientka rozpłakała się ze wzruszenia',
      'Łazienki Królewskie — najwyższe obostrzenia',
      'Dyfuzory zapachowe — zmysłowe doświadczenie',
      'Opieka nad psem influencerki mimo zakazu',
      'Plan A i B na niepogodę',
    ],
    results: [
      'Duża liczba publikacji Reels i Stories',
      'Realny wpływ na sprzedaż po evencie',
      'Klient wrócił z kolejnymi realizacjami',
    ],
    relatedSlugs: ['onlybio-wedel', 'marsh-piknik'],
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
    heroImage: '/images/cordia-hero.jpg',
    thumbnailImage: '/images/cordia-thumb.jpg',
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
    relatedSlugs: ['benefit-systems', 'marsh-piknik'],
  },
  {
    slug: 'neuca-pikniki',
    title: 'NEUCA — Siła z Relacji',
    client: 'NEUCA',
    industry: 'Farmaceutyczna / Dystrybucyjna',
    industryTag: 'farmaceutyczna',
    decisionMaker: 'Dział Marketingu / Zarząd',
    eventType: 'Cykl pikników ogólnopolskich',
    attendees: '700+ na piknik',
    duration: '~6h na event',
    location: '8–11 miast w całej Polsce',
    prepTime: 'Cykl roczny przez 14+ lat',
    heroImage: '/images/neuca-hero.jpg',
    thumbnailImage: '/images/neuca-thumb.jpg',
    challenge: 'Ogólnopolski cykl pikników dla właścicieli aptek — kluczowych partnerów biznesowych NEUCA. 8–11 lokalizacji rocznie, często 2 miasta jednego dnia. Identyczny standard jakości w każdym mieście, co roku nowa koncepcja kreatywna.',
    solution: 'System wydarzeń z precyzyjnymi procedurami, checklistami i stałymi ekipami. Każdego roku nowe KV, identyfikacja wizualna, atrakcje. Sporty wodne, warsztaty kreatywne (100+ różnych przez lata), koncerty, strefy CSR z budową bud dla psów i budek lęgowych.',
    highlights: [
      '14+ lat nieprzerwanej współpracy',
      '8–11 pikników rocznie w całej Polsce',
      '~30 osób zespołu na każdą lokalizację',
      'Znani prowadzący: Chajzer, Ibisz, Mensah',
      'WOPR, karetki, straż na każdym evencie',
      '100+ różnych warsztatów na przestrzeni lat',
    ],
    results: [
      'Wieloletnia współpraca = najwyższy dowód zaufania',
      'Pikniki stały się benchmarkiem jakości w branży',
      'Budowanie lojalności kluczowych partnerów NEUCA',
    ],
    relatedSlugs: ['benefit-systems', 'ocean-mozliwosci'],
  },
  {
    slug: 'ocean-mozliwosci',
    title: 'Ocean Możliwości — Benefit Systems Fitness',
    client: 'Benefit Systems Oddział Fitness',
    isAnonymous: true,
    anonymousLabel: 'Oddział fitness lidera rynku kart sportowych',
    industry: 'Sport / Fitness',
    industryTag: 'sport',
    decisionMaker: 'Dział HR / Organizator wewnętrzny',
    eventType: 'Konferencja + integracja wieczorna',
    attendees: '360',
    duration: '2 dni',
    location: 'Hotel Warszawianka',
    prepTime: '4 miesiące',
    heroImage: '/images/ocean-hero.jpg',
    thumbnailImage: '/images/ocean-thumb.jpg',
    challenge: 'Powtarzalna lokalizacja (ten sam hotel od lat), racjonalny budżet, ekstremalnie krótki czas na transformację sali z konferencji w spektakularną przestrzeń wieczorową. Wysokie oczekiwania uczestników — „jak nas jeszcze zaskoczą?"',
    solution: 'Motyw „Ocean Możliwości" — immersyjna transformacja: podwieszane meduzy, balonowe instalacje, syreny na kołach, kurtyna pary wodnej (Leia Display), błękitne koktajle. Koncert Mrozu z finałem „Na szerokie wody". Kilka godzin na kompletną rearanżację sali na podnośnikach.',
    highlights: [
      '„Czy to na pewno ta sama sala?"',
      'Podwieszane meduzy i syreny na kołach',
      'Kurtyna pary wodnej z animowanym logo',
      'Koncert Mrozu z dobranym repertuarem',
      'Transformacja sali w kilka godzin',
      'Harmonogram minutowy całego eventu',
    ],
    results: [
      'Same 5★ i „nie wiem, co wymyślicie, żeby to przebić"',
      'Event wspominany jako najlepszy w historii oddziału',
      'Hotel użył materiałów jako wysokoklikalny content',
    ],
    relatedSlugs: ['benefit-systems', 'stonex-gatsby'],
  },
  {
    slug: 'marsh-piknik',
    title: 'Work & Family Garden Day — Marsh',
    client: 'Marsh',
    industry: 'Korporacyjna / Ubezpieczeniowa',
    industryTag: 'korporacyjna',
    decisionMaker: 'Dział HR / People & Culture',
    eventType: 'Hybrydowy piknik rodzinny',
    attendees: '~100',
    duration: 'Cały dzień',
    location: 'Zabytkowa willa z ogrodem, Warszawa',
    prepTime: '~2 miesiące',
    heroImage: '/images/marsh-hero.jpg',
    thumbnailImage: '/images/marsh-thumb.jpg',
    challenge: 'Piknik rodzinny, który NIE wyłącza rodziców z pracy. Dzieci muszą być zaopiekowane i zajęte, rodzice muszą móc realnie pracować (wideokonferencje, telefony). Zabytkowa willa = wąskie drzwi, ograniczenia logistyczne.',
    solution: 'Hybrydowy ekosystem pracy i relaksu. Piętro willi = strefa pracy (Wi-Fi, stanowiska, pokoje do rozmów). Ogród = strefa dzieci (animatorzy, dmuchańce, warsztaty). Dyskretne nagłośnienie — zero hałasu przeszkadzającego rodzicom. Plan B z trawą z rolki.',
    highlights: [
      'Rodzice realnie pracowali, nie „udawali"',
      'Dzieci zaopiekowane i zajęte cały dzień',
      'Strefy pracy z Wi-Fi i wideokonferencjami',
      'Dyskretne nagłośnienie — zero chaosu',
      'Pomiary ciągów komunikacyjnych co do cm',
    ],
    results: [
      'Format uznany za innowacyjny i warty powtórzenia',
      'Bardzo wysokie oceny: komfortowe, przemyślane',
      'Realne wsparcie work–life balance',
    ],
    relatedSlugs: ['cordia-integracja', 'neuca-pikniki'],
  },
  {
    slug: 'stonex-gatsby',
    title: 'Great Gatsby Christmas Night — Stonex',
    client: 'Stonex',
    industry: 'Budowlana / Deweloperska',
    industryTag: 'deweloperska',
    decisionMaker: 'Dział HR / Wewnętrzny organizator',
    eventType: 'Spotkanie świąteczne / wigilia firmowa',
    attendees: '~500',
    duration: '1 wieczór',
    location: 'Stara Zajezdnia, Kraków',
    prepTime: '~2 miesiące',
    heroImage: '/images/stonex-gatsby-hero.jpg',
    thumbnailImage: '/images/stonex-gatsby-thumb.jpg',
    challenge: 'Duża, surowa przestrzeń industrialna wymagająca pełnej transformacji w elegancki salon. Krótki czas na montaż, 500 gości na kolację serwowaną.',
    solution: 'Motyw Great Gatsby — złoto, czerń, pióra, czerwony dywan. Kolacja serwowana z drukowanym menu i sitting planem. Fotobudka z cekinowym tłem, warsztaty broszek z perłami i muszek do garniturów. Praca warstwowa: dekoracje stołów + pionowe akcenty zamykające przestrzeń.',
    highlights: [
      'Transformacja industrialnej hali w salon Gatsby',
      'Kolacja serwowana na 500 osób',
      'Warsztaty personalizacyjne (broszki, muszki)',
      'Klient z polecenia managera lokalizacji',
      'Precyzyjny harmonogram montażu',
    ],
    results: [
      'Wydarzenie odebrane jako prestiżowe i dopracowane',
      'Wysoki poziom zaangażowania w atrakcje',
      'Potwierdzenie zaufania z rekomendacji',
    ],
    relatedSlugs: ['stonex-biuro', 'ocean-mozliwosci'],
  },
  {
    slug: 'stonex-biuro',
    title: 'Otwarcie nowego biura — Stonex',
    client: 'Stonex',
    industry: 'Budowlana / Deweloperska',
    industryTag: 'deweloperska',
    decisionMaker: 'Dział HR / Komunikacja wewnętrzna',
    eventType: 'Otwarcie biura + event wieczorny',
    attendees: '400–500',
    duration: '1 dzień (2 części)',
    location: 'Nowe biuro Stonex + przestrzeń industrialna, Kraków',
    prepTime: '~2 miesiące',
    heroImage: '/images/stonex-biuro-hero.jpg',
    thumbnailImage: '/images/stonex-biuro-thumb.jpg',
    challenge: 'Dwuczęściowy event w dwóch różnych lokalizacjach. Bardzo krótki czas na montaż. Goście z różnych krajów. Konieczność spójności wizualnej w zupełnie różnych przestrzeniach.',
    solution: 'Część I: litera „X" ze styroduru z życzeniami gości + dekoracje w kolorystyce marki. Część II: pełna aranżacja industrialnej przestrzeni — DJ, fotobudka w przyczepie, multimedialny pokaz z logotypami Stonex. Rysowniczka tworząca na żywo grafikę z odpowiedzi uczestników.',
    highlights: [
      'Dwuczęściowy event — 2 lokalizacje, 1 spójność',
      'Goście z Polski i zagranicy',
      'Rysowniczka na żywo → spersonalizowana kartka',
      'Multimedialny pokaz jako kulminacja',
      'Litera „X" z życzeniami pracowników',
    ],
    results: [
      'Silne zaangażowanie polskich i zagranicznych pracowników',
      'Pozytywny odbiór personalizacji',
      'Wsparcie komunikacji wewnętrznej i wizerunku marki',
    ],
    relatedSlugs: ['stonex-gatsby', 'cordia-integracja'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getRelatedCaseStudies(slugs: string[]): CaseStudy[] {
  return slugs.map(slug => caseStudies.find(cs => cs.slug === slug)).filter(Boolean) as CaseStudy[];
}
