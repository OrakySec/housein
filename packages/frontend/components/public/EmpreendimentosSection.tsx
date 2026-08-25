'use client'
import { useState, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Reveal, RevealText } from './RevealText'
import { EmpreendimentoCard } from './EmpreendimentoCard'
import type { Empreendimento } from '@/types'

interface Props {
  empreendimentos: Empreendimento[]
}

const filterOptions = [
  { label: 'Todos os Destinos', value: 'TODOS' },
  { label: 'Porto de Galinhas', value: 'PORTO' },
  { label: 'Tamandaré', value: 'TAMANDARE' },
  { label: 'Maragogi', value: 'MARAGOGI' },
]

export function EmpreendimentosSection({ empreendimentos }: Props) {
  const [selectedFilter, setSelectedFilter] = useState('TODOS')
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  const filtered = useMemo(() => {
    if (selectedFilter === 'TODOS') return empreendimentos
    return empreendimentos.filter(e => {
      const city = (e.cidade || '').toLowerCase()
      if (selectedFilter === 'PORTO') return city.includes('porto')
      if (selectedFilter === 'TAMANDARE') return city.includes('tamandar') || city.includes('carneiros')
      if (selectedFilter === 'MARAGOGI') return city.includes('maragogi')
      return true
    })
  }, [empreendimentos, selectedFilter])

  return (
    <section className="bg-white py-24 lg:py-36 overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header da Vitrine */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <RevealText>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-marinho mb-4 block border-l-2 border-brand-marinho pl-4 leading-none">
                Curadoria de Projetos
              </span>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="font-serif font-bold text-slate-900 leading-[1.1] text-3xl md:text-5xl">
                Portfólio de <em className="not-italic text-brand-marinho">Empreendimentos.</em>
              </h2>
            </RevealText>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-slate-200 text-slate-700 hover:bg-brand-marinho hover:text-white hover:border-brand-marinho transition-all flex items-center justify-center shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-slate-200 text-slate-700 hover:bg-brand-marinho hover:text-white hover:border-brand-marinho transition-all flex items-center justify-center shadow-sm"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Abas de Filtro por Cidade */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedFilter(opt.value)}
              className={`font-sans text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 ${
                selectedFilter === opt.value
                  ? 'bg-brand-marinho text-white shadow-md shadow-brand-marinho/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Cinematic Carousel */}
        <div className="overflow-visible relative" ref={emblaRef}>
          <div className="flex gap-8 pl-1 pb-10">
            {(filtered.length > 0 ? filtered : empreendimentos).map((e, i) => (
              <Reveal 
                key={e.id} 
                delay={0.05 * i} 
                direction="up"
                className="min-w-0 flex-[0_0_88%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.3333%-22px)]"
              >
                <EmpreendimentoCard empreendimento={e} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 flex justify-between items-center border-t border-slate-100 pt-10">
          <p className="font-sans text-xs text-slate-500">
            Mostrando {filtered.length} empreendimento(s) disponíveis para investimento.
          </p>
          
          <Link
            href="/empreendimentos"
            className="group flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-brand-marinho transition-colors"
          >
            Ver Catálogo Completo
            <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-marinho group-hover:text-white group-hover:border-brand-marinho transition-all">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
