/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        // xs: "480px",
        // ss: "620px",
        sm: "480px",
        md: "620px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        green: "rgb(97, 209, 172)",
        dark: "rgb(14, 16, 21)",
        midDark: "rgb(20, 23, 31)",
        light: "rgb(227, 228, 232)",
        midLight: "rgb(161, 164, 170)",
      },
    },
  },
  plugins: [],
};
