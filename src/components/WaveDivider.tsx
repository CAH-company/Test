/**
 * Wave divider component — creates organic flowing transition between sections.
 * Place it at the BOTTOM of a section; the wave overlaps into the next section.
 *
 * Usage:
 *   <WaveDivider from="dark" to="light" />   // dark section → light section
 *   <WaveDivider from="light" to="dark" />   // light section → dark section
 *   <WaveDivider from="cream" to="white" />  // cream → white
 */

interface WaveDividerProps {
  /** Background color of the section containing the wave */
  from: 'dark' | 'light' | 'cream' | 'white'
  /** Background color of the section below */
  to: 'dark' | 'light' | 'cream' | 'white'
  flip?: boolean
}

const bgMap: Record<string, string> = {
  dark: 'transparent',
  light: '#ffffff',
  cream: '#FDFAF8',
  white: '#ffffff',
}

const fillMap: Record<string, string> = {
  dark: 'url(#burgundy-grad)',
  light: '#ffffff',
  cream: '#FDFAF8',
  white: '#ffffff',
}

export function WaveDivider({ from, to, flip = false }: WaveDividerProps) {
  const fillColor = fillMap[to] ?? '#ffffff'
  const usesGradient = to === 'dark'

  return (
    <div
      className="relative overflow-hidden leading-none"
      style={{ marginBottom: '-2px', background: bgMap[from] }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`block w-full h-12 md:h-16 lg:h-20 ${flip ? 'scale-x-[-1]' : ''}`}
      >
        {usesGradient && (
          <defs>
            <linearGradient id="burgundy-grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#4A0E23" />
              <stop offset="50%" stopColor="#6B1530" />
              <stop offset="100%" stopColor="#3D0C1C" />
            </linearGradient>
          </defs>
        )}
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  )
}
