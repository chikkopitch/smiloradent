import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFBF7", // Soft premium background per taste-skill
        foreground: "#1C2B35", // Dark navy text
        text: "#1C2B35", // Alias for foreground to fix invisible text
        primary: {
          DEFAULT: "#1A6B8A",
          light: "#288eb3",
          dark: "#12495e",
        },
        secondary: {
          DEFAULT: "#E8F4F8",
          dark: "#c3e0ec",
        },
        accent: {
          DEFAULT: "#2ECAD5",
          light: "#5be0e9",
        },
        success: "#4CAF8C",
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.8)",
          glass: "rgba(255, 255, 255, 0.6)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(26, 107, 138, 0.07)',
        'glass-hover': '0 12px 48px 0 rgba(26, 107, 138, 0.12)',
        'premium': '0 4px 24px -4px rgba(28, 43, 53, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem', // Soft-skill premium radius
      },
      letterSpacing: {
        'tighter': '-0.035em', // Premium typography tightness
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-5px)' },
          '40%, 80%': { transform: 'translateX(5px)' },
        }
      },
      animation: {
        shake: 'shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
      }
    },
  },
  plugins: [],
};
export default config;
