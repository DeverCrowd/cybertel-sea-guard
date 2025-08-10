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
      
      // About Us
      aboutIntro: 'CyberTelos is a leading maritime cybersecurity company specializing in comprehensive protection against digital and maritime threats. With over a decade of experience, we provide cutting-edge security solutions tailored specifically for the maritime industry.',
      mission: 'To provide comprehensive cybersecurity solutions that protect maritime operations from evolving digital threats while ensuring operational continuity and regulatory compliance.',
      vision: 'To be the global leader in maritime cybersecurity, setting industry standards and protecting the world\'s maritime infrastructure.',
      ourHistory: 'Our History',
      historyText: 'Founded in 2013 by maritime security experts, CyberTelos has grown from a small consultancy to an industry leader, protecting over 500 vessels and 50 ports worldwide.',
      leadership: 'Leadership Team',
      
      // Case Studies
      caseStudiesIntro: 'Discover how CyberTelos has successfully protected maritime operations from sophisticated cyber threats across various scenarios.',
      
      // Testimonials
      testimonialsIntro: 'Hear from our clients about their experience with CyberTelos maritime cybersecurity solutions.',
      
      // Blog
      blogIntro: 'Stay informed about the latest maritime cybersecurity trends, threats, and best practices.',
      readMore: 'Read More',
      
      // Contact
      contactIntro: 'Get in touch with our maritime cybersecurity experts to discuss your security needs.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
      phone: 'Phone',
      address: 'Address',
      
      // Dashboard
      overview: 'Overview',
      clientsProtected: 'Clients Protected',
      threatsBlocked: 'Threats Blocked',
      activeProjects: 'Active Projects',
      systemStatus: 'System Status',
      recentActivity: 'Recent Activity',
      
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
      
      // About Us
      aboutIntro: 'سايبر تيلوس هي شركة رائدة في مجال الأمن السيبراني البحري متخصصة في الحماية الشاملة ضد التهديدات الرقمية والبحرية. مع أكثر من عقد من الخبرة، نقدم حلول أمنية متطورة مصممة خصيصاً لصناعة النقل البحري.',
      mission: 'تقديم حلول الأمن السيبراني الشاملة التي تحمي العمليات البحرية من التهديدات الرقمية المتطورة مع ضمان استمرارية العمليات والامتثال التنظيمي.',
      vision: 'أن نكون الرائد العالمي في الأمن السيبراني البحري، وضع معايير الصناعة وحماية البنية التحتية البحرية في العالم.',
      ourHistory: 'تاريخنا',
      historyText: 'تأسست في عام 2013 من قبل خبراء الأمن البحري، نمت سايبر تيلوس من استشارة صغيرة إلى رائد في الصناعة، تحمي أكثر من 500 سفينة و 50 ميناء حول العالم.',
      leadership: 'فريق القيادة',
      
      // Case Studies
      caseStudiesIntro: 'اكتشف كيف نجحت سايبر تيلوس في حماية العمليات البحرية من التهديدات السيبرانية المتطورة عبر سيناريوهات مختلفة.',
      
      // Testimonials
      testimonialsIntro: 'استمع من عملائنا حول تجربتهم مع حلول الأمن السيبراني البحري من سايبر تيلوس.',
      
      // Blog
      blogIntro: 'ابق على اطلاع بأحدث اتجاهات الأمن السيبراني البحري والتهديدات وأفضل الممارسات.',
      readMore: 'اقرأ المزيد',
      
      // Contact
      contactIntro: 'تواصل مع خبراء الأمن السيبراني البحري لدينا لمناقشة احتياجاتك الأمنية.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      sendMessage: 'إرسال الرسالة',
      phone: 'الهاتف',
      address: 'العنوان',
      
      // Dashboard
      overview: 'نظرة عامة',
      clientsProtected: 'العملاء المحميون',
      threatsBlocked: 'التهديدات المحجوبة',
      activeProjects: 'المشاريع النشطة',
      systemStatus: 'حالة النظام',
      recentActivity: 'النشاط الأخير',
      
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