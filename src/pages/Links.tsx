import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Instagram, Youtube, MapPin, MessageCircle, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { OptimizedImage } from '@/components/OptimizedImage';

// Custom TikTok icon component
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.294-1.98-1.294-3.338H13.59v14.758c0 1.294-.966 2.338-2.26 2.338-1.294 0-2.338-1.044-2.338-2.338 0-1.294 1.044-2.338 2.338-2.338.193 0 .386.032.579.096V10.73c-.193-.032-.386-.064-.579-.064-3.467 0-6.29 2.823-6.29 6.29s2.823 6.29 6.29 6.29 6.29-2.823 6.29-6.29V8.95a8.518 8.518 0 0 0 4.902 1.555V7.598a5.177 5.177 0 0 1-2.201-2.036z"/>
  </svg>
);

const Links = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/7.framez',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@7framez',
      icon: TikTokIcon,
      color: 'hover:text-white'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@7framez?si=hUYQgSxJt4ZhYQGH',
      icon: Youtube,
      color: 'hover:text-red-500'
    }
  ];

  const actionButtons = [
    {
      title: 'Contact Us',
      description: 'Get in touch for your project',
      icon: Mail,
      action: () => setIsContactOpen(true),
      variant: 'cinematic' as const
    },
    {
      title: 'Message Us',
      description: 'Chat with us on WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/966591918986', '_blank'),
      variant: 'outline-glow' as const
    },
    {
      title: 'Our Location',
      description: 'Find our studio in Riyadh',
      icon: MapPin,
      action: () => window.open('https://maps.app.goo.gl/j4yyYeZUtCQ64ikc7?g_st=ipc', '_blank'),
      variant: 'outline' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <OptimizedImage 
              src="/lovable-uploads/27031328-c035-4f94-a277-67bdd3dbccbd.png" 
              alt="7 Framez Logo"
              className="h-12 w-auto"
              loading="eager"
            />
          </div>
          <p className="text-muted-foreground">
            Professional Video Production & Creative Studio
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                <IconComponent size={32} />
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {actionButtons.map((button) => {
            const IconComponent = button.icon;
            return (
              <Card
                key={button.title}
                className="p-0 overflow-hidden border-border hover:shadow-glow transition-all duration-300 cursor-pointer"
                onClick={button.action}
              >
                <Button
                  variant={button.variant}
                  className="w-full h-auto p-6 flex items-center justify-start text-left"
                  onClick={button.action}
                >
                  <IconComponent size={24} className="mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{button.title}</div>
                    <div className="text-sm opacity-80">{button.description}</div>
                  </div>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8">
          <p>Riyadh, Saudi Arabia</p>
          <p className="mt-1">Professional Video Production Services</p>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};

export default Links;