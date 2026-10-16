/** Tailwind v3 — mesma config que rodava no CDN (cdn.tailwindcss.com 3.4.17).
 *  Build: npm run build:css  →  assets/css/site.css (minificado, só as classes usadas). */
module.exports = {
  content: ['./index.html', './privacidade.html'],
  theme: {
    extend: {
      colors: {
        vivid:     '#ED0A15', // acento principal / CTAs
        selective: '#FFB600', // acento secundário / selos
        latte:     '#FFF8E9', // off-white
      },
      fontFamily: {
        amador: ['Amador', 'Georgia', 'serif'],
        gothic: ['"Special Gothic"', 'system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
};
