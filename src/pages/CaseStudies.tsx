import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, TrendingUp, CheckCircle, ArrowRight, Users, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import cargoImage from '@/assets/case-cargo.jpg';
import cruiseImage from '@/assets/case-cruise.jpg';
import portImage from '@/assets/case-port.jpg';

export const CaseStudies: React.FC = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      id: 1,
      title: 'Global Shipping Line Ransomware Protection',
      industry: 'Cargo Shipping',
      client: 'Pacific Maritime Corp',
      image: cargoImage,
      challenge: 'A major shipping line with 150+ vessels faced sophisticated ransomware attacks targeting their fleet management systems, threatening operational continuity and cargo security.',
      solution: 'Deployed comprehensive endpoint protection, network segmentation, and real-time threat monitoring across all vessels. Implemented secure communication protocols and crew training programs.',
      results: [
        '100% prevention of ransomware incidents',
        '45% reduction in security incidents',
        'Zero operational downtime',
        '$2.5M in potential losses prevented'
      ],
      duration: '6 months',
      teamSize: '12 experts',
      technologies: ['SIEM Integration', 'Endpoint Protection', 'Network Segmentation', 'Crew Training'],
      testimonial: '"CyberTelos transformed our security posture. We now operate with complete confidence in our digital infrastructure."',
      testimonialAuthor: 'James Mitchell, CTO Pacific Maritime Corp'
    },
    {
      id: 2,
      title: 'Cruise Line ECDIS System Hardening',
      industry: 'Passenger Cruise',
      client: 'Oceanic Cruise Lines',
      image: cruiseImage,
      challenge: 'Cruise operator needed to secure critical navigation systems (ECDIS) and passenger data across 25 cruise ships while maintaining operational efficiency.',
      solution: 'Implemented maritime-specific cybersecurity framework with ECDIS hardening, passenger data encryption, and comprehensive security operations center monitoring.',
      results: [
        '99.9% system availability achieved',
        'Full GDPR compliance for passenger data',
        '60% faster incident response',
        'IMO cybersecurity guidelines compliance'
      ],
      duration: '8 months',
      teamSize: '15 experts',
      technologies: ['ECDIS Security', 'Data Encryption', '24/7 SOC', 'Compliance Framework'],
      testimonial: '"Our navigation systems are now bulletproof. Passenger safety and data security are our top priorities, and CyberTelos delivered."',
      testimonialAuthor: 'Maria Santos, Security Director Oceanic Cruise Lines'
    },
    {
      id: 3,
      title: 'Smart Port Infrastructure Protection',
      industry: 'Port Operations',
      client: 'North Harbor Authority',
      image: portImage,
      challenge: 'Major port authority needed to secure automated cargo handling systems, IoT sensors, and administrative networks against state-sponsored cyber threats.',
      solution: 'Designed multi-layered security architecture with OT/IT network isolation, IoT device management, and advanced threat detection for critical port infrastructure.',
      results: [
        '87% improvement in threat detection',
        'Zero successful cyber attacks',
        '35% increase in operational efficiency',
        'Full OT/IT network segregation'
      ],
      duration: '12 months',
      teamSize: '20 experts',
      technologies: ['OT Security', 'IoT Protection', 'Network Isolation', 'Threat Intelligence'],
      testimonial: '"The most comprehensive port security implementation we\'ve seen. Our cargo operations are now completely protected."',
      testimonialAuthor: 'David Kim, Port Authority CIO'
    }
  ];

  return (
    <>
      <SEO 
        title={t('caseStudies')}
        description="Real-world maritime cybersecurity success stories and case studies from CyberTelos protecting ships, ports, and maritime infrastructure."
        keywords="maritime cybersecurity case studies, ship security success stories, port cybersecurity examples, maritime cyber protection"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('caseStudiesIntro')}
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Ships Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                <div className="text-muted-foreground">Losses Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-muted-foreground">Successful Attacks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative rounded-lg overflow-hidden shadow-card-enhanced">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-ocean opacity-20"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90 text-foreground">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        {study.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{study.teamSize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                          <Target className="h-5 w-5 mr-2 text-primary" />
                          Challenge
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                          <Shield className="h-5 w-5 mr-2 text-primary" />
                          Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                          Results
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-surface p-6 rounded-lg border-l-4 border-primary">
                        <p className="text-foreground italic mb-3">
                          "{study.testimonial}"
                        </p>
                        <p className="text-sm text-muted-foreground font-medium">
                          — {study.testimonialAuthor}
                        </p>
                      </div>
                    </div>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of maritime organizations that trust CyberTelos to protect their operations from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="xl" asChild>
                <a href="/contact" className="text-primary border-primary-foreground/30 hover:bg-primary-foreground/10">
                  {t('requestConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="cyber" size="xl" asChild className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10">
                <a href="/services">
                  View Our Services
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};