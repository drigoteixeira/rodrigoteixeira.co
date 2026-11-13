import { defineConfig } from 'astro/config';
import { redirects } from './src/lib/redirects';

// Endereço final do site. Ajuste aqui se o domínio mudar.
export default defineConfig({
  site: 'https://rodrigoteixeira.co',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { layout: 'constrained' },
  redirects,
});
