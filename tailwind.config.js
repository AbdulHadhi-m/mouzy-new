/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#106829', // Authentic organic green
            light: '#1b8a3e',
            dark: '#083c16',
            deep: '#05220c',    // Very deep forest green for dark panels
            black: '#031106',   // Soft rich black with green tint
          },
          yellow: {
            DEFAULT: '#FFF200', // Signature vibrant yellow
            light: '#fffa65',
            dark: '#c9c000',
            warm: '#f5e025',    // Rich warm yellow/gold
          },
          cream: {
            DEFAULT: '#fffbe6', // Soft light cream
            light: '#fffff0',
            dark: '#f6f2da',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        accent: ['"Kaushan Script"', 'cursive'],
        obelix: ['ObelixPro', 'sans-serif'],
        palpiyo: ['Palpiyo', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'loader-progress': 'loaderProgress 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        loaderProgress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
