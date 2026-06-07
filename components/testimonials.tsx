'use client'

import { motion, useReducedMotion } from 'motion/react'

type Review = { quote: string; name: string; tag: string }

const reviews: Review[] = [
  { quote: 'El al pastor me cambió la vida. No exagero.', name: 'Mariana G.', tag: 'Madrid' },
  { quote: 'La birria es brutal, la tortilla dorada perfecta.', name: 'Diego R.', tag: 'Murcia' },
  { quote: 'Ambiente, música y tacos. Diez de diez.', name: 'Sofía L.', tag: 'Benidorm' },
  { quote: 'Pedí cuatro, me comí ocho. Sin culpa.', name: 'Andrés M.', tag: 'Madrid' },
  { quote: 'La salsa de la casa debería ser ilegal.', name: 'Camila T.', tag: 'Murcia' },
  { quote: 'Nunca había probado una tinga así.', name: 'Luis F.', tag: 'Benidorm' },
  { quote: 'Vengo cada semana. Ya soy parte del local.', name: 'Paola V.', tag: 'Madrid' },
  { quote: 'Diseño bonito, pero los tacos ganan.', name: 'Iván S.', tag: 'Murcia' },
  { quote: 'Carnitas que se deshacen en la boca.', name: 'Renata B.', tag: 'Benidorm' },
]

const columns = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
  reviews.slice(6, 9),
]

export function Testimonials() {
  const reduce = useReducedMotion()
  return (
    <section
      id="opiniones"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
      aria-label="Opiniones"
    >
      <div className="mb-14 px-8 text-center md:px-16 lg:px-24">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red">
          Lo que dice la banda
        </span>
        <h2 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight text-ink md:text-6xl">
          Un muro de antojos cumplidos
        </h2>
      </div>

      <div className="relative grid max-h-[80vh] grid-cols-1 gap-6 overflow-hidden px-8 sm:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-24">
        {/* fade masks */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-cream to-transparent" />

        {columns.map((col, ci) => (
          <motion.div
            key={ci}
            className="flex flex-col gap-6"
            animate={reduce ? {} : { y: ci % 2 === 0 ? '-9%' : '9%' }}
            initial={{ y: 0 }}
            transition={{
              duration: 18 + ci * 7,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: [0.45, 0, 0.55, 1],
            }}
          >
            {[...col, ...col].map((r, i) => (
              <article
                key={i}
                className="rounded-3xl border border-ink/10 bg-card p-6 shadow-[0_14px_30px_-22px_rgba(26,19,16,0.5)]"
              >
                <p className="text-lg font-medium leading-relaxed text-ink">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-pink font-display text-sm text-ink">
                    {r.name.charAt(0)}
                  </span>
                  <div className="leading-tight">
                    <span className="block text-sm font-semibold text-ink">
                      {r.name}
                    </span>
                    <span className="text-xs text-ink/50">EGT {r.tag}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
