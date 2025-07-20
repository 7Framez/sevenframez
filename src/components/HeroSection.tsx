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
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/6935d358-aeee-4dfb-8e66-a04484a83f2d.png" 
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

        {/* 7 Frames Auto-Slideable Carousel */}
        <div className="mb-12 animate-fade-in delay-500">
          <div className="relative overflow-hidden h-20 max-w-4xl mx-auto">
            <div className="flex gap-4 animate-[slideFramesContainer_21s_infinite_linear]">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="min-w-[140px] h-16 bg-card/30 border-2 border-primary/40 rounded-lg flex items-center justify-center text-foreground font-bold text-sm relative overflow-hidden group backdrop-blur-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-orbitron">FRAME {num}</span>
                  <div className="absolute inset-0 border border-primary/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow"></div>
                </div>
              ))}
            </div>
          </div>
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