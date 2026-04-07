'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const GOLD = 'var(--color-gold)'

const navLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Highlights', href: '#highlights' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Price', href: '#pricing' },
  { name: 'Location', href: '#location' },
  { name: 'Floor Plan', href: '#masterplan' },
  { name: 'Developer', href: '#developer' },
]

/* ── Inline SVG Logo ─────────────────────────────────────────── */
const ShivalikLogo = () => (
  <svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trophy Cup Icon */}
    <g transform="translate(0, 4)">
      {/* Cup body */}
      <path d="M16 6 L16 22 Q16 30 24 32 Q32 30 32 22 L32 6 Z"
        fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinejoin="round" />
      {/* Cup handles */}
      <path d="M16 10 Q8 10 8 17 Q8 22 16 22" fill="none" stroke="var(--color-gold)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 10 Q40 10 40 17 Q40 22 32 22" fill="none" stroke="var(--color-gold)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stem */}
      <line x1="24" y1="32" x2="24" y2="38" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" />
      {/* Base */}
      <rect x="16" y="38" width="16" height="3" rx="1.5" fill="var(--color-gold)" />
      {/* Star on cup */}
      <path d="M24 12 L25.2 15.6 L29 15.6 L26 17.8 L27.2 21.4 L24 19.2 L20.8 21.4 L22 17.8 L19 15.6 L22.8 15.6 Z"
        fill="var(--color-gold)" opacity="0.85" />
    </g>

    {/* Vertical divider */}
    <line x1="52" y1="8" x2="52" y2="40" stroke="var(--color-gold)" strokeWidth="1" opacity="0.4" />

    {/* SHIVALIK text */}
    <text x="62" y="22"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontSize="18"
      fontWeight="600"
      letterSpacing="3"
      fill="var(--color-primary)">
      SHIVALIK
    </text>

    {/* Thin gold line under SHIVALIK */}
    <line x1="62" y1="26" x2="178" y2="26" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.6" />

    {/* TROPHY text */}
    <text x="63" y="39"
      fontFamily="'Open Sans', sans-serif"
      fontSize="11"
      fontWeight="700"
      letterSpacing="5.5"
      fill="var(--color-gold)">
      TROPHY
    </text>

    {/* Small tagline dots */}
    <circle cx="62" cy="43.5" r="1.2" fill="var(--color-gold)" opacity="0.5" />
    <circle cx="178" cy="43.5" r="1.2" fill="var(--color-gold)" opacity="0.5" />
    <line x1="66" y1="43.5" x2="174" y2="43.5" stroke="var(--color-gold)" strokeWidth="0.6" opacity="0.3" />
  </svg>
)

const Navbar = ({ setIsOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)] transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Gold accent line */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, var(--color-gold), var(--color-gold-light), var(--color-gold))` }} />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[66px]">

          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <ShivalikLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href}
                className="text-[13px] font-medium text-[var(--color-text-mid)] hover:text-gold transition-colors tracking-wide relative group"
                style={{ fontFamily: 'var(--font-sans)' }}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: GOLD }} />
              </a>
            ))}
          </div>

          {/* Enquire Now — Desktop */}
          <button onClick={() => setIsOpen(true)}
            className="hidden lg:flex btn-primary"
            style={{ padding: '10px 20px', borderRadius: '50px', fontSize: '13px' }}>
            Enquire Now <span className="text-base leading-none">→</span>
          </button>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <a href="tel:+917827178271"
              className="btn-primary"
              style={{ padding: '8px 12px', fontSize: '12px', borderRadius: '4px' }}>
              Call Us
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[var(--color-text-mid)] p-1">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-bg)] border-t border-gray-100 shadow-lg">
          {navLinks.map(link => (
            <a key={link.name} href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-sm text-[var(--color-text-mid)] hover:bg-[var(--color-bg-light)] border-b border-gray-50 hover:text-gold transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}>
              {link.name}
            </a>
          ))}
          <div className="p-4">
            <button onClick={() => { setIsOpen(true); setMobileOpen(false) }}
              className="w-full btn-primary"
              style={{ padding: '12px', borderRadius: '50px', fontSize: '14px' }}>
              Enquire Now →
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
