import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.showreel': 'Our Work',
    'nav.gallery': 'Gallery',
    'nav.space': 'The Space',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Where Every Frame Counts',
    'hero.subtitle': 'Professional video production, photography, and creative services in Riyadh. We bring your vision to life with cinematic excellence.',
    'hero.cta': 'Get Started',
    'hero.learn-more': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'From concept to completion, we deliver exceptional visual content that tells your story and captivates your audience.',
    'services.video.title': 'Video Production',
    'services.video.desc': 'Cinematic storytelling from concept to post-production',
    'services.photo.title': 'Photography',
    'services.photo.desc': 'Professional photography for brands and events',
    'services.space.title': 'Creative Space',
    'services.space.desc': 'Fully equipped studio rental for your productions',
    'services.audio.title': 'Audio Production',
    'services.audio.desc': 'Professional sound design and audio post-production',
    
    // Showreel
    'showreel.title': 'Our Work',
    'showreel.subtitle': 'Discover the power of visual storytelling through our portfolio of exceptional video productions and creative projects.',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'A showcase of our creative work and the stories we\'ve helped bring to life.',
    
    // Space
    'space.title': 'The Space',
    'space.subtitle': 'Our fully equipped creative studio in Riyadh, designed for professional video production, photography, and content creation.',
    'space.feature1.title': 'Professional Lighting',
    'space.feature1.desc': 'State-of-the-art lighting equipment for any production',
    'space.feature2.title': 'Audio Setup',
    'space.feature2.desc': 'Professional microphones and sound recording equipment',
    'space.feature3.title': 'Green Screen',
    'space.feature3.desc': 'Full green screen setup for creative visual effects',
    'space.feature4.title': 'Camera Equipment',
    'space.feature4.desc': '4K cameras and professional filming equipment',
    'space.feature5.title': 'Editing Suite',
    'space.feature5.desc': 'Professional editing workstations with industry software',
    'space.feature6.title': 'Props & Backdrops',
    'space.feature6.desc': 'Extensive collection of props and backdrop options',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to bring your vision to life? Let\'s discuss your project and see how we can help.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.service': 'Service Interest',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message Sent!',
    'contact.success-desc': 'Your default email client will open with the message. Thank you for contacting us!',
    'contact.location': 'Studio Location',
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.showreel': 'أعمالنا',
    'nav.gallery': 'المعرض',
    'nav.space': 'الاستوديو',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'حيث كل إطار له معنى',
    'hero.subtitle': 'إنتاج فيديو احترافي، تصوير، وخدمات إبداعية في الرياض. نحول رؤيتك إلى واقع بتميز سينمائي.',
    'hero.cta': 'ابدأ الآن',
    'hero.learn-more': 'اعرف أكثر',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'من الفكرة إلى التنفيذ، نقدم محتوى بصري استثنائي يحكي قصتك ويأسر جمهورك.',
    'services.video.title': 'إنتاج الفيديو',
    'services.video.desc': 'سرد سينمائي من الفكرة إلى المونتاج',
    'services.photo.title': 'التصوير الفوتوغرافي',
    'services.photo.desc': 'تصوير احترافي للعلامات التجارية والفعاليات',
    'services.space.title': 'الاستوديو الإبداعي',
    'services.space.desc': 'تأجير استوديو مجهز بالكامل لإنتاجاتك',
    'services.audio.title': 'إنتاج الصوت',
    'services.audio.desc': 'تصميم صوتي احترافي ومعالجة صوتية متقدمة',
    
    // Showreel
    'showreel.title': 'أعمالنا',
    'showreel.subtitle': 'اكتشف قوة السرد البصري من خلال مجموعة أعمالنا الاستثنائية في إنتاج الفيديو والمشاريع الإبداعية.',
    
    // Gallery
    'gallery.title': 'المعرض',
    'gallery.subtitle': 'عرض لأعمالنا الإبداعية والقصص التي ساعدنا في إحيائها.',
    
    // Space
    'space.title': 'الاستوديو',
    'space.subtitle': 'استوديونا الإبداعي المجهز بالكامل في الرياض، مصمم لإنتاج الفيديو الاحترافي والتصوير وإنشاء المحتوى.',
    'space.feature1.title': 'إضاءة احترافية',
    'space.feature1.desc': 'معدات إضاءة متطورة لأي إنتاج',
    'space.feature2.title': 'نظام صوتي',
    'space.feature2.desc': 'ميكروفونات احترافية ومعدات تسجيل صوتي',
    'space.feature3.title': 'الشاشة الخضراء',
    'space.feature3.desc': 'إعداد كامل للشاشة الخضراء للمؤثرات البصرية الإبداعية',
    'space.feature4.title': 'معدات الكاميرا',
    'space.feature4.desc': 'كاميرات 4K ومعدات تصوير احترافية',
    'space.feature5.title': 'جناح المونتاج',
    'space.feature5.desc': 'محطات عمل مونتاج احترافية ببرامج الصناعة',
    'space.feature6.title': 'الإكسسوارات والخلفيات',
    'space.feature6.desc': 'مجموعة واسعة من الإكسسوارات وخيارات الخلفيات',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد لتحويل رؤيتك إلى واقع؟ لنناقش مشروعك ونرى كيف يمكننا المساعدة.',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال الرسالة!',
    'contact.success-desc': 'سيتم فتح برنامج البريد الإلكتروني مع الرسالة. شكراً لتواصلك معنا!',
    'contact.location': 'موقع الاستوديو',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  // Set document direction based on language
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};