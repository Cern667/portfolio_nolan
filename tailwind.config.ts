import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Noir - Base (Kali Linux style)
          black: "#0a0a0a",
          darkest: "#050505",
          darker: "#0f0f0f",
          dark: "#1a1a1a",

          // Gris - Éléments
          gray: "#2a2a2a",
          grayMedium: "#363636",
          grayLight: "#3a3a3a",
          grayLighter: "#4a4a4a",
          grayBorder: "#2d2d2d",

          // Rouge Kali - Accents principaux (couleur emblématique de Kali Linux)
          kaliRed: "#F11C1C",
          red: "#F11C1C",
          redDark: "#C01010",
          redDarker: "#8B0000",
          redMuted: "#FF3333",
          redGlow: "rgba(241, 28, 28, 0.3)",

          // Bleu - Pour certains accents (alternative au rouge)
          blue: "#367BF0",
          blueRoyal: "#2D5FBF",
          blueDark: "#1E4A9F",

          // Vert - Succès/Terminal
          green: "#00ff41",
          greenDark: "#00cc33",
          greenMuted: "#39ff14",
          greenGlow: "rgba(0, 255, 65, 0.3)",

          // Cyan - Informations
          cyan: "#00d9ff",
          cyanDark: "#00b8d4",

          // Orange - Warnings
          orange: "#ff8c00",
          orangeDark: "#cc7000",

          // Blanc/Texte
          white: "#ffffff",
          whiteMuted: "#e0e0e0",
          textGray: "#b0b0b0",
          textDark: "#808080",

          // Bordeaux - Alternative élégante
          burgundy: "#8B0000",
          burgundyDark: "#660000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        'glow-kali': '0 0 20px rgba(241, 28, 28, 0.4), 0 0 40px rgba(241, 28, 28, 0.2)',
        'glow-red': '0 0 20px rgba(241, 28, 28, 0.4)',
        'glow-red-strong': '0 0 30px rgba(241, 28, 28, 0.6), 0 0 60px rgba(241, 28, 28, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.3)',
        'inner-glow-red': 'inset 0 0 20px rgba(241, 28, 28, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(241, 28, 28, 0.4), 0 0 40px rgba(241, 28, 28, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(241, 28, 28, 0.6), 0 0 60px rgba(241, 28, 28, 0.3)',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
