import { motion } from 'framer-motion'

interface ParallaxDividerProps {
  scrollTo: (id: string) => void
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ scrollTo }) => {
  return (
    <div className="parallax-section">
      <div className="parallax-bg" style={{ backgroundImage: 'url(/images/render-011-012.jpg)' }} />
      <div className="parallax-content">
        <motion.div
          className="parallax-line"
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, color: '#FAF7F0', letterSpacing: '0.05em', textAlign: 'center' }}
        >
          Every Event Deserves to be Grand
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C3A569', textAlign: 'center' }}
        >
          Crafting extraordinary moments since 2009
        </motion.p>
        <div className="parallax-line" />
        <motion.button
          className="btn-outline"
          onClick={() => scrollTo('contact')}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{ borderColor: '#C3A569', color: '#FAF7F0' }}
        >
          <span>Plan Your Event</span>
        </motion.button>
      </div>
    </div>
  )
}

export default ParallaxDivider
