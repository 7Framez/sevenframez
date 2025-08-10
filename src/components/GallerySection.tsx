import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const GallerySection = () => {
  const { t } = useLanguage();
  const [showGalleryExplorer, setShowGalleryExplorer] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const baseImages = [
    "/lovable-uploads/b6b31e8c-75b5-4497-843b-f3c04259b061.png",
    "/lovable-uploads/6e057cf3-ff32-48d0-84bd-a377aa124ab4.png",
    "/lovable-uploads/1d103c29-15fa-46cf-a448-4f95a7ba5bb5.png",
    "/lovable-uploads/ad8c49ec-01b0-4d37-b56f-289d9c7f4bb1.png",
    "/lovable-uploads/a728f3f6-0b90-40ee-bd20-6f6263eaabcb.png",
    "/lovable-uploads/7e333faa-c169-47cf-9689-8f859cac813e.png",
    "/lovable-uploads/c8a7afbc-bae1-418f-a95e-3c261fe17a66.png",
    // "/lovable-uploads/4bb8315d-fc5e-4337-bab9-67e762b28278.png",
    "/lovable-uploads/68412e0a-79b7-4cc3-a6d4-5edd5b4a700c.png",
    "/lovable-uploads/1eea3249-5a12-41c0-a86c-f480cfcf581c.png",
    // "/lovable-uploads/829b0de0-0c11-4874-8dac-c036759838e6.png",
    "/lovable-uploads/ab07cfb8-9f83-464e-b893-720280e47549.png",
    "/lovable-uploads/f9004318-2ae5-449b-a7d5-41faedde6741.png",
    "/lovable-uploads/22da5fe4-f968-41fc-965d-018cdb272553.png",
    "/lovable-uploads/4c8ad804-bf4c-4208-adfd-f7e252c79815.png",
    "/lovable-uploads/4ff8f9bc-0029-409e-910c-69fb715c2da3.png",
    "/lovable-uploads/38a7526f-0867-43f2-a828-fb5acd884b77.png",
    "/lovable-uploads/c6226336-d9f1-4422-80e7-be7e6d40033e.png",
    "/lovable-uploads/c67ac28e-e9f7-4607-9f8a-a36fbb78b5a6.png",
    "/lovable-uploads/25297290-e6ef-47c0-9dff-d65856eae70a.png",
    "/lovable-uploads/527e1f6b-609a-4830-b692-60b91ba78c00.png",
    "/lovable-uploads/6b219920-89e3-41e0-97a8-285bd3771a6e.png",
    "/lovable-uploads/4503531a-4cf6-442b-b62f-2ad474ed6654.png",
    // "/lovable-uploads/1e68b3dd-38a6-404b-a512-2b0acc4cb261.png",
    // "/lovable-uploads/11be1197-4bb5-4809-bde7-1d2de4bc1862.png",
    // "/lovable-uploads/cc251bfb-bc91-46be-b047-1c2251695d5e.png",
    "/lovable-uploads/55edab36-ca72-468a-9f3d-aa62f19a6957.png",
    "/lovable-uploads/0e3e8447-5f13-44d0-8f73-af7c2b1bbd62.png",
    "/lovable-uploads/d4573546-951b-465c-85f5-1929e6707aa7.png",
    "/lovable-uploads/76f2e424-c592-405e-b601-8914bca3bdbc.png",
    "/lovable-uploads/e10b87df-cb90-433c-92b3-96a916600dee.png",
    "/lovable-uploads/ec3ca77b-5faf-49c1-98ef-e6d18e3be471.png",
    "/lovable-uploads/26bcf040-3e5e-4263-9c08-0c1966cf96d1.png",
    "/lovable-uploads/77121a39-247c-46ba-a190-567d22350444.png",
    "/lovable-uploads/88c59993-b2a6-467d-b622-d54cb910d525.png",
    "/lovable-uploads/4e898d9a-d185-42b3-8789-13055bc52993.png",
    "/lovable-uploads/07d147b2-c35a-4c7c-9335-4f92bdcc672e.png",
    "/lovable-uploads/30ae50c0-c2f8-46fe-ab72-5a330e2c5944.png",
    "/lovable-uploads/6bcee392-f431-44fd-a467-12b863fb9b00.png",
    "/lovable-uploads/81149ffe-c947-4f0c-b3b1-2c5f47f70d7d.png",
    "/lovable-uploads/98674455-c1fe-459e-9ad2-d45f6673f644.png"
  ];

  // Keep first 3 images fixed, shuffle the rest
  const galleryImages = [
    ...baseImages.slice(0, 3), // First 3 images stay fixed
    ...baseImages.slice(3)
    // ...shuffleArray(baseImages.slice(3)) // Shuffle the rest
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