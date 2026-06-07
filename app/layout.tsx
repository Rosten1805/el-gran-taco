import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Outfit, Lilita_One, Geist_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const lilita = Lilita_One({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EL GRAN TACO — Taquería Mexicana Moderna',
  description:
    'Una taquería mexicana moderna. Tacos de autor, ingredientes frescos y una experiencia callejera contemporánea. Una vez pruebas el taco correcto, no hay vuelta atrás.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#ff3131',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${lilita.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
