import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kontakt — Buddy's Events | Umów rozmowę o Twoim evencie",
  description: 'Skontaktuj się z Buddy\'s Events. Telefon: +48 503 455 846. Email: marta@buddys-events.pl. Organizujemy eventy w całej Polsce.',
}

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
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-burgundy-700 flex items-center justify-center text-xl flex-shrink-0">📞</span>
                  <div>
                    <div className="text-sm text-cream-300 mb-1">Zadzwoń</div>
                    <a href="tel:+48503455846" className="text-xl font-bold text-rose-400 hover:text-rose-300 transition-colors">
                      +48 503 455 846
                    </a>
                    <p className="text-cream-300 text-sm mt-1">Marta — pon–pt, 9:00–17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-xl bg-burgundy-700 flex items-center justify-center text-xl flex-shrink-0">✉️</span>
                  <div>
                    <div className="text-sm text-cream-300 mb-1">Napisz</div>
                    <a href="mailto:marta@buddys-events.pl" className="text-xl font-bold text-rose-400 hover:text-rose-300 transition-colors">
                      marta@buddys-events.pl
                    </a>
                    <p className="text-cream-300 text-sm mt-1">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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
              <form className="bg-burgundy-700/50 backdrop-blur rounded-2xl p-8 lg:p-10 space-y-6 border border-burgundy-600/30">
                <h2 className="text-2xl font-bold font-display mb-2">Wyślij zapytanie</h2>
                <p className="text-cream-300 text-sm mb-4">Wypełnij formularz — odezwiemy się w ciągu 24h.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Imię *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="Jan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Nazwisko</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="Kowalski" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream-200 mb-1.5">Firma *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="Nazwa firmy" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream-200 mb-1.5">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="jan@firma.pl" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream-200 mb-1.5">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="+48 XXX XXX XXX" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Typ eventu</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                      <option value="">Wybierz...</option>
                      <option value="integracja">Integracja / team building</option>
                      <option value="konferencja">Konferencja / szkolenie</option>
                      <option value="beauty">Event beauty / wizerunkowy</option>
                      <option value="piknik">Piknik firmowy / rodzinny</option>
                      <option value="gala">Wigilia / gala / bankiet</option>
                      <option value="otwarcie">Otwarcie / premiera</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Szacowana liczba osób</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                      <option value="">Wybierz...</option>
                      <option value="50">Do 50 osób</option>
                      <option value="100">50–100 osób</option>
                      <option value="300">100–300 osób</option>
                      <option value="500">300–500 osób</option>
                      <option value="1000">500–1000 osób</option>
                      <option value="1000+">Powyżej 1000 osób</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Planowany termin</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none" placeholder="np. wrzesień 2026" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-200 mb-1.5">Szacowany budżet</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none">
                      <option value="">Wybierz...</option>
                      <option value="50k">Do 50 000 zł</option>
                      <option value="100k">50 000 – 100 000 zł</option>
                      <option value="200k">100 000 – 200 000 zł</option>
                      <option value="200k+">Powyżej 200 000 zł</option>
                      <option value="idk">Nie wiem jeszcze</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream-200 mb-1.5">Wiadomość</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none resize-none" placeholder="Opowiedz w skrócie o swoim evencie — cel, lokalizacja, specjalne wymagania..." />
                </div>

                <button type="submit" className="w-full btn-primary text-base !py-4">
                  Wyślij zapytanie
                </button>

                <p className="text-xs text-cream-300/60 text-center">
                  Bez spamu, bez automatycznych maili. Odpowiadamy osobiście w ciągu 24h.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
