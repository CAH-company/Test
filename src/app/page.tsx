import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import { ContactForm } from '@/components/ContactForm'

/* ─── SECTION 1: HERO ─── */
function Hero() {
  return (
    <section className="relative gradient-burgundy text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
              Zdejmujemy z&nbsp;Ciebie cały ciężar eventu.{' '}
              <span className="text-rose-400">Ty dostajesz spokój i&nbsp;efekt&nbsp;WOW.</span>
            </h1>
            <p className="text-lg lg:text-xl text-cream-200 mb-8 leading-relaxed max-w-xl">
              Od koncepcji po rozliczenie. Jedna umowa, jeden partner, zero stresu.
              Eventy od 50 do 1500 osób — w całej Polsce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary text-base !py-4 !px-8">
                Umów rozmowę
              </Link>
              <a href="#realizacje" className="btn-secondary !border-cream-200 !text-cream-200 hover:!bg-cream-200 hover:!text-burgundy-800 text-base !py-4 !px-8">
                Zobacz realizacje ↓
              </a>
            </div>
          </div>

          {/* Hero visual — placeholder for video/image */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-3xl bg-burgundy-700/50 border border-burgundy-600/30 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-cream-300 text-sm mb-2">[ HERO VIDEO / ZDJĘCIE ]</p>
                <p className="text-cream-200/60 text-xs">Montaż z eventów: Benefit Systems 1500 os., meduzy Ocean, OnlyBio Wedel, Cordia kajaki</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-burgundy-600/30">
          {[
            { number: '300+', label: 'eventów zrealizowanych' },
            { number: '1 500', label: 'uczestników na 1 evencie' },
            { number: '14+', label: 'lat doświadczenia' },
            { number: '11', label: 'pikników w 1 miesiąc' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold font-display text-rose-400">{stat.number}</div>
              <div className="text-sm text-cream-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 2: CLIENT LOGOS ─── */
function ClientLogos() {
  const clients = [
    'Benefit Systems', 'NEUCA', 'OnlyBio', 'E. Wedel',
    'Cordia', 'Marsh', 'Stonex', 'Invisibobble'
  ]

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">Zaufali nam</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div key={client} className="logo-grayscale px-4 py-2">
              <span className="text-lg font-bold text-gray-700 font-display">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 3: SEGMENTS ─── */
function Segments() {
  const segments = [
    {
      icon: '💄',
      title: 'Beauty & Lifestyle',
      items: ['Eventy influencerskie', 'Launche produktów', 'Premiery limitowanych edycji', 'Spotkania prasowe'],
      caseStudy: 'OnlyBio × E. Wedel',
      caseStudySlug: 'onlybio-wedel',
    },
    {
      icon: '🏢',
      title: 'Korporacyjna & Biznesowa',
      items: ['Integracje dla 1500+ osób', 'Eventy ogólnofirmowe', 'Konferencje i gale', 'Firmowe wigilie i pikniki'],
      caseStudy: 'Benefit Systems — 1 500 uczestników',
      caseStudySlug: 'benefit-systems',
    },
    {
      icon: '🏗️',
      title: 'Deweloperska & Budowlana',
      items: ['Integracje po fuzjach', 'Otwarcia inwestycji i biur', 'Pikniki dla pracowników', 'Wigilie firmowe'],
      caseStudy: 'Cordia — integracja po fuzji',
      caseStudySlug: 'cordia-integracja',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-burgundy-800 mb-4">
            Specjalizujemy się w eventach dla:
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Znamy specyfikę Twojej branży. Wiemy, czego oczekuje Twój zarząd, Twoi goście i Twoi influencerzy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((seg) => (
            <div key={seg.title} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{seg.icon}</div>
              <h3 className="text-xl font-bold font-display text-burgundy-800 mb-4">{seg.title}</h3>
              <ul className="space-y-2 mb-6">
                {seg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-rose-500 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/realizacje/${seg.caseStudySlug}`}
                className="inline-flex items-center text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors group">
                Case Study: {seg.caseStudy}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Organizujemy także eventy korporacyjne, wigilie firmowe i spotkania świąteczne — niezależnie od branży.
        </p>
      </div>
    </section>
  )
}

/* ─── SECTION 4: PROCESS ─── */
function Process() {
  const steps = [
    {
      num: '01',
      title: 'Brief & zrozumienie',
      desc: 'Najpierw słuchamy. Pytamy o cel, zespół, budżet i obawy. Rozumiemy, czego naprawdę potrzebujesz — nie tylko, czego oczekujesz.',
    },
    {
      num: '02',
      title: 'Koncepcja & wizualizacje',
      desc: 'Dostajesz moodboardy, wizualizacje 3D i scenariusz — zanim cokolwiek ruszymy. Akceptujesz pełen kosztorys PRZED realizacją.',
    },
    {
      num: '03',
      title: 'Produkcja & logistyka',
      desc: 'Jeden zespół ogarnia wszystko: scenografię, catering, technikę, bezpieczeństwo, transport. Ty nie szukasz podwykonawców.',
    },
    {
      num: '04',
      title: 'Realizacja & koordynacja',
      desc: 'W dniu eventu Ty jesteś gościem, nie koordynatorem. My zarządzamy wszystkim — mamy plany A, B, C i D.',
    },
    {
      num: '05',
      title: 'Rozliczenie & follow-up',
      desc: 'Jedna faktura, brak ukrytych kosztów, pełna dokumentacja. Zero niespodzianek po evencie.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 gradient-burgundy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
            Od pierwszej rozmowy do rozliczenia
          </h2>
          <p className="text-cream-200 max-w-2xl mx-auto">
            Tak wygląda nasza współpraca. Przewidywalnie, spokojnie i bez stresu po Twojej stronie.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="text-5xl font-extrabold font-display text-rose-500/20 mb-2">{step.num}</div>
              <h3 className="text-lg font-bold font-display mb-2">{step.title}</h3>
              <p className="text-cream-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/kontakt" className="btn-primary text-base">
            Umów rozmowę — opowiemy więcej
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 5: FEATURED CASE STUDIES ─── */
function FeaturedCaseStudies() {
  const featured = [
    caseStudies.find(cs => cs.slug === 'benefit-systems')!,
    caseStudies.find(cs => cs.slug === 'onlybio-wedel')!,
    caseStudies.find(cs => cs.slug === 'cordia-integracja')!,
  ]

  return (
    <section id="realizacje" className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-burgundy-800 mb-4">
            Nie opowiadamy, że jesteśmy dobrzy. Pokazujemy.
          </h2>
        </div>

        {/* Main featured */}
        <div className="mb-10">
          <Link href={`/realizacje/${featured[0].slug}`} className="block group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/10] bg-burgundy-100 rounded-tl-3xl rounded-bl-none rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-3xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <p className="text-burgundy-400 text-sm">[ ZDJĘCIE: Benefit Systems — Arkady Kubickiego ]</p>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-rose-100 text-rose-700">
                      {featured[0].attendees} uczestników
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-700">
                      {featured[0].industry}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold font-display text-burgundy-800 mb-4 group-hover:text-rose-600 transition-colors">
                    {featured[0].isAnonymous ? featured[0].anonymousLabel : featured[0].client} — {featured[0].attendees} uczestników
                  </h3>
                  {featured[0].quote && (
                    <blockquote className="text-gray-600 italic mb-4 border-l-4 border-rose-400 pl-4">
                      &ldquo;{featured[0].quote}&rdquo;
                      <footer className="text-sm text-gray-500 mt-1 not-italic">— {featured[0].quoteAuthor}</footer>
                    </blockquote>
                  )}
                  <ul className="space-y-1 mb-6">
                    {featured[0].highlights.slice(0, 4).map((h) => (
                      <li key={h} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-rose-500">•</span> {h}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-sm font-semibold text-rose-600 group-hover:text-rose-700">
                    Przeczytaj pełne case study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Two smaller cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {featured.slice(1).map((cs) => (
            <Link key={cs.slug} href={`/realizacje/${cs.slug}`} className="block group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                <div className="aspect-[16/9] bg-burgundy-100 rounded-t-3xl flex items-center justify-center overflow-hidden">
                  <p className="text-burgundy-400 text-sm">[ ZDJĘCIE: {cs.client} ]</p>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-rose-100 text-rose-700">
                      {cs.eventType}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-burgundy-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {cs.client}
                  </h3>
                  {cs.quote && (
                    <p className="text-gray-600 italic text-sm mb-3">
                      &ldquo;{cs.quote.slice(0, 100)}...&rdquo;
                    </p>
                  )}
                  <p className="text-gray-600 text-sm mb-4">{cs.challenge.slice(0, 120)}...</p>
                  <span className="inline-flex items-center text-sm font-semibold text-rose-600 group-hover:text-rose-700">
                    Pełne case study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/realizacje" className="btn-secondary text-base">
            Zobacz więcej realizacji →
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 6: USP ─── */
function USP() {
  const usps = [
    {
      title: 'Kompleksowość bez kompromisów',
      desc: 'Jedna umowa, jeden zespół, jeden kosztorys. Bez ukrytych kosztów, bez chaosu z podwykonawcami. Akceptujesz budżet PRZED eventem — i tyle.',
    },
    {
      title: 'Immersyjny storytelling',
      desc: 'Nie robimy „dekoracji". Projektujemy spójne światy — od zaproszenia, przez scenografię, po ostatni drink. Wizualizacje 3D realizowane 1:1.',
    },
    {
      title: 'Kreatywna odwaga',
      desc: 'Zero skakania w workach. Zamiast tego: Hobby Horse z CSR-em, Król Jankes III Waza, kurtyna pary wodnej i meduzy na suficie.',
    },
    {
      title: 'Instagramowalność by design',
      desc: 'Każdy element eventu jest zaprojektowany jako tło do Reels i Stories. Content generuje się sam — bez dodatkowych sesji.',
    },
    {
      title: 'Proaktywność — „czytamy w myślach"',
      desc: 'Mamy rozwiązanie, zanim zdążysz pomyśleć o problemie. Brak fotografa dzień przed eventem? Załatwione. Pies influencerki na terenie muzeum? Zaopiekowany.',
    },
    {
      title: 'Nasz Prezes jest psem 🐾',
      desc: 'Buddy inspiruje nas codziennie. A na konferencjach oferujemy opiekę nad pupilami gości. Tak, naprawdę.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-burgundy-800 mb-4">
            Co dostaniesz, czego nie daje Ci typowa agencja
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="group">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-rose-500 text-xl mt-0.5 flex-shrink-0">✦</span>
                <h3 className="text-lg font-bold font-display text-burgundy-800">{usp.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-8">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 7: NUMBERS ─── */
function Numbers() {
  const stats = [
    { number: '1 500', label: 'uczestników na 1 evencie', sub: 'Zamek Królewski, Warszawa' },
    { number: '11', label: 'pikników w 1 miesiąc', sub: 'po ~700 osób każdy' },
    { number: '14+', label: 'lat na rynku', sub: 'od pierwszego eventu' },
    { number: '8–11', label: 'miast równolegle', sub: 'ogólnopolska skala' },
    { number: '5 000', label: 'gwoździ wbitych', sub: 'na jednym evencie' },
    { number: '0', label: 'ukrytych kosztów', sub: 'kosztorys PRZED eventem' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-burgundy-800 text-center mb-14">
          Liczby, które mówią
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold font-display text-rose-600">{stat.number}</div>
              <div className="text-sm font-semibold text-burgundy-800 mt-2">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 8: VIDEO ─── */
function VideoSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-burgundy-800 text-center mb-10">
          Zobacz, jak to wygląda w praktyce
        </h2>
        <div className="aspect-video rounded-3xl overflow-hidden bg-burgundy-100 shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/JO7Z8hrY7Rw"
            title="Buddy's Events — Benefit Systems event"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

/* ─── SECTION 9: CTA / CONTACT ─── */
const contacts = [
  { name: 'Marta', phone: '+48 503 455 846', email: 'marta@buddys-events.pl' },
  { name: 'Rafał', phone: '+48 XXX XXX XXX', email: 'rafal@buddys-events.pl' },
  { name: 'XYZ', phone: '+48 XXX XXX XXX', email: 'xyz@buddys-events.pl' },
]

function CTASection() {
  return (
    <section className="py-20 lg:py-28 gradient-burgundy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Umów się na kawę z&nbsp;Buddym&nbsp;☕
            </h2>
            <p className="text-cream-200 text-lg mb-8">
              Opowiedz nam o swoim evencie. Bez zobowiązań — po prostu porozmawiajmy.
            </p>

            <div className="space-y-5 mb-8">
              {contacts.map((c) => (
                <div key={c.name} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-burgundy-700 flex items-center justify-center text-base font-bold text-rose-300 flex-shrink-0">
                    {c.name[0]}
                  </span>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5">{c.name}</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-rose-400 hover:text-rose-300 transition-colors text-sm">
                        {c.phone}
                      </a>
                      <span className="text-burgundy-500 text-sm">·</span>
                      <a href={`mailto:${c.email}`} className="text-rose-400 hover:text-rose-300 transition-colors text-sm">
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-cream-300 text-sm">
              Jesteśmy dostępni w całej Polsce.
            </p>
          </div>

          {/* Contact form */}
          <ContactForm compact />
        </div>
      </div>
    </section>
  )
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Segments />
      <Process />
      <FeaturedCaseStudies />
      <USP />
      <Numbers />
      <VideoSection />
      <CTASection />
    </>
  )
}
