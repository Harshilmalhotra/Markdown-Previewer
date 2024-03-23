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

      colors: {
        'gradient-start': '#7F00FF',
        'gradient-end': '#E100FF',
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      }),
    },
  },

  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    
  ],
  
}

