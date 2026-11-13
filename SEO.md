# SEO do site rodrigoteixeira.co

Documento em linguagem simples: o que foi feito, por quê, e o que você precisa fazer depois que o site estiver no ar.

## 1. Checklist de boas práticas (estado atual)

| Prática | Para que serve | Estado |
|---|---|---|
| Um título único por página (até ~60 caracteres) | É o texto azul que aparece no Google | Feito, 12 páginas conferidas |
| Descrição única por página (70–160 caracteres) | É o texto cinza abaixo do título no Google | Feito |
| Endereço canônico (`canonical`) | Diz ao Google qual é o endereço "oficial" de cada página | Feito |
| `hreflang` PT-BR / EN / x-default | Mostra a versão certa para cada idioma e evita conteúdo "duplicado" | Feito, nas duas direções e no sitemap |
| `sitemap.xml` | Lista todas as páginas para o Google encontrar e indexar | Feito (12 endereços) |
| `robots.txt` | Libera o rastreio e aponta para o sitemap | Feito |
| Um `h1` por página, títulos em ordem | Estrutura que o Google e leitores de tela entendem | Feito |
| Texto alternativo em todas as imagens | Acessibilidade e busca por imagem | Feito |
| Dados estruturados (JSON-LD) | Ajuda o Google a entender que Rodrigo é uma pessoa, o site, os cases e o caminho de navegação | Feito: Person, WebSite, CreativeWork, BreadcrumbList |
| Open Graph e Twitter Card + imagem 1200×630 | Pré-visualização bonita no LinkedIn, WhatsApp, Slack, X | Feito, 8 imagens |
| Idioma da página (`lang`) | Indica ao navegador e ao Google o idioma | Feito (`pt-BR` e `en`) |
| Página 404 própria, sem indexação | Evita que erros apareçam no Google | Feito |
| Redirecionamento dos endereços antigos | Preserva links externos e posição no Google | Feito, 43 endereços |
| Ícones (favicon, Apple Touch, manifest) | Identidade na aba e na tela inicial do celular | Feito (proposta simples: ponto rosa sobre fundo escuro) |
| Imagens em AVIF/WebP, com largura e altura | Site rápido (fator de ranqueamento) | Feito |
| Fontes hospedadas no próprio site | Sem requisições externas, mais rápido | Feito |
| HTTPS | Exigido pelo Google | Ligar no GitHub Pages (guia, parte 4) |

## 2. Sitemap: XML ou TXT?

Foi criado o **sitemap.xml** (`https://rodrigoteixeira.co/sitemap.xml`). O formato TXT lista só endereços e não consegue dizer ao Google qual página é a versão em inglês de qual em português. Como o site tem dois idiomas, o XML é o formato correto. Um TXT seria redundante e só serviria para sites simples.

Quando criar uma página nova, acrescente o endereço dela na lista `pages` do arquivo `src/pages/sitemap.xml.ts`.

O sitemap não traz data de modificação (`lastmod`) de propósito. O Google ignora datas imprecisas, e uma data errada atrapalha mais do que ajuda.

## 3. Endereços antigos (o ponto que mais exige sua decisão)

O site antigo tinha:

| Antigo | Hoje leva para |
|---|---|
| `/about/`, `/sobre/` | `/pt/about/` |
| `/projects/` | `/pt/work/` |
| `/projects/atlantic/`, `/preferencia/`, `/riachuelo/` | O case equivalente em `/pt/work/...` |
| `/projects/porto-seguro/`, `consa`, `educacao`, `governosp`, `desenvolvesp`, `archive` | `/pt/work/` (não existem mais como páginas) |
| `/blog/` e 30 artigos (2008 a 2022) | `/pt/` (provisório) |
| `/about/cv-rodrigo-teixeira.pdf` e a versão em inglês | Mantidos no mesmo endereço |

O GitHub Pages não faz redirecionamento "de servidor" (301). O site cria uma página de passagem para cada endereço antigo, que o Google trata como redirecionamento. Funciona, mas é um pouco mais lento do que um 301 de verdade.

**Decisão pendente: o blog.** Os 30 artigos são conteúdo antigo com histórico de busca. Mandar todos para a Home faz o Google considerá-los "erro suave" e, com o tempo, eles saem do índice. Opções: (a) aceitar a perda, (b) recriar uma seção de blog no site novo, (c) manter só os artigos que ainda valem a pena. Enquanto isso, nada quebra: quem clicar num link antigo cai na Home.

## 4. O que fazer depois de publicar

1. **Google Search Console** (search.google.com/search-console): adicione `rodrigoteixeira.co` como "Domínio", valide pelo DNS (o Search Console mostra um código para colar no painel do seu provedor de domínio) e envie `https://rodrigoteixeira.co/sitemap.xml` em Sitemaps.
2. **Pedir indexação** da Home em "Inspeção de URL", clicando em "Solicitar indexação". Repita para Work, About e os três cases.
3. **Bing Webmaster Tools** (bing.com/webmasters): importe o site direto do Search Console. Em um clique o Bing também passa a usar o sitemap.
4. **Teste de compartilhamento**: cole o endereço no LinkedIn Post Inspector (linkedin.com/post-inspector) e confira a imagem e o título.
5. **Teste de dados estruturados**: search.google.com/test/rich-results, com o endereço de cada página.
6. **Atualize os links** em LinkedIn, Medium, currículo e assinatura de e-mail para `https://rodrigoteixeira.co/pt/` (ou `/en/`).
7. Confira o **www**: no repositório, Settings → Pages, o domínio é `rodrigoteixeira.co` (sem www). O GitHub redireciona o `www` automaticamente se o DNS estiver configurado para os dois.

## 5. Como manter

| Quero... | Onde mexer |
|---|---|
| Mudar título e descrição de uma página | No arquivo da página em `src/pages/[lang]/` (variáveis `title` e `description`) |
| Trocar a imagem de compartilhamento | Substitua o arquivo em `public/og/` mantendo o nome (1200×630). Para regenerar todas: `node scripts/make-og.cjs` |
| Adicionar ou tirar uma página do sitemap | `src/pages/sitemap.xml.ts` |
| Adicionar um redirecionamento | `src/lib/redirects.ts` |
| Trocar o ícone | Arquivos `favicon.*`, `apple-touch-icon.png` e `icon-*.png` em `public/` |

## 6. Limites e cuidados

- Nenhuma ferramenta garante posição no Google. SEO técnico (esta lista) deixa o caminho livre. O que faz o site subir é conteúdo útil e links de outros sites apontando para ele.
- O Google leva de dias a semanas para indexar um site novo.
- O cargo no dado estruturado de Pessoa está como "Design Lead", conforme seu perfil. Se preferir outro, altere `jobTitle` em `src/lib/seo.ts`.
- Os textos da página (títulos e descrições) usam apenas informações já presentes no site.
