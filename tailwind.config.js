/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    // Add paths to all of the files you want to include in the purge
  ],

  theme: {
    screens: {
      'smb': '320px',   // Small screens (e.g., mobile portrait)
      'md': '768px',   // Medium screens (e.g., tablets)
      'lg': '1024px',  // Large screens (e.g., small desktops)
      
    },
    extend: {
      fontFamily: {
        baloo: ["Baloo Bhai 2", "sans-serif"],
      },
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],

}

