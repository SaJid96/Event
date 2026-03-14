import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Grand Catering',
    desc: 'Multi-cuisine veg & non-veg menus by Downtown Delights, from lavish buffets to curated plated dinners.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20h20M8 20V10a6 6 0 0112 0v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 14h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Event Design',
    desc: 'Bespoke décor, floral, and lighting design that transforms every space into a work of art.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.95 5.5L14 16.7l-4.95 2.5.95-5.5L6 9.8l5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 20v4M10 24h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'A/V & Technology',
    desc: 'State-of-the-art audiovisual equipment, live streaming, and intelligent lighting systems.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 23h8M14 19v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8.5 8.5l1.5 1.5M19.5 8.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Valet & Concierge',
    desc: 'White-glove hospitality from arrival to departure — every guest feels like royalty.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M20 14l2 2-2 2M24 16h-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Wedding Planning',
    desc: 'Full-service bridal coordination covering every detail from invitations to the final farewell.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 22S6 17 6 11a5 5 0 019-3 5 5 0 019 3c0 6-8 11-10 11z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 8v2M11 9.5l1.5 1.5M17 9.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Corporate Services',
    desc: 'Boardrooms, conferences, team-building, and product launches tailored for professionals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 8V6a2 2 0 014 0v2M9 16h10M9 20h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
]

interface CardProps {
  svc: typeof services[number]
  index: number
}

const ServiceCard: React.FC<CardProps> = ({ svc, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    })
  }

  const handleMouseLeave = () => setGlow(prev => ({ ...prev, opacity: 0 }))

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(195,165,105,0.15)',
        padding: '40px 36px 36px',
        overflow: 'hidden',
        cursor: 'none',
        transition: 'border-color 0.4s ease',
      }}
      className="svc-card-new"
    >
      {/* Mouse-tracking radial glow — Aceternity style */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(280px circle at ${glow.x}% ${glow.y}%, rgba(195,165,105,0.12), transparent 70%)`,
          opacity: glow.opacity,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Top border line — expands on hover */}
      <motion.div
        style={{
          position: 'absolute', top: 0, left: 0, height: '2px',
          background: 'linear-gradient(90deg, #C3A569, rgba(195,165,105,0.3))',
          zIndex: 1,
        }}
        initial={{ width: '0%' }}
        whileInView={{ width: '40%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 + index * 0.08 }}
        className="svc-top-line"
      />

      {/* Number watermark */}
      <div
        style={{
          position: 'absolute', top: '16px', right: '24px',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '5rem', fontWeight: 300,
          background: 'linear-gradient(135deg, rgba(195,165,105,0.18), rgba(195,165,105,0.04))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1, userSelect: 'none', zIndex: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {svc.num}
      </div>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
        style={{
          position: 'relative', zIndex: 1,
          width: '54px', height: '54px',
          border: '1px solid rgba(195,165,105,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#C3A569', marginBottom: '28px',
          background: 'rgba(195,165,105,0.05)',
        }}
      >
        {svc.icon}
      </motion.div>

      {/* Title */}
      <h3
        style={{
          position: 'relative', zIndex: 1,
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.55rem', fontWeight: 500,
          color: '#FAF7F0', marginBottom: '14px', lineHeight: 1.2,
          letterSpacing: '0.01em',
        }}
      >
        {svc.title}
      </h3>

      {/* Divider */}
      <div style={{ position: 'relative', zIndex: 1, width: '32px', height: '1px', background: 'rgba(195,165,105,0.4)', marginBottom: '16px' }} />

      {/* Description */}
      <p
        style={{
          position: 'relative', zIndex: 1,
          fontFamily: 'Jost, sans-serif', fontSize: '0.86rem',
          color: 'rgba(250,247,240,0.5)', lineHeight: 1.85,
        }}
      >
        {svc.desc}
      </p>

      {/* Bottom arrow on hover */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileHover={{ opacity: 1, x: 0 }}
        style={{
          position: 'relative', zIndex: 1,
          marginTop: '24px',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'Jost, sans-serif', fontSize: '0.6rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'rgba(195,165,105,0.6)',
        }}
      >
        <span>Learn more</span>
        <span style={{ fontSize: '0.9rem' }}>→</span>
      </motion.div>
    </motion.div>
  )
}

const Services: React.FC = () => {
  return (
    <section id="services" style={{ padding: '120px 5%', background: '#00002D' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
        <motion.div
          className="sec-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-label-text">What We Offer</span>
        </motion.div>
        <motion.h2
          className="sec-title-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Complete Event <em>Excellence</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'Jost, sans-serif', fontSize: '0.9rem',
            color: 'rgba(250,247,240,0.4)', marginTop: '16px',
            maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.8,
          }}
        >
          Every detail crafted, every moment perfected — from first consultation to final bow.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(195,165,105,0.1)',
          maxWidth: '1200px',
          margin: '0 auto',
          boxShadow: '0 0 0 1px rgba(195,165,105,0.1)',
        }}
      >
        {services.map((svc, i) => (
          <ServiceCard key={i} svc={svc} index={i} />
        ))}
      </div>

      <style>{`
        .svc-card-new:hover {
          border-color: rgba(195,165,105,0.4) !important;
        }
        .svc-card-new:hover .svc-top-line {
          width: 100% !important;
          transition: width 0.4s ease !important;
        }
        @media (max-width: 1024px) {
          #services > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #services > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Services
