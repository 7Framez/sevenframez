import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, MapPin } from 'lucide-react';

export const TheSpaceSection = () => {
  const [showSpaceExplorer, setShowSpaceExplorer] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const spaceImages = [
    "/lovable-uploads/7e032dbc-8cb9-4294-8d36-ac81a0cded8f.png",
    "/lovable-uploads/82048f19-abb4-43dd-ae22-44f075b7b1f9.png",
    "/lovable-uploads/c8213ace-93c7-4d83-beda-3f862c0cc0f9.png",
    "/lovable-uploads/859d002e-8c38-4c0c-bd50-572d1482bf23.png",
    "/lovable-uploads/aabc0aac-be42-42f8-bd8a-24809d4e3435.png",
    "/lovable-uploads/5c9099e6-01e4-49e2-8810-3ce1c2439e4f.png",
    "/lovable-uploads/e97f499c-c0bb-4514-83ab-ad0a42c68597.png",
    "/lovable-uploads/48603990-1faf-4c1a-a24a-fe03d34a13f4.png",
    "/lovable-uploads/4aba4227-f05f-4c1f-b17d-4714885c482f.png",
    "/lovable-uploads/8ffd24b8-ec3b-4694-960c-7b278b1fc3a2.png",
    "/lovable-uploads/4ebb492e-5c79-438a-bec5-d9e29cb52a47.png",
    "/lovable-uploads/b674c504-3970-436e-b75d-38971ceda943.png",
    "/lovable-uploads/64954346-8f14-4a59-9ade-fc406953e0de.png",
    "/lovable-uploads/5e3b1d52-2d78-4453-90c3-cd2c0cee2e1d.png",
    "/lovable-uploads/f1b5935c-ac34-4d31-b545-72a62edcc087.png",
    "/lovable-uploads/7468789e-67bb-4d19-bc5a-3bff648177bd.png",
    "/lovable-uploads/82eeaf36-aee1-4c73-b4f4-87a9fd872a23.png",
    "/lovable-uploads/45820669-2ed8-4c77-8850-3948b780d82a.png",
    "/lovable-uploads/b6fe56a7-a99d-49ee-bdbd-b7b430a10c5f.png",
    "/lovable-uploads/370b0998-d13d-4181-ade2-9c90cb1f5a60.png",
    "/lovable-uploads/3a3100ac-116e-420f-b454-981c47ccd74c.png",
    "/lovable-uploads/bbc1dc2d-2938-4d3a-9ba7-d2bffb372231.png",
    "/lovable-uploads/aabcb762-cd2f-4d8a-bd31-8b82db01afeb.png",
    "/lovable-uploads/0bdc677c-2488-475e-9a59-ce6737521e16.png",
    "/lovable-uploads/9a8ef028-e5ca-4307-acd7-6219ae84f46e.png",
    "/lovable-uploads/1e3a1599-fb46-4ebe-b123-9a95d45ac933.png",
    "/lovable-uploads/fe13a4ec-619f-4f06-bff2-c9f89c6a2508.png",
    "/lovable-uploads/7934a5a1-fd26-4cc0-bb5d-d34c3aaf4332.png",
    "/lovable-uploads/dba6d9bf-2921-4fd6-b47d-b5960c6c4143.png",
    "/lovable-uploads/25b2e776-a0a6-434f-a124-67ea5b5141b1.png",
    "/lovable-uploads/8d56bfae-8a8f-44ec-a043-277e540cca21.png",
    "/lovable-uploads/50da9a2e-ddfc-44bd-ace3-df50342f49de.png"
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
          {spaceImages.slice(0, 3).map((imageId, index) => (
            <div 
              key={index}
              className="aspect-[3/4] bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
              onClick={() => setSelectedImage(imageId)}
            >
              <img 
                src={imageId}
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
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {spaceImages.map((imageId, index) => (
                  <div 
                    key={index} 
                    className="break-inside-avoid cursor-pointer group relative rounded-lg overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300"
                    onClick={() => setSelectedImage(imageId)}
                  >
                    <img 
                      src={imageId}
                      alt={`Studio space ${index + 1}`}
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
                alt="Full size studio space image"
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