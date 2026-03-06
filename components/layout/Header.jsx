'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Bloom Stage', href: '/drama' },
  { label: 'Youth Hub', href: '/youth' },
  { label: 'Events', href: '/events' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-bloom-terracotta flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-110">
            B
          </div>
          <span
            className="font-accent text-2xl text-bloom-warm"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Bloom
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover-underline text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-bloom-terracotta'
                  : 'text-bloom-warm hover:text-bloom-terracotta'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/events#booking"
            className="btn-bloom text-sm py-2 px-5"
          >
            Book an Event
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-bloom-warm transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-bloom-warm transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-bloom-warm transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-bloom-cream flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ zIndex: 40 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-bloom-warm hover:text-bloom-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/events#booking"
            onClick={() => setMenuOpen(false)}
            className="btn-bloom mt-4"
          >
            Book an Event
          </Link>
        </div>
      </div>
    </header>
  )
}
