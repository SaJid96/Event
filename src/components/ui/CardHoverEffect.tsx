import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

export const CardHoverEffect: React.FC<HoverCardProps> = ({ children, className = '' }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 block"
            style={{
              background: 'radial-gradient(200px circle at center, rgba(195,165,105,0.1), transparent)',
              borderRadius: 'inherit',
            }}
            layoutId="card-hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  )
}
