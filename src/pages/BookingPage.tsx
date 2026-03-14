import { useState, type FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const BookingPage = () => {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [step, setStep] = useState<'form' | 'submitting' | 'success' | 'error'>('form')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venuePreference: '',
    budgetRange: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStep('submitting')

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone,
      event_type: form.eventType,
      event_date: form.eventDate,
      guest_count: form.guestCount,
      venue_preference: form.venuePreference || 'No preference',
      budget_range: form.budgetRange || 'Not specified',
      message: form.message || 'No additional message',
      reply_to: form.email,
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStep('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStep('error')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#00002D', paddingTop: '80px' }}>
      {/* Background grid */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(195,165,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(195,165,105,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, black, transparent)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 30%, black, transparent)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '10px',
            fontFamily: 'Jost, sans-serif', fontSize: '0.64rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(195,165,105,0.6)', marginBottom: '48px',
            transition: 'color 0.3s', padding: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C3A569')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(195,165,105,0.6)')}
        >
          <span style={{ fontSize: '1rem' }}>←</span> Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '40px', height: '1px', background: '#C3A569', display: 'block' }} />
            <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.58rem', letterSpacing: '0.52em', textTransform: 'uppercase', color: '#C3A569' }}>
              Enquiry Form
            </span>
          </div>
          <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, color: '#FAF7F0', lineHeight: 1.1, marginBottom: '16px' }}>
            Book Your <em style={{ color: '#C3A569', fontStyle: 'italic' }}>Perfect Event</em>
          </h1>
          <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.88rem', color: 'rgba(250,247,240,0.45)', lineHeight: 1.8 }}>
            Fill in the details below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form / Success / Error */}
        <AnimatePresence mode="wait">
          {step === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center', padding: '80px 40px',
                border: '1px solid rgba(195,165,105,0.2)',
                background: 'rgba(195,165,105,0.04)',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                style={{ width: '72px', height: '72px', border: '1px solid #C3A569', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', fontSize: '1.8rem', color: '#C3A569' }}
              >
                ✦
              </motion.div>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 400, color: '#FAF7F0', marginBottom: '16px' }}>
                Booking Request Received
              </h2>
              <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', color: 'rgba(250,247,240,0.5)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 40px' }}>
                Thank you, <strong style={{ color: '#C3A569' }}>{form.name}</strong>. Our team will review your request and contact you at <strong style={{ color: '#C3A569' }}>{form.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => navigate('/')}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Return to Home
              </button>
            </motion.div>
          ) : step === 'error' ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: 'center', padding: '60px 40px',
                border: '1px solid rgba(195,60,60,0.3)',
                background: 'rgba(195,60,60,0.04)',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>⚠</div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 400, color: '#FAF7F0', marginBottom: '12px' }}>
                Submission Failed
              </h3>
              <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.88rem', color: 'rgba(250,247,240,0.5)', marginBottom: '32px' }}>
                Something went wrong. Please try again or contact us directly at info@grandoraconvention.com
              </p>
              <button onClick={() => setStep('form')} className="btn-outline" style={{ cursor: 'pointer', color: '#FAF7F0', borderColor: '#C3A569' }}>
                <span>Try Again</span>
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
            >
              {/* Row 1: Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" className="form-input booking-input" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" className="form-input booking-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              {/* Row 2: Phone + Event Type */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" className="form-input booking-input" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="eventType">Event Type *</label>
                  <select id="eventType" name="eventType" className="form-input booking-input" value={form.eventType} onChange={handleChange} required>
                    <option value="" disabled>Select event type</option>
                    <option>Wedding</option>
                    <option>Mehndi / Sangeet</option>
                    <option>Reception</option>
                    <option>Birthday / Anniversary</option>
                    <option>Corporate Event</option>
                    <option>Social Gala</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Date + Guest Count */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <label className="form-label" htmlFor="eventDate">Preferred Event Date *</label>
                  <input id="eventDate" name="eventDate" type="date" className="form-input booking-input" value={form.eventDate} onChange={handleChange} required />
                </div>
                <div>
                  <label className="form-label" htmlFor="guestCount">Expected Guests *</label>
                  <select id="guestCount" name="guestCount" className="form-input booking-input" value={form.guestCount} onChange={handleChange} required>
                    <option value="" disabled>Select guest count</option>
                    <option>Up to 100</option>
                    <option>100–300</option>
                    <option>300–600</option>
                    <option>600–1000</option>
                    <option>1000+</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Venue + Budget */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <label className="form-label" htmlFor="venuePreference">Venue Preference</label>
                  <select id="venuePreference" name="venuePreference" className="form-input booking-input" value={form.venuePreference} onChange={handleChange}>
                    <option value="">No preference</option>
                    <option>The Grand Hall</option>
                    <option>Grand Greens (Lawn)</option>
                    <option>The Intimate Hall</option>
                    <option>Multiple Venues</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="budgetRange">Approximate Budget</label>
                  <select id="budgetRange" name="budgetRange" className="form-input booking-input" value={form.budgetRange} onChange={handleChange}>
                    <option value="">Prefer not to say</option>
                    <option>Below ₹5 Lakhs</option>
                    <option>₹5 – ₹10 Lakhs</option>
                    <option>₹10 – ₹20 Lakhs</option>
                    <option>₹20 – ₹50 Lakhs</option>
                    <option>Above ₹50 Lakhs</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="form-label" htmlFor="message">Additional Requirements</label>
                <textarea
                  id="message" name="message" className="form-input booking-input"
                  placeholder="Tell us about your vision, special requirements, or any questions..."
                  rows={5} value={form.message} onChange={handleChange}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Contact info reminder */}
              <div style={{ borderTop: '1px solid rgba(195,165,105,0.1)', paddingTop: '24px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.75rem', color: 'rgba(250,247,240,0.3)' }}>
                  Or reach us directly:
                </span>
                <a href="tel:+919154520099" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.8rem', color: 'rgba(195,165,105,0.7)', textDecoration: 'none' }}>
                  +91-91545 20099
                </a>
                <a href="mailto:info@grandoraconvention.com" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.8rem', color: 'rgba(195,165,105,0.7)', textDecoration: 'none' }}>
                  info@grandoraconvention.com
                </a>
              </div>

              {/* Submit */}
              <div>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  disabled={step === 'submitting'}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ cursor: 'pointer', opacity: step === 'submitting' ? 0.7 : 1, minWidth: '200px' }}
                >
                  {step === 'submitting' ? 'Sending Enquiry…' : 'Submit Booking Request'}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .booking-input {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(195,165,105,0.2) !important;
          color: #FAF7F0 !important;
          transition: border-color 0.3s !important;
        }
        .booking-input:focus { border-color: #C3A569 !important; }
        .booking-input option { background: #00002D; color: #FAF7F0; }
        .booking-input::placeholder { color: rgba(250,247,240,0.25) !important; }
        @media (max-width: 640px) {
          .booking-input ~ .booking-input, div > div > div + div { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          form > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default BookingPage
