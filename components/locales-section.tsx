'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { SplitText } from './split-text'

// Nombres sin prefijo EGT — el logo lo sustituye visualmente


type Local = {
  name: string
  area: string
  src: string
  hours: string
  rotate: number
}

const locales: Local[] = [
  { name: 'Madrid',   area: 'Madrid',   src: '/madrid-tacos.webp',   hours: '12:00 — 02:00', rotate: -3 },
  { name: 'Murcia',   area: 'Murcia',   src: '/murcia-tacos.webp',   hours: '13:00 — 00:00', rotate: 2.5 },
  { name: 'Benidorm', area: 'Benidorm', src: '/benidorm-tacos.webp', hours: '13:00 — 01:00', rotate: -2 },
]

export function LocalesSection() {
  return (
    <section id="locales" className="relative bg-ink py-24 text-cream md:py-32">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink">
            Dónde encontrarnos
          </span>
          <SplitText
            as="h2"
            inView
            mode="words"
            text="Tres ciudades, un mismo ritual"
            className="mt-3 font-display text-3xl leading-[1.1] tracking-tight text-cream md:text-5xl"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {locales.map((local, i) => (
            <motion.article
              key={local.name}
              initial={{ opacity: 0, scale: 0.8, rotate: local.rotate * 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: i * 0.15,
                type: 'spring',
                stiffness: 80,
                damping: 14,
              }}
              whileHover={{ y: -10, rotate: local.rotate }}
              className="group overflow-hidden rounded-[1.75rem] bg-cream/[0.04] ring-1 ring-cream/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={local.src || '/placeholder.svg'}
                  alt={`Local ${local.name} en ${local.area}`}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-0 bg-ink/30" />
                <span className="absolute right-4 top-4 rounded-full bg-red px-3 py-1 text-xs font-semibold text-cream">
                  Abierto hoy
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Logo en vez de "EGT" */}
                  <Image
                    src="/el-gran-taco-letters.png"
                    alt="El Gran Taco"
                    width={200}
                    height={80}
                    className="mb-3 h-16 w-auto"
                    style={{ width: 'auto' }}
                  />
                  <h3 className="font-display text-3xl tracking-tight">
                    {local.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-pink">
                    {local.hours}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
