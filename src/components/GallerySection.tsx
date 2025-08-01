import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export const GallerySection = () => {
  const [showGalleryExplorer, setShowGalleryExplorer] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "photo-1487958449943-2429e8be8625",
    "photo-1488972685288-c3fd157d7c7a",
    "photo-1493397212122-2b85dda8106b", 
    "photo-1524230572899-a752b3835840",
    "photo-1605810230434-7631ac76ec81",
    "photo-1466442929976-97f336a657be",
    "photo-1472396961693-142e6e269027",
    "photo-1469474968028-56623f02e42e",
    "photo-1581090464777-f3220bbe1b8b",
    "photo-1500375592092-40eb2168fd21",
    "photo-1535268647677-3057x4585",
    "photo-1488590528505-98d2b5aba04b"
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our visual portfolio and see the creativity we bring to every project.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {galleryImages.slice(0, 1).map((imageId, index) => (
            <div 
              key={index}
              className="aspect-video bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
              onClick={() => setSelectedImage(imageId)}
            >
              <img 
                src={`https://images.unsplash.com/${imageId}?w=600&h=400&fit=crop`}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div> */}

        <div className="text-center">
          <Button 
            variant="outline-glow" 
            onClick={() => setShowGalleryExplorer(true)}
            className="px-8 py-3"
          >
            Show All
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
                      src={`https://images.unsplash.com/${imageId}?w=600&auto=format`}
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
                src={`https://images.unsplash.com/${selectedImage}?w=1200&auto=format`}
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