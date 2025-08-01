import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoOpacity = Math.min(scrollY / 300, 1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/27031328-c035-4f94-a277-67bdd3dbccbd.png" 
              alt="7 Framez Logo"
              className="max-w-full h-auto max-h-8 object-contain transition-opacity duration-300"
              style={{ 
                opacity: logoOpacity,
                aspectRatio: 'auto'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('showreel')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {t('nav.showreel')}
            </button>
            {/* <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('space')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              The Space
            </button> */}
            <div className="!ml-auto rtl:!mr-auto rtl:!ml-0 flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSwitch />
              <Button 
                variant="cinematic" 
                onClick={onContactClick}
              >
                {t('nav.contact')}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('showreel')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                {t('nav.showreel')}
              </button>
              {/* <button 
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('space')}
                className="text-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                The Space
              </button> */}
              <LanguageSwitch />
              <Button 
                variant="cinematic" 
                onClick={onContactClick}
                className="w-full"
              >
                {t('nav.contact')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};