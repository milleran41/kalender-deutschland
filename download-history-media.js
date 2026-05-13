const fs = require('fs');
const path = require('path');

const root = __dirname;
const outDir = path.join(root, 'assets', 'history');
const sources = [
  path.join(root, 'js', 'history-data.js'),
  path.join(root, 'js', 'history-extra.js')
];

function safeName(file) {
  return file
    .normalize('NFKD')
    .replace(/[^\w.\-()]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function fileUrl(file) {
  return 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file).replace(/%2F/g, '/');
}

function collectFiles() {
  const names = new Set();
  for (const source of sources) {
    const text = fs.readFileSync(source, 'utf8');
    const re = /img\('([^']+)'\)/g;
    let match;
    while ((match = re.exec(text))) names.add(match[1]);
  }
  return Array.from(names);
}

async function downloadOne(file) {
  const target = path.join(outDir, safeName(file));
  if (fs.existsSync(target) && fs.statSync(target).size > 0) {
    console.log('skip', file);
    return;
  }

  const response = await fetch(fileUrl(file), {
    redirect: 'follow',
    headers: { 'User-Agent': 'KalenderDeutschlandHistoryMedia/1.0' }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${file}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(target, buffer);
  console.log('saved', safeName(file), buffer.length);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = collectFiles();
  console.log(`Found ${files.length} media files`);
  const failed = [];

  for (const file of files) {
    try {
      await downloadOne(file);
    } catch (error) {
      console.warn('failed', file, error.message);
      failed.push({ file, error: error.message });
    }
  }

  fs.writeFileSync(
    path.join(outDir, 'download-report.json'),
    JSON.stringify({ downloadedAt: new Date().toISOString(), total: files.length, failed }, null, 2),
    'utf8'
  );

  if (failed.length) process.exitCode = 1;
}

main();
