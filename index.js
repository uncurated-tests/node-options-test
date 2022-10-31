const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

fs.rmSync('public', { recursive: true, force: true });
fs.mkdirSync('public');
fs.writeFileSync(path.join('public', 'index.txt'), execSync('cowsay Hello, World!').toString());