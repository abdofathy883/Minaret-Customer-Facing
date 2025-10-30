import { Component } from '@angular/core';
import { BlogCategory, Post } from '../../models/blog/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogPosts: Post[] = [
    {
      id: 1,
      title: 'Design Systems That Scale',
      content:
        'Architect a resilient system with tokens, primitives, and governance for consistent, fast delivery.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Design',
      featured: true
    },
    {
      id: 2,
      title: 'Angular Performance Playbook',
      content:
        'Signals, OnPush, defer blocks, and smarter bundling. Practical steps that move the needle.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Engineering',
      featured: false
    },
    {
      id: 3,
      title: 'Brand Color In Practice',
      content:
        'Turn your palette into accessible UI with contrast, elevation, and motion guidelines.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Brand',
      featured: true
    },
    {
      id: 4,
      title: 'Content That Converts',
      content:
        'UX writing patterns for clarity—headlines, CTAs, and scannable sections that perform.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Content',
      featured: true
    },
    {
      id: 5,
      title: 'Modern Layout Techniques',
      content:
        'Grid, clamp, container queries, and fluid typescale for responsive elegance without bloat.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Design',
      featured: false
    },
    {
      id: 6,
      title: 'API Integration Hygiene',
      content:
        'Error states, retries, and observability for production-grade apps.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Engineering',
      featured: false
    },
    {
      id: 7,
      title: 'Naming For Clarity',
      content:
        'Semantic naming that scales across design and code to reduce friction.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Content',
      featured: false
    },
    {
      id: 8,
      title: 'Visual Rhythm',
      content:
        'Spacing, type, and imagery systems that build a signature brand feel.',
      featuredImage: 'https://api.theminaretagency.com/media/blogimages/24.png',
      category: 'Brand',
      featured: false
    },
  ];

  activeCategory: string | null = null;

  get blogCategories(): BlogCategory[] {
    const names = Array.from(new Set(this.blogPosts.map((p) => p.category)));
    return names.map((name, i) => ({ id: i + 1, name }));
  }

  setActiveCategory(cat: string | null) {
    this.activeCategory = cat;
  }

  private get filtered(): Post[] {
    return this.activeCategory
      ? this.blogPosts.filter((p) => p.category === this.activeCategory)
      : this.blogPosts;
  }

  get featuredPost(): Post | undefined {
    return this.filtered.find((p) => p.featured) ?? this.filtered[0];
  }

  get topStories(): Post[] {
    const featId = this.featuredPost?.id;
    return this.filtered.filter((p) => p.id !== featId).slice(0, 3);
  }

  get latestPosts(): Post[] {
    const featId = this.featuredPost?.id;
    const topIds = new Set(this.topStories.map((p) => p.id));
    return this.filtered.filter((p) => p.id !== featId && !topIds.has(p.id));
  }
}
