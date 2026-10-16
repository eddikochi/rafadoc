# Rafa Doc — site

Landing page de **rafadoc.com.br**, estática, publicada pelo Cloudflare Pages.

## Estrutura

| Pasta | O que é | Público? |
|---|---|---|
| `public/` | **O site** (HTML, CSS, JS, imagens, vídeos, `_headers`, `robots.txt`, `sitemap.xml`) | Sim |
| `_interno/` | Relatório de auditoria, prompts de imagens, documentos de trabalho | **Não** |
| `src/`, `tailwind.config.js`, `package.json` | Build do CSS (Tailwind) | Não |
| `_fontes/` | Originais pesados (fora do git, só na máquina local) | Não |

## Cloudflare Pages — configuração obrigatória

Em **Settings → Builds & deployments**:

- **Build command:** *(vazio)*
- **Build output directory:** `public`

Com isso, só o conteúdo de `public/` vai para o ar. `_interno/` e o resto nunca ficam acessíveis.
Se o diretório de saída ficar errado, o site abre em branco (404), o que é fácil de perceber. Nada interno vaza.

## CSS

O CSS é Tailwind compilado (não usar o CDN). Depois de mudar classes no HTML ou em `public/assets/js/*.js`:

```bash
npm install
npm run build:css
```

Commitar `public/assets/css/site.css` junto.

## Conteúdo para preencher

- **Reels e prints de prova social:** listas `REELS` e `PRINTS` no início de `public/assets/js/prova.js`.
- **GA4 e Meta Pixel:** IDs em `public/assets/js/medicao.js`.
- **CRM, RQE, endereço, horário, formação, FAQ:** placeholders `[PLACEHOLDER: …]` em `public/index.html`.
- **Imagens dos serviços:** ver `_interno/PROMPTS-IMAGENS-SERVICOS.md`.
