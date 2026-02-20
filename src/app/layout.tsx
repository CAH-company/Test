import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: "Buddy's Events — Agencja eventowa | Integracje, konferencje, eventy beauty",
  description: 'Organizujemy eventy dla firm od 50 do 1500 osób. Benefit Systems, OnlyBio, NEUCA — zobacz nasze realizacje. Jedna umowa, zero stresu.',
  openGraph: {
    title: "Buddy's Events — Agencja eventowa",
    description: 'Organizujemy eventy dla firm od 50 do 1500 osób. Jedna umowa, zero stresu.',
    url: 'https://buddys-events.pl',
    siteName: "Buddy's Events",
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className="bg-cream-50 text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
