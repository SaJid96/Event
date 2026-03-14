import { motion } from 'framer-motion'

const testimonials = [
  { text: 'The Grandora team transformed our wedding into a fairy tale. Every detail was perfect.', name: 'Priya & Rahul Sharma', event: 'Wedding 2024' },
  { text: 'Our annual conference has never looked so polished. The AV setup was flawless.', name: 'Vikram Nair', event: 'TechVentures Ltd.' },
  { text: 'The catering was extraordinary. Our guests are still talking about it.', name: 'Ananya Kapoor', event: 'Social Gala' },
  { text: 'Booking the Grand Hall was the best decision we made. Seamless from start to finish.', name: 'Rohan & Meera Iyer', event: 'Wedding 2023' },
  { text: 'Professional, elegant, and absolutely stunning. Grandora exceeded all expectations.', name: 'Arjun Mehta', event: 'Corporate Launch' },
  { text: 'The Grand Greens wedding was like a dream. The staff were attentive beyond measure.', name: 'Divya & Sanjay Bose', event: 'Wedding 2024' },
]

const Testimonials: React.FC = () => {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" style={{ padding: '120px 0', background: '#00002D', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '0 5%', marginBottom: '64px', textAlign: 'center' }}>
        <motion.div
          className="sec-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-label-text">Kind Words</span>
        </motion.div>
        <motion.h2
          className="sec-title-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stories of <em>Unforgettable Events</em>
        </motion.h2>
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #00002D, transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #00002D, transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <div className="marquee-track">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="testi-card"
            >
              <p style={{ fontFamily: 'Jost', fontSize: '0.88rem', lineHeight: 1.8, color: 'rgba(250,247,240,0.7)', position: 'relative', zIndex: 1, marginBottom: '24px', paddingTop: '16px' }}>
                {t.text}
              </p>
              <div style={{ borderTop: '1px solid rgba(195,165,105,0.2)', paddingTop: '16px' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', fontWeight: 500, color: '#FAF7F0' }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: 'Jost', fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C3A569', marginTop: '4px' }}>
                  {t.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
