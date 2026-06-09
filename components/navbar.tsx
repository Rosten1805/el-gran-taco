'use client'

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'
import lettersImg from '../assets/el-gran-taco-letters.png'

const links = [
  { label: 'Tacos',        href: '#tacos' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Locales',      href: '#locales' },
  { label: 'Opiniones',    href: '#opiniones' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 60)
  })

  function closeMenu() { setMenuOpen(false) }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(26,19,16,0.75)' : 'rgba(26,19,16,0)',
          backdropFilter:  scrolled ? 'blur(16px)' : 'blur(0px)',
          boxShadow:       scrolled ? '0 1px 0 rgba(241,234,208,0.08)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between px-6 py-3 md:px-16 md:py-4 lg:px-24">
          {/* Logo */}
          <a href="#top" className="flex items-center" onClick={closeMenu}>
            <Image
              src={lettersImg}
              alt="El Gran Taco"
              width={180}
              height={70}
              className="h-14 w-auto object-contain md:h-16"
              style={{ width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <motion.nav
            initial={false}
            animate={{
              backgroundColor: scrolled ? 'rgba(26,19,16,0.92)' : 'rgba(26,19,16,0)',
              boxShadow:       scrolled ? '0 10px 30px -12px rgba(26,19,16,0.5)' : '0 0 0 rgba(0,0,0,0)',
            }}
            className="hidden items-center gap-1 rounded-full px-2 py-1.5 backdrop-blur md:flex"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-5 py-2.5 text-base font-medium text-cream/85 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <a
            href="#cta"
            className="hidden rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.7)] transition-transform hover:scale-105 active:scale-95 md:block"
          >
            Pedir ahora
          </a>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-6 rounded-full bg-cream origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-6 rounded-full bg-cream"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-6 rounded-full bg-cream origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-8 pb-12 pt-28 md:hidden"
          >
            {/* Links */}
            <nav className="flex flex-1 flex-col justify-center gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                  className="border-b border-cream/8 py-5 font-display text-4xl text-cream/85 transition-colors hover:text-red active:text-red"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              href="#cta"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.35, ease: 'easeOut' }}
              className="mt-8 rounded-full bg-red py-4 text-center text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.7)] transition-transform hover:scale-105 active:scale-95"
            >
              Pedir ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function TacoGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 17.5C2 11 6.5 5 12 5s10 6 10 12.5c0 .8-.7 1.5-1.5 1.5h-17C2.7 19 2 18.3 2 17.5Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M6 16.5c1-2 3.5-3 6-3s5 1 6 3"
        stroke="var(--red)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
