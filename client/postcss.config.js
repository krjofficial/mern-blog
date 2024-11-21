// postcss.config.js (using ES modules)
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(), 

  ],
};