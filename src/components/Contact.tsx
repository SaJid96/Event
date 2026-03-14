import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const MAPS_QUERY = encodeURIComponent(
  'Grandora Convention Centre, Pocharam, Narepally, Hyderabad, Telangana 500088'
)

const openMaps = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const isMac = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  if (isIOS || isMac) {
    window.open(`https://maps.apple.com/?q=${MAPS_QUERY}`, '_blank')
  } else {
    window.open(`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`, '_blank')
  }
}

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Address',
    value: 'Sy No. 763/a, Pocharam Village, Narepally, Hyderabad – 500088',
    action: openMaps,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91-91545 20099',
    action: () => window.open('tel:+919154520099'),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@grandoraconvention.com',
    action: () => window.open('mailto:info@grandoraconvention.com'),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Hours',
    value: 'Mon – Sun, 9:00 AM – 9:00 PM',
    action: undefined,
  },
]

const Contact: React.FC = () => {
  const [step, setStep] = useState<'form' | 'submitting' | 'success' | 'error'>('form')
  const [form, setForm] = useState({
    name: '', email: '', eventType: '', eventDate: '', guestCount: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStep('submitting')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        phone: 'Not provided',
        event_type: form.eventType,
        event_date: form.eventDate || 'Not specified',
        guest_count: form.guestCount || 'Not specified',
        venue_preference: 'Not specified',
        budget_range: 'Not specified',
        message: form.message || 'No message',
        reply_to: form.email,
      }, PUBLIC_KEY)
      setStep('success')
    } catch {
      setStep('error')
    }
  }

  return (
    <section id="contact" style={{ background: '#FAF7F0', padding: '120px 5% 0' }}>

      {/* ── Header ── */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <motion.div
          className="sec-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-label-text">Get In Touch</span>
        </motion.div>
        <motion.h2
          className="sec-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Plan Your <em>Perfect Event</em>
        </motion.h2>
      </div>

      {/* ── Two-column: contact info + form ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '64px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Left: contact details */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: 0 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                onClick={item.action}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '18px',
                  padding: '22px 0',
                  borderBottom: i < contactDetails.length - 1 ? '1px solid rgba(195,165,105,0.08)' : 'none',
                  cursor: item.action ? 'pointer' : 'default',
                  transition: 'padding-left 0.3s',
                }}
                whileHover={item.action ? { paddingLeft: '8px' } : {}}
              >
                {/* Icon box */}
                <div style={{
                  width: '44px', height: '44px', flexShrink: 0,
                  border: '1px solid rgba(195,165,105,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C3A569', background: 'rgba(195,165,105,0.05)',
                }}>
                  {item.icon}
                </div>

                <div>
                  <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)', marginBottom: '5px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: item.action ? '#3A4A5A' : '#6A7A8A', lineHeight: 1.65, transition: 'color 0.3s' }}
                    onMouseEnter={e => { if (item.action) (e.currentTarget as HTMLElement).style.color = '#C3A569' }}
                    onMouseLeave={e => { if (item.action) (e.currentTarget as HTMLElement).style.color = '#3A4A5A' }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginTop: '44px', paddingTop: '36px', borderTop: '1px solid rgba(195,165,105,0.25)' }}
          >
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.45rem', fontWeight: 300, color: 'rgba(26,18,9,0.5)', fontStyle: 'italic', lineHeight: 1.5 }}>
              "Every great event begins with<br />a single conversation."
            </p>
          </motion.div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: 0 }}
        >
          {step === 'success' ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', border: '1px solid rgba(195,165,105,0.25)', background: 'rgba(195,165,105,0.06)', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '64px', height: '64px', border: '1px solid #C3A569', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C3A569', fontSize: '1.6rem', marginBottom: '24px' }}>✦</div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 400, color: '#1A1209', marginBottom: '12px' }}>Enquiry Received</h3>
              <p style={{ fontFamily: 'Jost', fontSize: '0.86rem', color: '#7A6A5A', lineHeight: 1.8 }}>
                Thank you for reaching out. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : step === 'error' ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', border: '1px solid rgba(195,60,60,0.2)', background: 'rgba(195,60,60,0.03)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px', color: '#C3A569' }}>⚠</div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', color: '#1A1209', marginBottom: '12px' }}>Submission Failed</h3>
              <p style={{ fontFamily: 'Jost', fontSize: '0.86rem', color: '#7A6A5A', marginBottom: '28px' }}>Please try again or email us directly.</p>
              <button onClick={() => setStep('form')} className="btn-outline-dark" style={{ cursor: 'pointer' }}><span>Try Again</span></button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label className="form-label" htmlFor="c-name">Name</label>
                  <input id="c-name" name="name" type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="c-email">Email</label>
                  <input id="c-email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label className="form-label" htmlFor="c-eventType">Event Type</label>
                  <select id="c-eventType" name="eventType" className="form-input" value={form.eventType} onChange={handleChange} required>
                    <option value="" disabled>Select type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Social Gala</option>
                    <option>Birthday</option>
                    <option>Mehndi / Sangeet</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="c-eventDate">Event Date</label>
                  <input id="c-eventDate" name="eventDate" type="date" className="form-input" value={form.eventDate} onChange={handleChange} />
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="c-guestCount">Guest Count</label>
                <select id="c-guestCount" name="guestCount" className="form-input" value={form.guestCount} onChange={handleChange}>
                  <option value="" disabled>Select guest count</option>
                  <option>Up to 100</option>
                  <option>100–300</option>
                  <option>300–600</option>
                  <option>600–1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" className="form-input" placeholder="Tell us about your event..." rows={4} value={form.message} onChange={handleChange} style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" disabled={step === 'submitting'} style={{ cursor: 'pointer', opacity: step === 'submitting' ? 0.7 : 1 }}>
                {step === 'submitting' ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* ── Map — full width ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ marginTop: '80px', position: 'relative' }}
      >
        {/* Map container */}
        <div style={{ position: 'relative', height: '400px', overflow: 'hidden', border: '1px solid rgba(195,165,105,0.15)' }}>
          <iframe
            title="Grandora Location"
            src="https://maps.google.com/maps?q=Pocharam+Narepally+Hyderabad+Telangana+500088&z=15&output=embed"
            width="100%" height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Top gradient fade */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, #FAF7F0, transparent)', pointerEvents: 'none', zIndex: 2 }} />

          {/* Address card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              position: 'absolute', bottom: '28px', left: '32px',
              background: 'rgba(250,247,240,0.95)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(195,165,105,0.3)',
              padding: '20px 24px', zIndex: 3,
              maxWidth: '340px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ color: '#C3A569', flexShrink: 0 }}>
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" stroke="currentColor" strokeWidth="2" fill="rgba(195,165,105,0.2)"/>
                <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
              </svg>
              <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C3A569' }}>Grandora Convention Centre</span>
            </div>
            <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.78rem', color: '#5A6A7A', lineHeight: 1.65, margin: 0 }}>
              Sy No. 763/a, Pocharam Village,<br />Narepally, Hyderabad – 500088
            </p>
          </motion.div>

          {/* Get Directions button — bottom right */}
          <button
            onClick={openMaps}
            style={{
              position: 'absolute', bottom: '28px', right: '32px', zIndex: 3,
              background: '#C3A569', border: 'none', cursor: 'pointer',
              padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: 'Jost, sans-serif', fontSize: '0.62rem',
              letterSpacing: '0.28em', textTransform: 'uppercase', color: '#00002D', fontWeight: 600,
              transition: 'background 0.3s, transform 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#D4B87A'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C3A569'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get Directions
          </button>
        </div>
      </motion.div>

      {/* ── Copyright strip ── */}
      <div style={{ paddingTop: '28px', paddingBottom: '28px', textAlign: 'center', borderTop: '1px solid rgba(195,165,105,0.2)', marginTop: '0' }}>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.7rem', color: 'rgba(26,18,9,0.3)', letterSpacing: '0.1em' }}>
          © 2025 Grandora Convention Centre. All rights reserved.
        </p>
      </div>

      <style>{`
        .form-input {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(195,165,105,0.18) !important;
          color: #FAF7F0 !important;
        }
        .form-input::placeholder { color: rgba(250,247,240,0.22) !important; }
        .form-input:focus { border-color: #C3A569 !important; outline: none; }
        .form-input option { background: #00002D; color: #FAF7F0; }
        @media (max-width: 900px) {
          #contact > div:nth-child(2) { grid-template-columns: 1fr !important; gap: 48px !important; }
          #contact > div:nth-child(3) { margin-top: 48px !important; }
        }
        @media (max-width: 600px) {
          #contact > div:nth-child(2) > div > form > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact
