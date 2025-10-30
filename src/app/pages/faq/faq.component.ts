import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faq: any[] = [
    {
      Question: 'What digital marketing services does The Minaret Agency offer?',
      Answer: 'We provide comprehensive digital marketing solutions including SEO optimization, social media management, content creation, performance marketing, PPC advertising, email marketing, and brand strategy. Our team specializes in data-driven campaigns that deliver measurable results for businesses of all sizes.',
      icon: '🚀'
    },
    {
      Question: 'How long does it typically take to see results from your marketing campaigns?',
      Answer: 'Results vary depending on the service and industry, but typically you can expect to see initial improvements within 30-60 days for SEO, 2-4 weeks for social media engagement, and immediate results for PPC campaigns. We provide detailed monthly reports and adjust strategies based on performance data.',
      icon: '⏱️'
    },
    {
      Question: 'Do you work with businesses outside of your local area?',
      Answer: 'Absolutely! We serve clients globally and have experience working with businesses across different time zones and markets. Our digital-first approach means we can effectively manage campaigns remotely while maintaining close communication through regular video calls and detailed reporting.',
      icon: '🌍'
    },
    {
      Question: 'What makes The Minaret Agency different from other marketing agencies?',
      Answer: 'Our unique combination of creative excellence and data-driven strategy sets us apart. We blend cutting-edge technology with human creativity, ensuring every campaign is both innovative and results-focused. Our transparent reporting, dedicated account managers, and flexible pricing models make us the preferred choice for growing businesses.',
      icon: '✨'
    },
    {
      Question: 'How do you measure the success of marketing campaigns?',
      Answer: 'We use advanced analytics and custom KPIs tailored to your business goals. Our measurement includes ROI tracking, conversion rates, engagement metrics, brand awareness studies, and customer lifetime value analysis. We provide comprehensive monthly reports with actionable insights and strategic recommendations.',
      icon: '📊'
    }
  ];

  toggleAccordion(index: number): void {
    const element = document.querySelector(`[data-faq-index="${index}"]`);
    if (element) {
      element.classList.toggle('expanded');
    }
  }
}
