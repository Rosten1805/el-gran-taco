'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const snacks = [
  {
    name: 'Tequeños de\nQueso Blanco',
    src: '/tequenos-tacos.webp',
    wide: false,
  },
  {
    name: 'Nachos\nCaseros',
    src: '/nachos-tacos.webp',
    wide: true,
  },
  {
    name: 'Patatas\nFritas',
    src: '/patatas-tacos.webp',
    wide: false,
  },
  {
    name: 'Quesadillas',
    src: '/quesadilla-tacos.webp',
    wide: false,
  },
]

export function SnacksSection() {
  return (
    <section aria-label="Snacks">
      {/* Encabezado */}
      <div className="bg-ink py-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-red"
        >
          mucho más que tacos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-display text-5xl leading-[0.9] tracking-tight text-cream md:text-7xl"
        >
          Snacks
        </motion.h2>
      </div>

      {/* Grid de fotos */}
      <div className="flex h-[60vh] min-h-[480px] w-full overflow-hidden">
      {snacks.map((snack, i) => (
        <motion.div
          key={snack.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          // nachos ocupa el doble de ancho
          className={`group relative overflow-hidden ${snack.wide ? 'flex-[2]' : 'flex-1'}`}
        >
          <Image
            src={snack.src}
            alt={snack.name.replace('\n', ' ')}
            fill
            sizes="25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay oscuro base + hover más tenue */}
          <div className="absolute inset-0 bg-ink/40 transition-opacity duration-500 group-hover:bg-ink/20" />

          {/* Separador vertical entre cards */}
          {i < snacks.length - 1 && (
            <div className="absolute inset-y-0 right-0 z-10 w-px bg-cream/10" />
          )}

          {/* Nombre del snack — top-left como en la referencia */}
          <div className="absolute left-5 top-5 z-10">
            <p className="font-display text-xl leading-tight tracking-wide text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-2xl lg:text-3xl">
              {snack.name.split('\n').map((line, li) => (
                <span key={li} className="block">{line.toUpperCase()}</span>
              ))}
            </p>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  )
}
