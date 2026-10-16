# AUDITORIA — Rafa Doc (vistoria pré go-live)

- **Branch:** `vistoria-golive` (a partir de `main` @ `be2c99c`). **Sem merge na `main`.**
- **Data:** 16/10/2026
- **Etapas:** 1 (varredura) ✅ · 2 (correções A→G) ✅ · 3 (verificação) ✅
- Linhas `l.` citadas nas tabelas de blocos são da versão original (`main` @ `be2c99c`).
- Gravidade: 🔴 bloqueia lançamento · 🟠 importante · 🟢 melhoria
- Status: ✅ corrigido · 📌 pendente (dado do Rafa) · ⚖️ decisão (Eddi) · ➖ sem ação

Commits: `A` 68451ae · `B` 4c0b281 · `C` 08f962d · `D` 93f5781 · `E` caa9206 · `F` 320e4d4 · `G` 973912a

---

## Decisões para o Eddi

### Já decididas (16/10) e aplicadas

| # | Decisão | Resultado |
|---|---|---|
| 1 | "Botox" → "Toxina botulínica" | ✅ Título do card, modal e mensagem do WhatsApp |
| 2 | Seção "Prova real" | ➖ Mantida visível aguardando os vídeos (ver N3) |
| 3 | "No filter. No bullshit." | ➖ Mantido; copy será validada depois |
| 4 | E-mail `contato@rafadoc.com.br` | ➖ Mantido (rodapé e política de privacidade) |
| 5 | Título longo | ✅ `Rafa Doc · Dr. Rafael Juliani — Medicina Estética` (cidade entra quando confirmada) |
| 6 | Serviços com descrição + CTA | ✅ Card inteiro abre um **modal** com descrição curta e "Saber mais no WhatsApp", mensagem com o nome do serviço. Modal em vez de sanfona: sanfona num grid de 2 colunas desalinha as linhas no celular |
| 7 | Todo botão leva ao WhatsApp `55 47 99192-0666` | ✅ Menu, hero, 5 serviços, CTA final, rodapé (ver N4) |
| 8 | Contraste do botão vermelho | ✅ Texto **preto** sobre vermelho (4,66:1, passa AA). Hover amarelo/preto igual ao anterior |
| 9 | Textos apagados | ✅ Opacidade mínima `/60` |
| 10 | Imagens de serviço por IA | 📌 Não consigo gerar imagens aqui. Prompts prontos em `PROMPTS-IMAGENS-SERVICOS.md`; o HTML marca onde cada uma entra (`[IMAGEM IA PENDENTE]`) |
| 11 | Pin Filosofia → Diferenciais | ✅ Link "Diferenciais" do menu agora para nos cards. 📌 Teste em iPhone/iPad real fica com você |

### Novas — precisam de resposta

| # | Decisão | Prós | Contras |
|---|---|---|---|
| N1 | **Arquivos internos ficariam públicos.** O Cloudflare Pages publica tudo o que está no repositório: `rafadoc.com.br/AUDITORIA.md` (com riscos legais e pendências), `PROMPTS-IMAGENS-SERVICOS.md`, `package.json`. Proposta: antes do merge, tirar os dois `.md` da branch (ficam no PR e na pasta local) | Nada interno exposto | Perde o histórico do relatório no repo (fica no PR) |
| N2 | **Textos vermelhos pequenos sobre creme** (kickers "Filosofia", "Experiências", "Autoridade", "Prova real") = 4,25:1, e **texto creme sobre o vermelho do CTA final** ≈ 4,3:1. Ficam um pouco abaixo do AA (4,5). O Lighthouse deu 100 porque eles estão em fade no momento do teste | Manter: preserva o vermelho de marca | Alternativa: texto preto nesses pontos (muda a assinatura visual). Recomendo manter |
| N3 | **"Prova real" visível com placeholders** ("[ REEL 9:16 ]…", "@influencer — a confirmar"). Pela decisão 2 ficou, mas o critério de pronto diz "nenhum texto de rascunho visível" | Seção pronta para receber os reels | Se os vídeos não chegarem até o lançamento, esconder com `hidden` (1 atributo) |
| N4 | **"Conhecer a filosofia"** (botão secundário do hero) continua rolando para a Filosofia | Dois botões de WhatsApp lado a lado ficariam redundantes | Se "todo botão" incluir esse também, é uma linha |
| N5 | **LCP local = 2,6 s** (meta 2,5 s). O que segura é a troca para Special Gothic, que vem do Google em 2 servidores externos. No Cloudflare (brotli, HTTP/3) deve passar | Manter o CDN do Google, como diz o CLAUDE.md | Se não passar no ar: hospedar a fonte no próprio site (licença OFL, permitido) — ganho estimado de 0,3–0,5 s |
| N6 | **Textos novos dos modais de serviço** (5 descrições + "Tudo começa numa conversa…" + aviso "Procedimento médico…") seguem a skill `rafadoc-copy` e não prometem resultado, mas são copy nova | — | Validar com o Rafa junto com a revisão de copy |
| N7 | **Fotos atuais dos serviços** continuam no ar até chegarem as de IA, ainda com rosto de paciente | Página não fica sem imagem | Precisa do termo de uso de imagem (P12) **ou** trocar antes do lançamento |

---

## Pendências do Rafa

Tudo está como placeholder comentado no HTML (`<!-- [PLACEHOLDER: …] -->`). Nada foi inventado.

| # | Dado | Onde entra | Bloqueia? |
|---|---|---|---|
| P1 | **CRM** (número + UF) | Rodapé (home e privacidade), JSON-LD | 🔴 Sim (CFM) |
| P2 | **RQE** — se não houver, confirmar. "Especialista" não aparece no site | Rodapé, JSON-LD | 🔴 Se houver |
| P3 | **Endereço, bairro, cidade** + link do Google Maps | Seção "Onde atende" (oculta), JSON-LD, `<title>`/OG | 🟠 |
| P4 | **Horário** e se é só particular | "Onde atende", JSON-LD | 🟠 |
| P5 | **Formação** (graduação, residência/pós, sociedades) | Lista oculta na Autoridade | 🟠 |
| P6 | **Confirmar o WhatsApp** `47 99192 0666` | Todos os CTAs | 🔴 |
| P7 | **E-mail** `contato@rafadoc.com.br` existe e é lido? | Rodapé, política de privacidade | 🟠 |
| P8 | **Controlador (LGPD):** nome completo/razão social + CPF/CNPJ; encarregado, se houver | `privacidade.html` | 🟠 |
| P9 | **ID do GA4** (`G-XXXXXXX`) e **ID do Meta Pixel** (`PIXEL_ID`) | `assets/js/medicao.js` (sem IDs, nada carrega — sem erro) | 🟢 |
| P10 | **FAQ** — respostas das 4 perguntas | Seção FAQ (oculta) | 🟢 |
| P11 | **Reels de Prova real**: links + autorização das pessoas | Seção Prova real | 🟠 (ver N3) |
| P12 | **Termo de uso de imagem** das pacientes em `servico-1/2` (ou trocar pelas de IA) | Cards e modais de serviço | 🟠 (ver N7) |
| P13 | **Instagram**: confirmar `@docrafa` | Rodapé, JSON-LD | 🟢 |
| P14 | **Cidade** para o título e o OG | `<title>`, `og:title`, `twitter:title` | 🟢 |

---

## Verificação (Etapa 3)

Lighthouse 12, mobile, 4G simulado, servidor local **sem compressão e sem cache** (no Cloudflare as duas coisas
são automáticas, então os números no ar devem ficar iguais ou melhores).

| Métrica | Antes | Depois | Meta |
|---|---|---|---|
| Performance | 69 | **97** | ≥80 ✅ |
| Acessibilidade | 95 | **100** | ≥90 ✅ |
| Boas práticas | 96 | **100** | ≥90 ✅ |
| SEO | 91 | **100** | ≥90 ✅ |
| LCP | 59,9 s | **2,6 s** | <2,5 s ⚠️ (N5) |
| FCP | 3,1 s | **1,1 s** | — |
| Speed Index | 3,4 s | **1,1 s** | — |
| CLS | 0 | 0,002 | — |
| `privacidade.html` | — | 95 / 100 / 100 / 100 | — |

| Peso | Antes | Depois |
|---|---|---|
| 1º carregamento — celular (Lighthouse) | **~43 MB** | **1,4 MB** (vídeo 720p 1,1 MB) |
| 1º carregamento — desktop | ~38 MB | ~3,6 MB (vídeo 1080p 3,3 MB) |
| Maior arquivo do deploy | 26,5 MiB (`Final_BG.mp4`, acima do limite) | **3,2 MiB** (`videos/final-bg.mp4`) ✅ |
| Repositório publicado | 66,7 MiB, 29 arquivos | **5,2 MiB**, 41 arquivos |

Outros testes:

- **CTAs (9):** todos abrem `wa.me/5547991920666` em nova aba (`noopener`) com a mensagem certa:
  `nav`/`hero` "…quero agendar uma avaliação." · `servico-<nome>` "…quero saber sobre <serviço>." ·
  `final` "…quero conversar." · `rodape` "Oi, Dr. Rafa! Vim pelo site."
- **Console:** sem erros nem avisos em 375, 768 e 1280px (home e privacidade). **Sem rolagem lateral.**
- **Modais:** abrem pelo card (clique ou teclado); fecham no ×, no Esc e clicando fora; o foco volta ao card; a página
  não rola por trás.
- **Cookies:** 1ª visita mostra o banner; Recusar/Aceitar grava e some; "Preferências de cookies" reabre. Sem aceite,
  **zero** requisições ao Google/Meta. Testado com IDs fictícios: após o aceite, GA4 recebe `section_view` (incluindo
  as seções vistas antes do aceite) e `whatsapp_click {cta_id}`; o Pixel recebe `PageView` e `Contact`.
- **Reduced-motion:** vídeo do hero parado no poster, marquee parada, pin desfeito (seções empilhadas), reveals
  estáticos, smooth scroll desligado.
- **Círculo de pele:** volta ao tamanho do original (comparação lado a lado com a versão em imagem).
- **`privacidade.html`, `robots.txt`, `sitemap.xml`:** respondem 200.
- **Visual:** screenshots antes/depois em 375, 768 e 1280px. Mudanças visíveis: só as aprovadas (decisões 1, 6, 8, 9),
  os textos de rascunho que saíram (E), o rodapé legal e o banner de cookies (D).
- **Não testado:** iPhone/iPad real (Safari) — 📌 com o Eddi.

---

## A. Performance e arquivos

| # | Problema | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| A1 | `Final_BG.mp4` 26,5 MiB, com áudio — o deploy falharia | l.190 | 🔴 | H.264 sem áudio, `+faststart`: `final-bg.mp4` 1080p **3,3 MB** e `final-bg-720.mp4` **1,1 MB** via `<source media>` | ✅ |
| A2 | Poster do hero PNG 2,9 MB | l.189 | 🔴 | `hero-poster.webp` 83 KB (mesmo retrato) | ✅ |
| A3 | `skin-v.mp4` 2,8 MB com áudio | l.266 | 🟠 | `pele-macro.mp4` **240 KB** | ✅ |
| A4 | `SKI-2N.png` 5,9 MB só como poster | l.263 | 🔴 | `pele-macro.webp` 15 KB | ✅ |
| A5 | `serv1/2.png` 1,8–1,9 MB | l.352–388 | 🟠 | WebP 480/941px com `srcset` (20–65 KB) | ✅ |
| A6 | `TELA-12…@2x.png` 7,8 MB | l.466 | 🟠 | `rafael-juliani-640/1280/1920.webp` (9–59 KB) com `srcset` | ✅ |
| A7 | `ROSA-2*.png` 0,5–1 MB | l.410–412 | 🟢 | `lifestyle*.webp` 23–29 KB | ✅ |
| A8 | Logo PNG na marquee | l.439–452 | 🟢 | `logo-doc-vermelho.svg` (mesma cor `#ED1C24`) | ✅ |
| A9 | ~16 MB de arquivos não usados no deploy | repo | 🟠 | Movidos para `_fontes/` (**fora do git** via `.gitignore`; preservados na pasta local e no histórico do git). Não houve exclusão | ✅ |
| A10 | Tailwind CDN | l.21, 33–49 | 🔴 | `assets/css/site.css` (18 KB) via Tailwind CLI 3.4.17, mesma config. **Ao mudar classes: `npm run build:css`** | ✅ |
| A11 | Amador `.ttf` com espaço, sem preload | l.55 | 🟠 | `assets/fonts/amador.woff2` (32 KB) + preload | ✅ |
| A12 | Nomes com maiúsculas/espaço/`@` | todo o HTML | 🟠 | `assets/{css,fonts,img,js,logo,selos}`, `videos/`, tudo minúsculo | ✅ |
| A13 | Vídeo de pele `preload=auto` abaixo da dobra | l.262 | 🟠 | `preload=none` + toca/pausa por IntersectionObserver | ✅ |
| A14 | Imagens sem `width`/`height` | várias | 🟢 | Adicionados | ✅ |
| A15 | Sem cache | deploy | 🟢 | `_headers` (7 dias para `/assets/*` e `/videos/*`) | ✅ |
| A16 | Comentário "logo amarela" errado | l.195 | 🟢 | Corrigido | ✅ |
| A17 | *(novo)* Google Fonts bloqueando a renderização (~1,6 s) | `<head>` | 🟠 | `preload` + `media=print/onload` (mantém o CDN) | ✅ |

## B. Conversão e medição

| # | Problema | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| B1 | Hero aponta para `#contato` | l.211 | 🔴 | WhatsApp + `data-cta="hero"` | ✅ |
| B2 | `wa.me` sem mensagem | l.536, 553 | 🟠 | Mensagem por origem (`final`, `rodape`) | ✅ |
| B3 | Serviços sem CTA | l.347–394 | 🟠 | Modal por serviço + CTA `servico-<nome>` (decisão 6) | ✅ |
| B4 | Botão do menu aponta para `#contato` | l.174 | 🟠 | WhatsApp + `data-cta="nav"` (decisão 7) | ✅ |
| B5 | Sem `target`/`rel` | l.536, 553–555 | 🟠 | `target="_blank" rel="noopener"` | ✅ |
| B6 | Sem medição | — | 🟠 | `assets/js/medicao.js`: GA4 `whatsapp_click` (`cta_id`) + `section_view` (1x/seção); Pixel `Contact`. IDs placeholder (P9) | ✅ |
| B7 | Alvos de toque <44px | l.164, 174, 553–555 | 🟠 | Classe `.hit` (área invisível ≥44px, desenho igual) | ✅ |

## C. SEO e compartilhamento

| # | Problema | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| C1 | Sem `meta description` | `<head>` | 🔴 | Adicionada | ✅ |
| C2 | Sem OG / Twitter card | `<head>` | 🔴 | Completo, imagem `og-rafadoc.jpg` 1200×630 (retrato + logo, sem texto novo) | ✅ |
| C3 | Sem `canonical` | `<head>` | 🟠 | `https://rafadoc.com.br/` | ✅ |
| C4 | Sem favicon (404) / `theme-color` | `<head>` | 🟠 | `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180), `#000000` | ✅ |
| C5 | `<title>` sem especialidade/cidade | l.6 | 🟠 | Versão longa (decisão 5); cidade 📌 P14 | ✅ / 📌 |
| C6 | Sem dados estruturados | — | 🟠 | JSON-LD `Physician`; CRM/RQE/endereço/horário comentados | ✅ / 📌 |
| C7 | Sem `robots.txt` / `sitemap.xml` | raiz | 🟠 | Criados | ✅ |
| C8 | Títulos lidos com palavras grudadas (`moldura.É`, `isn'ta`) | h1, h2 | 🟢 | `aria-label` com a frase inteira (h1, 5 h2, h3 e citação) | ✅ |
| C9 | "Prova real" é `h3` sob a Autoridade | l.490 | 🟢 | Mantido (hierarquia válida) | ➖ |
| C10 | Alts genéricos | l.352–388, 466 | 🟠 | Alts descrevem as fotos; logo do hero `alt=""` | ✅ |
| C11 | `alt=""` decorativos | l.412, 439–452 | — | Corretos | ➖ |
| C12 | Alts dos selos | l.324–327 | 🟢 | Conferidos com as imagens: "No filter. No bullshit.", "Do Not Obey", "Authenticity", "Skin" | ✅ |

## D. Legal e saúde

| # | Problema | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| D-1 | Rodapé sem CRM/RQE/responsável técnico | l.549–561 | 🔴 | "Responsável técnico: Dr. Rafael Juliani" visível; CRM e RQE comentados, prontos para descomentar | ✅ / 📌 P1, P2 |
| D-2 | "Especialista" | — | — | Não aparece | ➖ |
| D-3 | "Botox" | l.355 | 🟠 | "Toxina botulínica" (decisão 1) | ✅ |
| D-4 | Sem política de privacidade | — | 🔴 | `privacidade.html` (LGPD, GA4, Pixel, WhatsApp, bases legais, direitos) + links no rodapé | ✅ / 📌 P8 |
| D-5 | Sem consentimento | — | 🔴 | Banner Aceitar/Recusar na identidade; `localStorage` com try/catch; GA4/Pixel só após aceite; "Preferências de cookies" no rodapé | ✅ |
| D-6 | Frases em risco (promessa/superlativo) — **não reescritas**, aguardam a revisão de copy (decisão 3): | | 🟠 | | ⚖️ |
| | · "resultado que parece você num bom dia" | l.315 | | promessa de resultado | |
| | · "Pele nova na superfície. Renovação sem drama." | l.374 | | promessa de resultado | |
| | · "Textura que responde." | l.383 | | promessa de resultado | |
| | · "Firmeza e definição, com tecnologia que vai fundo." | l.392 | | promessa de resultado | |
| | · "Formação séria … técnica de sobra … Autoridade que não precisa gritar." | l.474–476 | | autopromoção sem credencial à vista (P5 resolve) | |
| | · "Congelar a cara? Não aqui." | l.356 | | comparação implícita com colegas | |
| | · "No filter. No bullshit." | l.202 | | decoro | |
| D-7 | Rosto de paciente nas fotos de serviço | `servico-1/2` | 🟠 | Ver N7 / P12 / decisão 10 | 📌 |
| D-8 | *(novo)* Modais de serviço levam o aviso "Procedimento médico. Indicação somente após avaliação; resultados variam de pessoa para pessoa." | modais | 🟢 | Adicionado | ✅ |

## E. Textos de rascunho visíveis

| # | Texto | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| E1 | "imagem real BEHANCE · candidata a teste" | l.468 | 🔴 | Removido | ✅ |
| E2 | "PMMA não consta — rejeitado…" | l.395 | 🔴 | Virou comentário | ✅ |
| E3 | Reels "[ REEL 9:16 ]…" + "@influencer — a confirmar" | l.494–508 | 🔴 | Mantidos (decisão 2) | ⚖️ N3 |
| E4 | "Embeds reais entram na fase de conteúdo…" | l.516 | 🔴 | Virou comentário | ✅ |
| E5 | "[ confirmar número/dados — placeholder: 47 99192 0666 ]" | l.541 | 🔴 | Virou comentário | ✅ / 📌 P6 |
| E6 | "Wireframe v1 — …" no rodapé | l.559 | 🔴 | Trocado pela linha legal + © 2026 Rafa Doc. | ✅ |
| E7 | Comentário "WIREFRAME v1" no `<head>` | l.8–18 | 🟠 | Reescrito | ✅ |
| E8 | E-mail | l.554 | 🟠 | Mantido (decisão 4) | 📌 P7 |
| E9 | CSS morto do wireframe | l.70–82, 257 | 🟢 | `.duotone-hint` e `background-size` órfão removidos; `.ph` fica (reels) | ✅ |

## F. Acessibilidade e motion

| # | Problema | Onde | Grav. | Correção | Status |
|---|---|---|---|---|---|
| F1 | Creme sobre vermelho 4,26:1 nos botões | l.174, 211 | 🟠 | Texto preto (decisão 8) | ✅ |
| F2 | `/40`, `/50`, `/30` com contraste baixo | l.395, 516, 558, reels | 🟠 | Saíram com E ou subiram para `/60` | ✅ |
| F3 | Texto sobre o vídeo do hero | l.193 | — | Overlay garante contraste | ➖ |
| F4 | Sem foco visível próprio | global | 🟠 | `:focus-visible` amarelo (preto sobre vermelho) | ✅ |
| F5 | Reduced-motion incompleto | l.61, hovers, vídeos | 🟢 | Smooth scroll, hover-zoom e vídeo do hero desligados | ✅ |
| F6 | Vídeos sem `aria-hidden` | l.187, 261 | 🟢 | Adicionado; label do círculo sem "(vídeo)" | ✅ |
| F7 | `#skin-circle` menor que o original | l.255–267 | 🟠 | Causa: máscara duplicada + perda do zoom de 170%. Máscara só no container + `scale(1.7)` no vídeo. Animação inalterada | ✅ |
| F8 | Link "Diferenciais" caía na Filosofia | l.168 | 🟠 | No desktop rola até 62% do trilho (cards visíveis); no celular, âncora normal | ✅ |
| F9 | Menu some no celular | l.167 | 🟢 | Aceitável em página única | ➖ |
| F10 | Marquee | l.434 | — | Ok | ➖ |
| F11 | *(novo)* Kickers vermelhos pequenos sobre creme 4,25:1; creme sobre o vermelho do CTA final ≈4,3:1 | kickers, `#contato` | 🟢 | Ver N2 | ⚖️ |
| F12 | Pin de 300vh no iOS Safari | — | 🟠 | Já desligado <1024px; iPad deitado/desktop precisa de teste real | 📌 Eddi |

## G. Itens dos concorrentes

| # | Item | Status |
|---|---|---|
| G1 | **Onde atende** (endereço, bairro, horário, particular, mapa `loading="lazy"`) antes do CTA final | ✅ estrutura pronta, `hidden` até P3/P4 |
| G2 | **Formação** na Autoridade | ✅ lista pronta, `hidden` até P5 |
| G3 | **Perguntas frequentes** com `<details>` (4 perguntas) | ✅ estrutura pronta, `hidden` até P10 |
| G4 | Blog, chatbot, lista de tecnologias | ➖ backlog |

---

## Como manter

- **CSS:** depois de mexer em classes do Tailwind no HTML, rodar `npm install` (uma vez) e `npm run build:css`, e
  commitar `assets/css/site.css`. O Cloudflare **não** precisa de build command.
- **Originais pesados:** em `_fontes/` (local, fora do git) e no histórico do git (`be2c99c`).
- **Publicar seções ocultas:** remover o atributo `hidden` de `#onde`, `#faq` e da lista de formação depois de
  preencher os placeholders.
- **GA4/Pixel:** trocar `G-XXXXXXX` e `PIXEL_ID` em `assets/js/medicao.js`. Enquanto forem placeholders, nada carrega.
