const fs = require('fs');
const path = require('path');

// Create placeholder SVG
function createPlaceholderSVG(width, height, text, bgColor = '#c9b896') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bgColor};stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b8378;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect fill="url(#grad)" width="${width}" height="${height}"/>
    <text fill="#2d3748" font-family="Arial, sans-serif" font-size="24" font-weight="bold"
          x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
      ${text}
    </text>
    <text fill="#8b8378" font-family="Arial, sans-serif" font-size="14"
          x="50%" y="calc(50% + 30px)" text-anchor="middle" dominant-baseline="middle">
      ${width}x${height} placeholder
    </text>
  </svg>`;
}

// Create directories
const dirs = [
  'public/images/backgrounds',
  'public/images/gallery',
  'public/images/icons'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Background placeholders
const backgrounds = [
  { file: 'hero-ranch.jpg', width: 1536, height: 672, text: 'Hero - Texas Ranch Landscape' },
  { file: 'about-bg.jpg', width: 1344, height: 768, text: 'About Section Background' },
  { file: 'forsale-bg.jpg', width: 1344, height: 768, text: 'For Sale Background' },
  { file: 'visit-bg.jpg', width: 1344, height: 768, text: 'Visit Background' },
  { file: 'contact-bg.jpg', width: 1344, height: 768, text: 'Contact Background' }
];

backgrounds.forEach(({ file, width, height, text }) => {
  const svg = createPlaceholderSVG(width, height, text);
  fs.writeFileSync(path.join('public/images/backgrounds', file), svg);
  console.log(`✓ Created ${file}`);
});

// Gallery placeholders
for (let i = 1; i <= 8; i++) {
  const svg = createPlaceholderSVG(1536, 1024, `Chocolate Fallow Deer #${i}`, '#d4af37');
  fs.writeFileSync(path.join('public/images/gallery', `deer_${i}.jpg`), svg);
  console.log(`✓ Created deer_${i}.jpg`);
}

// Favicon
const faviconSVG = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <circle cx="16" cy="16" r="16" fill="#1a2332"/>
  <text fill="#d4af37" font-family="serif" font-size="18" font-weight="bold"
        x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
    CR
  </text>
</svg>`;

fs.writeFileSync('public/favicon.ico', faviconSVG);
console.log('✓ Created favicon.ico');

console.log('\n✅ All placeholder images created successfully!');
