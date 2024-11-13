import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'travel':"url('/travel page.svg')",
        'travel-md':"url('/travel page mob.svg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        prime:"var(--Primary)",
        sec:"var(--Secondary)",
        grad1:"var(--Gradient1)",
        grad2:"var(--Gradient2)",
        primetext:"var(--PrimaryText)",
        sectext:"var(--SecondaryText)",
        othertext:"var(--OtherText)"
      },
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.35s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
