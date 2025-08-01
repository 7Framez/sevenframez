import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, MapPin } from 'lucide-react';

export const TheSpaceSection = () => {
  const [showSpaceExplorer, setShowSpaceExplorer] = useState(false);

  const spaceImages = [
    "photo-1492321936769-b49830bc1d1e",
    "photo-1721322800607-8c38375eef04",
    "photo-1605810230434-7631ac76ec81",
    "photo-1488972685288-c3fd157d7c7a",
    "photo-1487958449943-2429e8be8625", 
    "photo-1524230572899-a752b3835840"
  ];

  return (
    <section id="space" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Space
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our professional studio space available for rent. Fully equipped with modern amenities 
            for photography, video production, and creative projects.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <MapPin className="text-primary" size={20} />
            <a 
              href="https://maps.app.goo.gl/tD73u41VxkLwoB8z7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View Studio Location
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {spaceImages.map((imageId, index) => (
            <div 
              key={index}
              className="aspect-video bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <img 
                src={`https://images.unsplash.com/${imageId}?w=600&h=400&fit=crop`}
                alt={`Studio space ${index + 1}`}
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
            variant="cinematic" 
            onClick={() => setShowSpaceExplorer(true)}
            className="px-8 py-3"
          >
            View All
          </Button>
        </div>

        {/* Space Explorer Modal - placeholder for now */}
        {showSpaceExplorer && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSpaceExplorer(false)}
          >
            <div 
              className="bg-card rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Studio Space Explorer</h3>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowSpaceExplorer(false)}
                  className="text-foreground hover:text-primary"
                >
                  Close
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spaceImages.map((imageId, index) => (
                  <div key={index} className="aspect-video bg-card rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${imageId}?w=400&h=300&fit=crop`}
                      alt={`Studio space ${index + 1}`}
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