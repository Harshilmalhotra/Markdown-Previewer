/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    // Add paths to all of the files you want to include in the purge
  ],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
      },
    },
  },
  plugins: [],
}

