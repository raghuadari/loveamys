/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream:   '#FAF5EF', // warm off-white background
          light:   '#F0E8DC', // soft warm hover / badge backgrounds
          gold:    '#C9A882', // accent / separator / muted highlights
          primary: '#A07850', // main brand brown (buttons, active states)
          dark:    '#7A5C3E', // darker brown (hover states, secondary text)
          deep:    '#4A352D', // deep cocoa (headings, strong text)
        },
      },
    },
  },
  plugins: [],
}
