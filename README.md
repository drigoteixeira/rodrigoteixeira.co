# rodrigoteixeira.co (versão 2026)

Site do portfólio de Rodrigo Teixeira, feito com [Astro](https://astro.build). Duas línguas: português (`/pt/`) e inglês (`/en/`).

## Onde mudar cada coisa (sem mexer em código)

| Quero mudar... | Arquivo |
|---|---|
| Textos da Home, rodapé e chamada para contato | `src/content/home.json` |
| Textos da página Work e dos "outros projetos" | `src/content/work.json` |
| Textos do About | `src/content/about.json` |
| Textos de cada case | `src/content/atlantic.json`, `preferencia.json`, `riachuelo.json` |
| Uma imagem | Troque o arquivo em `src/assets/` mantendo o **mesmo nome** |
| Texto alternativo das imagens (acessibilidade) | `src/lib/images.ts` |
| Cores, fontes e espaçamentos | `src/styles/tokens.css` |
| Títulos, descrições e imagens de compartilhamento (SEO) | veja `SEO.md` |

Cada arquivo de texto tem dois blocos: `"pt"` e `"en"`. Edite o texto entre aspas e mantenha o resto como está.

## Rodar no seu computador

1. Instale o [Node.js](https://nodejs.org) (versão 22 ou mais nova).
2. Na pasta do projeto: `npm install` (só na primeira vez).
3. `npm run dev` e abra o endereço que aparecer (normalmente http://localhost:4321).

## Publicar

O arquivo `.github/workflows/deploy.yml` publica o site no GitHub Pages sozinho sempre que algo novo chega na branch `main`. O passo a passo da primeira publicação está no guia entregue junto com o projeto.

## Estrutura

```
src/
  content/    textos (JSON) em PT e EN
  assets/     imagens originais
  styles/     tokens.css (design) e global.css
  components/ peças reutilizáveis (menu, rodapé, cards, imagens)
  layouts/    Base.astro (estrutura comum a todas as páginas)
  lib/        imagens, idiomas e estrutura dos cases
  pages/      uma pasta por idioma: [lang]/
```

Decisões de design: veja `design.md` (v2) no projeto "Portfólio 2026".
