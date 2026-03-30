import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const SITE_URL = 'https://buddys-events.pl'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buddy's Events — Agencja eventowa | Integracje, konferencje, eventy beauty",
    template: "%s | Buddy's Events",
  },
  description:
    'Organizujemy eventy dla firm od 50 do 1500 osób. Benefit Systems, OnlyBio, NEUCA — zobacz nasze realizacje. Jedna umowa, zero stresu.',
  keywords: [
    'agencja eventowa',
    'organizacja eventów',
    'eventy firmowe',
    'team building',
    'integracje firmowe',
    'konferencje',
    'pikniki firmowe',
    'eventy beauty',
    'Warszawa',
    'Polska',
  ],
  authors: [{ name: "Buddy's Events", url: SITE_URL }],
  creator: "Buddy's Events",
  publisher: "Buddy's Events",
  alternates: {
    canonical: SITE_URL,
    languages: { 'pl-PL': SITE_URL },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Buddy's Events — Agencja eventowa",
    description: 'Organizujemy eventy dla firm od 50 do 1500 osób. Jedna umowa, zero stresu.',
    url: SITE_URL,
    siteName: "Buddy's Events",
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: '/og-image.jpg.png', width: 1200, height: 630, alt: "Buddy's Events" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Buddy's Events — Agencja eventowa",
    description: 'Organizujemy eventy dla firm od 50 do 1500 osób. Jedna umowa, zero stresu.',
    site: '@buddysevents',
    images: ['/og-image.jpg.png'],
  },
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? undefined,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EventPlanningService',
  name: "Buddy's Events",
  description:
    'Agencja eventowa organizująca eventy firmowe dla 50–1500 osób w całej Polsce. Integracje, konferencje, pikniki, eventy beauty.',
  url: SITE_URL,
  telephone: '+48503455846',
  email: 'marta@buddys-events.pl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Poland',
  },
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/buddys.events/',
    'https://www.facebook.com/p/Buddys-events-61552382696517/',
    'https://pl.linkedin.com/in/martanaumiuk',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-cream-50 text-gray-900 antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
