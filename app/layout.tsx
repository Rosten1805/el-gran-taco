import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Outfit, Geist_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

const kgColdCoffee = localFont({
  src: '../assets/KGColdCoffee.ttf',
  variable: '--font-display',
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'El Gran Taco — Taquería Mexicana Moderna',
  description:
    'Una taquería mexicana moderna. Tacos de autor, ingredientes frescos y una experiencia callejera contemporánea. Una vez pruebas el taco correcto, no hay vuelta atrás.',
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
      className={`${outfit.variable} ${kgColdCoffee.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
