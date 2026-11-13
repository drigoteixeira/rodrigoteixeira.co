// Estrutura de cada case: quais textos e imagens aparecem, em que ordem.
// Os textos em si ficam em src/content/<case>.json (um bloco PT e um EN).
import type { ImageKey } from './images';

export type Block = { p: string } | { ol: string[] } | { ul: string[] };
export type Section =
  | { kind: 'text'; id: 'context' | 'process' | 'decision' | 'result'; label: string; blocks: Block[]; numbers?: { n: string; l: string }[] }
  | { kind: 'pair'; a: ImageKey; b: ImageKey; ar: [string, string, string] }
  | { kind: 'riaBench' }
  | { kind: 'riaWorkshop' }
  | { kind: 'riaMatrix' }
  | { kind: 'riaWire' };

export interface CaseDef {
  slug: 'atlantic' | 'preferencia' | 'riachuelo';
  cover: ImageKey;
  meta: ('client' | 'role' | 'team' | 'year' | 'scope')[];
  next: 'atlantic' | 'preferencia' | 'riachuelo';
  sections: Section[];
}

export const caseDefs: CaseDef[] = [
  {
    slug: 'atlantic', cover: 'atlCover', meta: ['client', 'role', 'team', 'year', 'scope'], next: 'preferencia',
    sections: [
      { kind: 'text', id: 'context', label: 's_context', blocks: [{ p: 'b_context' }] },
      { kind: 'text', id: 'process', label: 's_process', blocks: [{ p: 'b_process' }] },
      { kind: 'text', id: 'decision', label: 's_decision', blocks: [{ p: 'b_decision1' }, { p: 'b_decision2' }] },
      { kind: 'pair', a: 'atlMobile', b: 'atlPage', ar: ['5 / 4', '5 / 4', '4 / 5'] },
      { kind: 'text', id: 'result', label: 's_result', blocks: [{ p: 'b_result' }], numbers: [{ n: 'n1', l: 'n1l' }, { n: 'n2', l: 'n2l' }] },
    ],
  },
  {
    slug: 'preferencia', cover: 'pref1', meta: ['client', 'role', 'year', 'scope'], next: 'riachuelo',
    sections: [
      { kind: 'text', id: 'context', label: 's_context', blocks: [{ p: 'b1' }] },
      { kind: 'text', id: 'process', label: 's_process', blocks: [{ p: 'b2' }] },
      { kind: 'text', id: 'decision', label: 's_decision', blocks: [{ p: 'b3' }] },
      { kind: 'pair', a: 'pref2', b: 'pref3', ar: ['5 / 4', '5 / 4', '4 / 5'] },
      { kind: 'text', id: 'result', label: 's_result', blocks: [{ p: 'b4' }, { p: 'b5' }] },
    ],
  },
  {
    slug: 'riachuelo', cover: 'riaCover', meta: ['client', 'role', 'year', 'scope'], next: 'atlantic',
    sections: [
      { kind: 'text', id: 'context', label: 's_context', blocks: [{ p: 'b1' }, { p: 'b2' }] },
      {
        kind: 'text', id: 'process', label: 's_process',
        blocks: [
          { p: 'b3' }, { p: 'b4' }, { ol: ['b5', 'b6', 'b7'] }, { p: 'b8' }, { p: 'b9' },
          { ul: ['b10', 'b11', 'b12'] }, { p: 'b13' }, { p: 'b14' },
        ],
      },
      { kind: 'riaBench' },
      { kind: 'riaWorkshop' },
      { kind: 'text', id: 'decision', label: 's_decision', blocks: [{ p: 'b15' }, { p: 'b16' }] },
      { kind: 'riaMatrix' },
      { kind: 'riaWire' },
      { kind: 'text', id: 'result', label: 's_result', blocks: [{ p: 'b17' }, { p: 'b18' }] },
    ],
  },
];
