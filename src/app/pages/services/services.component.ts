import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Search Engine Optimization (SEO)',
      subtitle: 'Dominate Search Rankings',
      description: 'Boost your organic visibility with our data-driven SEO strategies that deliver sustainable growth and higher conversion rates.',
      features: ['Keyword Research & Analysis', 'Technical SEO Audit', 'Content Optimization', 'Link Building Strategy', 'Local SEO', 'Performance Tracking'],
      icon: '🔍',
      color: '#00ffe0',
      price: 'Starting at $2,500/month',
      results: '300% average increase in organic traffic',
      clients: '50+ businesses ranking #1'
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      subtitle: 'Build Your Digital Presence',
      description: 'Create engaging social media campaigns that build brand awareness, drive engagement, and convert followers into customers.',
      features: ['Content Strategy & Creation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Analytics & Reporting', 'Crisis Management'],
      icon: '📱',
      color: '#ff00c8',
      price: 'Starting at $1,800/month',
      results: '250% increase in social engagement',
      clients: '75+ brands with viral content'
    },
    {
      id: 3,
      title: 'Pay-Per-Click (PPC) Advertising',
      subtitle: 'Instant Results, Maximum ROI',
      description: 'Launch high-converting PPC campaigns across Google, Facebook, and LinkedIn that deliver immediate traffic and sales.',
      features: ['Campaign Strategy & Setup', 'Ad Creative Development', 'Landing Page Optimization', 'Bid Management', 'A/B Testing', 'ROI Optimization'],
      icon: '🎯',
      color: '#00ffe0',
      price: 'Starting at $2,000/month',
      results: '400% average ROI improvement',
      clients: '100+ successful campaigns'
    },
    {
      id: 4,
      title: 'Content Marketing',
      subtitle: 'Tell Your Story, Drive Sales',
      description: 'Create compelling content that educates, engages, and converts your audience while establishing thought leadership.',
      features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Infographic Design', 'Email Marketing', 'Content Distribution'],
      icon: '✍️',
      color: '#ff00c8',
      price: 'Starting at $1,500/month',
      results: '500% increase in lead generation',
      clients: '60+ content-driven campaigns'
    },
    {
      id: 5,
      title: 'Email Marketing',
      subtitle: 'Nurture & Convert',
      description: 'Build lasting relationships with personalized email campaigns that nurture leads and maximize customer lifetime value.',
      features: ['Email Strategy & Design', 'Automation Workflows', 'Segmentation', 'A/B Testing', 'Performance Analytics', 'Compliance Management'],
      icon: '📧',
      color: '#00ffe0',
      price: 'Starting at $1,200/month',
      results: '350% increase in email ROI',
      clients: '80+ automated campaigns'
    },
    {
      id: 6,
      title: 'Web Design & Development',
      subtitle: 'Convert Visitors Into Customers',
      description: 'Create stunning, high-converting websites that provide exceptional user experiences and drive business growth.',
      features: ['UI/UX Design', 'Responsive Development', 'E-commerce Solutions', 'Performance Optimization', 'Security Implementation', 'Maintenance & Support'],
      icon: '💻',
      color: '#ff00c8',
      price: 'Starting at $3,500/project',
      results: '200% increase in conversion rates',
      clients: '40+ websites launched'
    },
    {
      id: 7,
      title: 'Brand Strategy & Identity',
      subtitle: 'Stand Out From Competition',
      description: 'Develop a compelling brand identity and strategy that resonates with your target audience and drives business success.',
      features: ['Brand Positioning', 'Logo & Visual Identity', 'Brand Guidelines', 'Competitive Analysis', 'Brand Messaging', 'Implementation Strategy'],
      icon: '🎨',
      color: '#00ffe0',
      price: 'Starting at $2,800/project',
      results: '150% increase in brand recognition',
      clients: '30+ brands transformed'
    },
    {
      id: 8,
      title: 'Marketing Automation',
      subtitle: 'Scale Your Growth',
      description: 'Implement sophisticated marketing automation systems that nurture leads, increase efficiency, and maximize revenue.',
      features: ['CRM Integration', 'Lead Scoring', 'Workflow Automation', 'Multi-channel Campaigns', 'Analytics & Reporting', 'System Optimization'],
      icon: '⚡',
      color: '#ff00c8',
      price: 'Starting at $2,200/month',
      results: '600% increase in lead quality',
      clients: '25+ automated systems'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'The Minaret Agency transformed our digital presence completely. Our organic traffic increased by 400% in just 6 months!',
      avatar: '👩‍💼',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'Marketing Director',
      content: 'Their PPC campaigns delivered ROI we never thought possible. We\'ve seen a 300% increase in sales since partnering with them.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Business Hub',
      role: 'Owner',
      content: 'The team\'s expertise in local SEO helped us dominate our market. We\'re now the #1 result for all our target keywords.',
      avatar: '👩‍🎨',
      rating: 5
    }
  ];

  stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Retention Rate' },
    { number: '300%', label: 'Average ROI Increase' },
    { number: '24/7', label: 'Support Available' }
  ];

  selectedService: any = null;

  selectService(service: any): void {
    this.selectedService = service;
  }

  closeModal(): void {
    this.selectedService = null;
  }
}
