'use client'

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'
import { SplitText } from './split-text'

type Layer = {
  src: string
  alt: string
  label: string
  /** starting offset (scattered) */
  fromX: number
  fromY: number
  fromR: number
  /** final stacked y position when assembled */
  toY: number
  z: number
  size: number
}

// ordered bottom -> top of the stack
const layers: Layer[] = [
  { src: '/ing-tortilla.png', alt: 'Tortilla', label: 'Tortilla de maíz', fromX: -420, fromY: 220, fromR: -35, toY: 70, z: 1, size: 320 },
  { src: '/ing-carne.png', alt: 'Carne asada', label: 'Carne asada', fromX: 420, fromY: 120, fromR: 30, toY: 18, z: 2, size: 230 },
  { src: '/ing-onion.png', alt: 'Cebolla', label: 'Cebolla fresca', fromX: -360, fromY: -180, fromR: -25, toY: -18, z: 3, size: 180 },
  { src: '/ing-cilantro.png', alt: 'Cilantro', label: 'Cilantro', fromX: 380, fromY: -240, fromR: 28, toY: -44, z: 4, size: 180 },
  { src: '/ing-salsa.png', alt: 'Salsa roja', label: 'Salsa de la casa', fromX: 0, fromY: -340, fromR: 18, toY: -64, z: 5, size: 170 },
]

export function TacoAssembly() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="assembly"
      ref={ref}
      className="relative h-[320vh] bg-ink text-cream"
      aria-label="Cómo se arma el taco"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* light stage so ingredient photos blend seamlessly */}
        <div className="absolute left-1/2 top-1/2 size-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream" />
        <div className="absolute left-1/2 top-1/2 size-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/30 blur-3xl" />
        <div className="absolute -left-24 top-10 size-80 rounded-full bg-red/25 blur-3xl" />
        <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-pink/20 blur-3xl" />

        <Heading scrollYProgress={scrollYProgress} />

        <div className="relative mt-4 h-[58vh] w-full max-w-2xl">
          {layers.map((layer, i) => (
            <IngredientLayer
              key={layer.src}
              layer={layer}
              index={i}
              total={layers.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Heading({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.15], [40, 0])
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute top-[12vh] z-20 px-6 text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red">
        El ritual
      </span>
      <SplitText
        as="h2"
        inView
        mode="words"
        stagger={0.08}
        text="Cinco piezas. Un taco perfecto."
        className="mt-3 font-display text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl"
      />
    </motion.div>
  )
}

function IngredientLayer({
  layer,
  index,
  total,
  scrollYProgress,
}: {
  layer: Layer
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const reduce = useReducedMotion()
  // each layer assembles within its own slice of the scroll
  const start = 0.12 + (index / total) * 0.55
  const end = start + 0.28

  const x = useTransform(scrollYProgress, [start, end], [layer.fromX, 0])
  const y = useTransform(scrollYProgress, [start, end], [layer.fromY, layer.toY])
  const rotate = useTransform(scrollYProgress, [start, end], [layer.fromR, 0])
  const opacity = useTransform(scrollYProgress, [start, start + 0.06], [0, 1])
  const labelOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.04, end - 0.04, end],
    [0, 1, 1, 0],
  )

  return (
    <motion.div
      style={{
        x: reduce ? 0 : x,
        y: reduce ? layer.toY : y,
        rotate: reduce ? 0 : rotate,
        opacity: reduce ? 1 : opacity,
        zIndex: layer.z,
      }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="relative"
        style={{ width: layer.size, height: layer.size }}
      >
        <Image
          src={layer.src || '/placeholder.svg'}
          alt={layer.alt}
          fill
          sizes="320px"
          className="object-contain mix-blend-multiply drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
        />
        <motion.span
          style={{ opacity: labelOpacity }}
          className="absolute left-full top-1/2 ml-2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs font-semibold text-cream md:block"
        >
          {layer.label}
        </motion.span>
      </div>
    </motion.div>
  )
}
