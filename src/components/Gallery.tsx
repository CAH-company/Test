'use client'

import { useState } from 'react'
import Lightbox from './Lightbox'

interface GalleryProps {
  slug: string
  title: string
  count?: number
}

export default function Gallery({ slug, title, count = 6 }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = Array.from({ length: count }, (_, i) => `/images/${slug}/gallery-${i + 1}.jpg`)
  const alts = Array.from({ length: count }, (_, i) => `${title} — zdjęcie ${i + 1}`)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            className="aspect-[4/3] rounded-xl overflow-hidden bg-burgundy-100 cursor-zoom-in group focus:outline-none focus:ring-2 focus:ring-rose-500"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Otwórz zdjęcie ${i + 1}`}
          >
            <img
              src={src}
              alt={alts[i]}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          titles={alts}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + count) % count)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % count)}
        />
      )}
    </>
  )
}
