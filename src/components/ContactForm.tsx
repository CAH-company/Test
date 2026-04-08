'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  gdprConsent: boolean
}

const INITIAL_FORM: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gdprConsent: false,
}

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {}
  if (!data.firstName.trim()) errors.firstName = 'Imię jest wymagane'
  if (!data.lastName.trim()) errors.lastName = 'Nazwisko jest wymagane'
  if (!data.email.trim()) {
    errors.email = 'Email jest wymagany'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Podaj poprawny adres email'
  }
  if (!data.phone.trim()) errors.phone = 'Telefon jest wymagany'
  if (!data.gdprConsent) errors.gdprConsent = 'Zgoda na przetwarzanie danych jest wymagana'
  return errors
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: 'firstName' | 'lastName' | 'email' | 'phone') => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
    if (!endpoint) {
      const subject = encodeURIComponent(`Zapytanie — ${form.firstName} ${form.lastName}`)
      const body = encodeURIComponent(
        `Imię: ${form.firstName}\nNazwisko: ${form.lastName}\nEmail: ${form.email}\nTelefon: ${form.phone}`
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
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          _subject: `Zapytanie — ${form.firstName} ${form.lastName}`,
        }),
      })
      if (!res.ok) throw new Error()
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

  if (status === 'success') {
    return (
      <div className="bg-burgundy-700/50 backdrop-blur rounded-2xl p-8 lg:p-10 border border-burgundy-600/30 flex flex-col items-center justify-center text-center min-h-[300px]">
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
      className="bg-burgundy-700/50 backdrop-blur rounded-2xl p-8 lg:p-10 space-y-5 border border-burgundy-600/30"
    >
      <div>
        <h2 className="text-2xl font-bold font-display mb-1">Wyślij nam dane kontaktowe</h2>
        <p className="text-cream-300 text-sm">Wypełnij formularz a odezwiemy się w ciągu 24h.</p>
      </div>

      {status === 'error' && (
        <div className="rounded-xl bg-rose-900/50 border border-rose-600/50 px-4 py-3 text-rose-200 text-sm">
          Coś poszło nie tak. Napisz bezpośrednio na{' '}
          <a href="mailto:marta@buddys-events.pl" className="underline hover:text-white">
            marta@buddys-events.pl
          </a>
          .
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
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
          {errors.firstName && <p className="mt-1 text-xs text-rose-400">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-cream-200 mb-1.5">Nazwisko *</label>
          <input
            type="text"
            value={form.lastName}
            onChange={set('lastName')}
            required
            autoComplete="family-name"
            className={errors.lastName ? inputError : inputClass}
            placeholder="Kowalski"
          />
          {errors.lastName && <p className="mt-1 text-xs text-rose-400">{errors.lastName}</p>}
        </div>
      </div>

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
        {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-cream-200 mb-1.5">Telefon *</label>
        <input
          type="tel"
          value={form.phone}
          onChange={set('phone')}
          required
          autoComplete="tel"
          className={errors.phone ? inputError : inputClass}
          placeholder="+48 XXX XXX XXX"
        />
        {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.gdprConsent}
            onChange={(e) => {
              setForm(prev => ({ ...prev, gdprConsent: e.target.checked }))
              if (errors.gdprConsent) setErrors(prev => ({ ...prev, gdprConsent: undefined }))
            }}
            className="mt-0.5 w-4 h-4 rounded accent-rose-500 flex-shrink-0 cursor-pointer"
          />
          <span className="text-xs text-cream-300/80 leading-relaxed">
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez Buddy&apos;s Events
            w celu odpowiedzi na moje zapytanie, zgodnie z art. 6 ust. 1 lit. a RODO.
            Administratorem danych jest Buddy&apos;s Events. Mam prawo dostępu do danych,
            ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz
            wniesienia sprzeciwu. Zgoda jest dobrowolna i może być cofnięta w dowolnym momencie. *
          </span>
        </label>
        {errors.gdprConsent && <p className="mt-1 text-xs text-rose-400">{errors.gdprConsent}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? 'Wysyłanie…' : 'Wyślij zapytanie'}
      </button>

      <p className="text-xs text-cream-300/50 text-center">
        Bez spamu. Odpowiadamy osobiście w ciągu 24h.
      </p>
    </form>
  )
}
