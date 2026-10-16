/* Rafa Doc — medição (GA4 + Meta Pixel).
 * Nada carrega sem consentimento: o banner de cookies (assets/js/consentimento.js) grava
 * localStorage['rd-consent'] = 'granted' | 'denied' e chama RDMedicao.carregar() no aceite.
 * Eventos:
 *   - whatsapp_click (GA4, parâmetro cta_id = data-cta do link) + Contact (Pixel)
 *   - section_view   (GA4, parâmetro section_id) — 1x por seção, por visita
 */
(function () {
  var GA_ID = 'G-XXXXXXX';      // [PLACEHOLDER: ID do GA4 — pendência do Rafa]
  var PIXEL_ID = 'PIXEL_ID';    // [PLACEHOLDER: ID do Meta Pixel — pendência do Rafa]
  var KEY = 'rd-consent';
  var SECOES = ['hero', 'filosofia', 'diferenciais', 'servicos', 'lifestyle', 'prova', 'contato'];

  var carregado = false;
  var pendentes = [];
  function definido(id) { return !!id && id.indexOf('XXXX') < 0 && id !== 'PIXEL_ID'; }
  function consentimento() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function carregar() {
    if (carregado) return;
    carregado = true;
    if (definido(GA_ID)) {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID);
    }
    if (definido(PIXEL_ID)) {
      /* Meta Pixel — snippet oficial */
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
    }
    /* Seções vistas antes do aceite (ex.: o hero) entram agora — o consentimento vale para a visita */
    pendentes.forEach(function (id) { evento('section_view', { section_id: id }); });
    pendentes = [];
  }

  function evento(nome, params) {
    if (!carregado) return;
    if (window.gtag) window.gtag('event', nome, params);
  }

  window.RDMedicao = { carregar: carregar };
  if (consentimento() === 'granted') carregar();

  /* Clique no WhatsApp (todos os links com data-cta) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-cta]') : null;
    if (!a) return;
    var id = a.getAttribute('data-cta');
    evento('whatsapp_click', { cta_id: id });
    if (carregado && window.fbq) window.fbq('track', 'Contact', { cta_id: id });
  });

  /* Visualização de seção (1x cada) */
  var vistas = {};
  function marcar(id) {
    if (vistas[id]) return;
    vistas[id] = true;
    if (carregado) evento('section_view', { section_id: id }); else pendentes.push(id);
  }
  var desktopPin = window.matchMedia && window.matchMedia('(min-width: 1024px)').matches &&
                   !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { marcar(en.target.id); io.unobserve(en.target); } });
    }, { threshold: 0.35 });
    SECOES.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      /* No desktop, Diferenciais vive dentro da cena pinada: conta quando a cascata aparece (.diff-in) */
      if (id === 'diferenciais' && desktopPin && 'MutationObserver' in window) {
        var mo = new MutationObserver(function () { if (el.classList.contains('diff-in')) { marcar(id); mo.disconnect(); } });
        mo.observe(el, { attributes: true, attributeFilter: ['class'] });
        return;
      }
      io.observe(el);
    });
  }
})();
