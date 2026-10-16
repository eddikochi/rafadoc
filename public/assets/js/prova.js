/* Rafa Doc — Prova social (reels + prints).
 *
 * PARA PUBLICAR: preencher as duas listas abaixo. Lista vazia = placeholders continuam na página.
 *
 *   REELS  → vídeos verticais 9:16 em videos/reels/ (H.264, ≤8 MB) + poster em assets/img/prova/
 *            { video: 'videos/reels/reel-1.mp4', poster: 'assets/img/prova/reel-1.webp', legenda: '@perfil' }
 *
 *   PRINTS → prints de celular em assets/img/prova/ (WebP). Nome, foto e telefone BORRADOS + autorização.
 *            { img: 'assets/img/prova/print-01.webp', largura: 1080, altura: 2340, alt: 'Mensagem de paciente: "…"' }
 */
(function () {
  var REELS = [
    // { video: 'videos/reels/reel-1.mp4', poster: 'assets/img/prova/reel-1.webp', legenda: '@perfil' },
  ];

  var PRINTS = [
    // { img: 'assets/img/prova/print-01.webp', largura: 1080, altura: 2340, alt: 'Mensagem de paciente: "…"' },
  ];

  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- Reels: troca cada placeholder pelo vídeo, na ordem ---------- */
  var grid = document.getElementById('reels-grid');
  if (grid && REELS.length) {
    var slots = grid.querySelectorAll('[data-reel-slot]');
    REELS.forEach(function (r, i) {
      var fig = slots[i];
      if (!fig) { fig = document.createElement('figure'); fig.setAttribute('data-reel-slot', ''); grid.appendChild(fig); }
      fig.innerHTML =
        '<video class="w-full aspect-[9/16] object-cover bg-black" controls playsinline preload="none"' +
        (r.poster ? ' poster="' + esc(r.poster) + '"' : '') + '>' +
        '<source src="' + esc(r.video) + '" type="video/mp4" /></video>' +
        (r.legenda ? '<figcaption class="font-gothic text-sm text-black/60 mt-3 text-center">' + esc(r.legenda) + '</figcaption>' : '');
    });
    /* Slots que sobraram sem vídeo saem */
    for (var k = REELS.length; k < slots.length; k++) slots[k].remove();
    /* Um vídeo por vez */
    var vids = grid.querySelectorAll('video');
    vids.forEach(function (v) {
      v.addEventListener('play', function () { vids.forEach(function (o) { if (o !== v) o.pause(); }); });
    });
  }

  /* ---------- Prints: carrossel ---------- */
  var track = document.getElementById('prints-track');
  if (!track) return;

  if (PRINTS.length) {
    track.innerHTML = PRINTS.map(function (p, i) {
      return '<div class="prints-card shrink-0 snap-start w-[68%] sm:w-[40%] lg:w-[calc(25%-15px)]">' +
        '<button type="button" class="block w-full border border-black/10 shadow-xl bg-white overflow-hidden" data-print="' + i + '"' +
        ' aria-label="Ampliar print ' + (i + 1) + '">' +
        '<img src="' + esc(p.img) + '" alt="' + esc(p.alt) + '" loading="lazy"' +
        (p.largura ? ' width="' + p.largura + '" height="' + p.altura + '"' : '') +
        ' class="block w-full h-auto" /></button></div>';
    }).join('');
  }

  /* Setas (desktop): rolam ~1 tela do carrossel; desabilitam nas pontas e somem se não houver overflow */
  var prev = document.querySelector('[data-prints-prev]');
  var next = document.querySelector('[data-prints-next]');
  var nav = document.querySelector('[data-prints-nav]');
  function passo() { return Math.max(200, track.clientWidth * 0.85); }
  function estado() {
    var max = track.scrollWidth - track.clientWidth - 2;
    if (nav) nav.style.visibility = max > 0 ? '' : 'hidden';
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= max;
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -passo(), behavior: reduce ? 'auto' : 'smooth' }); });
  if (next) next.addEventListener('click', function () { track.scrollBy({ left: passo(), behavior: reduce ? 'auto' : 'smooth' }); });
  track.addEventListener('scroll', function () { window.requestAnimationFrame(estado); }, { passive: true });
  window.addEventListener('resize', estado);
  estado();

  /* Teclado: setas ← → quando o carrossel está em foco */
  track.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); track.scrollBy({ left: passo(), behavior: reduce ? 'auto' : 'smooth' }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: -passo(), behavior: reduce ? 'auto' : 'smooth' }); }
  });

  /* Lightbox */
  var dlg = document.getElementById('print-dialog');
  var img = document.getElementById('print-dialog-img');
  if (!dlg || !img || typeof dlg.showModal !== 'function') return;
  var root = document.documentElement;
  track.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-print]') : null;
    if (!b) return;
    var p = PRINTS[+b.getAttribute('data-print')];
    if (!p) return;
    img.src = p.img; img.alt = p.alt || '';
    dlg.showModal(); root.classList.add('svc-lock');
  });
  dlg.addEventListener('close', function () { root.classList.remove('svc-lock'); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.querySelectorAll('[data-close]').forEach(function (c) { c.addEventListener('click', function () { dlg.close(); }); });
})();
