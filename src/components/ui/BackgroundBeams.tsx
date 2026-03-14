import { motion } from 'framer-motion'

export const BackgroundBeams: React.FC = () => {
  const beams = [
    { x1: '8%', y1: '0', x2: '30%', y2: '100%', delay: 0 },
    { x1: '22%', y1: '0', x2: '48%', y2: '100%', delay: 0.7 },
    { x1: '40%', y1: '0', x2: '65%', y2: '100%', delay: 1.4 },
    { x1: '58%', y1: '0', x2: '80%', y2: '100%', delay: 2.1 },
    { x1: '75%', y1: '0', x2: '95%', y2: '100%', delay: 2.8 },
    { x1: '90%', y1: '0', x2: '52%', y2: '100%', delay: 3.5 },
  ]

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      {beams.map((beam, i) => (
        <motion.line
          key={i}
          x1={beam.x1} y1={beam.y1} x2={beam.x2} y2={beam.y2}
          stroke="#C3A569"
          strokeWidth="0.6"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200, opacity: 0 }}
          animate={{ strokeDashoffset: [200, 0, 200], opacity: [0, 0.5, 0] }}
          transition={{
            duration: 4,
            delay: beam.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}
