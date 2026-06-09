/** @type {import('tailwindcss').Config} */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'brand-pink': '#FF69B4',
        'brand-cyan': '#00BCD4',
        'brand-deep-purple': '#1A1A2E',
        'brand-dark-purple': '#0F0F1A',
        'brand-light-grey': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow-pink': '0 0 12px rgba(255, 105, 180, 0.7)',
        'glow-cyan': '0 0 12px rgba(0, 188, 212, 0.7)',
      }
    }
  }
}