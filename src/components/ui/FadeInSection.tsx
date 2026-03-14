import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface FadeInSectionProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'none'
  delay?: number
  className?: string
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 36 : 0,
      x: direction === 'left' ? -44 : direction === 'right' ? 44 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
