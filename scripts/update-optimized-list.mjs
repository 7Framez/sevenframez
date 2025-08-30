#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const optimizedDir = path.join(__dirname, '../public/optimized');
const componentPath = path.join(__dirname, '../src/components/OptimizedImage.tsx');

// Get list of optimized images
const getOptimizedImages = () => {
  if (!fs.existsSync(optimizedDir)) {
    return [];
  }
  
  const files = fs.readdirSync(optimizedDir);
  const webpFiles = files.filter(file => file.endsWith('.webp'));
  return webpFiles.map(file => path.parse(file).name);
};

// Update the component
const updateComponent = (optimizedImages) => {
  let componentContent = fs.readFileSync(componentPath, 'utf8');
  
  // Find the OPTIMIZED_IMAGES set and replace it
  const setStart = componentContent.indexOf('const OPTIMIZED_IMAGES = new Set([');
  const setEnd = componentContent.indexOf(']);', setStart) + 3;
  
  if (setStart === -1 || setEnd === -1) {
    console.error('Could not find OPTIMIZED_IMAGES set in component');
    return;
  }
  
  const newSet = `const OPTIMIZED_IMAGES = new Set([\n${optimizedImages.map(img => `  '${img}'`).join(',\n')}\n]);`;
  
  const newContent = componentContent.substring(0, setStart) + newSet + componentContent.substring(setEnd);
  
  fs.writeFileSync(componentPath, newContent);
  console.log(`✅ Updated OptimizedImage component with ${optimizedImages.length} optimized images`);
};

const main = () => {
  const optimizedImages = getOptimizedImages();
  console.log(`Found ${optimizedImages.length} optimized images`);
  
  if (optimizedImages.length > 0) {
    updateComponent(optimizedImages);
  } else {
    console.log('No optimized images found');
  }
};

main();