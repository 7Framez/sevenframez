import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Camera, Users, Target } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Full-service video production from pre-production planning to post-production editing. Corporate videos, commercials, and creative content.",
      features: ["Concept Development", "Filming", "Post-Production", "Color Grading"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, events, portraits, and commercial needs with state-of-the-art equipment.",
      features: ["Product Photography", "Event Coverage", "Portraits", "Commercial Shoots"]
    },
    {
      icon: Users,
      title: "Creative Space Rental",
      description: "Modern, fully-equipped studio space available for rent. Perfect for content creators, photographers, and video producers.",
      features: ["Studio Lighting", "Green Screen", "Equipment Rental", "Cyclorama"]
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Digital marketing services to promote your content and reach your target audience effectively.",
      features: ["Social Media Marketing", "Content Strategy", "Brand Development", "Campaign Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive video production services and creative space solutions 
            for content creators, businesses, and artists.
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
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
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