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

        {/* Cards Executivos dos Fundadores (Lado a Lado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Fundador 1: Felipe Zaidan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-lg shadow-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-marinho/10 border border-brand-marinho/20 flex items-center justify-center text-brand-marinho">
                <Compass size={22} />
              </div>

              <div>
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-brand-marinho block mb-1">
                  11+ Anos no Mercado Imobiliário & Digital
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-3xl mb-1">
                  Felipe Zaidan
                </h3>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Publicitário · Estratégia Comercial & Produto
                </p>
              </div>

              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                Traz o olhar atento para o comportamento do investidor contemporâneo, a estratégia digital e a concepção de produtos imobiliários que atendem à nova dinâmica de consumo e locação por temporada.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-brand-marinho text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>Inteligência de Mercado & Rentabilidade</span>
            </div>
          </motion.div>

          {/* Fundador 2: Roberto Padilha */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-lg shadow-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-marinho/10 border border-brand-marinho/20 flex items-center justify-center text-brand-marinho">
                <Building2 size={22} />
              </div>

              <div>
                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-brand-marinho block mb-1">
                  24+ Anos na Construção Civil
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-3xl mb-1">
                  Roberto Padilha
                </h3>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Administrador · Engenharia & Operações
                </p>
              </div>

              <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
                Garante a solidez operacional, rigor técnico e excelência em cada detalhe de obra. Com ampla bagagem executiva na construção civil, assegura entregas impecáveis e cumprimento rigoroso de cronogramas.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-brand-marinho text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 size={16} />
              <span>Solidez Operacional & Rigor Construtivo</span>
            </div>
          </motion.div>

        </div>

        {/* Faixa de Síntese Institucional */}
        <div className="bg-gradient-to-r from-brand-marinho/10 via-teal-50 to-brand-marinho/5 border border-brand-marinho/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-slate-900 text-xl md:text-2xl">
              Mais de 35 anos de experiência somada no setor.
            </h4>
            <p className="font-sans text-slate-600 text-sm">
              Segurança jurídica, solidez financeira e inteligência construtiva para o seu patrimônio.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-marinho font-sans text-xs font-black uppercase tracking-widest bg-white px-6 py-3.5 rounded-full shadow-sm shrink-0">
            <ShieldCheck size={18} />
            <span>Padrão HouseIN</span>
          </div>
        </div>

      </div>
    </section>
  )
}
