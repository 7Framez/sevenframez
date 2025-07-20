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
            {/* Placeholder for video - will be replaced when video is added */}
            <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary">
                  <Play className="text-primary ml-1" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Showreel Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  Upload your video to the assets folder and we'll integrate it here
                </p>
              </div>
            </div>

            {/* Video will be inserted here when available */}
            {/* 
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/path-to-poster-image"
            >
              <source src="/path-to-video" type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
            */}
          </div>

          {/* Video Stats/Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};