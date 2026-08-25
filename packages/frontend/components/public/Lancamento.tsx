'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Maximize2, BedDouble, Car, ArrowRight, TrendingUp, Bath, ShowerHead } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLeadModal } from '@/context/LeadModalContext'
import type { Empreendimento } from '@/types'

function ProgressBar({ progresso }: { progresso: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-end mb-3">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-brand-marinho">Evolução da Obra</span>
        <span className="font-serif text-xl font-bold text-brand-marinho">{progresso}%</span>
      </div>
      <div className="h-1.5 bg-brand-navy/5 overflow-hidden rounded-full relative">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-marinho to-brand-marinho-glow rounded-full relative z-10"
          initial={{ width: 0 }}
          animate={inView ? { width: `${progresso}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  )
}

function formatPreco(valor?: number | string | null) {
  const n = Number(valor)
  if (!n) return null
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(n)
}

function faixa(min?: number, max?: number, suffix = '') {
  if (min == null && max == null) return null
  if (min != null && max != null && min !== max) return `${min} - ${max}${suffix}`
  return `${min ?? max}${suffix}`
}

export function Lancamento({ empreendimento: e }: { empreendimento: Empreendimento }) {
  const { open: openLead } = useLeadModal()
  const foto = e.fotos?.[0]

  const area      = faixa(e.area_min, e.area_max, ' m²')
  const quartos   = faixa(e.quartos_min, e.quartos_max)
  const suites    = faixa(e.suites_min, e.suites_max)
  const banheiros = faixa(e.banheiros_min, e.banheiros_max)
  const vagas     = e.vagas_tipo === 'ROTATIVA' ? 'Rotativa' : faixa(e.vagas_min, e.vagas_max)
  const preco     = formatPreco(e.preco_min)

  const specs = [
    { icon: Maximize2,  label: 'Área',      value: area },
    { icon: BedDouble,  label: 'Quartos',   value: quartos },
    { icon: Bath,       label: 'Suítes',    value: suites },
    { icon: ShowerHead, label: 'Banheiros', value: banheiros },
    { icon: Car,        label: 'Vagas',     value: vagas },
  ].filter(s => s.value)

  return (
    <section className="bg-gradient-to-b from-white via-white to-slate-50/50 py-24 lg:py-40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Visual Side (6/12) */}
          <div className="lg:col-span-6 relative group/visual">
            <motion.div
              initial={{ opacity: 0, scale: 1.05, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(10,17,40,0.15)] bg-brand-navy/5 border border-brand-navy/5"
            >
              {foto ? (
                <Image
                  src={foto}
                  alt={e.nome}
                  fill
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-[2s] group-hover/visual:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-marinho flex items-center justify-center p-10">
                  <span className="font-serif text-white/10 text-3xl font-bold uppercase tracking-widest text-center">{e.nome}</span>
                </div>
              )}

              {/* Glass overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent opacity-60 transition-opacity duration-700 group-hover/visual:opacity-80" />

              {/* Pill Badge — Lançamento */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-8 left-8 bg-brand-marinho-glow text-brand-navy font-sans text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full shadow-2xl"
              >
                ✦ Lançamento
              </motion.div>

            </motion.div>
          </div>

          {/* Content Side (6/12) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <div>
                <span className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-brand-marinho block mb-6 border-l-4 border-brand-marinho pl-4 leading-none">
                  Lançamento em Destaque
                </span>

                <h2 className="font-serif font-bold text-slate-900 leading-[1.1] mb-4 tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {e.nome}
                </h2>

                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-brand-marinho animate-pulse" />
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em]">{e.cidade}{e.estado ? `, ${e.estado}` : ''}</span>
                </div>
              </div>

              {/* Descrição breve */}
              {e.descricao_breve && (
                <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed font-normal">
                  {e.descricao_breve}
                </p>
              )}

              {/* Specs — Rounded Pills */}
              <div className="flex flex-wrap gap-2.5">
                {specs.map((spec, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 + (i * 0.08) }}
                    className="flex items-center gap-2.5 bg-slate-100/80 border border-slate-200/80 rounded-full px-5 py-3 hover:bg-brand-marinho group cursor-default transition-all duration-300 shadow-sm"
                  >
                    <spec.icon size={15} className="text-brand-marinho group-hover:text-white transition-colors" />
                    <span className="font-sans text-[10px] font-bold text-slate-800 group-hover:text-white transition-colors uppercase tracking-wider">
                      {spec.label}: {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Preço se houver */}
              {preco && (
                <div className="flex flex-col gap-1 pt-2">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Unidades a partir de</span>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-slate-900">{preco}</p>
                </div>
              )}

              {/* Progress */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-[2rem] p-6 md:p-8 shadow-sm">
                <ProgressBar progresso={e.progresso} />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => openLead(e.nome)}
                  className="shimmer-button flex-[1.4] bg-brand-marinho text-white font-sans font-bold text-xs uppercase tracking-[0.2em] py-4 md:py-5 rounded-full hover:bg-brand-marinho/90 transition-all shadow-xl shadow-brand-marinho/25 hover:scale-105 active:scale-95"
                >
                  Receber Apresentação
                </button>
                <Link
                  href="/empreendimentos"
                  className="flex-1 flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-800 font-sans text-xs font-bold uppercase tracking-[0.2em] py-4 md:py-5 rounded-full hover:border-brand-marinho hover:text-brand-marinho transition-all"
                >
                  Ver Todos
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
