import { motion } from 'framer-motion'

interface SpotlightProps {
  className?: string
  fill?: string
}

export const SpotlightEffect: React.FC<SpotlightProps> = ({
  className = '',
  fill = 'rgba(195,165,105,0.06)',
}) => {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="spotlight-gradient" cx="50%" cy="30%" r="60%" fx="50%" fy="30%">
            <stop offset="0%" stopColor={fill} stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#spotlight-gradient)" />
      </svg>
    </motion.div>
  )
}
