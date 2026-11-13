// Todas as imagens do site e seus textos alternativos (PT e EN).
// Para trocar uma imagem: substitua o arquivo em src/assets/ mantendo o mesmo nome.
import atlCover from '../assets/atlantic-cover.jpg';
import atlMobile from '../assets/atlantic-mobile.jpg';
import atlPage from '../assets/atlantic-page02.png';
import pref1 from '../assets/preferencia-open.jpg';
import pref2 from '../assets/preferencia-open2.jpg';
import pref3 from '../assets/preferencia-open3.jpg';
import riaCover from '../assets/riachuelo-cover.jpg';
import riaBench from '../assets/riachuelo-benchmarking.jpg';
import riaW1 from '../assets/riachuelo-workshop-1.jpg';
import riaW2 from '../assets/riachuelo-workshop-2.jpg';
import riaMatrix from '../assets/riachuelo-matrix.jpg';
import riaStruct from '../assets/riachuelo-structure.png';
import riaWire from '../assets/riachuelo-wireframes.png';
import portrait from '../assets/about-portrait.jpg';

export type Lang = 'pt' | 'en';

export const images = {
  atlCover: { src: atlCover, alt: { pt: 'Site da Atlantic em desktop e dispositivos móveis', en: 'Atlantic website on desktop and mobile devices' } },
  atlMobile: { src: atlMobile, alt: { pt: 'Versão mobile do site da Atlantic', en: 'Atlantic website, mobile version' } },
  atlPage: { src: atlPage, alt: { pt: 'Página interna do site da Atlantic', en: 'Atlantic website, inner page' } },
  pref1: { src: pref1, alt: { pt: 'Blog do Preferência à Vida', en: 'Preferência à Vida blog' } },
  pref2: { src: pref2, alt: { pt: 'Estatísticas do perfil do Preferência à Vida no Twitter', en: 'Preferência à Vida Twitter profile stats' } },
  pref3: { src: pref3, alt: { pt: 'Blog do Preferência à Vida em um iMac', en: 'Preferência à Vida blog on an iMac' } },
  riaCover: { src: riaCover, alt: { pt: 'Projeto Riachuelo', en: 'Riachuelo project' } },
  riaBench: { src: riaBench, alt: { pt: 'Benchmarking de concorrentes', en: 'Competitor benchmarking' } },
  riaW1: { src: riaW1, alt: { pt: 'Workshop com a equipe, etapa 1', en: 'Team workshop, step 1' } },
  riaW2: { src: riaW2, alt: { pt: 'Workshop com a equipe, etapa 2', en: 'Team workshop, step 2' } },
  riaMatrix: { src: riaMatrix, alt: { pt: 'Matriz de priorização', en: 'Prioritization matrix' } },
  riaStruct: { src: riaStruct, alt: { pt: 'Estrutura de navegação', en: 'Navigation structure' } },
  riaWire: { src: riaWire, alt: { pt: 'Wireframes das telas principais', en: 'Wireframes of the main screens' } },
  portrait: { src: portrait, alt: { pt: 'Retrato de Rodrigo Teixeira', en: 'Portrait of Rodrigo Teixeira' } },
} as const;

export type ImageKey = keyof typeof images;
