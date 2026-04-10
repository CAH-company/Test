import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= LIMIT) return true
  entry.count++
  return false
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: Request) {
  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Zbyt wiele zapytań. Spróbuj za chwilę.' }, { status: 429 })
  }

  try {
    const body = await req.json()
    const { firstName, lastName, email, phone } = body

    // Walidacja wymaganych pól
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Brakujące pola' }, { status: 400 })
    }

    // Limit długości
    if (
      String(firstName).length > 100 ||
      String(lastName).length > 100 ||
      String(email).length > 200 ||
      String(phone).length > 30
    ) {
      return NextResponse.json({ error: 'Zbyt długie dane' }, { status: 400 })
    }

    // Podstawowa walidacja emaila
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: 'Nieprawidłowy email' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Buddy's Events <biuro@buddys-events.pl>",
      to: (process.env.CONTACT_RECIPIENTS ?? 'marta@buddys-events.pl').split(',').map(e => e.trim()),
      replyTo: String(email),
      subject: `Zapytanie — ${esc(String(firstName))} ${esc(String(lastName))}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d1e33;">Nowe zapytanie z formularza</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Imię i nazwisko</td><td style="padding: 8px 0; font-weight: bold;">${esc(String(firstName))} ${esc(String(lastName))}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${esc(String(email))}">${esc(String(email))}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon</td><td style="padding: 8px 0;"><a href="tel:${esc(String(phone))}">${esc(String(phone))}</a></td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Wiadomość wysłana z formularza na buddys-events.pl</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Błąd serwera' }, { status: 500 })
  }
}
