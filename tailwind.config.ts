import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        // "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
        xs: "480px",
      },
      fontFamily: {
        overpass: ["var(--font-overpass)", ...fontFamily.sans],
        // sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        sidebar: "hsl(var(--sidebar))",
        logo: "hsl(var(--logo))",
        "form-error": "hsl(var(--form-error))",
        slide: "hsl(201 ,5% ,90%)",
        "auth-bg": "hsl(201 ,50% ,5%)",
        "card-hover": "hsl(201 ,5% ,90%)",
        "card-description": "hsla(201 ,50% ,5%,0.65)",
        "border-auth": "hsl(var(--border-auth))",
        mangadex: "hsl(var(--mangadex))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          bright: "hsl(var(--primary-bright))",
          50: "hsla(201, 90% ,27.5%,0.5)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          footer: "hsl(var(--card-footer))",
          50: "hsla(201, 50%,0%,0.5)",
        },
        hover: {
          DEFAULT: "hsl(var(--hover))",
          foreground: "hsl(var(--hover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "slide-inner": "inset 65vw 0 250px 0 hsla(0,0%,0%,0.9)",
        "slide-inner-sm": "inset 100vw 0 2px 0 hsla(0,0%,0%,0.8)",
        "slide-inner-bg": "inset 0 -100px 250px 0 hsla(0,0%,0%,0.8)",
        "auth-inner": "inset 0 100px 250px 0 hsla(0,0%,0%,1)",
        "card-drop": "4px 2px 8px 0 hsla(0,0%,0%,0.25)",
        "form-card-drop": "0 20px 30px 0 hsla(0,0%,0%,0.6)",
        "input-drop":
          "0 12px 25px hsla(var(--input-shadow)),0 4px 4px hsla(var(--input-shadow-side))",
        "menu-drop": "0 4px 15px hsla(0,0%,0%,0.6),0 2px 4px hsla(0,0%,0%,0.6)",
      },
      objectPosition: {
        profile: "60% 0",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-textshadow")],
} satisfies Config;

export default config;
