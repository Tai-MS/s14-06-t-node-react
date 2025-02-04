// tailwind.config.js

const tailwindConfig = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#86B282', // Define el color personalizado con el nombre 'customGreen' y el valor '#86B282'
      },
      fontFamily: {
        'sans': ['Manrope', 'Roboto Condensed', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
};

export default tailwindConfig; // Exporta la configuración como default
