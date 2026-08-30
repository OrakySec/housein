'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Compass, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLeadModal } from '@/context/LeadModalContext'

export function Hero() {
  const { open: openLead } = useLeadModal()
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  // Force play on mobile/safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked or other error - usually fine if muted
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      
      {/* Cinematic Background Video com iluminação oceânica natural */}
      <motion.div className="absolute inset-0 z-0" style={{ y: videoY, scale }}>
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover contrast-[1.05]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Layered Overlays Sofisticados e Arejados */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24 flex flex-col justify-center"
      >
        <div className="max-w-3xl">
          
          {/* Badge Selo de Boutique Litorânea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 md:px-5 py-2.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white shadow-xl mb-8"
          >
            <Sparkles size={14} className="text-brand-marinho-glow" />
            <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              Boutique de Empreendimentos Litorâneos · PE & AL
            </span>
          </motion.div>

          {/* Headline Imponente */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative mb-6"
          >
            <h1
              className="font-serif font-bold text-white leading-[1.08] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5.6vw, 4.6rem)' }}
            >
              A arte de viver e investir nos destinos mais{' '}
              <span className="text-brand-marinho-glow italic font-normal">
                desejados do litoral.
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light"
          >
            Empreendimentos compactos de alto padrão conectando arquitetura autoral, solidez construtiva e máxima rentabilidade em Porto de Galinhas, Tamandaré e Maragogi.
          </motion.p>

          {/* Actions com Cantos Lapidados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/empreendimentos"
              className="inline-flex items-center gap-3 bg-brand-marinho hover:bg-brand-marinho/90 text-white font-sans text-xs font-bold uppercase tracking-[0.16em] px-8 py-4.5 rounded-2xl transition-all shadow-xl shadow-brand-marinho/30 hover:shadow-brand-marinho/50 hover:-translate-y-0.5 group"
            >
              Explorar Empreendimentos
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => openLead()}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white font-sans text-xs font-bold uppercase tracking-[0.16em] px-7 py-4.5 rounded-2xl transition-all hover:-translate-y-0.5"
            >
              <Compass size={15} className="text-brand-marinho-glow" />
              Falar com Consultor
            </button>
          </motion.div>

        </div>
      </motion.div>

      {/* Transição suave e elegante para a próxima seção */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-10" />
    </section>
  )
}
