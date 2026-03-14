import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const venues = [
  {
    name: 'The Grand Hall',
    image: '/images/render-010-010.jpg',
    capacity: 700,
    capacityMax: 1000,
    sqft: '7,000 sq ft',
    type: 'Weddings & Celebrations',
    desc: 'Our 7,000 sq. ft. main hall comfortably accommodates up to 700 guests with centralised AC for weddings, receptions, and corporate events.',
    features: ['Central AC', 'Stage & Podium', 'AV System', 'Bridal Suite'],
  },
  {
    name: 'Grand Greens',
    image: '/images/render-003-003.jpg',
    capacity: 1000,
    capacityMax: 1000,
    sqft: '11,000 sq ft',
    type: 'Outdoor Events',
    desc: 'A lush 11,000 sq. ft. green lawn — ideal for mehndi, sangeet, cocktail evenings, and private gatherings under the open sky.',
    features: ['Open Lawn', 'Floral Décor', 'Outdoor Lighting', 'Tent Options'],
  },
  {
    name: 'The Intimate Hall',
    image: '/images/render-011-012.jpg',
    capacity: 200,
    capacityMax: 1000,
    sqft: 'Flexible Setup',
    type: 'Intimate Gatherings',
    desc: 'A well-appointed smaller hall for 50–200 guests, perfect for intimate events, meetings, and pre-wedding functions.',
    features: ['Private Entry', 'Custom Layout', 'Catering Ready', 'AV Support'],
  },
]

const VenueCard: React.FC<{ venue: typeof venues[number]; index: number }> = ({ venue, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'none', height: '540px' }}
    >
      {/* Image */}
      <motion.img
        src={venue.image}
        alt={venue.name}
        animate={{ scale: hovered ? 1.08 : 1, filter: hovered ? 'brightness(0.35)' : 'brightness(0.6)' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Base gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,45,0.97) 0%, rgba(0,0,45,0.3) 55%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Gold corner accent */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', borderBottom: '1px solid rgba(195,165,105,0.3)', borderLeft: '1px solid rgba(195,165,105,0.3)', pointerEvents: 'none' }} />

      {/* Type badge */}
      <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
        <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.52rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C3A569', border: '1px solid rgba(195,165,105,0.35)', padding: '5px 12px', background: 'rgba(0,0,45,0.5)' }}>
          {venue.type}
        </span>
      </div>

      {/* Bottom info */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px' }}>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <span style={{ background: 'rgba(195,165,105,0.15)', border: '1px solid rgba(195,165,105,0.35)', padding: '4px 12px', fontFamily: 'Jost', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4B87A' }}>
            {venue.capacity} guests
          </span>
          <span style={{ background: 'rgba(0,0,45,0.5)', border: '1px solid rgba(195,165,105,0.2)', padding: '4px 12px', fontFamily: 'Jost', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,247,240,0.65)' }}>
            {venue.sqft}
          </span>
        </div>

        {/* Name */}
        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.9rem', fontWeight: 400, color: '#FAF7F0', lineHeight: 1.15, marginBottom: '6px' }}>
          {venue.name}
        </h3>

        {/* Capacity bar */}
        <div style={{ marginBottom: '0', marginTop: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'Jost', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)' }}>Capacity</span>
            <span style={{ fontFamily: 'Jost', fontSize: '0.55rem', color: 'rgba(195,165,105,0.7)' }}>{Math.round((venue.capacity / venue.capacityMax) * 100)}%</span>
          </div>
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(venue.capacity / venue.capacityMax) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #C3A569, #D4B87A)' }}
            />
          </div>
        </div>

        {/* Hover reveal: desc + features */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="hover-content"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.83rem', color: 'rgba(250,247,240,0.65)', lineHeight: 1.75, marginBottom: '16px' }}>
                {venue.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {venue.features.map(f => (
                  <span key={f} style={{ fontFamily: 'Jost', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.7)', border: '1px solid rgba(195,165,105,0.2)', padding: '4px 10px' }}>
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const Venues: React.FC = () => {
  return (
    <section id="venues" style={{ padding: '120px 5%', background: '#F2EBD9' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <motion.div
          className="sec-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-label-text">Our Spaces</span>
        </motion.div>
        <motion.h2
          className="sec-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Venues for Every <em>Grand Occasion</em>
        </motion.h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', maxWidth: '1400px', margin: '0 auto' }}>
        {venues.map((venue, i) => (
          <VenueCard key={i} venue={venue} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #venues > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Venues
