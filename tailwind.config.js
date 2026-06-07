/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          dark: "#131313",
          light: "#FFFFFF",
          gray: {
            dark: "#6A6A6A",
            medium: "#8C8C8C",
            light: "#989898",
            divider: "#D8D3D3"
          }
        },
        brand: {
          purple: "#4E37FF",
          purpleMuted: "#5D5DFF",
          green: "#1DCC5D",
          blue: "#3E66DF"
        }
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        // Brutalist Condensed Fallback
        national: ["'National 2 Condensed'", "Impact", "'Arial Narrow'", "sans-serif"],
        // UI & body copy fallbacks
        helvetica: ["'Helvetica Now Text'", "'Helvetica Neue'", "Helvetica", "Arial", "sans-serif"],
        sfpro: ["'SF Pro'", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      letterSpacing: {
        'brutal-tight': '-3.38px',
        'brutal-mega': '-14px',
        'logo-tight': '-1.40px',
        'logo-reg-tight': '-2.45px',
        'nav-tight': '-0.72px'
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(ellipse at center, rgba(200,200,200,1) 0%, rgba(255,255,255,1) 100%)"
      }
    },
  },
  plugins: [],
}
