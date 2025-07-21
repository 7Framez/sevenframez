import { Button } from '@/components/ui/button';
import { Play, Eye } from 'lucide-react';

export const ShowreelSection = () => {
  return (
    <section id="showreel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the power of visual storytelling through our portfolio of 
            exceptional video productions and creative projects.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-card rounded-lg overflow-hidden shadow-cinematic">
            <iframe
              src="https://www.youtube.com/embed/kQXxoJqaTT8?rel=0&modestbranding=1&showinfo=0"
              title="7 Framez Showreel"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

        {/* Portfolio Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="aspect-video bg-card rounded-lg overflow-hidden group cursor-pointer relative shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-sm text-foreground">Project {item}</div>
                </div>
              </div>
              {/* Placeholder - replace with actual project thumbnails */}
            {/* </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};