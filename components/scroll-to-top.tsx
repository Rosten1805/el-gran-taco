'use client'

import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { useState } from 'react'

const RADIUS = 22
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setVisible(v > 0.06)
  })

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [CIRCUMFERENCE, 0],
  )

  function handleClick() {
    window.scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' })
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Volver arriba"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-8 right-8 z-50 cursor-pointer"
    >
      {/* Anillo de progreso */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx="28" cy="28" r={RADIUS}
          fill="none"
          stroke="rgba(241,234,208,0.12)"
          strokeWidth="2"
        />
        <motion.circle
          cx="28" cy="28" r={RADIUS}
          fill="none"
          stroke="#ff3131"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: reduce ? 0 : strokeDashoffset }}
        />
      </svg>

      {/* Botón central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red shadow-[0_8px_24px_-6px_rgba(255,49,49,0.55)] transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_12px_32px_-4px_rgba(255,49,49,0.75)]">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-cream" aria-hidden>
            <path
              d="M6.5 11V2M2 6.5L6.5 2L11 6.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  )
}
