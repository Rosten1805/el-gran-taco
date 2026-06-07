import Image from 'next/image'

const navLinks = [
  { label: 'Menú',        href: '#tacos' },
  { label: 'Ingredientes', href: '#ingredientes' },
  { label: 'Locales',     href: '#locales' },
  { label: 'Opiniones',   href: '#opiniones' },
  { label: 'Reservar',    href: '#cta' },
  { label: 'Inicio',      href: '#top' },
]

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok',    href: '#' },
]

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-cream text-ink">
      {/* Cuerpo principal */}
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#top">
              <Image
                src="/footer-logotype.png"
                alt="El Gran Taco"
                width={320}
                height={320}
                className="h-40 w-auto"
                style={{ width: 'auto' }}
              />
            </a>
            <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-ink/55">
              Taquería mexicana moderna. Sabor de calle, alma de autor.
            </p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 sm:grid-cols-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/65 transition-colors hover:text-red"
              >
                {l.label}
              </a>
            ))}
            {social.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-ink/65 transition-colors hover:text-red"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Barra de créditos */}
      <div className="border-t border-ink/10 px-8 py-6 md:px-16 lg:px-24">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

          <p className="text-sm text-ink/45">
            © {new Date().getFullYear()} El Gran Taco. Hecho con sabor en España.
          </p>

          {/* Créditos + iconos */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-ink/55">
              Hecho por{' '}
              <a
                href="https://cristinagomez-limon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink transition-colors hover:text-red"
              >
                Cristina Cañadas Gómez — Limón
              </a>
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/cristina-gomez-limon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Cristina"
                className="text-ink/40 transition-colors hover:text-red"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://github.com/Rosten1805"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Cristina"
                className="text-ink/40 transition-colors hover:text-red"
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
