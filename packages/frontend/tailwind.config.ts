import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:          '#111827',        // Grafite Neutro Profundo (sem azul escuro)
          marinho:       '#009AA6',        // Turquesa Tropical HouseIN (Primary)
          'marinho-glow':'#00C8D6',        // Ciano / Aqua Vibrante
          teal:          '#009AA6',        // Turquesa Principal
          'teal-light':  '#E0F7F9',        // Fundo suave turquesa
          yellow:        '#E5A93C',        // Amarelo Sol / Dourado Tropical
          silver:        '#94A3B8',        // Prata / Slate
          offwhite:      '#F8FAFC',        // Fundo neutro
          borda:         'rgba(255, 255, 255, 0.12)',
          texto:         '#1E293B',        // Texto principal grafite
          'texto-light': '#64748B',        // Texto secundário
          dark:          '#0B0F17',        // Fundo Carvão Neutro Profundo (sem azul)
          // Aliases legados compatíveis
          azul:          '#111827',
          'azul-sec':    '#009AA6',
          gelo:          '#F0FDFE',
          dourado:       '#E5A93C',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-outfit)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'reveal': 'reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
