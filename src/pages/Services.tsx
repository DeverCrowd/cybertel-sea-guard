import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Search, 
  Settings, 
  Anchor, 
  ArrowRight,
  Users,
  BookOpen,
  Zap,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Shield,
      title: t('cybersecurityTraining'),
      description: 'Comprehensive training programs designed specifically for maritime personnel to identify, prevent, and respond to cybersecurity threats.',
      features: [
        'Crew cybersecurity awareness training',
        'Bridge team cyber protocols',
        'Engine room security procedures',
        'Emergency response training',
        'Compliance certification programs'
      ],
      benefits: [
        'Reduce human error incidents by 85%',
        'IMO compliance certification',
        'Ongoing support and updates',
        'Multi-language training materials'
      ]
    },
    {
      icon: Search,
      title: t('cyberRiskAssessment'),
      description: 'Thorough evaluation of your maritime operations to identify vulnerabilities, assess risks, and develop comprehensive security strategies.',
      features: [
        'Complete system vulnerability scanning',
        'Network architecture analysis',
        'Operational technology assessment',
        'Regulatory compliance review',
        'Risk prioritization framework'
      ],
      benefits: [
        'Comprehensive security roadmap',
        'Priority-based remediation plan',
        'Regulatory compliance alignment',
        'Cost-effective security investments'
      ]
    },
    {
      icon: Settings,
      title: t('cybersecurityServices'),
      description: 'End-to-end cybersecurity solutions including implementation, monitoring, and maintenance of security systems.',
      features: [
        '24/7 security operations center',
        'Incident response services',
        'Security architecture design',
        'Penetration testing',
        'Continuous monitoring'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Rapid incident response',
        'Scalable security solutions',
        'Expert technical support'
      ]
    },
    {
      icon: Anchor,
      title: t('maritimeCybersecurity'),
      description: 'Specialized security measures designed specifically for ships, ports, and maritime infrastructure systems.',
      features: [
        'ECDIS system hardening',
        'VSAT communication security',
        'Engine control system protection',
        'Port system integration security',
        'Maritime IoT device protection'
      ],
      benefits: [
        'Maritime-specific expertise',
        'Minimal operational disruption',
        'Industry-leading protection',
        'Future-ready solutions'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title={t('services')}
        description="Comprehensive maritime cybersecurity services including training, risk assessment, and specialized protection solutions."
        keywords="maritime cybersecurity services, ship security training, cyber risk assessment, maritime IT security"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Maritime Cybersecurity Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive protection solutions designed specifically for the maritime industry's unique cybersecurity challenges and operational requirements.
              </p>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">
                  {t('requestConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-cyber rounded-xl flex items-center justify-center shadow-cyber">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-primary" />
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-primary" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button variant="cyber" size="lg">
                      {t('learnMore')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="bg-gradient-surface border-border/50 shadow-card-enhanced">
                      <CardHeader>
                        <CardTitle className="text-center text-xl">
                          Service Highlights
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Users className="h-5 w-5 text-primary" />
                              <span className="text-foreground">Expert Team</span>
                            </div>
                            <span className="text-primary font-semibold">24/7</span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Shield className="h-5 w-5 text-primary" />
                              <span className="text-foreground">Success Rate</span>
                            </div>
                            <span className="text-primary font-semibold">99.9%</span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Anchor className="h-5 w-5 text-primary" />
                              <span className="text-foreground">Maritime Focus</span>
                            </div>
                            <span className="text-primary font-semibold">100%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Strengthen Your Maritime Security?
            </h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our maritime cybersecurity experts to discuss your specific requirements and develop a customized protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="xl" asChild>
                <Link to="/contact" className="text-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  {t('requestConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="cyber" size="xl" asChild className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};