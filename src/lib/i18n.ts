import home from '../content/home.json';
import work from '../content/work.json';
import about from '../content/about.json';
import atlantic from '../content/atlantic.json';
import preferencia from '../content/preferencia.json';
import riachuelo from '../content/riachuelo.json';
import menu from '../content/menu.json';
import type { Lang } from './images';

export type { Lang };
export const langs: Lang[] = ['pt', 'en'];

const pages = { home, work, about, atlantic, preferencia, riachuelo, menu } as const;
export type PageKey = keyof typeof pages;

export function t(page: PageKey, lang: Lang): Record<string, string> {
  return pages[page][lang] as Record<string, string>;
}

// Textos que se repetem em todas as páginas (rodapé, avisos, menu).
export function common(lang: Lang) {
  return { ...t('home', lang), ...t('menu', lang) } as Record<string, string>;
}

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');

// Endereços das páginas, sempre com o idioma na frente.
export const path = (lang: Lang, page: '' | 'work' | 'about' | 'work/atlantic' | 'work/preferencia' | 'work/riachuelo') =>
  `/${lang}/${page ? page + '/' : ''}`;

export const EMAIL = 'hello@rodrigoteixeira.co';
export const MAILTO = `mailto:${EMAIL}`;
export const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/drigoteixeira' },
  { name: 'Medium', href: 'https://drigoteixeira.medium.com' },
  { name: 'Savee', href: 'https://savee.it/rodrigoteixeira' },
  { name: 'Calendly', href: 'https://calendly.com/drigosteixeira/60min' },
];

// Os três cases: ordem de navegação ("Próximo case" é cíclico).
export const cases = [
  { slug: 'atlantic', year: '2018', img: 'atlCover', ctx: 'c1', ar: '16 / 9' },
  { slug: 'preferencia', year: '2012', img: 'pref1', ctx: 'c2', ar: '5 / 4' },
  { slug: 'riachuelo', year: '2018', img: 'riaCover', ctx: 'c3', ar: '5 / 4' },
] as const;
export const caseNames: Record<string, string> = { atlantic: 'Atlantic', preferencia: 'Preferência à Vida', riachuelo: 'Riachuelo' };
