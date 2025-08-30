#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, '../public/lovable-uploads');
const outputDir = path.join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Size threshold in bytes (100KB - convert more images)
const SIZE_THRESHOLD = 100 * 1024;

async function convertImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const webpPath = path.join(outputDir, `${baseName}.webp`);
  const avifPath = path.join(outputDir, `${baseName}.avif`);
  
  console.log(`Converting ${filename}...`);
  
  try {
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    
    // Convert to AVIF
    await sharp(inputPath)
      .avif({ quality: 65, effort: 9 })
      .toFile(avifPath);
    
    const originalStats = fs.statSync(inputPath);
    const webpStats = fs.statSync(webpPath);
    const avifStats = fs.statSync(avifPath);
    
    console.log(`✓ ${filename}:`);
    console.log(`  Original: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  WebP: ${(webpStats.size / 1024 / 1024).toFixed(2)}MB (-${(100 - (webpStats.size / originalStats.size * 100)).toFixed(1)}%)`);
    console.log(`  AVIF: ${(avifStats.size / 1024 / 1024).toFixed(2)}MB (-${(100 - (avifStats.size / originalStats.size * 100)).toFixed(1)}%)`);
    
  } catch (error) {
    console.error(`Error converting ${filename}:`, error.message);
  }
}

async function main() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));
    
    console.log(`Found ${imageFiles.length} image files`);
    
    for (const file of imageFiles) {
      const filePath = path.join(inputDir, file);
      const stats = fs.statSync(filePath);
      
      // Only convert images larger than threshold
      if (stats.size > SIZE_THRESHOLD) {
        await convertImage(filePath, file);
      }
    }
    
    console.log('\n✅ Image conversion complete!');
    console.log(`Optimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();