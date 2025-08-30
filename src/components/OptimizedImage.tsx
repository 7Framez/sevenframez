import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

// List of images we know have optimized versions (populated by build process)
const OPTIMIZED_IMAGES = new Set([
  '02c742fb-c825-4cc8-8f2b-81481571fc94',
  '07d147b2-c35a-4c7c-9335-4f92bdcc672e',
  '0bdc677c-2488-475e-9a59-ce6737521e16',
  '0e3e8447-5f13-44d0-8f73-af7c2b1bbd62',
  '11be1197-4bb5-4809-bde7-1d2de4bc1862',
  '1d103c29-15fa-46cf-a448-4f95a7ba5bb5',
  '1e3a1599-fb46-4ebe-b123-9a95d45ac933',
  '1e68b3dd-38a6-404b-a512-2b0acc4cb261',
  '1eea3249-5a12-41c0-a86c-f480cfcf581c',
  '21fe3b97-2275-40e9-a6fb-8877d82b14e6',
  '22da5fe4-f968-41fc-965d-018cdb272553',
  '25297290-e6ef-47c0-9dff-d65856eae70a',
  '25b2e776-a0a6-434f-a124-67ea5b5141b1',
  '26bcf040-3e5e-4263-9c08-0c1966cf96d1',
  '30ae50c0-c2f8-46fe-ab72-5a330e2c5944',
  '370b0998-d13d-4181-ade2-9c90cb1f5a60',
  '38a7526f-0867-43f2-a828-fb5acd884b77',
  '3a3100ac-116e-420f-b454-981c47ccd74c',
  '4503531a-4cf6-442b-b62f-2ad474ed6654',
  '45820669-2ed8-4c77-8850-3948b780d82a',
  '48603990-1faf-4c1a-a24a-fe03d34a13f4',
  '4aba4227-f05f-4c1f-b17d-4714885c482f',
  '4bb8315d-fc5e-4337-bab9-67e762b28278',
  '4c8ad804-bf4c-4208-adfd-f7e252c79815',
  '4e898d9a-d185-42b3-8789-13055bc52993',
  '4ebb492e-5c79-438a-bec5-d9e29cb52a47',
  '4ff8f9bc-0029-409e-910c-69fb715c2da3'
]);

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
}) => {
  // Check if this image has optimized versions
  const hasOptimizedVersions = (() => {
    if (!src.includes('/lovable-uploads/')) return false;
    
    const filename = src.split('/').pop()?.split('.')[0];
    return filename ? OPTIMIZED_IMAGES.has(filename) : false;
  })();

  // Extract filename without extension for optimized versions
  const getOptimizedSrc = (format: 'webp' | 'avif') => {
    if (!hasOptimizedVersions) return src;
    
    const filename = src.split('/').pop()?.split('.')[0];
    if (!filename) return src;
    
    return `/optimized/${filename}.${format}`;
  };

  if (!hasOptimizedVersions) {
    // Just return a regular img with lazy loading
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
      />
    );
  }

  const webpSrc = getOptimizedSrc('webp');
  const avifSrc = getOptimizedSrc('avif');

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
      />
    </picture>
  );
};