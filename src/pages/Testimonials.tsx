import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote, Shield, Anchor, Building, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: 'Captain Robert Hansen',
      position: 'Fleet Operations Manager',
      company: 'Nordic Shipping Lines',
      industry: 'Cargo Shipping',
      quote: 'CyberTelos completely transformed our maritime cybersecurity posture. Their expertise in protecting ship navigation systems while maintaining operational efficiency is unmatched. We\'ve had zero security incidents since implementation.',
      rating: 5,
      avatar: '👨‍✈️',
      project: 'Fleet-wide ECDIS Security Implementation',
      metric: '150 vessels protected'
    },
    {
      id: 2,
      name: 'Maria Santos',
      position: 'Chief Security Officer',
      company: 'Atlantic Cruise Corporation',
      industry: 'Cruise Lines',
      quote: 'The comprehensive approach CyberTelos took to secure our passenger data and navigation systems exceeded all expectations. Their 24/7 monitoring gives us complete peace of mind while cruising international waters.',
      rating: 5,
      avatar: '👩‍💼',
      project: 'Cruise Fleet Cybersecurity Overhaul',
      metric: '25 ships, 2M+ passengers protected'
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'Port Authority Director',
      company: 'Pacific Harbor Authority',
      industry: 'Port Operations',
      quote: 'CyberTelos secured our entire port infrastructure including automated cargo systems and IoT networks. Their maritime-specific expertise made the difference. We now handle 40% more cargo with complete security confidence.',
      rating: 5,
      avatar: '👨‍💻',
      project: 'Smart Port Security Infrastructure',
      metric: '$2.8B in cargo protected annually'
    },
    {
      id: 4,
      name: 'Sarah Mitchell',
      position: 'IT Director',
      company: 'Global Maritime Services',
      industry: 'Maritime Services',
      quote: 'Outstanding service and deep maritime industry knowledge. CyberTelos didn\'t just implement security solutions - they educated our entire team and established protocols that scale with our growth.',
      rating: 5,
      avatar: '👩‍🔧',
      project: 'Maritime IT Security Training Program',
      metric: '500+ staff trained and certified'
    },
    {
      id: 5,
      name: 'Ahmed Al-Rashid',
      position: 'Operations Manager',
      company: 'Gulf Shipping Consortium',
      industry: 'Logistics',
      quote: 'The real-time threat monitoring and incident response capabilities CyberTelos provides are exceptional. They prevented three major ransomware attempts last year alone, saving us millions in potential damages.',
      rating: 5,
      avatar: '👨‍💼',
      project: 'Regional Maritime Security Operations Center',
      metric: '45 vessels across 12 ports'
    },
    {
      id: 6,
      name: 'Elena Petrov',
      position: 'Chief Technology Officer',
      company: 'European Ferry Lines',
      industry: 'Passenger Transport',
      quote: 'CyberTelos understands the unique challenges of maritime cybersecurity. Their solutions protect our ferry operations while ensuring passenger safety systems remain fully operational. Truly world-class expertise.',
      rating: 5,
      avatar: '👩‍💻',
      project: 'Ferry Fleet Cyber Defense System',
      metric: '18 ferries, 5M+ passengers annually'
    }
  ];

  const industryStats = [
    { industry: 'Cargo Shipping', clients: '127+', icon: Anchor },
    { industry: 'Cruise Lines', clients: '45+', icon: Users },
    { industry: 'Port Operations', clients: '23+', icon: Building },
    { industry: 'Maritime Services', clients: '89+', icon: Shield }
  ];

  return (
    <>
      <SEO 
        title={t('testimonials')}
        description="Read testimonials from maritime industry leaders who trust CyberTelos for comprehensive cybersecurity protection."
        keywords="maritime cybersecurity testimonials, client reviews, ship security testimonials, port cybersecurity reviews"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Client Testimonials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('testimonialsIntro')}
              </p>
            </div>

            {/* Industry Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {industryStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.clients}</div>
                  <div className="text-muted-foreground text-sm">{stat.industry}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="shadow-card-enhanced hover:shadow-cyber transition-wave h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{testimonial.avatar}</div>
                        <div>
                          <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.industry}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-1" />
                      <p className="text-muted-foreground leading-relaxed italic pl-6 mb-4">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="text-sm">
                        <span className="font-medium text-foreground">Project: </span>
                        <span className="text-muted-foreground">{testimonial.project}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-foreground">Impact: </span>
                        <span className="text-primary font-medium">{testimonial.metric}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Industry Leaders Worldwide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of maritime organizations that rely on CyberTelos for comprehensive cybersecurity protection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Ships Protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Ports Secured</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">284</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the same level of protection and service that has earned us these outstanding reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20 px-8 py-3 rounded-lg font-medium transition-wave">
                {t('requestConsultation')}
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 rounded-lg font-medium transition-wave">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};