'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Building2, Compass, CheckCircle2 } from 'lucide-react'

export function QuemSomos() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section ref={containerRef} id="empresa" className="bg-white overflow-hidden relative py-24 lg:py-36 scroll-mt-10 border-t border-slate-100">
      {/* Invisible anchor */}
      <div id="quem-somos" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header institucional */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 border-l-2 border-brand-marinho pl-4 mb-4"
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-marinho">
              Quem Somos · Liderança
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif font-bold text-slate-900 leading-[1.1] text-3xl md:text-5xl"
          >
            A união entre visão de mercado e{' '}
            <em className="not-italic text-brand-marinho">precisão construtiva.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-base md:text-lg text-slate-600 leading-relaxed mt-6"
          >
            A <strong>HouseIN Incorporações</strong> nasceu com a missão de transformar o investimento imobiliário no litoral, aliando arquitetura contemporânea, respeito ao entorno litorâneo e alta performance financeira.
          </motion.p>
        </div>

        {/* Bloco Unificado de Liderança e Governança */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50/80 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-14 relative overflow-hidden shadow-xl shadow-slate-100/60"
        >
          {/* Top Bar da Liderança Integrada */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200/70 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-marinho animate-pulse" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-brand-marinho">
                Diretoria Executiva · Experiência Somada de +35 Anos
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck size={16} className="text-brand-marinho" />
              <span>Governança & Rigor Construtivo</span>
            </div>
          </div>

          {/* Grid integrado dos dois fundadores com linha divisória central */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
            
            {/* Linha divisória vertical sutil no desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2" />

            {/* Fundador 1: Felipe Zaidan */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-brand-marinho bg-brand-marinho/10 px-3.5 py-1.5 rounded-lg">
                  11+ Anos no Mercado Imobiliário & Digital
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-marinho shadow-sm">
                  <Compass size={20} />
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-slate-900 text-2xl md:text-3xl">
                  Felipe Zaidan
                </h3>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Publicitário · Estratégia Comercial & Produto
                </p>
              </div>

              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                Traz o olhar atento para o comportamento do investidor contemporâneo, a estratégia digital e a concepção de produtos imobiliários que atendem à nova dinâmica de consumo e locação por temporada.
              </p>

              <div className="flex items-center gap-2 text-slate-700 text-xs font-bold uppercase tracking-wider pt-2">
                <CheckCircle2 size={16} className="text-brand-marinho" />
                <span>Inteligência de Mercado & Rentabilidade</span>
              </div>
            </div>

            {/* Fundador 2: Roberto Padilha */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-brand-marinho bg-brand-marinho/10 px-3.5 py-1.5 rounded-lg">
                  24+ Anos na Construção Civil
                </span>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-marinho shadow-sm">
                  <Building2 size={20} />
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-slate-900 text-2xl md:text-3xl">
                  Roberto Padilha
                </h3>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Administrador · Engenharia & Operações
                </p>
              </div>

              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                Garante a solidez operacional, rigor técnico e excelência em cada detalhe de obra. Com ampla bagagem executiva na construção civil, assegura entregas impecáveis e cumprimento rigoroso de cronogramas.
              </p>

              <div className="flex items-center gap-2 text-slate-700 text-xs font-bold uppercase tracking-wider pt-2">
                <CheckCircle2 size={16} className="text-brand-marinho" />
                <span>Solidez Operacional & Rigor Construtivo</span>
              </div>
            </div>

          </div>

          {/* Rodapé unificado de síntese estratégica */}
          <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-sans text-sm text-slate-600">
              <strong className="text-slate-900">Sinergia estratégica:</strong> A união da inteligência de produto e da engenharia para proteger e rentabilizar o seu capital no litoral.
            </p>
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-brand-marinho shrink-0">
              Padrão HouseIN Incorporações
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
