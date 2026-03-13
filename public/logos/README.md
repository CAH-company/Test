# Loga klientów / Client logos

Wrzuć tutaj loga klientów. Pliki powinny mieć następujące nazwy:

| Klient           | Nazwa pliku                    |
|------------------|-------------------------------|
| Benefit Systems  | `benefit-systems.svg`          |
| NEUCA            | `neuca.svg`                    |
| OnlyBio          | `onlybio.svg`                  |
| E. Wedel         | `e-wedel.svg`                  |
| Cordia           | `cordia.svg`                   |
| Marsh            | `marsh.svg`                    |
| Stonex           | `stonex.svg`                   |
| Invisibobble     | `invisibobble.svg`             |

## Wymagania

- Format: **SVG** (preferowany) lub **PNG/WebP**
- Rozmiar SVG: nie ma znaczenia — logo skaluje się automatycznie
- Rozmiar PNG/WebP: min. 400×200 px, transparentne tło
- Logo będzie wyświetlane w kontenerze o szerokości 140 px i wysokości 56 px
- Automatycznie zostanie zastosowany efekt szarości + hover do pełnych kolorów

## Jak to działa

Komponent automatycznie ładuje logo z tego folderu po nazwie pliku.
Jeśli plik nie zostanie znaleziony, wyświetli się nazwa klienta jako tekst — dzięki temu strona nie "pęka" przed wrzuceniem logo.
