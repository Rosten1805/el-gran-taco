import Image from 'next/image'
import footerLogoImg from '../assets/footer-logotype.png'

const navLinks = [
  { label: 'Menú',         href: '#tacos' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Locales',      href: '#locales' },
  { label: 'Opiniones',    href: '#opiniones' },
  { label: 'Reservar',     href: '#cta' },
  { label: 'Inicio',       href: '#top' },
]

const locales = [
  { ciudad: 'Madrid',   horario: '12:00 — 02:00' },
  { ciudad: 'Murcia',   horario: '13:00 — 00:00' },
  { ciudad: 'Benidorm', horario: '13:00 — 01:00' },
]

const social = [
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: 'TikTok',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.18 8.18 0 004.79 1.53V7.04a4.85 4.85 0 01-1.02-.35z"/></svg>,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>,
  },
  {
    label: 'YouTube',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
]

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">

      {/* Texto decorativo de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-12 select-none overflow-hidden"
      >
        <p className="whitespace-nowrap font-display text-[18vw] leading-none text-cream/[0.03] tracking-tight">
          EL GRAN TACO
        </p>
      </div>

      {/* Cuerpo principal */}
      <div className="relative px-8 pb-16 pt-20 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[auto_1fr_1fr_1fr]">

          {/* Columna 1 — Logo + tagline + redes */}
          <div className="flex flex-col gap-6">
            <a href="#top" className="inline-block">
              <Image
                src={footerLogoImg}
                alt="El Gran Taco"
                width={320}
                height={320}
                className="h-36 w-auto"
                style={{ width: 'auto' }}
              />
            </a>
            <p className="max-w-[22ch] text-sm leading-relaxed text-cream/45">
              Taquería mexicana moderna.<br />Sabor de calle, alma de autor.
            </p>

            {/* Iconos sociales */}
            <div className="flex flex-wrap gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/45 transition-all duration-200 hover:border-red hover:text-red hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="md:pl-8 lg:pl-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/30">
              Navegación
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-cream/60 transition-colors hover:text-red"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Locales */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/30">
              Locales
            </p>
            <ul className="flex flex-col gap-5">
              {locales.map((l) => (
                <li key={l.ciudad}>
                  <a
                    href="#locales"
                    className="group block transition-colors"
                  >
                    <span className="block text-sm font-semibold text-cream/80 transition-colors group-hover:text-red">
                      {l.ciudad}
                    </span>
                    <span className="text-xs text-cream/35">{l.horario}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/30">
              Contacto
            </p>
            <ul className="flex flex-col gap-5">
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-cream/30">Teléfono</span>
                <a href="tel:+34900000000" className="mt-1 block text-sm font-medium text-cream/70 transition-colors hover:text-red">
                  +34 900 000 000
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-cream/30">Email</span>
                <a href="mailto:hola@elgrantaco.es" className="mt-1 block text-sm font-medium text-cream/70 transition-colors hover:text-red">
                  hola@elgrantaco.es
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-cream/30">Pedidos</span>
                <a href="#cta" className="mt-1 inline-block rounded-full bg-red px-5 py-2 text-xs font-semibold text-cream transition-transform hover:scale-105 active:scale-95">
                  Pedir ahora →
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Barra de créditos */}
      <div className="relative border-t border-cream/8 px-8 py-5 md:px-16 lg:px-24">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} El Gran Taco. Hecho con sabor en España.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-cream/40">
              Diseño y desarrollo por{' '}
              <a
                href="https://cristinagomez-limon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red transition-colors hover:text-pink"
              >
                Cristina Cañadas Gómez — Limón
              </a>
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/cristina-gomez-limon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Cristina"
                className="text-red transition-colors hover:text-pink"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://github.com/Rosten1805"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Cristina"
                className="text-red transition-colors hover:text-pink"
              >
                <IconGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
