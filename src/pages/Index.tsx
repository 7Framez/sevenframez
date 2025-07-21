import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ShowreelSection } from '@/components/ShowreelSection';
{/* import { GallerySection } from '@/components/GallerySection';
import { TheSpaceSection } from '@/components/TheSpaceSection'; */}
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <HeroSection onContactClick={() => setIsContactOpen(true)} />
      <ServicesSection />
      <ShowreelSection />
      {/* <GallerySection />
      <TheSpaceSection /> */}
      
      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default Index;
