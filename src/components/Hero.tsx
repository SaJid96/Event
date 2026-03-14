import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from './ui/BackgroundBeams'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { ShimmerButton } from './ui/ShimmerButton'

interface HeroProps {
  scrollTo: (id: string) => void
  openBooking: () => void
}

const Hero: React.FC<HeroProps> = ({ scrollTo, openBooking }) => {
  const heroRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const spotlight = spotlightRef.current
    if (!hero || !spotlight) return
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      spotlight.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(195,165,105,0.06), transparent 70%)`
    }
    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: '100vh', minHeight: '700px', background: '#00002D', paddingTop: '80px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/render-008-008.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,45,0.6) 0%, rgba(0,0,45,0.4) 40%, rgba(0,0,45,0.85) 100%)' }}
      />

      {/* Gold grid */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(195,165,105,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(195,165,105,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Spotlight */}
      <div ref={spotlightRef} id="spotlight" />

      {/* Beams */}
      <BackgroundBeams />

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 20,
          maxWidth: '960px', width: '100%',
          padding: '0 24px', margin: '0 auto',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '16px',
            marginBottom: '36px',
          }}
        >
          <span style={{ width: '40px', height: '1px', background: '#C3A569', display: 'block' }} />
          <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.58rem', letterSpacing: '0.52em', textTransform: 'uppercase', color: '#C3A569' }}>
            Crafting Celebrations · Hyderabad · Est. 2009
          </span>
          <span style={{ width: '40px', height: '1px', background: '#C3A569', display: 'block' }} />
        </motion.div>

        {/* Title */}
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            fontWeight: 300,
            color: '#FAF7F0',
            lineHeight: 1.06,
            marginBottom: '24px',
          }}
        >
          <TextGenerateEffect words="Crafting Grand Celebrations" />
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 'clamp(0.65rem, 1.3vw, 0.82rem)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(195,165,105,0.75)',
            marginBottom: '48px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Where Every Celebration Becomes Extraordinary
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <ShimmerButton onClick={openBooking} variant="primary">
            Book Your Event
          </ShimmerButton>
          <ShimmerButton onClick={() => scrollTo('venues')} variant="outline">
            Explore Venues
          </ShimmerButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
        }}
      >
        <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.52rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(195,165,105,0.5)' }}>
          Scroll
        </span>
        <div className="scroll-line" style={{ height: '50px' }} />
      </motion.div>
    </section>
  )
}

export default Hero
