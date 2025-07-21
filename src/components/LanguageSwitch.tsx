import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="gap-2 text-foreground hover:text-primary"
    >
      <Languages size={16} />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};