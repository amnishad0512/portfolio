import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'public';
const SOURCE_ICON = path.join(PUBLIC_DIR, 'favicon.png');

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR);
}

async function generatePWAIcons() {
  try {
    // Generate PWA icons
    await sharp(SOURCE_ICON)
      .resize(192, 192)
      .toFile(path.join(PUBLIC_DIR, 'pwa-192x192.png'));

    await sharp(SOURCE_ICON)
      .resize(512, 512)
      .toFile(path.join(PUBLIC_DIR, 'pwa-512x512.png'));

    await sharp(SOURCE_ICON)
      .resize(180, 180)
      .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

    console.log('PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating PWA icons:', error);
  }
}

generatePWAIcons(); 