import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onContactClick={() => {}} />
      
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t('notFound.title')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t('notFound.description')}
            </p>
          </div>
          
          <Button 
            variant="cinematic" 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto"
          >
            {t('notFound.returnHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
