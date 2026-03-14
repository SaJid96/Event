import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/images/render-008-008.jpg', alt: 'Entrance porch night view' },
  { src: '/images/render-002-002.jpg', alt: 'Grand entrance at sunset' },
  { src: '/images/render-011-012.jpg', alt: 'Convention hall interiors' },
  { src: '/images/render-006-006.jpg', alt: 'Night facade illuminated' },
  { src: '/images/render-009-009.jpg', alt: 'Entrance walkway at night' },
]

const Gallery: React.FC = () => {
  return (
    <section id="gallery" style={{ padding: '120px 5%', background: '#071033' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <motion.div
          className="sec-label"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sec-label-text">The Visual Story</span>
        </motion.div>
        <motion.h2
          className="sec-title-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Spaces That <em>Inspire</em>
        </motion.h2>
      </div>

      {/* Grid: left column spans 2 rows, right has 2x2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '280px 280px',
          gap: '12px',
        }}
      >
        {/* Big left image: spans 2 rows */}
        <motion.div
          className="gallery-item"
          style={{ gridRow: 'span 2' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={galleryImages[0].src} alt={galleryImages[0].alt} style={{ height: '100%' }} />
          <div className="gallery-hover-label"><span className="gallery-label-text">View</span></div>
        </motion.div>

        {/* 4 smaller images */}
        {galleryImages.slice(1).map((img, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <img src={img.src} alt={img.alt} style={{ height: '100%' }} />
            <div className="gallery-hover-label"><span className="gallery-label-text">View</span></div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #gallery > div:last-child {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          #gallery > div:last-child > div:first-child {
            grid-row: span 1 !important;
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Gallery
