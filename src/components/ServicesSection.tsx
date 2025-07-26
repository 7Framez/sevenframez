import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Camera, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Video,
      titleKey: "services.video.title",
      descriptionKey: "services.video.desc"
    },
    {
      icon: Camera,
      titleKey: "services.photo.title",
      descriptionKey: "services.photo.desc"
    },
    {
      icon: Users,
      titleKey: "services.space.title",
      descriptionKey: "services.space.desc"
    },
    {
      icon: Target,
      titleKey: "services.audio.title",
      descriptionKey: "services.audio.desc"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-foreground">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {t(service.descriptionKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};