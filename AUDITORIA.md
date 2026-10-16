# AUDITORIA — Rafa Doc (vistoria pré go-live)

- **Branch:** `vistoria-golive` (a partir de `main` @ `be2c99c`)
- **Data:** 16/10/2026
- **Etapa atual:** 1 — Varredura. **Nenhuma correção aplicada ainda.**
- Linhas citadas são de `index.html` (646 linhas), salvo indicação.
- Legenda de gravidade: 🔴 bloqueia lançamento · 🟠 importante · 🟢 melhoria
- Legenda de status: ⏳ aberto · ✅ corrigido · 📌 pendente (Rafa) · ⚖️ decisão (Eddi)

---

## Decisões para o Eddi

Itens que mudam algo visível, ou que dependem de escolha. **Não serão aplicados sem o seu OK.**

| # | Decisão | Prós | Contras |
|---|---|---|---|
| D1 | Trocar o título do card "Botox" por **"Toxina botulínica"** (l.355) | Tira marca registrada do título; padrão dos sites de referência | Texto mais longo no card; perde a palavra que a cliente pesquisa (dá para manter "botox" no alt/descrição) |
| D2 | **Esconder a seção "Prova real"** (l.489–516) com `hidden` até existirem os reels autorizados | Some o bloco de placeholder sem apagar nada; volta com 1 atributo | A página perde a prova social visual por enquanto; o menu "Autoridade" continua apontando para `#prova`, que segue visível (intro do Dr.) |
| D3 | **CTA por serviço:** hoje os cards de Serviços não têm link. Proposta: o card inteiro vira link para o WhatsApp com a mensagem do serviço (sem botão novo; só cursor e foco) | Cumpre o "mensagem por serviço" sem mexer no layout | Clique acidental no mobile ao rolar; se preferir, alternativa é um link de texto pequeno "Perguntar sobre isso →" (muda o visual) |
| D4 | **Contraste do botão vermelho:** latte `#FFF8E9` sobre vermelho `#ED0A15` = **4,26:1** (AA pede 4,5 para texto pequeno). Afeta botões do menu e do hero (l.174, 211) | Opções sem sair da paleta: (a) texto do botão em **preto** (≈4,9:1); (b) subir o texto para ≥14px bold (conta como "texto grande", passa com 3:1) | (a) muda a cara do botão; (b) muda proporção. Manter como está = Acessibilidade continua ~95 no Lighthouse, mas reprova AA estrito |
| D5 | **Textos de apoio com baixa opacidade** no fundo creme (`text-black/40`, `/50`, `/60`) e no rodapé (`text-latte/30`): subir para no mínimo `/60` (creme) e `/60` (preto) | Passa AA | Hierarquia fica menos "sussurrada" |
| D6 | **Botão "WhatsApp" do menu** (l.174) aponta para `#contato`, igual ao do hero. Proposta: abrir o WhatsApp direto com `data-cta="nav"` e mensagem do hero | Coerência com o rótulo | Não está na lista original de CTAs — por isso pergunto |
| D7 | **"No filter. No bullshit."** (l.202, kicker do hero): palavrão em página de médico. O CFM pede "decoro" na publicidade | Mantém a voz aprovada | Risco reputacional/ético baixo, mas existe. Só sinalizo — não mexo |
| D8 | **Fotos dos cards de Serviço:** só há 2 fotos (`serv1`, `serv2`) repetidas em 5 cards, e não batem com o serviço (ex.: `serv2` mostra laser/aparelho e está em "Preenchimento"). Também mostram rosto de paciente | — | Precisa de foto certa por serviço + **termo de uso de imagem da paciente** (CFM 2.336/2023). Proposta: manter até chegar material, mas com alt honesto |
| D9 | **Pin Filosofia → Diferenciais (300vh)**: já está **desligado abaixo de 1024px** (l.144–152), então celular não trava. Fica ativo em iPad deitado e desktop. O link "Diferenciais" do menu cai no começo do pin (mostra a Filosofia, não os Diferenciais) | Corrigir o salto do link (rolar até ~60% do trilho) não muda o visual | Teste em iOS Safari real não pode ser feito daqui — precisa de você no aparelho |
| D10 | **`contato@rafadoc.com.br` no rodapé** (l.554): só fica se a caixa existir | — | Se não existir, retirar a linha (mudança visível) |
| D11 | **Título da aba** → `Dr. Rafael Juliani — Medicina Estética em [CIDADE]` | Busca local e prévia de link | Sai o "Rafa Doc" do título; alternativa: `Rafa Doc · Dr. Rafael Juliani — Medicina Estética em [CIDADE]` (mais longo) |

---

## Pendências do Rafa

Tudo que vai virar placeholder comentado no HTML (`<!-- [PLACEHOLDER: …] -->`). Nada será inventado.

| # | Dado | Onde entra |
|---|---|---|
| P1 | **CRM** (número + UF) | Rodapé, JSON-LD |
| P2 | **RQE** (se houver; se não houver, confirmar — e aí a palavra "especialista" fica proibida. Hoje ela **não aparece** no site) | Rodapé, JSON-LD |
| P3 | **Endereço, bairro e cidade** do consultório + link do Google Maps | Seção "Onde atende", JSON-LD, `<title>` |
| P4 | **Horário de atendimento** e se é só particular | "Onde atende", JSON-LD |
| P5 | **Formação** (graduação, residência/pós, sociedades) — 3 a 5 linhas | Seção Autoridade |
| P6 | **Confirmar o número do WhatsApp** `47 99192 0666` (o próprio site diz "confirmar número") | Todos os CTAs |
| P7 | **E-mail de contato** existe? Qual? | Rodapé, Política de privacidade |
| P8 | **Controlador dos dados (LGPD)**: nome/razão social, CPF/CNPJ e e-mail do encarregado | `privacidade.html` |
| P9 | **ID do GA4** (`G-XXXXXXX`) e **ID do Meta Pixel** (`PIXEL_ID`) | Script de medição |
| P10 | **FAQ** — respostas das 4 perguntas (primeira consulta, duração, particular, cuidados depois) | Seção FAQ |
| P11 | **Reels de Prova real**: links + autorização de uso das pessoas que aparecem | Seção Prova real |
| P12 | **Termo de uso de imagem** das pacientes que aparecem em `serv1.png` e `serv2.png` | Cards de Serviço |
| P13 | **Instagram oficial**: confirmar `@docrafa` | Rodapé, JSON-LD `sameAs` |

---

## Linha de base (antes)

Medido localmente (servidor estático Python, sem compressão nem cache — no Cloudflare essas duas coisas melhoram sozinhas). Lighthouse 12, mobile, 4G simulado.

| Métrica | Antes | Meta | Depois |
|---|---|---|---|
| Performance | **69** | ≥80 | — |
| Acessibilidade | 95 | ≥90 | — |
| Boas práticas | 96 | ≥90 | — |
| SEO | 91 | ≥90 | — |
| LCP | **59,9 s** | <2,5 s | — |
| FCP | 3,1 s | — | — |
| CLS | 0 | — | — |
| Peso no 1º carregamento | **~43 MB** (42.000 KiB) | — | — |
| Maior arquivo do deploy | **`videos/Final_BG.mp4` = 26,5 MiB** (limite do Cloudflare: 25 MiB) | ≤25 MiB | — |

Composição do 1º carregamento: `Final_BG.mp4` 27 MB · `SKI-2N.png` (só como poster) 6 MB · `bw-portrait…png` (poster) 3 MB · `skin-v.mp4` 2,8 MB · `serv2.png` 1,9 MB · `serv1.png` 1,8 MB · Tailwind CDN 123 KB · Amador `.ttf` 85 KB.

Console (375/768/1280): 1 erro — `favicon.ico` 404. Tailwind CDN também emite o aviso "should not be used in production" no navegador normal. Rolagem lateral: **nenhuma** nas 3 larguras.

---

## A. Performance e arquivos

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| A1 | `Final_BG.mp4` tem 26,5 MiB (1920×1080, 16 Mb/s, **com faixa de áudio** inútil — vídeo é `muted`). Cloudflare Pages recusa >25 MiB → **o deploy falha** | l.190 | 🔴 | Reencodar H.264 sem áudio, `+faststart`: 1080p ≤5 MB (desktop) e 720p ≤2 MB (mobile) via `<source media>`/troca por JS. Original vai para `_fontes/` | Sim | ⏳ |
| A2 | Poster do hero `bw-portrait-beauty-black-woman.png` 2,9 MB (1280×1920) | l.189 | 🔴 | Poster leve em WebP (≤150 KB), idealmente um frame do próprio vídeo | Sim (se usar o mesmo retrato) | ⏳ |
| A3 | `skin-v.mp4` 2,8 MB (624×624, com áudio) para um círculo de ~576px | l.266 | 🟠 | Reencodar sem áudio (meta ≤600 KB) | Sim | ⏳ |
| A4 | `SKI-2N.png` 5,9 MB é baixada **só como poster** do vídeo de pele (RGBA 1920×2041) | l.263 | 🔴 | Poster WebP ~600px (≤60 KB) | Sim | ⏳ |
| A5 | `serv1.png` / `serv2.png` 1,8–1,9 MB cada (941×1672) para cards de ~240px | l.352–388 | 🟠 | WebP 2 tamanhos (480/960) + `srcset`/`sizes` + `width`/`height` | Sim | ⏳ |
| A6 | `BEHANCE/TELA-12-BEHANCE-DOC@2x.png` 7,8 MB (3840×2160) | l.466 | 🟠 | WebP 3 tamanhos (640/1280/1920) + `srcset` + `width`/`height` | Sim | ⏳ |
| A7 | `ROSA-2.png` 1 MB / `ROSA-2-mobile.png` 0,5 MB (fundo da Lifestyle) | l.410–412 | 🟢 | WebP mantendo o `<picture>` | Sim | ⏳ |
| A8 | Logo vermelha da marquee em PNG 1080×1080 (6 cópias, 30 KB) | l.439–452 | 🟢 | Usar `LOGO-DOC-VERMELHO.svg` (já existe, 5 KB) | Sim | ⏳ |
| A9 | **Arquivos no deploy que a página não usa** (~16 MB): `Assets/imgs/ROSA.png` (8,4 MB), `Assets/imgs/SKIN.png` (5,7 MB), 4 logos `.pdf` (1,5 MB), logos `.png` amarelo/branco/preto, `LOGO-DOC-PRETO.svg`, `LOGO-DOC-VERMELHO.svg`* | repo | 🟠 | Mover para `_fontes/` (fora do deploy via `.cfignore`/pasta de publicação). Não apagar. *O SVG vermelho volta a ser usado se A8 for feito | Sim | ⏳ |
| A10 | Tailwind via CDN (`cdn.tailwindcss.com`): bloqueia renderização (~1,8 s), 123 KB de JS, aviso no console | l.21, 33–49 | 🔴 | Tailwind CLI v3 com o mesmo `tailwind.config` → `assets/css/site.css` minificado só com as classes usadas. Nenhuma classe do HTML muda | Sim | ⏳ |
| A11 | Fonte Amador em `.ttf` com espaço no nome (`Amador%20GothicC.ttf`), sem preload | l.55 | 🟠 | Converter para `amador.woff2`, `preload` (ela aparece no H1 do hero) | Sim | ⏳ |
| A12 | Nomes com maiúscula/espaço/`@` (`Assets/`, `BEHANCE/`, `Final_BG.mp4`, `TELA-12-BEHANCE-DOC@2x.png`, `SKI-2N.png`, `LOGO-DOC-*`). Cloudflare diferencia maiúsculas | todo o HTML | 🟠 | `assets/`, `assets/img/`, `videos/final-bg.mp4`, `rafael-juliani-poster.webp` etc. Atualizar todas as referências | Sim | ⏳ |
| A13 | Vídeo de pele com `preload="auto"` + `autoplay` abaixo da dobra | l.262 | 🟠 | `preload="none"`/`metadata` + tocar só ao entrar na tela (IntersectionObserver) | Sim | ⏳ |
| A14 | Imagens sem `width`/`height` (Lighthouse "unsized-images") | logos, selos, serviços, Behance | 🟢 | Adicionar dimensões intrínsecas | Sim | ⏳ |
| A15 | Sem cabeçalhos de cache para assets | deploy | 🟢 | Arquivo `_headers` do Cloudflare Pages (cache longo para `/assets/*` e `/videos/*`) | Sim | ⏳ |
| A16 | Logo do nav e do hero é a mesma `LOGO-DOC-BRANCO.svg`; comentário diz "amarela" | l.195–197 | 🟢 | Só corrigir o comentário | Sim | ⏳ |

## B. Conversão e medição

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| B1 | Botão "Falar no WhatsApp" do hero aponta para `#contato` | l.211 | 🔴 | `https://wa.me/5547991920666?text=…` com "Oi, Dr. Rafa! Vim pelo site e quero agendar uma avaliação." + `data-cta="hero"` | Sim | ⏳ |
| B2 | Links `wa.me` sem mensagem pré-preenchida (CTA final e rodapé) | l.536, 553 | 🟠 | Mensagens por origem; `data-cta="final"` e `"rodape"` | Sim | ⏳ |
| B3 | Serviços não têm CTA nenhum | l.347–394 | 🟠 | Ver **D3** | Não | ⚖️ |
| B4 | Botão "WhatsApp" do menu aponta para `#contato` | l.174 | 🟠 | Ver **D6** | Não | ⚖️ |
| B5 | Sem `target="_blank"` / `rel="noopener"` em nenhum link externo | l.536, 553–555 | 🟠 | Adicionar em todos os CTAs e no Instagram | Sim | ⏳ |
| B6 | Sem medição | — | 🟠 | GA4 (`whatsapp_click` com `cta_id`; `section_view` 1x por seção) + Meta Pixel (`Contact`). IDs placeholder. Carregam só após consentimento (D-5) | Sim | ⏳ |
| B7 | Alvos de toque <44px: botão "WhatsApp" do menu (32px), logo do menu (28px), links do rodapé (18px), links do menu (16px, desktop) | l.164, 174, 553–555 | 🟠 | `min-height:44px` / padding vertical invisível (sem mudar o desenho do botão) | Sim (só área de toque) | ⏳ |

## C. SEO e compartilhamento

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| C1 | Sem `meta description` | `<head>` | 🔴 | Descrição de ~150 caracteres na voz da marca (sem promessa) | Sim | ⏳ |
| C2 | Sem Open Graph / Twitter card (prévia do WhatsApp/Instagram sai sem imagem) | `<head>` | 🔴 | `og:title`, `og:description`, `og:image` 1200×630 (gerada do retrato TELA-12 + logo, sem texto novo), `og:url`, `og:locale=pt_BR`, `twitter:card=summary_large_image` | Sim | ⏳ |
| C3 | Sem `canonical` | `<head>` | 🟠 | `https://rafadoc.com.br/` | Sim | ⏳ |
| C4 | Sem favicon (404 no console) nem `theme-color` | `<head>` | 🟠 | `favicon.svg` (logo vermelha), `apple-touch-icon.png` 180px, `theme-color #000000` | Sim | ⏳ |
| C5 | `<title>` sem especialidade/cidade | l.6 | 🟠 | Ver **D11** | Não | ⚖️ |
| C6 | Sem dados estruturados | — | 🟠 | JSON-LD `Physician` (nome, URL, telefone, `sameAs` Instagram); endereço, CRM, horário como placeholder comentado | Sim | ⏳ |
| C7 | Sem `robots.txt` e `sitemap.xml` | raiz | 🟠 | Criar ambos (sitemap com `/` e `/privacidade.html`) | Sim | ⏳ |
| C8 | Hierarquia: 1 `h1` ✓, 6 `h2` ✓. Mas os títulos com letras em `<span>` são lidos "certos" pelo texto, **porém** com quebra (`moldura.É`, `isn'ta`, `começara`) por causa do `<br>` | l.238, 421, 528 | 🟢 | `aria-label` com a frase inteira em todos os títulos com spans/`<br>` (h1 e h2) | Sim | ⏳ |
| C9 | "Prova real" é um `h3` solto dentro de `#prova`, sem `h2` próprio | l.490 | 🟢 | Fica `h3` sob o `h2` "Dr. Rafael Juliani" — aceitável; reavaliar se D2 for aprovado | — | ⏳ |
| C10 | Alts genéricos: "Botox — textura editorial" etc. (as fotos mostram procedimento com o médico); "Pôsteres Dr. Rafael Juliani" (é um retrato) | l.352–388, 466 | 🟠 | Alts descritivos do que a foto mostra. Logo do hero (decorativa, repete o nav) → `alt=""` | Sim | ⏳ |
| C11 | `alt=""` atuais: fundo da Lifestyle e logos da marquee — corretos (decorativos) | l.412, 439–452 | — | Manter | — | ✅ (ok) |
| C12 | Selos: alts ok, mas "Selo Do Not Obey" / "Selo Authentic" — confirmar se o texto do selo é esse | l.324–327 | 🟢 | Conferir com o arquivo | Sim | ⏳ |

## D. Legal e saúde

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| D-1 | Rodapé sem nome completo + CRM + RQE + "Responsável técnico" (Res. CFM 2.336/2023) | l.549–561 | 🔴 | `Dr. Rafael Juliani · CRM [PLACEHOLDER] · RQE [PLACEHOLDER] · Responsável técnico` com o valor em comentário | Sim (estrutura) / 📌 dados | ⏳ |
| D-2 | Palavra "especialista": **não aparece** no site | — | — | Nada a fazer; manter assim até haver RQE | — | ✅ (ok) |
| D-3 | "Botox" (marca registrada) como título do card | l.349–356 | 🟠 | Ver **D1** | Não | ⚖️ |
| D-4 | Sem política de privacidade | — | 🔴 | `privacidade.html` (LGPD; cita GA4, Meta Pixel, WhatsApp; controlador/e-mail placeholder) + link no rodapé | Sim | ⏳ |
| D-5 | Sem banner de cookies / consentimento | — | 🔴 | Banner leve na identidade (preto/creme/vermelho), Aceitar/Recusar, escolha em `localStorage` com try/catch; GA4/Pixel só após aceite | Sim (elemento novo, mas exigido) | ⏳ |
| D-6 | **Frases em risco** (promessa de resultado / superlativo) — listadas, **não reescritas**: | | 🟠 | Revisar com o Rafa | Não | ⚖️ |
| | · "resultado que parece você num bom dia" | l.315 | | promessa de resultado | | |
| | · "Pele nova na superfície. Renovação sem drama." (Peelings) | l.374 | | promessa de resultado | | |
| | · "Textura que responde." (Microagulhamento) | l.383 | | promessa de resultado | | |
| | · "Firmeza e definição, com tecnologia que vai fundo." (Ultrassom MPT) | l.392 | | promessa de resultado | | |
| | · "Formação séria … técnica de sobra … Autoridade que não precisa gritar." | l.474–476 | | autopromoção/superlativo sem credencial à vista | | |
| | · "Congelar a cara? Não aqui." (Botox) | l.356 | | comparação implícita com colegas | | |
| | · "No filter. No bullshit." | l.202 | | decoro (ver D7) | | |
| D-7 | Fotos com rosto de paciente durante procedimento | `serv1.png`, `serv2.png` | 🟠 | Ver **D8** / **P12** | Não | 📌 |

## E. Textos de rascunho visíveis

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| E1 | "imagem real BEHANCE · candidata a teste" | l.468 | 🔴 | Remover (vira comentário) | Sim | ⏳ |
| E2 | "PMMA não consta — rejeitado no posicionamento da marca." | l.395 | 🔴 | Remover (vira comentário) | Sim | ⏳ |
| E3 | 3× "[ REEL 9:16 ] embed do Instagram (placeholder de vídeo)" + "@influencer — a confirmar" | l.494–508 | 🔴 | Ver **D2** (esconder a sub-seção) | Não | ⚖️ |
| E4 | "Embeds reais entram na fase de conteúdo — pendente…" | l.516 | 🔴 | Remover (vira comentário) | Sim | ⏳ |
| E5 | **(novo)** "[ confirmar número/dados — placeholder: 47 99192 0666 ]" logo abaixo do CTA final | l.541 | 🔴 | Remover (vira comentário) + **P6** | Sim | ⏳ |
| E6 | "Wireframe v1 — conteúdo e dados de contato são placeholder, a confirmar." | l.559 | 🔴 | Trocar por "© 2026 Rafa Doc." + linha do CRM (D-1) | Sim | ⏳ |
| E7 | Comentário no `<head>` "WIREFRAME v1 (baixa-média fidelidade)…" (visível no código-fonte) | l.8–18 | 🟠 | Reescrever como cabeçalho neutro | Sim | ⏳ |
| E8 | E-mail `contato@rafadoc.com.br` | l.554 | 🟠 | Ver **D10** / **P7** | Não | ⚖️ |
| E9 | CSS morto de wireframe (`.ph`, `.duotone-hint`, `background-size:170%` sem imagem) | l.70–82, 257 | 🟢 | Remover se D2 aprovado (`.ph` ainda usado nos reels) | Sim (parcial) | ⏳ |

## F. Acessibilidade e motion

| # | Problema | Onde | Gravidade | Correção proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|---|
| F1 | Contraste: latte sobre vermelho 4,26:1 | l.174, 211 | 🟠 | Ver **D4** | Não | ⚖️ |
| F2 | Contraste: `text-black/40` sobre creme 2,82:1; `text-latte/30` no rodapé 2,38:1 (as duas linhas do rodapé/notas somem com E2/E4/E6) | l.395, 516, 558 | 🟠 | Some com E; o restante entra em **D5** | Parcial | ⏳ |
| F3 | Texto sobre vídeo do hero: overlay preto/vermelho 74–92% garante contraste — ok no teste | l.193–194 | — | Manter | — | ✅ (ok) |
| F4 | Sem estilo de foco visível próprio (o anel padrão some no botão vermelho/preto) | global | 🟠 | `:focus-visible { outline: 2px solid #FFB600; outline-offset: 3px }` — só aparece no teclado | Sim | ⏳ |
| F5 | `prefers-reduced-motion`: marquee, reveals, hero e pin já cobertos ✓. Falta: `scroll-behavior:smooth`, zoom no hover dos selos/cards, autoplay dos vídeos | l.61, 324–327, 352… | 🟢 | Desligar smooth scroll e hover-zoom; pausar vídeos (mostrar poster) | Sim | ⏳ |
| F6 | Vídeos decorativos sem `aria-hidden="true"`; `#skin-circle` tem `role="img"` com label "(vídeo)" | l.187, 255–262 | 🟢 | `aria-hidden` nos `<video>`; label "Pele em macro" | Sim | ⏳ |
| F7 | `#skin-circle` menor que o original após troca imagem → vídeo. Causa provável: (1) **máscara radial aplicada duas vezes** (no `div` e no `video`), o que encolhe o disco visível; (2) a imagem antiga tinha `background-size:170%` (zoom) e o vídeo está em 100% | l.255–267 | 🟠 | Manter só a máscara do `div` e aplicar `scale(1.7)` no vídeo (overflow oculto). A animação de scroll não muda. Validar por screenshot lado a lado com o poster | Sim, com comparação visual | ⏳ |
| F8 | Pin de 300vh: desligado <1024px ✓ (celular empilha). Link "Diferenciais" do menu cai no início do pin | l.144, 168–169 | 🟠 | Ver **D9** | Parcial | ⚖️ |
| F9 | Menu de navegação some no mobile (`hidden md:flex`) — só fica o botão WhatsApp | l.167 | 🟢 | Aceitável para LP de página única; registrar | — | — |
| F10 | Marquee `role="marquee"` com label — ok | l.434 | — | Manter | — | ✅ (ok) |

## G. Itens que os concorrentes têm (preparar sem conteúdo inventado)

| # | Item | Gravidade | Proposta | Segura sozinha? | Status |
|---|---|---|---|---|---|
| G1 | **Onde atende** (endereço, bairro, mapa `loading="lazy"`, horário, "atendimento particular") antes do CTA final | 🟠 | Bloco **oculto** (`hidden`) já estilizado + placeholders comentados. Só aparece quando houver P3/P4 | Sim (oculto) | ⏳ |
| G2 | **Formação** (3–5 linhas) na Autoridade | 🟠 | Lista oculta + placeholders (P5) | Sim (oculto) | ⏳ |
| G3 | **Perguntas frequentes** com `<details>` (4 perguntas) | 🟢 | Bloco oculto; perguntas com texto placeholder comentado (P10) | Sim (oculto) | ⏳ |
| G4 | Blog, chatbot, lista de tecnologias | — | Backlog. Não fazer | — | — |

---

## Ferramentas para a Etapa 2

- `ffmpeg`/`ffprobe` não estão no sistema: uso binários estáticos via npm (`ffmpeg-static`) fora do repositório.
- WebP/AVIF: Pillow (Python) já instalado.
- Tailwind CLI v3 via `npx` (mesmo motor do CDN 3.4.17 → mesmas classes).
- Lighthouse 12 via `npx` + Chrome local.
