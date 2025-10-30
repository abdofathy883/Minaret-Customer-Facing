import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CareersComponent } from './pages/careers/careers.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'our-services',
        component: ServicesComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'portfolio/:title',
        component: SingleProjectComponent
    },
    {
        path: 'blog/:title',
        component: SinglePostComponent
    },
    {
        path: 'our-team',
        component: OurTeamComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    }
];
