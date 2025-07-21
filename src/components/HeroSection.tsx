import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent rounded-lg rotate-12 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center p-8">
            <img 
              src="/lovable-uploads/27031328-c035-4f94-a277-67bdd3dbccbd.png" 
              alt="7 Framez Logo"
              className="h-32 md:h-48 w-auto filter drop-shadow-glow"
            />
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-fade-in delay-300">
          <h1 className="text-xl md:text-3xl text-muted-foreground flex items-center justify-center gap-3">
            <Camera className="text-primary" size={28} />
            <span>Where every frame counts</span>
          </h1>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
          <Button 
            variant="cinematic" 
            size="lg"
            onClick={() => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6"
          >
            Watch Our Work
          </Button>
          <Button 
            variant="outline-glow" 
            size="lg"
            onClick={onContactClick}
            className="text-lg px-8 py-6"
          >
            Get Started
          </Button>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-1000">
          Professional video services and creative rental space for content creators. 
          From concept to completion, we bring your vision to life.
        </p>
      </div>

    </section>
  );
};