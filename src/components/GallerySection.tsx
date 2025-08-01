import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const GallerySection = () => {
  const { t } = useLanguage();
  const [showGalleryExplorer, setShowGalleryExplorer] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/lovable-uploads/b6b31e8c-75b5-4497-843b-f3c04259b061.png",
    "/lovable-uploads/6e057cf3-ff32-48d0-84bd-a377aa124ab4.png",
    "/lovable-uploads/1d103c29-15fa-46cf-a448-4f95a7ba5bb5.png",
    "/lovable-uploads/ad8c49ec-01b0-4d37-b56f-289d9c7f4bb1.png",
    "/lovable-uploads/a728f3f6-0b90-40ee-bd20-6f6263eaabcb.png",
    "/lovable-uploads/7e333faa-c169-47cf-9689-8f859cac813e.png",
    "/lovable-uploads/c8a7afbc-bae1-418f-a95e-3c261fe17a66.png",
    "/lovable-uploads/bfffd539-74fb-43e5-8ea2-497ca22d8c2a.png",
    "/lovable-uploads/4bb8315d-fc5e-4337-bab9-67e762b28278.png",
    "/lovable-uploads/68412e0a-79b7-4cc3-a6d4-5edd5b4a700c.png",
    "/lovable-uploads/1eea3249-5a12-41c0-a86c-f480cfcf581c.png",
    "/lovable-uploads/829b0de0-0c11-4874-8dac-c036759838e6.png"
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {galleryImages.slice(0, 3).map((imageId, index) => (
            <div 
              key={index}
              className="aspect-[4/3] bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
              onClick={() => setSelectedImage(imageId)}
            >
              <img 
                src={imageId}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline-glow" 
            onClick={() => setShowGalleryExplorer(true)}
            className="px-8 py-3"
          >
            {t('gallery.showAll')}
          </Button>
        </div>

        {/* Gallery Explorer Modal - placeholder for now */}
        {showGalleryExplorer && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGalleryExplorer(false)}
          >
            <div 
              className="bg-card rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Gallery Explorer</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowGalleryExplorer(false)}
                  className="text-foreground hover:text-primary"
                >
                  Close
                </Button>
              </div>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryImages.map((imageId, index) => (
                  <div 
                    key={index} 
                    className="break-inside-avoid cursor-pointer group relative rounded-lg overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
                    onClick={() => setSelectedImage(imageId)}
                  >
                    <img 
                      src={imageId}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="text-white" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full Screen Image Viewer */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img 
                src={selectedImage}
                alt="Full size gallery image"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <Button 
                variant="ghost" 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 hover:bg-black/70"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};