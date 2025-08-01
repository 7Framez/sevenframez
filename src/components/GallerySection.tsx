import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export const GallerySection = () => {
  const [showGalleryExplorer, setShowGalleryExplorer] = useState(false);

  const galleryImages = [
    "photo-1605810230434-7631ac76ec81",
    "photo-1488972685288-c3fd157d7c7a", 
    "photo-1487958449943-2429e8be8625",
    "photo-1524230572899-a752b3835840",
    "photo-1493397212122-2b85dda8106b",
    "photo-1466442929976-97f336a657be"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((imageId, index) => (
            <div 
              key={index}
              className="aspect-video bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
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
        </div>

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((imageId, index) => (
                  <div key={index} className="aspect-video bg-card rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${imageId}?w=400&h=300&fit=crop`}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};