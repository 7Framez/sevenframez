// node scripts/crawl-and-list-media.mjs https://your-live-site
import fs from "fs";
import fetch from "node-fetch";

const START = process.argv[2];
if (!START) {
  console.error("Usage: node scripts/crawl-and-list-media.mjs <url>");
  process.exit(1);
}

const seen = new Set([START]);
const pages = [];
const media = new Set();

function abs(b, u) {
  try {
    return new URL(u, b).href;
  } catch {
    return null;
  }
}

function sameOrigin(a, b) {
  try {
    const A = new URL(a),
      B = new URL(b);
    return A.origin === B.origin;
  } catch {
    return false;
  }
}

async function crawl(url) {
  if (pages.includes(url)) return;
  pages.push(url);
  const r = await fetch(url);
  const html = await r.text();

  // enqueue internal links
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const u = abs(url, m[1]);
    if (u && sameOrigin(START, u) && !pages.includes(u)) seen.add(u);
  }
  // gather media
  const pats = [
    /<img[^>]+src="([^"]+)"/g,
    /<source[^>]+src="([^"]+)"/g,
    /<video[^>]+src="([^"]+)"/g,
    /url\((['"]?)([^"')]+)\1\)/g,
  ];
  for (const p of pats)
    for (const m of html.matchAll(p)) media.add(abs(url, m[2] || m[1]));
}

(async () => {
  const q = [...seen];
  while (q.length) await crawl(q.shift());
  fs.mkdirSync("migration", { recursive: true });
  fs.writeFileSync(
    "migration/media-urls.txt",
    [...media].filter(Boolean).join("\n")
  );
  console.log(`Pages: ${pages.length}, Media: ${media.size}`);
})();
