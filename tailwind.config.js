/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation:{
        'spin-slow':'spin 6s linear infinite',
        'spin-delay':'spin 6s linear infinite -3s',
      },
      boxShadow: {
        'custom': '0 6px 8px -1px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

