'use client'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react'
import { SplitText } from './split-text'

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduce     = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[200vh]"
      aria-label="Inicio"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <BackdropPattern />

        {/* GIF: móvil → mitad inferior | desktop → mitad derecha */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-[68vh] md:inset-y-0 md:left-[40%] md:h-full">
          <GifScrubber scrollYProgress={scrollYProgress} reduce={!!reduce} />
        </div>

        {/* TEXT: móvil → parte superior | desktop → centrado izquierda */}
        <div className="relative z-20 flex h-full flex-col justify-start pt-40 px-6 md:justify-center md:pt-0 md:px-16 lg:px-24">
          <motion.div
            className="flex max-w-full flex-col md:max-w-[58%]"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
              className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-red"
            >
              <span className="h-px w-8 bg-red" aria-hidden />
              Taquería mexicana moderna
            </motion.span>

            {/* Headline – grande, blanco */}
            <SplitText
              as="h1"
              text="El Gran Taco"
              mode="chars"
              delay={0.45}
              stagger={0.04}
              className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[1.1] tracking-tight text-cream"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7, ease: 'easeOut' }}
              className="mt-4 max-w-[32ch] line-clamp-2 text-base leading-relaxed text-cream/80 md:mt-7 md:line-clamp-none md:text-xl"
            >
              Sabor de calle, alma de autor. Ingredientes frescos, recetas de
              siempre y el taco que cambia todo lo demás.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.65, duration: 0.6, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#tacos"
                className="rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_8px_24px_-8px_rgba(255,49,49,0.55)] transition-transform hover:scale-105 active:scale-95"
              >
                Ver el menú
              </a>
              <a
                href="#locales"
                className="rounded-full border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream/80 backdrop-blur transition-colors hover:border-cream/40 hover:text-cream"
              >
                Nuestros locales
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.05, duration: 0.9 }}
              className="mt-12 hidden items-center gap-6 md:flex"
            >
              <Stat value="+8k"  label="tacos por semana" />
              <div className="h-8 w-px bg-cream/15" aria-hidden />
              <Stat value="3"    label="locales España" />
              <div className="h-8 w-px bg-cream/15" aria-hidden />
              <Stat value="★ 4.9" label="en Google" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={reduce ? undefined : { opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="select-none font-sans text-[9px] uppercase tracking-[0.5em] text-cream/35">
              scroll
            </span>
            <div className="flex flex-col items-center gap-[5px]">
              {([0, 0.22, 0.44] as const).map((delay, i) => (
                <motion.svg
                  key={i}
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  className="text-cream"
                  animate={reduce ? {} : { opacity: [0.12, 0.75, 0.12] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay, ease: 'easeInOut' }}
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// GifScrubber
// ─────────────────────────────────────────────────────────────────────────────

type GifScrubberProps = {
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  reduce: boolean
}

function GifScrubber({ scrollYProgress, reduce }: GifScrubberProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const framesRef  = useRef<ImageBitmap[]>([])
  const [loaded,  setLoaded]  = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (reduce) return
    let cancelled = false

    async function decode() {
      const { parseGIF, decompressFrames } = await import('gifuct-js')

      const res    = await fetch('/taco-gif-remove-background.gif')
      const buffer = await res.arrayBuffer()
      if (cancelled) return

      const gif = parseGIF(buffer)
      const raw = decompressFrames(gif, true)
      if (cancelled || raw.length === 0) return

      const W = gif.lsd.width
      const H = gif.lsd.height

      const offscreen = document.createElement('canvas')
      offscreen.width  = W
      offscreen.height = H
      const ctx = offscreen.getContext('2d')!

      const bitmaps: ImageBitmap[] = []

      for (const frame of raw) {
        const patch = new ImageData(
          new Uint8ClampedArray(frame.patch),
          frame.dims.width,
          frame.dims.height,
        )
        ctx.putImageData(patch, frame.dims.left, frame.dims.top)
        // eslint-disable-next-line no-await-in-loop
        bitmaps.push(await createImageBitmap(offscreen))
        if (frame.disposalType === 2) ctx.clearRect(0, 0, W, H)
      }

      if (cancelled) { bitmaps.forEach(b => b.close()); return }

      const canvas = canvasRef.current
      if (canvas) {
        canvas.width  = W
        canvas.height = H
        const drawCtx = canvas.getContext('2d')!
        drawCtx.clearRect(0, 0, W, H)
        drawCtx.drawImage(bitmaps[0], 0, 0)
      }

      framesRef.current = bitmaps
      setLoading(false)
      setLoaded(true)
    }

    decode()
    return () => {
      cancelled = true
      framesRef.current.forEach(b => b.close())
      framesRef.current = []
    }
  }, [reduce])

  useEffect(() => {
    if (!loaded || reduce) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let lastIdx = -1
    let rafId: number

    const tick = () => {
      const frames = framesRef.current
      if (frames.length > 0) {
        const idx = Math.min(
          Math.floor(scrollYProgress.get() * frames.length),
          frames.length - 1,
        )
        if (idx !== lastIdx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(frames[idx], 0, 0)
          lastIdx = idx
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [loaded, scrollYProgress, reduce])

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {loading && (
        <div className="absolute size-40 animate-pulse rounded-full bg-cream/5" />
      )}
      <canvas
        ref={canvasRef}
        aria-label="Taco desarmándose en ingredientes"
        className="h-auto w-full max-h-[95vh] md:w-auto md:max-w-full transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl leading-none text-cream">{value}</p>
      <p className="mt-1 text-sm font-medium text-cream/65">{label}</p>
    </div>
  )
}

function BackdropPattern() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute -left-24 top-1/3 size-80 rounded-full bg-red/20 blur-3xl" />
      <div className="absolute right-1/4 top-1/4 size-96 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute -right-20 top-1/3 size-80 rounded-full bg-red/20 blur-3xl" />
    </div>
  )
}
