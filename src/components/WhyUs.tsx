import { motion } from 'framer-motion'

const whyPoints = [
  {
    title: 'Strategic Location',
    desc: '7 min from ORR, 15 min from Infosys, 20 min from Uppal Junction — perfectly connected.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: 'Flexible Capacity',
    desc: 'Venue options for 50 to 1,000 guests — from intimate gatherings to grand celebrations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Downtown Delights Catering',
    desc: 'In-house veg & non-veg catering with multi-cuisine menus crafted for every palate.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Valet & Parking',
    desc: 'Complimentary valet service and on-site parking for up to 500 cars.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="9" width="20" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 9V7a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="8.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="15.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10 15h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Grand Greens Lawn',
    desc: '11,000 sq. ft. lush lawn ideal for mehndi, sangeet, cocktail evenings, and open-air events.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 20c2.5-5 5-7 9-7s6.5 2 9 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 13V5M9 8l3-3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 20c0-1.5.8-2.8 2-3.5M18 20c0-1.5-.8-2.8-2-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const WhyUs: React.FC = () => {
  return (
    <section id="why" style={{ padding: '120px 5%', background: '#FAF7F0' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '80px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative', minWidth: 0 }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src="/images/render-007-007.jpg"
              alt="Why choose Grandora"
              style={{ width: '100%', height: '580px', objectFit: 'cover', display: 'block' }}
            />
            {/* Gold corner frame */}
            <div style={{ position: 'absolute', top: '-16px', left: '-16px', right: '16px', bottom: '16px', border: '1px solid rgba(195,165,105,0.25)', zIndex: 0, pointerEvents: 'none' }} />
            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                position: 'absolute', bottom: '32px', right: '-24px',
                background: '#00002D', padding: '20px 28px',
                border: '1px solid rgba(195,165,105,0.25)', zIndex: 2,
                minWidth: '140px',
              }}
            >
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 300, color: '#C3A569', lineHeight: 1 }}>15+</div>
              <div style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(250,247,240,0.5)', marginTop: '6px' }}>Years of Excellence</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Why points */}
        <motion.div
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: 0 }}
        >
          <div className="sec-label">
            <span className="sec-label-text">Why Choose Us</span>
          </div>
          <h2 className="sec-title" style={{ marginBottom: '40px' }}>
            The Grandora <em>Promise</em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {whyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '18px',
                  padding: '20px 16px',
                  borderBottom: i < whyPoints.length - 1 ? '1px solid rgba(195,165,105,0.1)' : 'none',
                  transition: 'background 0.3s, padding-left 0.3s',
                  cursor: 'default', position: 'relative',
                }}
                whileHover={{ paddingLeft: '24px', backgroundColor: 'rgba(195,165,105,0.04)' }}
              >
                {/* Index */}
                <div style={{
                  position: 'absolute', right: '12px', top: '18px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.8rem', fontWeight: 300,
                  color: 'rgba(195,165,105,0.12)', lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon box */}
                <motion.div
                  whileHover={{ borderColor: '#C3A569', background: 'rgba(195,165,105,0.1)' }}
                  transition={{ duration: 0.25 }}
                  style={{
                    width: '48px', height: '48px', flexShrink: 0,
                    border: '1px solid rgba(195,165,105,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#C3A569',
                    background: 'rgba(195,165,105,0.04)',
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                >
                  {point.icon}
                </motion.div>

                <div style={{ minWidth: 0, paddingRight: '40px' }}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.15rem', fontWeight: 500,
                    color: '#1A1209', marginBottom: '5px', lineHeight: 1.3,
                  }}>
                    {point.title}
                  </div>
                  <div className="sec-body" style={{ fontSize: '0.83rem', lineHeight: 1.75 }}>
                    {point.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #why > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default WhyUs
