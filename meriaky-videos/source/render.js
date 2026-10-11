const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => {
  const [,, url, out, mode] = process.argv;
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  p.on('console', m => console.log('console:', m.text()));
  p.on('pageerror', e => console.log('pageerror:', e.message));
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  console.log('font ok:', await p.evaluate(() => document.fonts.check('800 40px Urbanist')));
  await p.evaluate(() => window.__capture());
  const stage = await p.$('#stage');
  const times = mode === 'stills' ? [3.6, 5.2, 9.5, 19.5, 30, 37, 44.5, 51.5] : null;
  if (times) {
    for (const t of times) { await p.evaluate(x => window.__render(x), t); await stage.screenshot({ path: `${out}/s-${t}.png` }); }
  } else {
    const N = 52 * 30;
    for (let i = 0; i < N; i++) {
      await p.evaluate(x => window.__render(x), i / 30);
      await stage.screenshot({ path: `${out}/f${String(i).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
      if (i % 150 === 0) console.log('frame', i);
    }
  }
  await b.close();
})();
