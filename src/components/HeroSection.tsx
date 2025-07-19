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
        {/* Main Logo Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-card border border-primary rounded-lg shadow-glow mb-6">
            <Camera size={48} className="text-primary" />
          </div>
          <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">
            7 FRAMEZ
          </div>
        </div>

        {/* Slogan */}
        <div className="mb-12 animate-fade-in delay-300">
          <h1 className="text-xl md:text-3xl text-muted-foreground flex items-center justify-center gap-3">
            <Camera className="text-primary" size={28} />
            <span>Where every frame counts</span>
          </h1>
        </div>

        {/* 7 Frames Visual */}
        <div className="mb-12 animate-fade-in delay-500">
          <div className="relative inline-block">
            {/* Multiple overlapping frames */}
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-primary rounded-lg"
                style={{
                  transform: `rotate(${i * 5}deg) scale(${1 + i * 0.05})`,
                  opacity: 0.7 - i * 0.08,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
            <div className="w-48 h-32 md:w-64 md:h-40 bg-card/20 rounded-lg border-2 border-primary flex items-center justify-center backdrop-blur-sm">
              <span className="text-primary font-bold text-lg">FRAMES</span>
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