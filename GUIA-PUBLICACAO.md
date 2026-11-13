# Guia de publicação (sem precisar programar)

Você vai usar três coisas: o arquivo `portfolio-2026.zip` (código do site), o arquivo `site-pronto-para-preview.zip` (o site já montado) e o site do GitHub.

## Parte 1. Ver o site no ar antes de publicar (5 minutos, sem risco)

1. Descompacte `site-pronto-para-preview.zip`. Vai aparecer uma pasta `dist`.
2. Abra https://app.netlify.com/drop no navegador (crie uma conta gratuita se pedir).
3. Arraste a pasta `dist` para a página. Em segundos você recebe um endereço de teste (algo como `nome-aleatorio.netlify.app`).
4. Abra em celular e computador, troque PT/EN, clique nos cases. Anote o que quiser mudar e me envie.

O site atual (rodrigoteixeira.co) não é afetado em nada.

## Parte 2. Criar o repositório novo no GitHub

1. Entre em https://github.com/new
2. Nome: `rodrigoteixeira-site`. Deixe **Public**. Não marque "Add a README".
3. Clique em **Create repository**.
4. Na página seguinte, clique em **uploading an existing file**.
5. Descompacte `portfolio-2026.zip`. Abra a pasta e **arraste todo o conteúdo de dentro dela** (não a pasta em si) para o GitHub. Se a pasta `.github` não subir (por ser oculta), faça assim: clique em **Add file → Create new file**, digite no nome `.github/workflows/deploy.yml`, abra o arquivo `deploy.yml` do zip em qualquer editor de texto e cole o conteúdo.
6. Clique em **Commit changes**.

## Parte 3. Ligar a publicação automática

1. No repositório novo: **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **GitHub Actions**.
3. Vá na aba **Actions**. Aguarde o fluxo "Publicar site" ficar com o ✔ verde (cerca de 2 minutos).

## Parte 4. Trocar o site antigo pelo novo no seu domínio

Faça isso só depois de aprovar o preview. O domínio só pode apontar para um repositório por vez.

1. No repositório antigo (`drigoteixeira.github.io`): **Settings → Pages → Custom domain**, apague `rodrigoteixeira.co` e salve.
2. No repositório novo: **Settings → Pages → Custom domain**, digite `rodrigoteixeira.co` e salve.
3. Quando aparecer a opção, marque **Enforce HTTPS**. O certificado pode levar de alguns minutos a 1 hora.
4. Acesse https://rodrigoteixeira.co. Deve abrir o site novo.

Se algo der errado, desfaça os passos 1 e 2 na ordem inversa e o site antigo volta.

## Atenção

- O novo site usa `/pt/...` e `/en/...`. Links antigos em currículo, LinkedIn ou artigos vale atualizar.
- Depois de publicar, siga o `SEO.md` (seção 4): Google Search Console, envio do sitemap e testes de compartilhamento.
- Os endereços antigos redirecionam para o site novo, mas os 30 artigos do blog antigo caem na Home por enquanto (veja `SEO.md`, seção 3).
- Para trocar textos e imagens depois, veja o `README.md` (tabela "Onde mudar cada coisa").
