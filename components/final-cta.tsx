'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink py-24 text-cream"
      aria-label="Llamado a la acción"
    >
      {/* Imagen de fondo un poco más visible */}
      <Image
        src="/cta-tacos.png"
        alt="Taco mexicano en primer plano"
        fill
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />

      <div className="relative mx-auto w-full px-8 md:px-16 lg:px-24">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-red"
        >
          <span className="h-px w-8 bg-red" aria-hidden />
          Haz tu pedido
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,5.5vw,6rem)] leading-[1.1] tracking-tight"
        >
          <span className="text-cream">Contacta ahora,</span>
          <br />
          <span className="text-red">el taco te espera.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 max-w-[42ch] text-lg leading-relaxed text-cream/65"
        >
          Reserva tu mesa, haz tu pedido a domicilio o recógelo en el local.
          Estamos a un paso de hacerte el día mejor.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#"
            className="rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.7)] transition-transform hover:scale-105 active:scale-95"
          >
            Pedir ahora
          </a>
          <a
            href="#"
            className="rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition-transform hover:scale-105 hover:bg-cream/10 active:scale-95"
          >
            Reservar mesa
          </a>
          <a
            href="#tacos"
            className="text-sm font-semibold text-cream/55 underline-offset-4 hover:text-cream hover:underline"
          >
            Ver el menú completo
          </a>
        </motion.div>

        {/* Info de contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-10 border-t border-cream/10 pt-10"
        >
          <ContactItem label="Teléfono" value="+34 900 000 000" />
          <div className="h-8 w-px bg-cream/15" aria-hidden />
          <ContactItem label="Email" value="hola@elgrantaco.es" />
          <div className="h-8 w-px bg-cream/15" aria-hidden />
          <ContactItem label="EGT Madrid" value="12:00 — 02:00" />
          <div className="h-8 w-px bg-cream/15" aria-hidden />
          <ContactItem label="EGT Murcia" value="13:00 — 00:00" />
          <div className="h-8 w-px bg-cream/15" aria-hidden />
          <ContactItem label="EGT Benidorm" value="13:00 — 01:00" />
        </motion.div>
      </div>
    </section>
  )
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-cream/40">{label}</p>
      <p className="mt-1 font-display text-lg text-cream">{value}</p>
    </div>
  )
}

