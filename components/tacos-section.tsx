'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { SplitText } from './split-text'
import pastorImg  from '../assets/taco-pastor.png'
import carnitasImg from '../assets/taco-carnitas.png'
import birriaImg  from '../assets/taco-birria.png'
import tingaImg   from '../assets/tinga-de-pollo.png'

type Taco = {
  name: string
  src: StaticImageData
  desc: string
  spice: number
  kcal: number
  floatOffset: number
  floatDuration: number
}

const tacos: Taco[] = [
  { name: 'Al Pastor',      src: pastorImg,   desc: 'Cerdo marinado, piña y cilantro.',      spice: 3, kcal: 240, floatOffset: 12, floatDuration: 4.2 },
  { name: 'Carnitas',       src: carnitasImg, desc: 'Cerdo confitado, cebolla y limón.',     spice: 2, kcal: 280, floatOffset: 8,  floatDuration: 3.6 },
  { name: 'Birria',         src: birriaImg,   desc: 'Res estofada, tortilla dorada.',        spice: 4, kcal: 320, floatOffset: 10, floatDuration: 4.8 },
  { name: 'Tinga de Pollo', src: tingaImg,    desc: 'Pollo desmechado, chipotles y crema.',  spice: 2, kcal: 220, floatOffset: 9,  floatDuration: 3.9 },
]

export function TacosSection() {
  return (
    <section id="tacos" className="relative bg-cream py-24 md:py-32">
      {/* Mismo padding lateral que el hero */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red">
              El menú
            </span>
            <SplitText
              as="h2"
              inView
              mode="words"
              text="Cartas que flotan"
              className="mt-3 font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-6xl"
            />
          </div>
          <p className="max-w-sm text-pretty text-lg text-ink/65">
            Pasa el cursor sobre cada taco para descubrir su nivel de picante y
            sus calorías. Todo hecho al momento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tacos.map((taco, i) => (
            <TacoCard key={taco.name} taco={taco} index={i} />
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#tacos"
            className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-transform hover:scale-105 active:scale-95"
          >
            Ver toda la carta
          </a>
          <a
            href="#cta"
            className="rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.5)] transition-transform hover:scale-105 active:scale-95"
          >
            Pedir ahora
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TacoCard({ taco, index }: { taco: Taco; index: number }) {
  const reduce  = useReducedMotion()
  const ref     = useRef<HTMLDivElement>(null)
  const [tilt, setTilt]     = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - rect.top)  / rect.height - 0.5) * -8,
      y: ((e.clientX - rect.left) / rect.width  - 0.5) *  10,
    })
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    /* 1. Entrada: fade + slide-up al entrar en viewport */
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* 2. Float suave: empieza con delay para no solapar con la entrada */}
      <motion.div
        animate={reduce ? {} : { y: [0, -taco.floatOffset, 0] }}
        transition={{
          delay: 0.7 + index * 0.15,
          duration: taco.floatDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: [0.45, 0, 0.55, 1], // curva suave tipo seno
        }}
      >
        {/* 3. Tilt 3D en hover — via motion para interpolación suave */}
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleLeave}
          animate={{
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.6 }}
          style={{ transformPerspective: 900 }}
          className="group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-card p-5 shadow-[0_18px_40px_-24px_rgba(26,19,16,0.45)]"
        >
          {/* Glow de fondo en hover */}
          <div className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-pink/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Imagen con border-radius igual al de la carta */}
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[1.25rem]">
            <Image
              src={taco.src}
              alt={`Taco de ${taco.name}`}
              fill
              sizes="(max-width:768px) 50vw, 25vw"
              className="object-contain mix-blend-multiply drop-shadow-[0_12px_20px_rgba(26,19,16,0.15)] transition-transform duration-500 ease-out group-hover:scale-108"
            />
          </div>

          {/* Texto */}
          <div className="relative mt-4">
            <h3 className="font-display text-2xl tracking-tight text-ink">
              {taco.name}
            </h3>
            <p className="mt-1 text-sm text-ink/60">{taco.desc}</p>

            {/* Detalles: aparecen en hover con transición suave */}
            <motion.div
              initial={false}
              animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-ink/45">
                    Picante
                  </span>
                  <div className="mt-1.5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span
                        key={s}
                        className={`h-1.5 w-3 rounded-full transition-colors duration-200 ${
                          s < taco.spice ? 'bg-red' : 'bg-ink/15'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-ink/45">
                    Calorías
                  </span>
                  <span className="font-display text-xl text-ink">{taco.kcal}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
