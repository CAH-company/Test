import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Realizacje — Buddy's Events | Case Study eventów firmowych",
  description: 'Zobacz nasze realizacje: eventy dla 50–1500 osób. Benefit Systems, OnlyBio, NEUCA, Cordia, Marsh, Stonex. 9 szczegółowych case study.',
  alternates: { canonical: 'https://buddys-events.pl/realizacje' },
}

const industryColors: Record<string, string> = {
  beauty: 'bg-pink-100 text-pink-700',
  deweloperska: 'bg-amber-100 text-amber-700',
  farmaceutyczna: 'bg-emerald-100 text-emerald-700',
  korporacyjna: 'bg-blue-100 text-blue-700',
  sport: 'bg-violet-100 text-violet-700',
}

export default function RealizacjePage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="gradient-burgundy text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4">
            Nasze realizacje
          </h1>
          <p className="text-cream-200 text-lg max-w-2xl mx-auto">
            5 szczegółowych case study. Od integracji po fuzji po eventy influencerskie.
            Każdy projekt to inna branża, inna skala, inne wyzwanie.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/realizacje/${cs.slug}`} className="block group">
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                  {/* Image - explicitly rounded-t-3xl + overflow-hidden */}
                  <div className="aspect-[16/10] bg-burgundy-100 rounded-t-3xl overflow-hidden">
                    <img src={cs.thumbnailImage} alt={cs.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${industryColors[cs.industryTag] || 'bg-gray-100 text-gray-700'}`}>
                        {cs.industry.split('/')[0].trim()}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                        {cs.attendees} os.
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-display text-burgundy-800 mb-2 group-hover:text-rose-600 transition-colors">
                      {cs.isAnonymous ? cs.anonymousLabel : cs.client}
                    </h2>

                    <p className="text-sm text-gray-500 mb-3">{cs.eventType}</p>

                    <p className="text-sm text-gray-600 mb-4 flex-1">
                      {cs.challenge.slice(0, 120)}...
                    </p>

                    <span className="inline-flex items-center text-sm font-semibold text-rose-600 group-hover:text-rose-700">
                      Czytaj case study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-burgundy text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold font-display mb-4">
            Chcesz podobny efekt dla swojej firmy?
          </h2>
          <p className="text-cream-200 mb-8">
            Opowiedz nam o swoim evencie — przygotujemy koncepcję szytą na miarę.
          </p>
          <Link href="/kontakt" className="btn-primary text-base">
            Umów rozmowę
          </Link>
        </div>
      </section>
    </div>
  )
}
