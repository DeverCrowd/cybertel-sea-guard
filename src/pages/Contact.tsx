import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will contact you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: '24/7 Emergency Support Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@cybertelos.com', 'support@cybertelos.com'],
      description: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['1200 Maritime Plaza', 'Seattle, WA 98101, USA'],
      description: 'Visit our maritime security center'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM PST', 'Emergency: 24/7'],
      description: 'Always available for critical incidents'
    }
  ];

  const services = [
    'Cybersecurity Training',
    'Cyber Risk Assessment', 
    'Cybersecurity Services',
    'Maritime Cybersecurity',
    'Incident Response',
    'Compliance Consulting'
  ];

  return (
    <>
      <SEO 
        title={t('contact')}
        description="Contact CyberTelos maritime cybersecurity experts for consultation, support, and security services."
        keywords="contact cybertelos, maritime cybersecurity consultation, ship security contact, cybersecurity support"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Contact Our Experts
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('contactIntro')}
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center shadow-card-enhanced hover:shadow-cyber transition-wave">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground font-medium">{detail}</p>
                      ))}
                    </div>
                    <CardDescription className="text-sm">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-card-enhanced">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('name')} *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('email')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('message')} *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your cybersecurity needs..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      variant="cyber"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-foreground mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('sendMessage')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map & Office Info */}
              <div className="space-y-6">
                <Card className="shadow-card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-xl">Our Location</CardTitle>
                    <CardDescription>
                      Visit our maritime cybersecurity center in Seattle
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Placeholder Map */}
                    <div className="w-full h-64 bg-gradient-surface rounded-lg flex items-center justify-center border border-border">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">1200 Maritime Plaza, Seattle, WA</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card-enhanced">
                  <CardHeader>
                    <CardTitle className="text-xl">Why Choose CyberTelos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Maritime industry expertise since 2013</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">24/7 emergency response team</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">ISO 27001 certified processes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">500+ ships successfully protected</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">Compliance with IMO guidelines</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cybersecurity Emergency?
            </h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              For immediate assistance with active cyber threats, contact our 24/7 emergency response team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="xl" 
                className="text-foreground border-foreground/30 hover:bg-foreground/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +1 (555) 911-CYBER
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-foreground/30 text-foreground hover:bg-foreground/10"
              >
                <Mail className="mr-2 h-5 w-5" />
                emergency@cybertelos.com
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};