// Mapa do site (sitemap.xml): lista todas as páginas e liga cada uma à versão no outro idioma.
// Quando criar uma página nova, adicione o endereço dela na lista "pages".
import type { APIRoute } from 'astro';
import { langs, path } from '../lib/i18n';
import { abs } from '../lib/seo';

const pages = ['', 'work', 'work/atlantic', 'work/preferencia', 'work/riachuelo', 'about'] as const;

export const GET: APIRoute = () => {
  const urls = langs.flatMap((lang) =>
    pages.map((p) => {
      const alt = `
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${abs(path('pt', p))}" />
    <xhtml:link rel="alternate" hreflang="en" href="${abs(path('en', p))}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(path('pt', p))}" />`;
      return `  <url>
    <loc>${abs(path(lang, p))}</loc>${alt}
  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
