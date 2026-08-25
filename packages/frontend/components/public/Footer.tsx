import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, ArrowUpRight, MapPin, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Empresa', href: '/#empresa' },
  { label: 'Empreendimentos', href: '/empreendimentos' },
]

const destinations = [
  { city: 'Porto de Galinhas', desc: 'Litoral Sul · PE' },
  { city: 'Tamandaré', desc: 'Litoral Sul · PE' },
  { city: 'Maragogi', desc: 'Litoral Norte · AL' },
]

export function Footer() {
  return (
    <footer className="bg-white overflow-hidden relative border-t border-slate-200" id="contato">
      {/* Background radial glow & blueprint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-marinho/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-slate-100">

          {/* Col 1: Identity (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105 duration-500">
              <Image 
                src="/logo-transparent.png?v=3" 
                alt="HouseIN Incorporações" 
                width={220}
                height={80}
                className="w-48 md:w-56 h-auto object-contain"
              />
            </Link>
            <div className="space-y-4">
              <h4 className="font-serif italic text-2xl text-slate-900 leading-tight max-w-[280px]">
                A sofisticação ganhando <span className="text-brand-marinho">novos horizontes.</span>
              </h4>
              <p className="font-sans text-[13px] text-slate-600 leading-relaxed max-w-sm font-medium">
                Empreendimentos compactos nos litorais que mais valorizam o Brasil. Inteligência imobiliária, sensibilidade litorânea e alta rentabilidade.
              </p>
            </div>
            {/* Social Glassmorphism */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <a href="https://www.instagram.com/housein.incorporacoes/" target="_blank" rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-marinho hover:text-white hover:border-brand-marinho hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a href="mailto:contato@houseincorporacoes.com.br" 
                  className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-marinho hover:text-white hover:border-brand-marinho hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              
              <a href="https://wa.me/5581984008353" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 w-fit bg-brand-marinho/10 border border-brand-marinho/20 px-6 py-3 rounded-2xl group hover:bg-brand-marinho transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-white/20 transition-all">
                  <MessageCircle size={16} className="text-brand-marinho group-hover:text-white" />
                </div>
                <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 group-hover:text-white">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3/12) */}
          <div className="lg:col-span-3 lg:ml-8">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-8 tracking-wide">Diretório</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-3 group font-sans text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-brand-marinho transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-marinho scale-0 group-hover:scale-100 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Destinations (4/12) */}
          <div className="lg:col-span-4 lg:ml-8">
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-8 tracking-wide">Destinos</h3>
            <div className="space-y-6">
              {destinations.map((dest) => (
                <div key={dest.city} className="group cursor-default">
                  <div className="flex items-center gap-3 mb-1">
                    <MapPin size={14} className="text-brand-marinho" />
                    <span className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-slate-800 transition-colors group-hover:text-brand-marinho">
                      {dest.city}
                    </span>
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-slate-500 pl-6">
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 justify-center md:justify-start">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              © HouseIN Incorporações · Todos os direitos reservados
            </span>
          </div>
          <a 
            href="https://www.instagram.com/oykaromarques.ia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 group relative overflow-hidden px-4 py-2 rounded-xl transition-all duration-300 hover:bg-slate-50"
          >
            <span className="font-serif italic text-xs md:text-sm text-slate-500">Desenvolvido por</span>
            <Image 
              src="/assinatura.png" 
              alt="Assinatura" 
              width={100}
              height={48}
              className="h-8 md:h-10 w-auto object-contain brightness-0 opacity-70 group-hover:opacity-100 transition-opacity" 
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
