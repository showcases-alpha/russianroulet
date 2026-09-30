/**
 * Screenshot analyzer — quick numeric QA of captured screenshots
 * (brightness, warmth, letterbox detection). Requires devDependency pngjs.
 * Usage: node test/analyze-screens.mjs [dir]
 */
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import { fileURLToPath } from 'node:url';

const dir = process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), 'screenshots');
if (!fs.existsSync(dir)) { console.log('no screenshots yet'); process.exit(0); }
for (const f of fs.readdirSync(dir).sort()) {
  if (!f.endsWith('.png')) continue;
  const png = PNG.sync.read(fs.readFileSync(path.join(dir, f)));
  const { width: w, height: h, data } = png;
  const rowAvg = (y) => { let s = 0; for (let x = 0; x < w; x += 8) { const i = (y * w + x) * 4; s += (data[i] + data[i+1] + data[i+2]) / 3; } return s / (w / 8); };
  let sum = 0, bright = 0, warm = 0, n = 0;
  for (let i = 0; i < data.length; i += 16) {
    const r = data[i], g = data[i+1], b = data[i+2];
    const l = (r + g + b) / 3;
    sum += l; if (l > 40) bright++; if (r > b + 12) warm++; n++;
  }
  console.log(
    f.padEnd(24), 'avg=' + (sum/n).toFixed(1), 'bright%=' + (100*bright/n).toFixed(1),
    'warm%=' + (100*warm/n).toFixed(1),
    'letterbox=' + (rowAvg(8) < 2 && rowAvg(h-8) < 2 ? 'yes' : 'no'),
  );
}
