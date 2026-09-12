const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.txt', '.map']);

function rewriteAssets(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(extension)) {
    return;
  }

  const original = fs.readFileSync(filePath, 'utf8');
  const updated = original.replace(/(["'(=,:\s])\/assets\//g, '$1./assets/');

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, 'utf8');
  }
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      rewriteAssets(fullPath);
    }
  }
}

if (!fs.existsSync(buildDir)) {
  throw new Error(`Build directory not found: ${buildDir}`);
}

walk(buildDir);
console.log('Rewrote GitHub Pages asset paths in build output.');
