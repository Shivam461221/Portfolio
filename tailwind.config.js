/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#080B14",
          elevated: "#0E1424",
          card: "#121A30",
          line: "#1E2740",
        },
        ink: {
          DEFAULT: "#E9ECF6",
          muted: "#8B93AC",
          faint: "#5B6480",
        },
        signal: {
          cyan: "#00E5C7",
          violet: "#7C6FFF",
          amber: "#FFB454",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0,229,199,0.35)",
        "glow-violet": "0 0 40px -8px rgba(124,111,255,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
