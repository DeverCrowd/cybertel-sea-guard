import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Search, 
  Settings, 
  Anchor, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import heroImage from '@/assets/hero-maritime.jpg';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Shield,
      title: t('cybersecurityTraining'),
      description: 'Comprehensive training programs to prepare your team for digital threats and security best practices.',
      href: '/services/training'
    },
    {
      icon: Search,
      title: t('cyberRiskAssessment'),
      description: 'Thorough evaluation of your maritime operations to identify vulnerabilities and security gaps.',
      href: '/services/assessment'
    },
    {
      icon: Settings,
      title: t('cybersecurityServices'),
      description: 'End-to-end cybersecurity solutions tailored for maritime industry requirements.',
      href: '/services/solutions'
    },
    {
      icon: Anchor,
      title: t('maritimeCybersecurity'),
      description: 'Specialized security measures designed specifically for ships, ports, and maritime infrastructure.',
      href: '/services/maritime'
    }
  ];

  const features = [
    'ISO 27001 Certified Security Frameworks',
    'IMO Guidelines Compliance',
    '24/7 Threat Monitoring',
    'Incident Response Planning',
    'Crew Security Training',
    'Port System Protection'
  ];

  const stats = [
    { number: '500+', label: 'Ships Protected', icon: Anchor },
    { number: '50+', label: 'Ports Secured', icon: Globe },
    { number: '10,000+', label: 'Crew Trained', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Award }
  ];

  return (
    <>
      <SEO 
        title={t('home')}
        description={t('heroSubtitle')}
        keywords="maritime cybersecurity, ship security, port cybersecurity, maritime cyber threats"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-surface overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Maritime cybersecurity operations"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-ocean opacity-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('heroSubtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    {t('requestConsultation')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="glass" size="xl" asChild>
                  <Link to="/services">
                    {t('learnMore')}
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Maritime Cybersecurity
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Protecting your maritime operations with cutting-edge cybersecurity solutions designed for the unique challenges of the maritime industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-card-enhanced transition-wave cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4 group-hover:shadow-cyber transition-wave">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <Link to={service.href} className="inline-flex items-center text-primary hover:text-primary-glow">
                        {t('learnMore')}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose CyberTelos?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We understand the unique cybersecurity challenges facing the maritime industry. Our solutions are specifically designed to protect your operations while maintaining operational efficiency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button variant="cyber" size="lg" asChild>
                    <Link to="/about">
                      Learn About Our Approach
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-lg p-8 shadow-card-enhanced">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Maritime-Specific Protection
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our cybersecurity framework is built around the unique requirements of maritime operations, ensuring comprehensive protection without disrupting critical systems.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">ECDIS System Security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">VSAT Communication Protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Engine Control System Hardening</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Port Integration Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Secure Your Maritime Operations?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free cybersecurity assessment and discover how we can protect your fleet from evolving digital threats.
            </p>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                {t('requestConsultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};