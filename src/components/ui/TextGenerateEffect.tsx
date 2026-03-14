import { motion } from 'framer-motion'

interface TextGenerateEffectProps {
  words: string
  className?: string
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = '',
}) => {
  const wordList = words.split(' ')

  return (
    <span className={className} style={{ display: 'block', textAlign: 'center' }}>
      {wordList.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
