'use client'
import React, { useState, useEffect } from 'react'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY } from '../lib/config'
import { getGeo, buildTrackingFields } from '../lib/formMeta'

const GOLD = 'var(--color-gold)'
const GOLD_DARK = 'var(--color-gold-dark)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ContactCTA = () => {
  const [form, setForm] = useState({ fullname: '', phone: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  const [geoAddress, setGeoAddress] = useState(null)

  useEffect(() => {
    getGeo().then(d => {
      if (!d) return
      setIpAddress(d.ip || '')
      setGeoAddress({ city: d.city, region: d.region, postal_code: d.postal_code, country: d.country })
    })
  }, [])

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (form.phone.length < 10) { setError('Enter valid 10-digit number'); return }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields(ipAddress, geoAddress)
    const payload = new FormData()
    payload.append('fullname', form.fullname)
    payload.append('phone', form.phone)
    payload.append('email', '')
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', 'Contact CTA Form')
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) setSuccess(true)
      else setError(data.msg || 'Something went wrong.')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  return (
    <section className="py-10 sm:py-14 px-4" style={{ background: 'var(--color-bg-light)' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ textAlign: 'center', marginBottom: '36px' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'rgba(233,34,40,0.08)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: '#E92228',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid rgba(233,34,40,0.18)', marginBottom: '10px',
          }}>Book Site Visit</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 8px', letterSpacing: '-0.01em',
          }}>
            Visit Trophy by Shivalik Today
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <span style={{
              display: 'block', width: '40px', height: '3px',
              background: 'linear-gradient(90deg, #E92228, #FF4D52)',
              borderRadius: '2px',
            }} />
          </div>
          <p className="text-sm sm:text-base" style={{ color: '#666', fontFamily: F_SANS }}>
            Register now to get the best deal &amp; book your site visit at GIFT City
          </p>
        </div>

        {success ? (
          <div style={{ padding: '32px 0', textAlign: 'center' }} data-aos="fade-up">
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-gold-bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
            }}>
              <svg width="28" height="28" fill="none" stroke={GOLD_DARK} strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p style={{ fontWeight: '700', fontSize: '18px', color: 'var(--color-text)', fontFamily: F_SANS }}>Thank You!</p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '6px', fontFamily: F_SANS }}>Our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-[var(--color-bg)] rounded p-5 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col gap-4">
              <input name="fullname" required value={form.fullname} onChange={handle} placeholder="Enter full name"
                className="form-input" style={{ fontFamily: F_SANS }} />
              <input name="phone" required value={form.phone} onChange={handle}
                placeholder="10-digit mobile number" maxLength={10}
                className="form-input" style={{ fontFamily: F_SANS }} />
            </div>
            {error && <p style={{ color: 'red', fontSize: '12px', marginBottom: '12px' }}>{error}</p>}
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginBottom: '24px', textAlign: 'left' }}>
              <input type="checkbox" required style={{ accentColor: GOLD, marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#777', fontFamily: F_SANS, lineHeight: 1.5 }}>
                I authorize Shivalik Group &amp; its representatives to contact me via Email / SMS / WhatsApp / Call.
              </span>
            </label>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" disabled={loading}
                className="btn-gold w-full sm:w-auto"
                style={{ padding: '13px 48px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {loading ? 'Submitting...' : 'Submit Details'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactCTA
