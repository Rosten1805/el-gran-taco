'use client'

import { motion } from 'motion/react'

const items = [
  'COCHINITA PIBIL',
  'TINGA DE POLLO',
  'AL PASTOR',
  'CARNITAS',
  'BIRRIA',
]

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-red py-4 text-cream">
      <motion.div
        className="flex shrink-0 gap-8 whitespace-nowrap pr-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl tracking-wide md:text-3xl"
          >
            {it}
            <span className="text-pink">✸</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
