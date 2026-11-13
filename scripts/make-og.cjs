// Gera as imagens de compartilhamento (1200×630) usadas quando o site é colado no LinkedIn, WhatsApp, etc.
// Uso (opcional, só se quiser refazer): node scripts/make-og.cjs   (precisa do pacote "playwright")
const { chromium } = require('playwright');
const path = require('path');
const root = path.resolve(__dirname, '..');
const f = (p) => 'file://' + path.join(root, p);
const fonts = `
@font-face{font-family:B;src:url(${f('node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2')});font-weight:200 800}
@font-face{font-family:I;src:url(${f('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')});font-weight:100 900}`;

const items = [
  { out: 'home-pt', title: 'Designer. Lidero times e entrego produtos de ponta a ponta.', sub: 'Lead Product Design em São Paulo' },
  { out: 'home-en', title: 'Designer. I lead teams and deliver products end to end.', sub: 'Lead Product Design in São Paulo' },
  { out: 'work-pt', title: 'Cases selecionados', sub: 'Atlantic · Preferência à Vida · Riachuelo' },
  { out: 'work-en', title: 'Selected work', sub: 'Atlantic · Preferência à Vida · Riachuelo' },
  { out: 'about', title: 'Rodrigo Teixeira', sub: 'Designer · São Paulo, Brasil', img: 'src/assets/about-portrait.jpg', pos: '50% 22%' },
  { out: 'case-atlantic', title: 'Atlantic', sub: '2018', img: 'src/assets/atlantic-cover.jpg', pos: '35% 50%' },
  { out: 'case-preferencia', title: 'Preferência à Vida', sub: '2012', img: 'src/assets/preferencia-open.jpg', pos: '50% 50%' },
  { out: 'case-riachuelo', title: 'Riachuelo', sub: '2018', img: 'src/assets/riachuelo-cover.jpg', pos: '60% 50%' },
];

const html = (it) => `<!doctype html><meta charset="utf-8"><style>${fonts}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#faf8f5;color:#141414;font-family:I,sans-serif;position:relative;overflow:hidden}
.top{position:absolute;left:64px;top:60px;display:flex;align-items:center;gap:12px;font-size:26px;font-weight:500}
.dot{width:14px;height:14px;border-radius:99px;background:#d6104f}
.t{position:absolute;left:64px;top:170px;width:${it.img ? 540 : 1060}px;font-family:B,sans-serif;font-weight:500;letter-spacing:-.04em;line-height:.98;font-size:${it.img ? (it.title.length > 12 ? 84 : 112) : (it.title.length > 30 ? 92 : 112)}px}
.s{position:absolute;left:64px;bottom:60px;font-size:28px;color:#6b6760}
.url{position:absolute;right:64px;bottom:60px;font-size:24px;color:#6b6760}
.img{position:absolute;right:64px;top:64px;width:480px;height:502px;border-radius:28px;overflow:hidden;background:#f1eee9}
.img img{width:100%;height:100%;object-fit:cover;object-position:${it.pos || 'center'}}
${it.img ? '.url{display:none}' : ''}
</style>
<div class="top"><span class="dot"></span>Rodrigo Teixeira</div>
<div class="t">${it.title}</div>
<div class="s">${it.sub}</div>
<div class="url">rodrigoteixeira.co</div>
${it.img ? `<div class="img"><img src="${f(it.img)}"></div>` : ''}`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const fs = require('fs'); const tmp = path.join(root, 'scripts', '_og.html');
  for (const it of items) {
    fs.writeFileSync(tmp, html(it));
    await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
    await p.screenshot({ path: path.join(root, 'public/og', it.out + '.png') });
    console.log('ok', it.out);
  }
  fs.unlinkSync(tmp); await b.close();
})();
