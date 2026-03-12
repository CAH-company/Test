'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  eventType: string
  attendees: string
  date: string
  budget: string
  message: string
}

interface ContactFormProps {
  /** When true, renders the compact version used on the homepage CTA section */
  compact?: boolean
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  eventType: '',
  attendees: '',
  date: '',
  budget: '',
  message: '',
}

function validate(data: FormData, compact: boolean): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {}
  if (!data.firstName.trim()) errors.firstName = 'Imię jest wymagane'
  if (!compact && !data.company.trim()) errors.company = 'Firma jest wymagana'
  if (!data.email.trim()) {
    errors.email = 'Email jest wymagany'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Podaj poprawny adres email'
  }
  return errors
}

export function ContactForm({ compact = false }: ContactFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate(form, compact)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (!endpoint) {
      // Fallback: open mail client with pre-filled data
      const subject = encodeURIComponent(`Zapytanie o event — ${form.company || form.firstName}`)
      const body = encodeURIComponent(
        `Imię: ${form.firstName} ${form.lastName}\nFirma: ${form.company}\nEmail: ${form.email}\nTelefon: ${form.phone}\nTyp eventu: ${form.eventType}\nLiczba osób: ${form.attendees}\nTermin: ${form.date}\nBudżet: ${form.budget}\n\nWiadomość:\n${form.message}`
      )
      window.location.href = `mailto:marta@buddys-events.pl?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Zapytanie o event — ${form.company || form.firstName}`,
        }),
      })
      if (!res.ok) throw new Error('Network response was not ok')
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors'
  const inputError =
    'w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-rose-500 text-white placeholder:text-cream-300/50 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors'
  const selectClass =
    'w-full px-4 py-3 rounded-xl bg-burgundy-800/60 border border-burgundy-600/40 text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-colors appearance-none'

  if (status === 'success') {
    return (
      <div className="bg-burgundy-700/50 backdrop-blur rounded-2xl p-8 lg:p-10 border border-burgundy-600/30 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold font-display text-white mb-3">Dziękujemy!</h3>
        <p className="text-cream-300 leading-relaxed max-w-sm">
          Twoje zapytanie zostało wysłane. Odezwiemy się osobiście w ciągu 24&nbsp;godzin.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-primary text-sm !py-2.5 !px-6"
        >
          Wyślij kolejne zapytanie
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-burgundy-700/50 backdrop-blur rounded-2xl p-8 lg:p-10 space-y-6 border border-burgundy-600/30"
    >
      <div>
        <h2 className="text-2xl font-bold font-display mb-1">Wyślij zapytanie</h2>
        <p className="text-cream-300 text-sm">Wypełnij formularz — odezwiemy się w ciągu 24h.</p>
      </div>

      {status === 'error' && (
        <div className="rounded-xl bg-rose-900/50 border border-rose-600/50 px-4 py-3 text-rose-200 text-sm">
          Coś poszło nie tak. Spróbuj jeszcze raz lub napisz bezpośrednio na{' '}
          <a href="mailto:marta@buddys-events.pl" className="underline hover:text-white">
            marta@buddys-events.pl
          </a>
          .
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Imię *</label>
          <input
            type="text"
            value={form.firstName}
            onChange={set('firstName')}
            required
            autoComplete="given-name"
            className={errors.firstName ? inputError : inputClass}
            placeholder="Jan"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-rose-400">{errors.firstName}</p>
          )}
        </div>
        {!compact && (
          <div>
            <label className="block text-sm font-medium text-cream-200 mb-1.5">Nazwisko</label>
            <input
              type="text"
              value={form.lastName}
              onChange={set('lastName')}
              autoComplete="family-name"
              className={inputClass}
              placeholder="Kowalski"
            />
          </div>
        )}
        {compact && (
          <div>
            <label className="block text-sm font-medium text-cream-200 mb-1.5">Firma</label>
            <input
              type="text"
              value={form.company}
              onChange={set('company')}
              autoComplete="organization"
              className={inputClass}
              placeholder="Nazwa firmy"
            />
          </div>
        )}
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Firma *</label>
          <input
            type="text"
            value={form.company}
            onChange={set('company')}
            required
            autoComplete="organization"
            className={errors.company ? inputError : inputClass}
            placeholder="Nazwa firmy"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-rose-400">{errors.company}</p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-cream-200 mb-1.5">Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          required
          autoComplete="email"
          className={errors.email ? inputError : inputClass}
          placeholder="jan@firma.pl"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
        )}
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Telefon</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            autoComplete="tel"
            className={inputClass}
            placeholder="+48 XXX XXX XXX"
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Typ eventu</label>
          <select value={form.eventType} onChange={set('eventType')} className={selectClass}>
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
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Szacowany budżet</label>
          <select value={form.budget} onChange={set('budget')} className={selectClass}>
            <option value="">Wybierz...</option>
            <option value="50k">Do 50 000 zł</option>
            <option value="100k">50 000 – 100 000 zł</option>
            <option value="200k">100 000 – 200 000 zł</option>
            <option value="200k+">Powyżej 200 000 zł</option>
            <option value="idk">Nie wiem jeszcze</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-cream-200 mb-1.5">
              Szacowana liczba osób
            </label>
            <select value={form.attendees} onChange={set('attendees')} className={selectClass}>
              <option value="">Wybierz...</option>
              <option value="50">Do 50 osób</option>
              <option value="100">50–100 osób</option>
              <option value="300">100–300 osób</option>
              <option value="500">300–500 osób</option>
              <option value="1000">500–1000 osób</option>
              <option value="1000+">Powyżej 1000 osób</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-cream-200 mb-1.5">
              Planowany termin
            </label>
            <input
              type="text"
              value={form.date}
              onChange={set('date')}
              className={inputClass}
              placeholder="np. wrzesień 2026"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-cream-200 mb-1.5">Wiadomość</label>
        <textarea
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={set('message')}
          className={`${inputClass} resize-none`}
          placeholder="Opowiedz w skrócie o swoim evencie..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>

      <p className="text-xs text-cream-300/60 text-center">
        Bez spamu, bez automatycznych maili. Odpowiadamy osobiście w ciągu 24h.
      </p>
    </form>
  )
}
