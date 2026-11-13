// Tudo o que ajuda buscadores e redes sociais a entender o site: endereços, dados estruturados (JSON-LD) e imagens de compartilhamento.
import type { Lang } from './images';

export const SITE = 'https://rodrigoteixeira.co';
export const SITE_NAME = 'Rodrigo Teixeira';
export const PERSON_ID = `${SITE}/#rodrigo-teixeira`;
export const WEBSITE_ID = `${SITE}/#website`;

export const abs = (p: string) => new URL(p, SITE).href;

// Perfis públicos que confirmam que este site pertence à mesma pessoa.
export const sameAs = ['https://www.linkedin.com/in/drigoteixeira', 'https://drigoteixeira.medium.com'];

export const ogLocale: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US' };

/** Corta o texto em no máximo n caracteres sem quebrar palavra. */
export const clip = (s: string, n = 158) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

export function personLd(lang: Lang, description: string) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    url: abs(`/${lang}/`),
    image: abs('/og/about.png'),
    jobTitle: 'Design Lead',
    description,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
    sameAs,
    knowsLanguage: ['pt-BR', 'en'],
  };
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE,
    name: SITE_NAME,
    inLanguage: ['pt-BR', 'en'],
    publisher: { '@id': PERSON_ID },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

export function caseLd(o: { lang: Lang; name: string; description: string; url: string; year: string; image: string }) {
  return {
    '@type': 'CreativeWork',
    name: o.name,
    description: o.description,
    url: o.url,
    image: o.image,
    dateCreated: o.year,
    inLanguage: o.lang === 'pt' ? 'pt-BR' : 'en',
    creator: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export const graph = (nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
