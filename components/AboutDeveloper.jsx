'use client'
import React from 'react'

const GOLD = 'var(--color-gold)'
const GOLD_DARK = 'var(--color-gold-dark)'
const PRIMARY = 'var(--color-primary)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SERIF = 'var(--font-serif), Cormorant Garamond, serif'

const AboutDeveloper = ({ setIsOpen }) => (
  <section id="developer" className="py-10 sm:py-14 bg-[var(--color-bg-muted)] border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'rgba(233,34,40,0.08)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: '#E92228',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid rgba(233,34,40,0.18)', marginBottom: '10px',
          }}>Developer Profile</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: PRIMARY, margin: '0 0 8px', letterSpacing: '-0.01em',
            textTransform: 'uppercase'
          }}>
            About the Developer
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <span style={{
              display: 'block', width: '40px', height: '3px',
              background: 'linear-gradient(90deg, #E92228, #FF4D52)',
              borderRadius: '2px',
            }} />
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl p-6 sm:p-10 shadow-sm flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
          data-aos="fade-up" data-aos-delay="100">

          {/* Left — Logo / Icon placeholder */}
          <div className="shrink-0 flex items-center justify-center w-full sm:w-[120px]">
            <div style={{
              width: '90px', height: '90px', borderRadius: '50%',
              border: `3px solid ${GOLD}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--color-gold-bg)',
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={GOLD_DARK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3"
              style={{ color: PRIMARY, fontFamily: F_SANS }}>
              Shivalik Group
            </h3>
            <p className="text-sm sm:text-base mb-5"
              style={{ color: '#555', fontFamily: F_SANS, lineHeight: 1.8 }}>
              Shivalik Group is a reputed real estate developer known for delivering high-quality residential and commercial projects with a focus on innovation, design, and timely execution. With a strong presence in Ahmedabad, the group has built a legacy of trust and excellence, creating developments that combine modern infrastructure with long-term investment value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { value: '20+', label: 'Years of Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '5000+', label: 'Happy Families' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 8px', background: 'var(--color-bg-muted)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '22px', fontWeight: '800', color: GOLD_DARK, fontFamily: F_JOST, margin: 0 }}>{stat.value}</p>
                  <p style={{ fontSize: '11px', color: '#777', fontFamily: F_SANS, marginTop: '2px', fontWeight: '600', textTransform: 'uppercase' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setIsOpen(true)}
              className="btn-gold"
              style={{ padding: '10px 28px', fontSize: '14px' }}>
              Know More
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default AboutDeveloper
