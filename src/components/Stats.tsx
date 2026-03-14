import { useRef, useState, useEffect } from 'react'
import { useCountUp } from '../hooks/useCountUp'
import { motion } from 'framer-motion'

const statIcons = [
  // Hall area
  <svg key="hall" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="6" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 6V4a2 2 0 014 0v2M11 6V4a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M6 12h10M6 15.5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>,
  // Guests
  <svg key="guests" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="15" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M2 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M15 13c2.2.4 4 2.4 4 4.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>,
  // Lawn
  <svg key="lawn" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 17c2-4 4-6 9-6s7 2 9 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M11 11V5M8 8l3-3 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 17c0-1 .5-2 1.5-2.5M17 17c0-1-.5-2-1.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  // Parking
  <svg key="parking" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="8" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="8" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="14" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M9.5 14h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
]

interface StatItemProps {
  target: number
  suffix: string
  label: string
  index: number
  isLast: boolean
  icon: React.ReactNode
}

const StatItem: React.FC<StatItemProps> = ({ target, suffix, label, index, isLast, icon }) => {
  const [isVisible, setIsVisible] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const numRef = useCountUp(target, suffix, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: '1', textAlign: 'center', padding: '56px 24px',
        borderRight: !isLast ? '1px solid rgba(195,165,105,0.1)' : 'none',
        minWidth: 0, position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Subtle glow dot behind number */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '160px', height: '160px',
        background: 'radial-gradient(circle, rgba(195,165,105,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '42px', height: '42px',
          border: '1px solid rgba(195,165,105,0.25)',
          color: '#C3A569', marginBottom: '20px',
          background: 'rgba(195,165,105,0.06)',
        }}
      >
        {icon}
      </motion.div>

      {/* Number */}
      <div ref={numRef} className="stat-num" style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', letterSpacing: '-0.02em' }}>
        0{suffix}
      </div>

      {/* Gold line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '32px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        style={{ height: '1px', background: '#C3A569', margin: '14px auto', opacity: 0.6 }}
      />

      {/* Label */}
      <div className="stat-lbl">{label}</div>
    </motion.div>
  )
}

const Stats: React.FC = () => {
  const stats = [
    { target: 7000,  suffix: ' sq ft', label: 'Grand Hall Area' },
    { target: 1000,  suffix: '+',      label: 'Guest Capacity'  },
    { target: 11000, suffix: ' sq ft', label: 'Grand Greens Lawn' },
    { target: 500,   suffix: '+',      label: 'Parking Spaces'  },
  ]

  return (
    <div style={{ background: '#071033', borderTop: '1px solid rgba(195,165,105,0.1)', borderBottom: '1px solid rgba(195,165,105,0.1)', padding: '0 5%', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(195,165,105,0.08), transparent)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'stretch', maxWidth: '1200px', margin: '0 auto' }}>
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} index={i} isLast={i === stats.length - 1} icon={statIcons[i]} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #stats-wrap { flex-wrap: wrap !important; }
          #stats-wrap > div { flex: 0 0 50% !important; border-right: none !important; border-bottom: 1px solid rgba(195,165,105,0.1); }
        }
      `}</style>
    </div>
  )
}

export default Stats
