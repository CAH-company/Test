import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Building2, HardHat } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import { ContactForm } from '@/components/ContactForm'
import { CalendlyButton } from '@/components/CalendlyButton'
import { WaveDivider } from '@/components/WaveDivider'

/* ─── SECTION 1: HERO ─── */
function Hero() {
  return (
    <section className="relative bg-burgundy-800 text-white pt-28 pb-0 lg:pt-36 lg:pb-0 overflow-hidden">
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
                Eventy od 50 do 1500 osób w całej Polsce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="btn-primary text-base !py-4 !px-8">
                  Umów rozmowę
                </a>
                <a href="#realizacje" className="btn-secondary !border-cream-200 !text-cream-200 hover:!bg-cream-200 hover:!text-burgundy-800 text-base !py-4 !px-8">
                  Zobacz realizacje ↓
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Buddy's Events — eventy firmowe"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-burgundy-600/30">
            {[
              { number: '300+', label: 'eventów zrealizowanych' },
              { number: '1 500', label: 'uczestników na 1 evencie' },
              { number: '14+', label: 'lat doświadczenia' },
              { number: '35', label: 'pikników w 1 miesiąc' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold font-display text-rose-400">{stat.number}</div>
                <div className="text-sm text-cream-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      <WaveDivider from="dark" to="white" />
    </section>
  )
}

/* ─── SECTION 2: CLIENT LOGOS ─── */
function ClientLogos() {
  const clients = [
    { name: 'Benefit Systems', file: 'benefit-systems.svg' },
    { name: 'NEUCA',           file: 'neuca.svg' },
    { name: 'OnlyBio',         file: 'onlybio.svg' },
    { name: 'E. Wedel',        file: 'e-wedel.png' },
    { name: 'Cordia',          file: 'cordia.svg' },
    { name: 'Marsh',           file: 'marsh.svg' },
    { name: 'Stonex',          file: 'stonex.svg' },
    { name: 'Invisibobble',    file: 'invisibobble.png' },
  ]

  // duplicate for seamless loop
  const track = [...clients, ...clients]

  return (
    <div>
      <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
        <p className="text-center text-xs font-semibold text-gray-400 mb-8 uppercase tracking-[0.2em]">Zaufali nam</p>
        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee w-max">
            {track.map((client, i) => (
              <div key={i} className="logo-grayscale flex items-center justify-center px-10">
                <img
                  src={`/logos/${client.file}`}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  style={{ height: client.file === 'e-wedel.png' ? '56px' : '44px', width: 'auto', maxWidth: '150px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider from="white" to="cream" />
    </div>
  )
}

/* ─── SECTION 3: SEGMENTS ─── */
function Segments() {
  const segments = [
    {
      icon: <Sparkles className="w-7 h-7 text-rose-600" aria-hidden="true" />,
      title: 'Beauty & Lifestyle',
      items: ['Eventy influencerskie', 'Launche produktów', 'Premiery limitowanych edycji', 'Spotkania prasowe'],
      caseStudy: 'OnlyBio × E. Wedel',
      caseStudySlug: 'onlybio-wedel',
      num: '01',
    },
    {
      icon: <Building2 className="w-7 h-7 text-rose-600" aria-hidden="true" />,
      title: 'Korporacyjna & Biznesowa',
      items: ['Integracje dla 1500+ osób', 'Eventy ogólnofirmowe', 'Konferencje i gale', 'Firmowe wigilie i pikniki'],
      caseStudy: 'Benefit Systems — 1 500 uczestników',
      caseStudySlug: 'benefit-systems',
      num: '02',
    },
    {
      icon: <HardHat className="w-7 h-7 text-rose-600" aria-hidden="true" />,
      title: 'Deweloperska & Budowlana',
      items: ['Integracje po fuzjach', 'Otwarcia inwestycji i biur', 'Pikniki dla pracowników', 'Wigilie firmowe'],
      caseStudy: 'NEUCA — 13 lat pikników ogólnopolskich',
      caseStudySlug: 'neuca-pikniki',
      num: '03',
    },
  ]

  return (
    <div>
      <section className="py-20 lg:py-28 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-rose-600 mb-4 bg-rose-50 border border-rose-100 px-5 py-2 rounded-full">
              Nasze specjalizacje
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-burgundy-800 mb-4">
              Specjalizujemy się w&nbsp;eventach dla:
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Znamy specyfikę Twojej branży. Wiemy, czego oczekują:
              zarząd, goście i influencerzy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {segments.map((seg) => (
              <div
                key={seg.title}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Top gradient bar */}
                <div className="h-1 bg-gradient-to-r from-rose-500 to-burgundy-700" />

                {/* Faded number watermark */}
                <div className="absolute top-4 right-5 text-8xl font-extrabold font-display text-gray-50/80 select-none pointer-events-none leading-none">
                  {seg.num}
                </div>

                <div className="relative p-8 pt-6">
                  {/* Icon bubble */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f4 100%)' }}>
                    {seg.icon}
                  </div>

                  <h3 className="text-xl font-bold font-display text-burgundy-800 mb-4 leading-tight">
                    {seg.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {seg.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-cream-50 text-gray-600 border border-gray-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/realizacje/${seg.caseStudySlug}`}
                    className="inline-flex items-center gap-2.5 text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center transition-colors">
                      →
                    </span>
                    <span>Case Study: {seg.caseStudy}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* No WaveDivider needed here — FeaturedCaseStudies also uses bg-cream-50 */}
    </div>
  )
}

/* ─── SECTION 5: FEATURED CASE STUDIES ─── */
function FeaturedCaseStudies() {
  const featured = [
    caseStudies.find(cs => cs.slug === 'benefit-systems')!,
    caseStudies.find(cs => cs.slug === 'onlybio-wedel')!,
    caseStudies.find(cs => cs.slug === 'neuca-pikniki')!,
  ]

  return (
    <div>
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
                  {/* Image — rounded-tl/bl via parent overflow-hidden */}
                  <div className="relative aspect-[16/10] bg-burgundy-100 overflow-hidden">
                    <Image
                      src={featured[0].thumbnailImage}
                      alt={featured[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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

          {/* Two smaller cards — NO button below */}
          <div className="grid md:grid-cols-2 gap-8">
            {featured.slice(1).map((cs) => (
              <Link key={cs.slug} href={`/realizacje/${cs.slug}`} className="block group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                  <div className="relative aspect-[16/9] bg-burgundy-100 overflow-hidden">
                    <Image
                      src={cs.thumbnailImage}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
        </div>
      </section>
      <WaveDivider from="cream" to="dark" />
    </div>
  )
}

/* ─── SECTION 6: USP ─── */
function USP() {
  const usps = [
    {
      title: 'Kompleksowość bez kompromisów',
      desc: 'Jedna umowa, jeden zespół, jeden kosztorys. Bez ukrytych kosztów, bez chaosu z podwykonawcami. Akceptujesz budżet PRZED eventem, i tyle!',
    },
    {
      title: 'Immersyjny storytelling',
      desc: 'Nie robimy „dekoracji". Projektujemy spójne światy. Od zaproszenia, przez dedykowaną scenografię, po ostatni drink. Wizualizacje 3D realizowane 1:1.',
    },
    {
      title: 'Kreatywna odwaga',
      desc: 'Zero skakania w workach. Zamiast tego: Hobby Horse z CSR-em, Król Jankes III Waza, ekran Leia i meduzy pod sufitem.',
    },
    {
      title: 'Instagramowalność by design',
      desc: 'Każdy element eventu jest zaprojektowany jako tło do Reels i Stories. Content generuje się sam, bez dodatkowych sesji.',
    },
    {
      title: 'Proaktywność „czytamy w myślach"',
      desc: 'Mamy rozwiązanie, zanim zdążysz pomyśleć o problemie. Brak fotografa dzień przed eventem? Załatwione. Pies influencerki na terenie muzeum? Zaopiekowany.',
    },
    {
      title: 'Nasz Prezes jest psem 🐾',
      desc: 'Buddy inspiruje nas codziennie. A na konferencjach oferujemy opiekę nad pupilami gości. Tak, naprawdę.',
    },
  ]

  return (
    <section className="pt-20 lg:pt-28 pb-0 bg-burgundy-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
            Co dostaniesz, czego nie daje Ci typowa agencja
          </h2>
          <p className="text-cream-300 max-w-2xl mx-auto">
            Pracujemy inaczej. Oto co sprawia, że nasi klienci wracają do nas rok po roku.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {usps.map((usp) => (
            <div key={usp.title} className="bg-burgundy-800/50 rounded-2xl p-6 border border-burgundy-700/40 hover:border-rose-500/40 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-rose-400 text-base mt-0.5 flex-shrink-0">✦</span>
                <h3 className="text-base font-bold font-display text-white leading-snug">{usp.title}</h3>
              </div>
              <p className="text-cream-300 text-sm leading-relaxed ml-6">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider from="dark" to="cream" />
    </section>
  )
}

/* ─── SECTION 7: NUMBERS ─── */
function Numbers() {
  const stats = [
    { number: '1 500', label: 'uczestników na 1 evencie', sub: 'Zamek Królewski, Warszawa' },
    { number: '35', label: 'pikników w 1 miesiąc', sub: 'po ~700 osób każdy' },
    { number: '14+', label: 'lat na rynku', sub: 'od pierwszego eventu' },
    { number: '8–11', label: 'miast równolegle', sub: 'ogólnopolska skala' },
    { number: '5 000', label: 'gwoździ wbitych', sub: 'na jednym evencie' },
    { number: '0', label: 'ukrytych kosztów', sub: 'kosztorys PRZED eventem' },
  ]

  return (
    <div>
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
      <WaveDivider from="cream" to="white" flip />
    </div>
  )
}

/* ─── SECTION 8: VIDEO ─── */
function VideoSection() {
  return (
    <div>
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
      <WaveDivider from="white" to="dark" />
    </div>
  )
}

/* ─── SECTION 9: CTA / CONTACT ─── */
const contacts = [
  { name: 'Marta', phone: '+48 503 455 846', email: 'marta@buddys-events.pl' },
  { name: 'Kasia', phone: '+48 791 939 393', email: 'kasia@buddys-events.pl' },
]

function CTASection() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-burgundy-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contacts + form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Umów się na kawę z&nbsp;Buddym&nbsp;☕
            </h2>
            <p className="text-cream-200 text-lg mb-8">
              Opowiedz nam o swoim evencie. Bez zobowiązań, po prostu porozmawiajmy.
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

            <CalendlyButton />
          </div>

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
      <FeaturedCaseStudies />
      <USP />
      <Numbers />
      <VideoSection />
      <CTASection />
    </>
  )
}
