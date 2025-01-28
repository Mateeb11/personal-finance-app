import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-500": "var(--primary-500)",
        "secondary-100": "var(--secondary-100)",
        "secondary-300": "var(--secondary-300)",
        "secondary-500": "var(--secondary-500)",
        "secondary-900": "var(--secondary-900)",
        green: "var(--green)",
        yellow: "var(--yellow)",
        cyan: "var(--cyan)",
        navy: "var(--navy)",
        red: "var(--red)",
        "purple-500": "var(--purple-500)",
        "purple-100": "var(--purple-100)",
        turquoise: "var(--turquoise)",
        brown: "var(--brown)",
        magenta: "var(--magenta)",
        blue: "var(--blue)",
        "navy-grey": "var(--navy-grey)",
        "army-green": "var(--army-green)",
        gold: "var(--gold)",
        orange: "var(--orange)",
      },
    },
  },
  plugins: [],
} satisfies Config;
