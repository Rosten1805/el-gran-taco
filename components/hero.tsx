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

        {/* GIF: absolute, right half, behind text (z-10) */}
        <div className="absolute inset-y-0 left-[40%] right-0 z-10 flex items-center justify-center">
          <GifScrubber scrollYProgress={scrollYProgress} reduce={!!reduce} />
        </div>

        {/* TEXT: normal flow, z-20 — solapa el GIF */}
        <div className="relative z-20 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24">
          <motion.div
            className="flex max-w-[58%] flex-col"
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
              className="font-display text-[clamp(4.5rem,8vw,9rem)] leading-[0.88] tracking-tight text-cream"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7, ease: 'easeOut' }}
              className="mt-7 max-w-[32ch] text-lg leading-relaxed text-cream/80 md:text-xl"
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
              className="mt-12 flex items-center gap-6"
            >
              <Stat value="+8k"  label="tacos por semana" />
              <div className="h-8 w-px bg-cream/15" aria-hidden />
              <Stat value="3"    label="locales España" />
              <div className="h-8 w-px bg-cream/15" aria-hidden />
              <Stat value="★ 4.9" label="en Google" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint — Hot Line */}
        <motion.div
          style={reduce ? undefined : { opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            {/* "SCROLL" con reveal de izquierda a derecha y guiones laterales */}
            <div className="flex items-center gap-2.5">
              <motion.div
                className="h-px w-4 bg-pink"
                style={{ transformOrigin: 'right' }}
                animate={reduce ? {} : { scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />

              <div className="relative overflow-hidden">
                {/* Capa fantasma (texto apagado) */}
                <span className="select-none font-display text-[11px] uppercase tracking-[0.45em] text-cream/20">
                  SCROLL
                </span>
                {/* Capa iluminada que se revela con clip-path */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  animate={reduce ? {} : {
                    clipPath: [
                      'inset(0% 100% 0% 0%)',
                      'inset(0% 0% 0% 0%)',
                      'inset(0% 0% 0% 100%)',
                    ],
                  }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: [0.4, 0, 0.2, 1], times: [0, 0.45, 1] }}
                >
                  <span className="select-none font-display text-[11px] uppercase tracking-[0.45em] text-cream">
                    SCROLL
                  </span>
                </motion.div>
              </div>

              <motion.div
                className="h-px w-4 bg-pink"
                style={{ transformOrigin: 'left' }}
                animate={reduce ? {} : { scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
            </div>

            {/* Barra vertical con salsa roja cayendo */}
            <div className="relative h-12 w-[2px] overflow-hidden rounded-full bg-cream/10">
              <motion.div
                className="absolute inset-x-0 h-full rounded-full"
                style={{ background: 'linear-gradient(to bottom, #ff3131, #ff8e8e)' }}
                animate={reduce ? {} : { y: ['-100%', '0%', '100%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
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
        className="h-auto max-h-[95vh] w-auto max-w-full transition-opacity duration-700"
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
