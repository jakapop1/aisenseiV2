/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#527a5c',
        secondary: '#3d5a44',
        background: '#f8f9f6',
        textColor: '#2c3830',
        sidebar: '#f3f5f0',
        'primary-hover': 'rgba(82, 122, 92, 0.1)',
      },
      spacing: {
        'header': '64px',
      },
    },
  },
  plugins: [],
}