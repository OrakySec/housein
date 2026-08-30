'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'
import { useLeadModal } from '@/context/LeadModalContext'
import { MobileMenu } from './MobileMenu'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Empresa', href: '/#empresa' },
  { label: 'Empreendimentos', href: '/empreendimentos' },
  { label: 'Contato', href: '#contato', isContact: true },
]

export function Navbar() {
  const scrolled = useScrolled(20)
  const [menuOpen, setMenuOpen] = useState(false)
  const { open: openLead } = useLeadModal()

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3.5 md:py-4 shadow-sm' 
            : 'bg-gradient-to-b from-black/70 via-black/25 to-transparent border-b border-white/10 py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between">
          
          {/* Logo Group */}
          <Link href="/" className="relative flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src={scrolled ? '/logo-transparent.png?v=4' : '/logo-white.png?v=4'} 
              alt="HouseIN Incorporações" 
              width={200}
              height={60}
              priority
              className={`transition-all duration-300 object-contain ${
                scrolled 
                  ? 'w-[140px] md:w-[165px] h-9 md:h-11' 
                  : 'w-[155px] md:w-[185px] h-10 md:h-12'
              }`}
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              link.isContact ? (
                <button
                  key={link.label}
                  onClick={() => openLead()}
                  className={`relative font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group py-1 ${
                    scrolled ? 'text-slate-700 hover:text-brand-marinho' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-marinho transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group py-1 ${
                    scrolled ? 'text-slate-700 hover:text-brand-marinho' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-marinho transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* WhatsApp Atendimento Online */}
            <a
              href="https://wa.me/5581984008353"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-sans font-semibold transition-all duration-300 ${
                scrolled
                  ? 'border-slate-200 bg-slate-50/80 text-slate-700 hover:border-brand-marinho/50 hover:bg-slate-100'
                  : 'border-white/15 bg-white/10 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wide">Atendimento Online</span>
            </a>

            {/* Main Action Button */}
            <button
              onClick={() => openLead()}
              className="hidden lg:inline-flex items-center justify-center font-sans text-[11px] font-bold uppercase tracking-[0.16em] px-6 py-3 rounded-2xl bg-brand-marinho text-white hover:bg-brand-marinho/90 transition-all duration-300 shadow-md shadow-brand-marinho/25 hover:shadow-brand-marinho/40 hover:-translate-y-0.5"
            >
              Conheça os Projetos
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2.5 rounded-xl border transition-all duration-300 ${
                scrolled 
                  ? 'bg-slate-100 border-slate-200 text-slate-800' 
                  : 'bg-white/10 border-white/15 text-white backdrop-blur-md'
              }`}
              aria-label="Menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
