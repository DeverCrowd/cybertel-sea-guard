import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import threatsImage from '@/assets/blog-threats.jpg';
import trainingImage from '@/assets/blog-training.jpg';
import iotImage from '@/assets/blog-iot.jpg';

export const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Emerging Cyber Threats in Maritime Industry 2024',
      excerpt: 'An in-depth analysis of the latest cybersecurity threats targeting maritime operations and how to defend against them.',
      content: 'The maritime industry faces unprecedented cyber threats as digitalization increases...',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Threats',
      tags: ['Cybersecurity', 'Maritime', 'Threats', '2024'],
      image: threatsImage,
      featured: true
    },
    {
      id: 2,
      title: 'Complete Guide to ECDIS Cybersecurity',
      excerpt: 'Essential security measures for Electronic Chart Display and Information Systems to prevent navigation system compromises.',
      content: 'ECDIS systems are critical for safe navigation but vulnerable to cyber attacks...',
      author: 'Captain Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Technology',
      tags: ['ECDIS', 'Navigation', 'Security'],
      image: threatsImage,
      featured: false
    },
    {
      id: 3,
      title: 'Maritime Cybersecurity Training Best Practices',
      excerpt: 'How to effectively train maritime personnel to recognize and respond to cybersecurity threats.',
      content: 'Effective cybersecurity training is crucial for protecting maritime operations...',
      author: 'Elena Petrov',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Training',
      tags: ['Training', 'Best Practices', 'Crew'],
      image: trainingImage,
      featured: true
    },
    {
      id: 4,
      title: 'IoT Security in Smart Ports: Challenges and Solutions',
      excerpt: 'Addressing cybersecurity challenges in IoT-enabled port operations and infrastructure.',
      content: 'Smart ports rely heavily on IoT devices which present unique security challenges...',
      author: 'Dr. James Wilson',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Technology',
      tags: ['IoT', 'Smart Ports', 'Infrastructure'],
      image: iotImage,
      featured: false
    },
    {
      id: 5,
      title: 'Regulatory Compliance: IMO Cybersecurity Guidelines',
      excerpt: 'Understanding and implementing IMO Resolution MSC.428(98) cybersecurity guidelines for maritime operations.',
      content: 'The International Maritime Organization has established comprehensive guidelines...',
      author: 'Maria Santos',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'Compliance',
      tags: ['IMO', 'Regulations', 'Compliance'],
      image: threatsImage,
      featured: false
    },
    {
      id: 6,
      title: 'Incident Response Planning for Maritime Cyber Attacks',
      excerpt: 'Creating effective incident response plans specifically designed for maritime cybersecurity incidents.',
      content: 'When cyber incidents occur at sea, response times and procedures are critical...',
      author: 'David Kim',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Security',
      tags: ['Incident Response', 'Planning', 'Cyber Attacks'],
      image: threatsImage,
      featured: false
    },
    {
      id: 7,
      title: 'Securing VSAT Communications on Merchant Vessels',
      excerpt: 'Best practices for protecting satellite communication systems from cyber threats.',
      content: 'VSAT systems provide critical communication links but can be vulnerable...',
      author: 'Captain Robert Hansen',
      date: '2023-12-15',
      readTime: '7 min read',
      category: 'Technology',
      tags: ['VSAT', 'Communications', 'Satellite'],
      image: threatsImage,
      featured: false
    },
    {
      id: 8,
      title: 'The Future of Maritime Cybersecurity: AI and Machine Learning',
      excerpt: 'How artificial intelligence and machine learning are revolutionizing maritime cybersecurity defense.',
      content: 'AI and ML technologies are transforming how we detect and respond to maritime cyber threats...',
      author: 'Dr. Lisa Chang',
      date: '2023-12-10',
      readTime: '11 min read',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Future'],
      image: iotImage,
      featured: true
    }
  ];

  const categories = ['All', 'Threats', 'Technology', 'Training', 'Compliance', 'Security'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEO 
        title={t('blog')}
        description="Latest insights, trends, and best practices in maritime cybersecurity from CyberTelos experts."
        keywords="maritime cybersecurity blog, ship security articles, maritime cyber threats, cybersecurity insights"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Maritime Cybersecurity Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('blogIntro')}
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="shadow-card-enhanced hover:shadow-cyber transition-wave overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-cyber text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        {t('readMore')}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-gradient-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              All Articles
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="shadow-card-enhanced hover:shadow-cyber transition-wave">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm">
                            {t('readMore')}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-ocean">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated on Maritime Cybersecurity
            </h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, threat intelligence, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-foreground/10 border-foreground/30 text-foreground placeholder:text-foreground/70"
              />
              <Button variant="cyber" className="text-foreground border-foreground/30 hover:bg-primary-foreground/20">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};