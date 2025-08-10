import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Target, History, Users, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import sarahImage from '@/assets/team-sarah.jpg';
import michaelImage from '@/assets/team-michael.jpg';
import elenaImage from '@/assets/team-elena.jpg';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      image: sarahImage,
      bio: 'Former Navy cybersecurity officer with 15+ years protecting critical maritime infrastructure.',
      linkedin: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: michaelImage,
      bio: 'Leading cybersecurity architect specializing in maritime operational technology systems.',
      linkedin: '#'
    },
    {
      name: 'Elena Petrov',
      role: 'VP of Maritime Operations',
      image: elenaImage,
      bio: 'Maritime industry veteran with deep expertise in ship systems and port security.',
      linkedin: '#'
    }
  ];

  const stats = [
    { number: '500+', label: 'Ships Protected' },
    { number: '50+', label: 'Ports Secured' },
    { number: '10,000+', label: 'Personnel Trained' },
    { number: '99.9%', label: 'Uptime Achieved' }
  ];

  return (
    <>
      <SEO 
        title={t('about')}
        description="Learn about CyberTelos, the leading maritime cybersecurity company protecting ships and ports worldwide."
        keywords="maritime cybersecurity company, about cybertelos, maritime security experts, ship cybersecurity"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About CyberTelos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('aboutIntro')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="shadow-card-enhanced">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t('mission')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="shadow-card-enhanced">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t('vision')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <History className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('ourHistory')}</h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('historyText')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2013</div>
                    <div className="text-muted-foreground">Company Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2018</div>
                    <div className="text-muted-foreground">ISO 27001 Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2024</div>
                    <div className="text-muted-foreground">Global Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('leadership')}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading CyberTelos in protecting maritime operations worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center shadow-card-enhanced hover:shadow-cyber transition-wave">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.linkedin} className="inline-flex items-center">
                        <Linkedin className="h-4 w-4 mr-2" />
                        Connect
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Work with Industry Leaders?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our expert team to discuss how CyberTelos can protect your maritime operations.
            </p>
            <Button variant="glass" size="xl" asChild>
              <a href="/contact" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                {t('contactUs')}
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};