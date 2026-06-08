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
  depth: number
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
  const ref    = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const x          = useTransform(scrollYProgress, [0, 1], ['0%', '-66%'])
  const logoOpacity = useTransform(scrollYProgress, [0.72, 1], [0, 1])
  const logoScale   = useTransform(scrollYProgress, [0.72, 1], [0.88, 1])

  return (
    <section id="ingredientes" className="relative bg-red" aria-label="Nuestros ingredientes">

      {/* ── MÓVIL ── carrusel swipeable */}
      <div className="md:hidden">
        <div className="px-6 pb-8 pt-14">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
            Nuestros ingredientes
          </span>
          <h2 className="mt-2 font-display text-3xl leading-[1.1] tracking-tight text-cream">
            Frescura que se mueve contigo
          </h2>
        </div>

        {/* Track con snap */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="relative flex w-[72vw] shrink-0 snap-start flex-col items-center"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-cream shadow-[0_20px_40px_-12px_rgba(26,19,16,0.35)]">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="72vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-full bg-cream px-4 py-2 shadow-[0_6px_16px_-6px_rgba(26,19,16,0.25)]">
                <span className="font-display text-lg text-ink">0{i + 1}</span>
                <span className="h-4 w-px bg-ink/20" />
                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">{p.name}</span>
                  <span className="text-xs text-ink/55">{p.note}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Logo como última "slide" */}
          <div className="flex w-[72vw] shrink-0 snap-start flex-col items-center justify-center">
            <Image
              src="/el-gran-taco-logotipo.png"
              alt="El Gran Taco"
              width={280}
              height={280}
              className="w-40 object-contain drop-shadow-[0_12px_32px_rgba(26,19,16,0.35)]"
            />
          </div>
        </div>

        {/* Indicador de swipe */}
        <p className="pb-10 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-ink/40">
          desliza para ver más
        </p>
      </div>

      {/* ── DESKTOP ── parallax scroll-driven */}
      <div
        ref={ref}
        className="relative hidden h-[300vh] md:block"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div
            style={{ opacity: reduce ? 1 : logoOpacity, scale: reduce ? 1 : logoScale }}
            className="pointer-events-none absolute left-[74%] top-[58%] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/el-gran-taco-logotipo.png"
              alt="El Gran Taco"
              width={480}
              height={480}
              className="w-80 object-contain drop-shadow-[0_20px_50px_rgba(26,19,16,0.4)] lg:w-[26rem]"
            />
          </motion.div>

          <div className="px-16 lg:px-24">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
              Nuestros ingredientes
            </span>
            <h2 className="mt-2 max-w-2xl font-display text-3xl leading-[1.1] tracking-tight text-cream md:text-5xl">
              Frescura que se mueve contigo
            </h2>
          </div>

          <motion.div
            style={{ x: reduce ? '0%' : x }}
            className="mt-10 flex w-max items-center gap-12 px-16 lg:px-24"
          >
            {products.map((p, i) => (
              <ProductCard key={p.name} prod={p} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}

function ProductCard({ prod, index }: { prod: Prod; index: number }) {
  return (
    <motion.div className="relative flex w-[36vw] shrink-0 flex-col items-center lg:w-[24vw]">
      <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-cream shadow-[0_30px_60px_-20px_rgba(26,19,16,0.4)]">
        <Image
          src={prod.src}
          alt={prod.name}
          fill
          sizes="36vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
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
