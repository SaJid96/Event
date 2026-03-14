import { motion } from 'framer-motion'

interface ShimmerButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
}) => {
  if (variant === 'outline') {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`btn-outline ${className}`}
      >
        <span>{children}</span>
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-primary relative overflow-hidden ${className}`}
    >
      <motion.span
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)',
        }}
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      {children}
    </motion.button>
  )
}
