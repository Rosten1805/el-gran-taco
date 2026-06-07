'use client'

import { motion, type Variants } from 'motion/react'

type SplitTextProps = {
  text: string
  className?: string
  /** delay before the whole word/char sequence starts */
  delay?: number
  /** stagger between characters */
  stagger?: number
  /** animate as soon as in view instead of on mount */
  inView?: boolean
  mode?: 'chars' | 'words'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

const child: Variants = {
  hidden: { y: '110%', opacity: 0, rotate: 6 },
  visible: {
    y: '0%',
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', damping: 14, stiffness: 120 },
  },
}

export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  inView = false,
  mode = 'chars',
  as = 'span',
}: SplitTextProps) {
  const words = text.split(' ')
  const Tag = motion[as] as typeof motion.span

  return (
    <Tag
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      {...(inView
        ? { whileInView: 'visible', viewport: { once: true, amount: 0.5 } }
        : { animate: 'visible' })}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}
        >
          {mode === 'words' ? (
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          ) : (
            word.split('').map((c, ci) => (
              <motion.span
                key={ci}
                variants={child}
                className="inline-block"
                aria-hidden
              >
                {c}
              </motion.span>
            ))
          )}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
