'use client'

import { useState } from 'react'

interface ClientLogoItemProps {
  name: string
  file: string
}

/**
 * Single logo in the "Zaufali nam" strip.
 * Tries SVG → PNG → WebP in sequence; if all fail, renders the client name as text.
 * Wrap this in a 'use client' boundary so the onError handler works in Next.js App Router.
 */
export function ClientLogoItem({ name, file }: ClientLogoItemProps) {
  const sources = [`/logos/${file}.svg`, `/logos/${file}.png`, `/logos/${file}.webp`]
  const [srcIndex, setSrcIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  function handleError() {
    if (srcIndex + 1 < sources.length) {
      setSrcIndex(srcIndex + 1)
    } else {
      setFailed(true)
    }
  }

  return (
    <div className="logo-grayscale flex items-center justify-center px-4 py-2 h-14 w-36">
      {failed ? (
        <span className="text-base font-bold text-gray-700 font-display whitespace-nowrap">
          {name}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sources[srcIndex]}
          alt={`Logo ${name}`}
          width={140}
          height={56}
          className="max-h-14 w-auto object-contain"
          onError={handleError}
        />
      )}
    </div>
  )
}
