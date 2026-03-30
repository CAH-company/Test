import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { firstName, lastName, email, phone } = await req.json()

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Brakujące pola' }, { status: 400 })
    }

    await resend.emails.send({
      from: "Buddy's Events <biuro@buddys-events.pl>",
      to: (process.env.CONTACT_RECIPIENTS ?? 'marta@buddys-events.pl').split(',').map(e => e.trim()),
      replyTo: email,
      subject: `Zapytanie — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d1e33;">Nowe zapytanie z formularza</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Imię i nazwisko</td><td style="padding: 8px 0; font-weight: bold;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
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
