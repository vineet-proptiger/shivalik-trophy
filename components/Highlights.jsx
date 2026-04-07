'use client'
import React, { useState } from 'react'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const highlights = [
  {
    text: "Located in GIFT City - India’s Global Financial Hub",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  },
  {
    text: 'Situated within SEZ zone offering strategic business advantages',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
  },
  {
    text: 'Premium office spaces with modern layouts',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  },
  {
    text: 'High-rise commercial tower with iconic architecture',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  },
  {
    text: 'Excellent connectivity to Ahmedabad & Gandhinagar',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    text: 'Just 10 minutes drive to Ahmedabad International Airport',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L11 6 2.8 4.2l-2 2L8 10l-3 3-4-1-1 1 3.5 3.5L7 20l1-1-1-4 3-3 3.2 7.2 2-2z" /></svg>,
  },
  {
    text: 'World-class infrastructure with smart city planning',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
  {
    text: 'Ideal for corporates, MNCs & institutional investors',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    text: 'High appreciation and rental yield potential',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
]

const HighlightCard = ({ item, idx, setIsOpen }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="fade-up"
      data-aos-delay={idx * 60}
      style={{
        background: '#fff',
        border: '1px solid var(--color-gold-light)',
        borderTop: '5px solid var(--color-gold)',
        borderRadius: '14px',
        padding: '28px 16px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered
          ? '0 10px 32px var(--color-shadow-inner)'
          : '0 4px 15px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60px', height: '5px',
        background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
        borderRadius: '0 0 10px 10px',
      }} />


      {/* Icon circle */}
      <div style={{
        width: '62px', height: '62px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '14px',
        background: hovered ? 'var(--color-gold)' : 'var(--color-gold-bg)',
        border: `2px solid ${hovered ? 'var(--color-gold)' : 'var(--color-gold-light)'}`,
        color: hovered ? '#fff' : 'var(--color-gold)',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 20px var(--color-shadow-inner)' : 'none',
      }}>
        {item.icon}
      </div>

      {/* Text */}
      <p style={{
        fontFamily: F_SANS,
        fontSize: '13px',
        lineHeight: 1.6,
        color: 'var(--color-gold)',
        fontWeight: '600',
        margin: 0,
        transition: 'color 0.28s ease',
      }}>
        {item.text}
      </p>
    </div>
  )
}

const Highlights = ({ setIsOpen }) => (
  <section id="highlights" style={{
    padding: '56px 0',
    background: '#ffffff',
    borderBottom: '1px solid #f0f0f0',
  }}>
    <div className="container mx-auto px-4 md:px-8">

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
        <span style={{
          display: 'inline-block', padding: '4px 16px',
          background: 'var(--color-gold-bg)', borderRadius: '50px',
          fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
          fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
          border: '1px solid var(--color-gold-light)', marginBottom: '10px',
        }}>Why Choose Us</span>
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
          color: '#111827', margin: 0, letterSpacing: '-0.01em',
        }}>
          Key Highlights:{' '}
          <span style={{ color: 'var(--color-gold)' }}>Why Shivalik Trophy?</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <span style={{
            display: 'block', width: '40px', height: '3px',
            background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
            borderRadius: '2px',
          }} />
        </div>
      </div>

      {/* 3-column card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((item, idx) => (
          <HighlightCard key={idx} item={item} idx={idx} setIsOpen={setIsOpen} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '36px' }} data-aos="fade-up">
        <button onClick={() => setIsOpen(true)} className="btn-gold"
          style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>
          Enquire Now
        </button>
      </div>

    </div>
  </section>
)

export default Highlights
