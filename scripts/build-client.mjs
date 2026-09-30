/**
 * Build script: bundles the client with esbuild and copies index.html into
 * client/public so the server can serve everything from one folder.
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dev = process.argv.includes('--dev');

await build({
  entryPoints: [path.join(root, 'client/src/main.ts')],
  bundle: true,
  outfile: path.join(root, 'client/public/app.js'),
  format: 'iife',
  target: 'es2020',
  minify: !dev,
  sourcemap: dev,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': dev ? '"development"' : '"production"' },
});

fs.copyFileSync(path.join(root, 'client/index.html'), path.join(root, 'client/public/index.html'));
console.log('client built → client/public/');
