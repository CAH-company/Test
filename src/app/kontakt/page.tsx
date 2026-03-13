import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Kontakt — Buddy's Events | Umów rozmowę o Twoim evencie",
  description:
    "Skontaktuj się z Buddy's Events. Telefon: +48 503 455 846. Email: marta@buddys-events.pl. Organizujemy eventy w całej Polsce.",
  alternates: { canonical: 'https://buddys-events.pl/kontakt' },
}

const contacts = [
  { name: 'Marta', phone: '+48 503 455 846', email: 'marta@buddys-events.pl', hours: 'pon–pt, 9:00–17:00' },
  { name: 'Rafał', phone: '+48 XXX XXX XXX', email: 'rafal@buddys-events.pl', hours: 'pon–pt, 9:00–17:00' },
  { name: 'XYZ', phone: '+48 XXX XXX XXX', email: 'xyz@buddys-events.pl', hours: 'pon–pt, 9:00–17:00' },
]

export default function KontaktPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="gradient-burgundy text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-6">
                Umów się na kawę z&nbsp;Buddym&nbsp;☕
              </h1>
              <p className="text-cream-200 text-lg mb-10 leading-relaxed">
                Opowiedz nam o swoim evencie. Bez zobowiązań, bez formularzy na 50 pól — po prostu porozmawiajmy
                o tym, czego potrzebujesz.
              </p>

              <div className="space-y-6 mb-10">
                {contacts.map((c) => (
                  <div key={c.name} className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-xl bg-burgundy-700 flex items-center justify-center text-lg font-bold text-rose-300 flex-shrink-0">
                      {c.name[0]}
                    </span>
                    <div>
                      <div className="font-bold text-white mb-0.5">{c.name}</div>
                      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mb-1">
                        <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-rose-400 hover:text-rose-300 transition-colors font-semibold">
                          {c.phone}
                        </a>
                        <span className="text-burgundy-500">·</span>
                        <a href={`mailto:${c.email}`} className="text-rose-400 hover:text-rose-300 transition-colors font-semibold">
                          {c.email}
                        </a>
                      </div>
                      <p className="text-cream-300 text-sm">{c.hours}</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 pt-2">
                  <span className="w-12 h-12 rounded-xl bg-burgundy-700 flex items-center justify-center text-xl flex-shrink-0">📍</span>
                  <div>
                    <div className="text-sm text-cream-300 mb-1">Siedziba</div>
                    <p className="text-lg font-semibold">Warszawa, Polska</p>
                    <p className="text-cream-300 text-sm mt-1">Działamy w całej Polsce</p>
                  </div>
                </div>
              </div>

              {/* Calendly placeholder */}
              <div className="bg-burgundy-700/50 rounded-2xl p-6 border border-burgundy-600/30">
                <h3 className="text-lg font-bold font-display mb-2">Wolisz umówić się od razu?</h3>
                <p className="text-cream-300 text-sm mb-4">Wybierz termin 15-minutowej rozmowy w naszym kalendarzu.</p>
                <div className="aspect-[3/2] rounded-xl bg-burgundy-800/60 flex items-center justify-center border border-burgundy-600/30">
                  <div className="text-center p-4">
                    <p className="text-cream-300 text-sm">[ CALENDLY EMBED ]</p>
                    <p className="text-cream-300/60 text-xs mt-1">Wstaw link do Calendly Marty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
