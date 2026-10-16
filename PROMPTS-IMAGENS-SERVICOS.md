# Imagens dos serviços — prompts para gerar por IA

Para o Lufe ou para o Eddi rodarem no Midjourney, Firefly, Imagen, Flux ou similar. Eu (Claude) não consigo gerar
imagens nesta sessão. O site já está pronto para recebê-las (ver "Entrega" no fim).

## Regras (marca + CFM)

- **Sem rosto de paciente, sem "antes e depois", sem "resultado".** A Res. CFM 2.336/2023 restringe imagem de
  paciente e promessa de resultado. Uma pessoa gerada por IA "com o procedimento feito" pode ser lida como
  resultado falso. Então: mãos, instrumentos, matéria, textura, luz. Nada de rosto reconhecível.
- **Paleta ID-Visual 2025:** Vivid Red `#ED0A15`, Selective Yellow `#FFB600`, Black `#000`, Cosmic Latte `#FFF8E9`.
  Duotone vermelho/preto ou still-life em fundo preto, com um ponto de amarelo no máximo.
- **Clima:** editorial, fashion, cinematográfico, grão de filme 35mm, sombras profundas. Nada de clínica branca,
  azul hospitalar, "harmonização de Instagram", luxo dourado ou estética fofa.
- **Formato:** vertical **3:4**, mínimo **1200 × 1600 px**. O assunto fica no **centro**: o card corta em 3:4 e
  o pop-up mostra uma faixa horizontal no celular.
- Gerar **3 variações por serviço** e escolher na própria página (validação visual na LP, como manda o CLAUDE.md).

## Base comum (colar no fim de cada prompt)

```
editorial fashion still life, cinematic hard light, deep black shadows, monochrome red duotone (#ED0A15 and black),
35mm film grain, high contrast, minimal composition, centered subject, vertical 3:4, shot on medium format,
magazine campaign, no text, no logo
```

**Negativo** (se a ferramenta aceitar): `face, patient, before and after, hospital, white clinic, blue, pastel,
gold, glitter, cartoon, text, watermark, smiling model, plastic skin`

## Prompts por serviço

| Serviço | Ideia | Prompt (antes da base comum) |
|---|---|---|
| **Toxina botulínica** | precisão, dose, controle; "a expressão é sua" | `a gloved hand in black nitrile holding a tiny insulin syringe upright like a pen, single drop of liquid at the needle tip catching the light, macro detail` |
| **Preenchimento** | volume, contorno, desenho | `a clear gel droplet suspended on a sculptural black surface, soft volume and contour, light carving the curves like a sculpture, macro` |
| **Peelings** | renovação da superfície, camadas | `a thin translucent layer peeling off a glossy red surface, liquid acid gloss, glass dropper with amber serum in the corner, macro texture` |
| **Microagulhamento** | estímulo, pontos, textura | `macro of a precise grid of tiny points of light on red skin-like texture, a dermapen tip in black silhouette at the edge, rhythmic pattern` |
| **Ultrassom MPT** | energia em profundidade, ondas | `concentric sound waves rippling through a dense red gel surface, sleek black handheld device tip touching the center, energy going deep` |

Variações que valem testar: trocar "monochrome red duotone" por "black background, single red light" (fica mais
escuro e combina com o overlay preto dos cards ímpares), ou incluir "selective yellow rim light" para um ponto de
energia.

## Entrega

Entregar os arquivos em PNG/JPG com estes nomes. Eu converto para WebP (480 e 960 px) e troco no HTML: os pontos
estão marcados com `[IMAGEM IA PENDENTE]` no `index.html`.

| Serviço | Arquivo |
|---|---|
| Toxina botulínica | `servico-toxina-botulinica.png` |
| Preenchimento | `servico-preenchimento.png` |
| Peelings | `servico-peelings.png` |
| Microagulhamento | `servico-microagulhamento.png` |
| Ultrassom MPT | `servico-ultrassom-mpt.png` |
