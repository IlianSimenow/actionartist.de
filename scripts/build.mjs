import { cp, mkdir, readdir, readFile, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'site');
const output = path.join(root, 'dist');
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? files(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const inputs = await files(source);
let references = 0;
for (const file of inputs.filter(file => /\.(html|css)$/.test(file))) {
  const content = await readFile(file, 'utf8');
  const urls = file.endsWith('.html')
    ? [...content.matchAll(/\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi)].map(match => match[1])
    : [...content.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/gi)].map(match => match[1]);
  for (const url of urls) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    if (!pathname) continue;
    const target = path.resolve(pathname.startsWith('/') ? source : path.dirname(file), pathname.replace(/^\//, ''));
    const relative = path.relative(source, target);
    if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error(`Reference outside site: ${url}`);
    const info = await stat(target).catch(() => null);
    if (!info?.isFile()) throw new Error(`Missing file: ${path.relative(source, file)} -> ${url}`);
    references++;
  }
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log(`Build successful: ${inputs.length} files, ${references} local references checked -> dist/`);

const { applySeo } = await import('./seo.mjs');
await applySeo(root, output);
