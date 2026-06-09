'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import ctaTacosImg  from '../assets/cta-tacos.png'
import logotipoImg  from '../assets/el-gran-taco-logotipo.png'
import heroTacosImg from '../assets/hero-tacos.png'

// ─── Section 1: foto izquierda / texto derecha ────────────────────────────────
export function SplitShowcase() {
  return (
    <>
      <SectionPhotoLeft />
      <SectionPhotoRight />
    </>
  )
}

// ─── Sección 1 ────────────────────────────────────────────────────────────────
function SectionPhotoLeft() {
  return (
    <section className="flex min-h-screen flex-col md:flex-row" aria-label="El Gran Taco">
      {/* Foto: izquierda */}
      <div className="relative min-h-[55vw] flex-1 overflow-hidden md:min-h-0">
        <Image
          src={ctaTacosImg}
          alt="Tacos artesanales El Gran Taco"
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
        {/* Overlay oscuro sutil */}
        <div className="absolute inset-0 bg-ink/30" />
        {/* Gradiente de transición hacia el texto */}
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-cream/10" />
      </div>

      {/* Texto: derecha — fondo cream */}
      <div className="flex flex-1 flex-col justify-center bg-cream px-10 py-16 md:px-16 lg:px-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Image
            src={logotipoImg}
            alt="El Gran Taco"
            width={280}
            height={110}
            className="h-32 w-auto"
            style={{ width: 'auto' }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-red"
        >
          <span className="h-px w-8 bg-red" aria-hidden />
          Auténtico desde el primer bocado
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[4.5rem]"
        >
          El taco que<br />lo cambia todo
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 max-w-[38ch] text-lg leading-relaxed text-ink/70"
        >
          Cada ingrediente, elegido a mano. Cada tortilla, hecha al momento.
          Esto no es comida rápida — esto es El Gran Taco.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#tacos"
            className="rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-transform hover:scale-105 active:scale-95"
          >
            Ver el menú
          </a>
          <a
            href="#locales"
            className="rounded-full border border-ink/25 px-8 py-4 text-sm font-semibold text-ink transition-transform hover:scale-105 hover:border-ink/50 active:scale-95"
          >
            Nuestros locales
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Sección 2 ────────────────────────────────────────────────────────────────
function SectionPhotoRight() {
  return (
    <section className="flex min-h-screen flex-col-reverse md:flex-row" aria-label="Pide tu taco">
      {/* Texto: izquierda — fondo oscuro */}
      <div className="flex flex-1 flex-col justify-center bg-ink px-10 py-16 md:px-16 lg:px-24">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-red"
        >
          <span className="h-px w-8 bg-red" aria-hidden />
          A domicilio y para llevar
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl leading-[1.1] tracking-tight text-cream md:text-5xl lg:text-[4.5rem]"
        >
          Tu próximo<br />taco favorito
        </motion.h2>

        {/* Separador decorativo */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
          className="mt-8 h-px w-16 bg-red"
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-[38ch] text-lg leading-relaxed text-cream/70"
        >
          El mejor taco de la ciudad llega a tu puerta.
          Sin esperas, sin excusas. Solo el sabor que ya conoces
          — y al que no puedes renunciar.
        </motion.p>

        {/* Stats rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-8"
        >
          <div>
            <p className="font-display text-2xl leading-none text-cream">30'</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-cream/45">entrega media</p>
          </div>
          <div className="h-8 w-px bg-cream/15" />
          <div>
            <p className="font-display text-2xl leading-none text-cream">3</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-cream/45">locales España</p>
          </div>
          <div className="h-8 w-px bg-cream/15" />
          <div>
            <p className="font-display text-2xl leading-none text-cream">★ 4.9</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-cream/45">en Google</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-10"
        >
          <a
            href="#cta"
            className="inline-block rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.6)] transition-transform hover:scale-105 active:scale-95"
          >
            Pedir ahora
          </a>
        </motion.div>
      </div>

      {/* Foto: derecha */}
      <div className="relative min-h-[55vw] flex-1 overflow-hidden md:min-h-0">
        <Image
          src={heroTacosImg}
          alt="Tacos a domicilio El Gran Taco"
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/20" />
      </div>
    </section>
  )
}
