import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      caseStudies: 'Case Studies',
      testimonials: 'Testimonials',
      blog: 'Blog',
      contact: 'Contact',
      dashboard: 'Dashboard',
      
      // Hero section
      heroTitle: 'Comprehensive Protection Against Digital and Maritime Threats',
      heroSubtitle: 'Leading maritime cybersecurity solutions protecting your operations from evolving digital threats',
      requestConsultation: 'Request a Free Consultation',
      
      // Services
      cybersecurityTraining: 'Cybersecurity Training',
      cyberRiskAssessment: 'Cyber Risk Assessment',
      cybersecurityServices: 'Cybersecurity Services',
      maritimeCybersecurity: 'Maritime Cybersecurity',
      
      // Common
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      
      // Footer
      footerTagline: 'Securing maritime operations in the digital age',
      allRightsReserved: 'All rights reserved',
    }
  },
  ar: {
    translation: {
      // Navigation
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      caseStudies: 'دراسات الحالة',
      testimonials: 'الشهادات',
      blog: 'المدونة',
      contact: 'اتصل بنا',
      dashboard: 'لوحة التحكم',
      
      // Hero section
      heroTitle: 'حماية شاملة ضد التهديدات الرقمية والبحرية',
      heroSubtitle: 'حلول الأمن السيبراني البحري الرائدة لحماية عملياتك من التهديدات الرقمية المتطورة',
      requestConsultation: 'اطلب استشارة مجانية',
      
      // Services
      cybersecurityTraining: 'التدريب على الأمن السيبراني',
      cyberRiskAssessment: 'تقييم المخاطر السيبرانية',
      cybersecurityServices: 'خدمات الأمن السيبراني',
      maritimeCybersecurity: 'الأمن السيبراني البحري',
      
      // Common
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      contactUs: 'اتصل بنا',
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجح',
      
      // Footer
      footerTagline: 'تأمين العمليات البحرية في العصر الرقمي',
      allRightsReserved: 'جميع الحقوق محفوظة',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;