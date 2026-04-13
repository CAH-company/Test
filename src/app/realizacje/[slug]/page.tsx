import Link from 'next/link'
import Image from 'next/image'
import { caseStudies, getCaseStudy, getRelatedCaseStudies } from '@/data/caseStudies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug)
  if (!cs) return { title: 'Nie znaleziono' }

  return {
    title: `${cs.title} — Case Study | Buddy's Events`,
    description: `${cs.eventType} dla ${cs.isAnonymous ? cs.anonymousLabel : cs.client}. ${cs.attendees} uczestników. ${cs.challenge.slice(0, 120)}`,
    alternates: { canonical: `https://buddys-events.pl/realizacje/${cs.slug}` },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()

  const related = getRelatedCaseStudies(cs.relatedSlugs)

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="gradient-burgundy text-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link href="/realizacje" className="inline-flex items-center text-cream-300 hover:text-white text-sm mb-6 transition-colors">
            ← Wszystkie realizacje
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-rose-600/20 text-rose-300 border border-rose-500/30">
              {cs.industry}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-burgundy-600/40 text-cream-200 border border-burgundy-500/30">
              {cs.eventType}
            </span>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-burgundy-600/40 text-cream-200 border border-burgundy-500/30">
              {cs.attendees} uczestników
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-6">
            {cs.title}
          </h1>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-burgundy-600/30">
            <div>
              <div className="text-xs text-cream-300 uppercase tracking-wider mb-1">Uczestnicy</div>
              <div className="text-xl font-bold text-rose-400">{cs.attendees}</div>
            </div>
            <div>
              <div className="text-xs text-cream-300 uppercase tracking-wider mb-1">Lokalizacja</div>
              <div className="text-sm font-medium">{cs.location}</div>
            </div>
            <div>
              <div className="text-xs text-cream-300 uppercase tracking-wider mb-1">Czas przygotowań</div>
              <div className="text-sm font-medium">{cs.prepTime}</div>
            </div>
            <div>
              <div className="text-xs text-cream-300 uppercase tracking-wider mb-1">Decydent</div>
              <div className="text-sm font-medium">{cs.decisionMaker}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-burgundy-100">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image src={cs.heroImage} alt={cs.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 text-sm font-bold">!</span>
              Wyzwanie klienta
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{cs.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm font-bold">✓</span>
              Nasze rozwiązanie
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{cs.solution}</p>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-6">
              Realizacja w szczegółach
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {cs.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                  <span className="text-rose-500 mt-0.5 flex-shrink-0">✦</span>
                  <span className="text-gray-700 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          {cs.quote && (
            <div className="mb-12 bg-burgundy-800 text-white rounded-2xl p-8 lg:p-10">
              <svg className="w-8 h-8 text-rose-400/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote className="text-xl lg:text-2xl font-display font-bold leading-snug mb-4">
                &ldquo;{cs.quote}&rdquo;
              </blockquote>
              <footer className="text-cream-300 text-sm">{cs.quoteAuthor}</footer>
            </div>
          )}

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-6">
              Efekt & rezultaty
            </h2>
            <div className="space-y-3">
              {cs.results.map((r) => (
                <div key={r} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <span className="text-emerald-600 mt-0.5 flex-shrink-0 text-lg">✓</span>
                  <span className="text-gray-700">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery placeholder */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-6">
              Galeria
            </h2>
            <Gallery slug={cs.slug} title={cs.title} imageExt={cs.imageExt} />
          </div>

          {/* Video */}
          {cs.videoUrl && (
            <div className="mb-12">
              <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-6">
                Wideo z wydarzenia
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-burgundy-100 shadow-md">
                <iframe
                  src={cs.videoUrl.replace('watch?v=', 'embed/')}
                  title={`${cs.title} — video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-rose-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display mb-4">
            Chcesz podobny efekt dla swojego zespołu?
          </h2>
          <Link href="/#kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-semibold rounded-xl hover:bg-cream-100 transition-all text-base">
            Umów rozmowę →
          </Link>
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold font-display text-burgundy-800 mb-8">
              Zobacz także
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/realizacje/${r.slug}`} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden card-cream transition-all border border-gray-200">
                    <div className="relative aspect-[16/9] bg-burgundy-100 overflow-hidden">
                      <Image src={r.thumbnailImage} alt={r.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold font-display text-burgundy-800 mb-2 group-hover:text-rose-600 transition-colors">
                        {r.isAnonymous ? r.anonymousLabel : r.client}
                      </h3>
                      <p className="text-sm text-gray-500">{r.eventType} • {r.attendees} uczestników</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
