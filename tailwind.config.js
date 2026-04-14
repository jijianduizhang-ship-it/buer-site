/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './diary/*.html', './documents/*.html', './skills/*.html'],
  prefix: '',
  important: false,
  theme: {
    extend: {
      colors: {
        dark: { 950: '#030508', 900: '#0a0f14', 800: '#111120', 700: '#1a1a2e' },
        cyan: { primary: '#00E5FF', glow: '#00b8d4' },
        violet: { primary: '#8B5CF6', soft: '#a78bfa' }
      },
      fontFamily: { sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'] },
      animation: {
        'float-v2': 'float-v2 6s ease-in-out infinite',
        'orb-float': 'orb-float 14s ease-in-out infinite',
        'grad-shift': 'grad-shift 5s ease infinite',
        'badge-pulse': 'badge-pulse 3s ease-in-out infinite',
        'scan': 'scan 10s linear infinite',
      },
      keyframes: {
        'float-v2': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'orb-float': { '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.35' }, '30%': { transform: 'translate(25px,-35px) scale(1.08)', opacity: '0.55' }, '60%': { transform: 'translate(-20px,20px) scale(0.95)', opacity: '0.45' } },
        'grad-shift': { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        'badge-pulse': { '0%, 100%': { boxShadow: '0 0 10px rgba(0,229,255,0.08)' }, '50%': { boxShadow: '0 0 22px rgba(0,229,255,0.18), 0 0 40px rgba(0,229,255,0.04)' } },
        'scan': { '0%': { top: '-1px', opacity: '0' }, '5%': { opacity: '1' }, '95%': { opacity: '0.5' }, '100%': { top: '100vh', opacity: '0' } }
      }
    },
  },
  plugins: [],
}
