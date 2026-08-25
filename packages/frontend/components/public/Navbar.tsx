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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          scrolled ? 'transform-none' : 'md:py-8'
        }`}
      >
        <div className={`transition-all duration-500 ${
          scrolled 
            ? 'glass-navbar rounded-full px-6 shadow-2xl border border-white/20 w-[92%] mx-auto' 
            : 'max-w-7xl mx-auto bg-transparent px-6 lg:px-12 w-full'
        }`}>
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo Group */}
            <Link href="/" className={`relative flex items-center group transition-all duration-500 ${scrolled ? 'ml-2' : 'ml-0'}`}>
              <Image 
                src={scrolled ? '/logo-transparent.png?v=3' : '/logo-white.png?v=3'} 
                alt="HouseIN Incorporações" 
                width={220}
                height={70}
                priority
                className={`transition-all duration-500 object-contain ${
                  scrolled 
                    ? 'w-[130px] md:w-[155px] h-10 md:h-12' 
                    : 'w-[160px] md:w-[190px] h-12 md:h-14'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                link.isContact ? (
                  <button
                    key={link.label}
                    onClick={() => openLead()}
                    className={`relative font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 group ${
                      scrolled ? 'text-slate-800 hover:text-brand-marinho' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-brand-marinho`} />
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-sans text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 group ${
                      scrolled ? 'text-slate-800 hover:text-brand-marinho' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-brand-marinho`} />
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Group */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => openLead()}
                className={`shimmer-button hidden lg:flex items-center justify-center font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-full transition-all duration-300 shadow-md ${
                  scrolled
                    ? 'bg-brand-marinho text-white hover:bg-brand-marinho/90 shadow-brand-marinho/25'
                    : 'bg-brand-marinho text-white hover:bg-brand-marinho/90 shadow-brand-marinho/30'
                }`}
              >
                Conheça nossos projetos
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-brand-marinho text-white' : 'bg-white/10 text-white backdrop-blur-md'
                }`}
                aria-label="Menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
