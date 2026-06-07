'use client'

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import { useRef } from 'react'
import Image from 'next/image'

type Prod = {
  src: string
  name: string
  note: string
  depth: number // parallax factor
}

const products: Prod[] = [
  { src: '/ing-cilantro.png',          name: 'Cilantro', note: 'Recién cortado',    depth: 0.9 },
  { src: '/slider-cebolla-morada.png', name: 'Cebolla',  note: 'Picada fina',       depth: 0.6 },
  { src: '/pina-slider.png',           name: 'Piña',     note: 'Dulce y tropical',  depth: 0.5 },
  { src: '/prod-avocado.png',          name: 'Aguacate', note: 'Guacamole del día', depth: 0.8 },
  { src: '/prod-chile.png',            name: 'Chile',    note: 'El que pica rico',  depth: 0.5 },
  { src: '/prod-lime.png',             name: 'Lima',     note: 'Acidez fresca',     depth: 0.4 },
]

export function IngredientsParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // translate the horizontal track
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%'])

  return (
    <section
      id="ingredientes"
      ref={ref}
      className="relative h-[300vh] bg-red"
      aria-label="Nuestros ingredientes"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="px-8 md:px-16 lg:px-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Nuestros ingredientes
          </span>
          <h2 className="mt-2 max-w-2xl font-display text-4xl leading-[0.95] tracking-tight text-cream md:text-6xl">
            Frescura que se mueve contigo
          </h2>
        </div>

        <motion.div
          style={{ x: reduce ? '0%' : x }}
          className="mt-10 flex w-max items-center gap-6 px-8 md:gap-12 md:px-16 lg:px-24"
        >
          {products.map((p, i) => (
            <ProductCard
              key={p.name}
              prod={p}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({
  prod,
  index,
}: {
  prod: Prod
  index: number
}) {
  return (
    <motion.div
      className="relative flex w-[72vw] shrink-0 flex-col items-center sm:w-[46vw] lg:w-[30vw]"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_60px_-20px_rgba(26,19,16,0.4)]">
        <Image
          src={prod.src || '/placeholder.svg'}
          alt={prod.name}
          fill
          sizes="40vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      {/* Etiqueta con espacio generoso bajo la card */}
      <div className="mt-5 flex items-center gap-3 rounded-full bg-cream px-5 py-2.5 shadow-[0_8px_20px_-8px_rgba(26,19,16,0.25)]">
        <span className="font-display text-xl text-ink">0{index + 1}</span>
        <span className="h-5 w-px bg-ink/20" />
        <div className="leading-tight">
          <span className="block font-semibold text-ink">{prod.name}</span>
          <span className="text-xs text-ink/55">{prod.note}</span>
        </div>
      </div>
    </motion.div>
  )
}
