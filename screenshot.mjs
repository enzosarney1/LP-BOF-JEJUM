import puppeteer from '/Users/enzosarney/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';

// Find next available number
let n = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${n}${label}.png`))) n++;
const filename = `screenshot-${n}${label}.png`;
const filepath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: '/Users/enzosarney/.cache/puppeteer/chrome/mac_arm-146.0.7680.153/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: temporary screenshots/${filename}`);
