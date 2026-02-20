'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-burgundy-800/95 backdrop-blur-md border-b border-burgundy-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐾</span>
            <span className="text-xl lg:text-2xl font-extrabold text-white font-display tracking-tight">
              Buddy&apos;s
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/realizacje" className="text-cream-200 hover:text-white transition-colors font-medium text-sm tracking-wide uppercase">
              Realizacje
            </Link>
            <Link href="/kontakt" className="btn-primary text-sm !py-2.5 !px-6">
              Umów rozmowę
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-burgundy-900 border-t border-burgundy-700/50 px-6 py-4 space-y-3">
          <Link href="/realizacje" onClick={() => setIsOpen(false)} className="block text-cream-200 hover:text-white py-2 font-medium">
            Realizacje
          </Link>
          <Link href="/kontakt" onClick={() => setIsOpen(false)} className="block btn-primary text-center text-sm !py-2.5">
            Umów rozmowę
          </Link>
        </div>
      )}
    </nav>
  )
}
