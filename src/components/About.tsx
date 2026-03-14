import { motion } from 'framer-motion'

const features = [
  {
    title: 'Centralised AC',
    desc: 'Climate-controlled comfort across all spaces',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3M4.2 4.2l2.1 2.1M15.7 15.7l2.1 2.1M4.2 17.8l2.1-2.1M15.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Valet Parking',
    desc: 'Parking capacity for up to 500 cars',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="9" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 9V7a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="7.5" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="14.5" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M9 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'In-House Catering',
    desc: 'Veg & Non-Veg by Downtown Delights',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18h14M7 18V9a4 4 0 018 0v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="11" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: '50–1000 Guests',
    desc: 'Flexible venue options for every scale',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="15" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="11" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3 18c0-2.8 1.8-5 4-5M15 13c2.2 0 4 2.2 4 5M7 13c2.2 0 4 2.2 4 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '120px 5%', background: '#FAF7F0' }}>
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
          style={{ minWidth: 0 }}
        >
          <div className="img-frame">
            <img
              src="/images/render-005-005.jpg"
              alt="Grandora Convention Centre"
              style={{ width: '100%', height: '540px', objectFit: 'cover', display: 'block' }}
            />
            <div className="frame-badge">
              <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 600, lineHeight: 1, color: '#00002D' }}>Est.</span>
              <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00002D', textAlign: 'center', marginTop: '2px' }}>2009</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: 0 }}
        >
          <div className="sec-label">
            <span className="sec-label-text">Our Story</span>
          </div>
          <h2 className="sec-title" style={{ marginBottom: '24px' }}>
            A Striking Blend of <em>Modern Elegance</em>
          </h2>
          <p className="sec-body" style={{ marginBottom: '16px' }}>
            Grandora Convention is a striking blend of modern architecture and refined elegance. With its grand entrance, sleek façade, and thoughtfully designed interiors, it offers a luxurious setting crafted to elevate every celebration into an extraordinary experience.
          </p>
          <p className="sec-body" style={{ marginBottom: '44px' }}>
            Our in-house catering by Downtown Delights delivers exceptional taste and presentation — from multi-cuisine menus to customisable options, every meal is crafted to enhance your event.
          </p>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: '20px',
                  border: '1px solid rgba(195,165,105,0.18)',
                  background: 'rgba(195,165,105,0.04)',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(195,165,105,0.5)'
                  e.currentTarget.style.background = 'rgba(195,165,105,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(195,165,105,0.18)'
                  e.currentTarget.style.background = 'rgba(195,165,105,0.04)'
                }}
              >
                {/* Top line accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '1.5px', background: '#C3A569' }} />

                <div style={{
                  width: '38px', height: '38px',
                  border: '1px solid rgba(195,165,105,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C3A569', marginBottom: '12px',
                  background: 'rgba(195,165,105,0.06)',
                }}>
                  {f.icon}
                </div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.05rem', fontWeight: 500, color: '#1A1209', marginBottom: '5px' }}>
                  {f.title}
                </div>
                <div className="sec-body" style={{ fontSize: '0.78rem', lineHeight: 1.6 }}>{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default About
