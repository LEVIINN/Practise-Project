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
    },
  },
  plugins: [],
};
