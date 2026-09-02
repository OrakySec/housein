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

        {/* Bloco com Texto Unificado de Liderança */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50/80 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-14 relative overflow-hidden shadow-xl shadow-slate-100/60"
        >
          {/* Top Bar da Liderança */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200/70 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-marinho animate-pulse" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-brand-marinho">
                Diretoria Executiva & Fundadores
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck size={16} className="text-brand-marinho" />
              <span>+35 Anos de Experiência Somada</span>
            </div>
          </div>

          {/* Narrativa Única e Integrada */}
          <div className="space-y-6">
            <p className="font-sans text-slate-700 text-base md:text-lg leading-relaxed">
              A <strong>HouseIN</strong> consolida a união de mais de 35 anos de experiência somada de seus fundadores: de um lado, a visão estratégica de <strong>Felipe Zaidan</strong> (11+ anos) voltada ao comportamento do investidor contemporâneo, inteligência digital e concepção de produtos imobiliários formatados para alta rentabilidade e locação por temporada; do outro, o rigor técnico e a solidez operacional de <strong>Roberto Padilha</strong> (24+ anos) na construção civil, assegurando excelência executiva, segurança estrutural e cumprimento rigoroso de cronogramas.
            </p>

            <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
              Uma sinergia que integra mercado e engenharia em uma única direção, garantindo projetos sofisticados, rentáveis e seguros nos destinos mais cobiçados do litoral.
            </p>

            {/* Pilares Unificados da Gestão */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
                <Compass size={20} className="text-brand-marinho shrink-0" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-800">
                  Inteligência & Rentabilidade
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
                <Building2 size={20} className="text-brand-marinho shrink-0" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-800">
                  Rigor Técnico Construtivo
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm sm:col-span-2 md:col-span-1">
                <CheckCircle2 size={20} className="text-brand-marinho shrink-0" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-800">
                  Segurança & Pontualidade
                </span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
