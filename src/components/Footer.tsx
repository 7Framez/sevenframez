import { Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

// Custom TikTok icon component
const TikTokIcon = ({ size = 20, className = "" }) => (
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

export const Footer = () => {
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

  return (
    <footer className="bg-muted/20 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              7 Framez
            </h3>
            <p className="text-muted-foreground">
              Professional video production, photography, and creative space rental services in Riyadh, Saudi Arabia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <a 
                  href="mailto:info@7framez.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@7framez.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a 
                  href="https://wa.me/966591918986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +966 591918986
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <a 
                  href="https://maps.app.goo.gl/j4yyYeZUtCQ64ikc7?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Riyadh, Saudi Arabia
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors duration-300 ${social.color} p-2 rounded-lg hover:bg-muted/30`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest work and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 7 Framez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};