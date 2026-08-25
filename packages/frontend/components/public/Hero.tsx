'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useLeadModal } from '@/context/LeadModalContext'
import type { Empreendimento } from '@/types'

const locations = [
  { city: 'Porto de Galinhas', state: 'PE' },
  { city: 'Maragogi', state: 'AL' },
]

interface HeroProps {
  destaque?: Empreendimento | null
}

export function Hero({ destaque }: HeroProps) {
  const { open: openLead } = useLeadModal()
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  // Force play on mobile/safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked or other error - usually fine if muted
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-brand-dark">
      
      {/* Cinematic Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY, scale }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 w-full pt-36 pb-20"
      >
        <div className="max-w-4xl">
          {/* Location Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2">
              <MapPin size={12} className="text-brand-marinho" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Porto de Galinhas, PE
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2">
              <MapPin size={12} className="text-brand-marinho" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Tamandaré, PE
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2">
              <MapPin size={12} className="text-brand-marinho" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Maragogi, AL
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="relative mb-6">
            <h1
              className="font-serif font-bold text-white leading-[1.05] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)' }}
            >
              Empreendimentos compactos nos litorais que{' '}
              <em className="not-italic text-brand-marinho">mais valorizam o Brasil.</em>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="font-sans text-base md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
            Solidez, visão e inteligência imobiliária conectando arquitetura de alto padrão à máxima rentabilidade no litoral.
          </p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="/empreendimentos"
              className="shimmer-button bg-brand-marinho text-white font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 md:py-5 rounded-full hover:bg-brand-marinho/90 transition-all flex items-center gap-3 shadow-xl shadow-brand-marinho/30 hover:scale-105 active:scale-95 group"
            >
              Conheça nossos projetos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => openLead()}
              className="flex items-center gap-3.5 group text-white/90 hover:text-white transition-colors"
            >
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-brand-marinho group-hover:scale-110 group-hover:bg-brand-marinho/20">
                <Play size={13} className="fill-white translate-x-0.5" />
              </div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest">Falar com especialista</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Founding Credibility Bar */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center text-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-marinho animate-pulse shrink-0" />
              <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Alto Padrão no Litoral
              </span>
            </div>
            
            <div className="flex items-center justify-center">
              <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                Felipe Zaidan & Roberto Padilha
              </span>
            </div>

            <div className="flex items-center justify-center">
              <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                Inteligência Construtiva
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                100% Foco no Litoral
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-marinho shrink-0" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-28 right-12 z-10 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="h-20 w-px bg-gradient-to-b from-brand-marinho-glow to-transparent" />
        <span
          className="font-sans text-[8px] text-brand-marinho-glow font-bold uppercase tracking-[0.4em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Blueprint */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none z-[1]" />
    </section>
  )
}
