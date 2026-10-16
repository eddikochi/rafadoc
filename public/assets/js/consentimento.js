/* Rafa Doc — banner de cookies (LGPD).
 * Sem escolha registrada → mostra o banner. "Aceitar" grava 'granted' e carrega a medição;
 * "Recusar" grava 'denied'. "Preferências de cookies" (rodapé) reabre o banner.
 * localStorage pode falhar (aba anônima, bloqueio): nesse caso a escolha vale só para esta visita.
 */
(function () {
  var KEY = 'rd-consent';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  var memoria = null;

  function ler() { try { return localStorage.getItem(KEY); } catch (e) { return memoria; } }
  function gravar(v) { memoria = v; try { localStorage.setItem(KEY, v); } catch (e) {} }
  function mostrar() { banner.hidden = false; }
  function esconder() { banner.hidden = true; }

  banner.querySelectorAll('[data-consent]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var antes = ler();
      var v = btn.getAttribute('data-consent');
      gravar(v);
      esconder();
      if (v === 'granted' && window.RDMedicao) window.RDMedicao.carregar();
      /* Revogou depois de aceitar: recarrega para descarregar GA4/Pixel */
      if (v === 'denied' && antes === 'granted') window.location.reload();
    });
  });

  document.querySelectorAll('[data-cookie-prefs]').forEach(function (b) {
    b.addEventListener('click', mostrar);
  });

  var c = ler();
  if (c !== 'granted' && c !== 'denied') mostrar();
})();
