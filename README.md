# Buddy's Events — Nowa strona internetowa

## Szybki start

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski
npm run dev
# Otwórz http://localhost:3000

# 3. Zbuduj wersję produkcyjną (statyczny export)
npm run build
# Pliki w folderze /out/ gotowe do deploymentu
```

## Struktura projektu

```
src/
├── app/
│   ├── page.tsx              # HOMEPAGE — 10 sekcji
│   ├── layout.tsx            # Layout globalny (Navbar + Footer)
│   ├── globals.css           # Style globalne + Tailwind
│   ├── realizacje/
│   │   ├── page.tsx          # Lista wszystkich 9 case study
│   │   └── [slug]/page.tsx   # Dynamiczny szablon case study
│   └── kontakt/
│       └── page.tsx          # Formularz kontaktowy
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/
│   └── caseStudies.ts        # DANE: 9 case study (edytuj tutaj)
└── lib/                      # Utility (puste, do rozbudowy)
```

## Co musisz zrobić

### KROK 1: Zdjęcia (PRIORYTET!)
Strona ma placeholdery `[ ZDJĘCIE: ... ]`. Musisz dodać prawdziwe zdjęcia:

1. Wrzuć zdjęcia do folderu `public/images/`
2. Nazewnictwo zgodne z danymi w `src/data/caseStudies.ts`:
   - `benefit-hero.jpg` — główne zdjęcie z eventu Benefit Systems
   - `benefit-thumb.jpg` — miniaturka
   - `onlybio-wedel-hero.jpg` i `-thumb.jpg`
   - itd. dla każdego case study
3. W `page.tsx` zamień placeholdery na `<Image>` lub `<img>` tagi

### KROK 2: Logo firmy
Zamień emoji 🐾 w Navbar i Footer na prawdziwe logo SVG.
Plik: `src/components/Navbar.tsx` i `Footer.tsx`

### KROK 3: Logo klientów
W sekcji ClientLogos na homepage — zamień tekstowe nazwy na prawdziwe loga.
Plik: `src/app/page.tsx`, sekcja `ClientLogos()`

### KROK 4: Formularz kontaktowy
Obecnie formularz jest statyczny (nie wysyła danych). Opcje:
- **Formspree** — dodaj action URL do formularza
- **EmailJS** — wysyłka maili z frontu
- **Własne API** — stwórz endpoint w `src/app/api/contact/route.ts`

### KROK 5: Calendly
Na stronie `/kontakt` jest placeholder na Calendly. Wstaw embed:
```html
<iframe src="https://calendly.com/TWOJ-LINK" width="100%" height="600" />
```

### KROK 6: Analytics
Dodaj do `src/app/layout.tsx`:
- Google Analytics 4
- LinkedIn Insight Tag
- Meta Pixel (opcjonalnie)

## Deployment

### Opcja A: Vercel (najprostsza)
1. Push na GitHub
2. Połącz z Vercel
3. Deploy automatycznie
4. Podepnij domenę buddys-events.pl

### Opcja B: Statyczny export → dowolny hosting
```bash
npm run build
# Folder /out/ zawiera statyczne pliki HTML
# Upload na dowolny hosting (np. obecny hosting WordPress)
```

### Opcja C: WordPress (headless)
1. Zbuduj statyczne pliki: `npm run build`
2. Wrzuć zawartość `/out/` do katalogu głównego domeny
3. Skonfiguruj .htaccess lub nginx dla routingu

## Kolorystyka
- Burgundowy ciemny: `#4A0E23` (tła, gradienty)
- Burgundowy jasny: `#6B1530`
- Różowy/rose CTA: `#E91E63`
- Kremowe tło: `#FDFAF8`
- Tekst: `#111827` (ciemny), `#4B5563` (szary)

## Fonty
- Display (nagłówki): Plus Jakarta Sans (Google Fonts)
- Body (tekst): Inter (Google Fonts)
