import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Camera, Users, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const ServicesSection = () => {
  const { t, isLoading } = useLanguage();
  
  const services = [
    {
      icon: Video,
      titleKey: "services.video.title",
      descriptionKey: "services.video.desc",
      features: [
        "services.video.concept",
        "services.video.filming", 
        "services.video.postProduction",
        "services.video.colorGrading"
      ]
    },
    {
      icon: Camera,
      titleKey: "services.photo.title",
      descriptionKey: "services.photo.desc",
      features: [
        "services.photo.product",
        "services.photo.event",
        "services.photo.portraits",
        "services.photo.commercial"
      ]
    },
    {
      icon: Users,
      titleKey: "services.space.title", 
      descriptionKey: "services.space.desc",
      features: [
        "services.space.lighting",
        "services.space.greenScreen",
        "services.space.equipment",
        "services.space.cyclorama"
      ]
    },
    {
      icon: Target,
      titleKey: "services.marketing.title",
      descriptionKey: "services.marketing.desc", 
      features: [
        "services.marketing.social",
        "services.marketing.strategy",
        "services.marketing.branding",
        "services.marketing.campaigns"
      ]
    }
  ];

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded mb-4 max-w-md mx-auto"></div>
              <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  <CardDescription className="text-muted-foreground mb-4">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((featureKey, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};