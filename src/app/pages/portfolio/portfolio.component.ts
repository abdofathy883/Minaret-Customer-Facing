import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioCategory, Project } from '../../models/portfolio/project';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[] = [];
  activeCategory: string | null = null;

  categories: PortfolioCategory[] = [
    { title: 'Web Development' },
    { title: 'Mobile Apps' },
    { title: 'UI/UX Design' },
  ];

  setActiveCategory(cat: string | null) {
    this.activeCategory = cat;
  }
}
