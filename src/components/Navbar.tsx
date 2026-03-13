'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-300 overflow-hidden ${
          scrolled
            ? 'bg-burgundy-900/95 backdrop-blur-xl shadow-2xl shadow-burgundy-950/30 border border-burgundy-700/50'
            : 'bg-burgundy-800/75 backdrop-blur-lg border border-white/10'
        }`}
      >
        {/* Decorative bubble orbs */}
        <div className="absolute top-0 right-8 w-20 h-20 rounded-full bg-rose-500/15 blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-16 h-16 rounded-full bg-rose-400/10 blur-xl pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-12 h-12 rounded-full bg-burgundy-400/20 blur-lg pointer-events-none" />

        <div className="relative px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl">🐾</span>
            <span className="text-lg lg:text-xl font-extrabold text-white font-display tracking-tight">
              Buddy&apos;s
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/realizacje"
              className="text-cream-200/90 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase"
            >
              Realizacje
            </Link>
            <Link href="/#kontakt" className="btn-primary text-sm !py-2.5 !px-6">
              Umów rozmowę
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="relative md:hidden border-t border-burgundy-700/40 px-6 py-4 space-y-3">
            <Link
              href="/realizacje"
              onClick={() => setIsOpen(false)}
              className="block text-cream-200 hover:text-white py-2 text-sm font-medium"
            >
              Realizacje
            </Link>
            <Link
              href="/#kontakt"
              onClick={() => setIsOpen(false)}
              className="block btn-primary text-center text-sm !py-2.5"
            >
              Umów rozmowę
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}
