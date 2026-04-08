'use client'

import Script from 'next/script'

export function CalendlyButton() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/marta-buddys-events' })
    }
  }

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <button
        onClick={openCalendly}
        className="inline-flex items-center gap-3 w-full justify-center rounded-2xl border-2 border-rose-400/60 hover:border-rose-400 bg-burgundy-700/40 hover:bg-burgundy-700/70 text-white font-semibold py-4 px-6 transition-all duration-200"
      >
        <span className="text-xl">📅</span>
        <span>Zarezerwuj termin w kalendarzu</span>
      </button>
      <p className="text-cream-300/60 text-xs mt-2 text-center">Wybierz wygodny dla Ciebie termin rozmowy</p>
    </>
  )
}
