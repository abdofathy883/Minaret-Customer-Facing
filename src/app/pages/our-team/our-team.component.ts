import { Component, OnInit } from '@angular/core';
import { ITeamMember } from '../../models/team/i-team-member';
import { TeamService } from '../../services/team/team.service';
import { CommonModule } from '@angular/common';

interface TeamHierarchy {
  executives: ITeamMember[];
  teamLeaders: ITeamMember[];
  departments: {
    [key: string]: ITeamMember[];
  };
}

@Component({
  selector: 'app-our-team',
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent implements OnInit {
  teamHierarchy: TeamHierarchy = {
    executives: [],
    teamLeaders: [],
    departments: {
      'Creative & Design': [],
      'Development': [],
      'Marketing & Growth': [],
      'Content & Media': []
    }
  };

  teamMembers: ITeamMember[] = [
    {
      fullName: "Omar Khaled",
      jobTitle: "Chief Executive Officer",
      bio: "Visionary leader driving strategy and growth, with 10+ years in digital marketing.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Sara Mahmoud",
      jobTitle: "Chief Marketing Officer",
      bio: "Creative strategist overseeing all brand campaigns and market positioning.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Youssef Adel",
      jobTitle: "Head of Performance Marketing",
      bio: "Data-driven marketer focused on ROI, PPC, and paid media strategies.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Nourhan Farid",
      jobTitle: "Head of Content",
      bio: "Storyteller who builds narratives that engage and convert audiences.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Mohamed Salah",
      jobTitle: "Creative Director",
      bio: "Design thinker bringing futuristic visuals and strong brand identity to life.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Layla Hassan",
      jobTitle: "UI/UX Designer",
      bio: "Focused on delivering human-centered interfaces with sleek modern design.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Karim Ezzat",
      jobTitle: "Full Stack Developer",
      bio: "Engineer turning complex ideas into scalable web applications.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Hana Samir",
      jobTitle: "Frontend Developer",
      bio: "Angular specialist building seamless, responsive user experiences.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Ahmed Gamal",
      jobTitle: "Backend Developer",
      bio: "ASP.NET expert ensuring performance, security, and scalability in every project.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Mona Fathy",
      jobTitle: "SEO Specialist",
      bio: "Optimizing websites for visibility, rankings, and long-term traffic growth.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Ali Hussein",
      jobTitle: "Social Media Manager",
      bio: "Building strong communities and engagement across platforms with creative content.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Reem Tarek",
      jobTitle: "Account Manager",
      bio: "Bridge between clients and our teams, ensuring goals are met and exceeded.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Mostafa Nabil",
      jobTitle: "Video Producer",
      bio: "Crafting engaging video content that tells stories and strengthens brands.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Dina Ashraf",
      jobTitle: "Copywriter",
      bio: "Creating sharp, persuasive copy that resonates with target audiences.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    },
    {
      fullName: "Tamer Reda",
      jobTitle: "Digital Analyst",
      bio: "Turning data into insights, optimizing campaigns and performance tracking.",
      profilePicture: "https://www.theminaretagency.com/Assets/images/AboutPage/team/5.png"
    }
  ];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.organizeTeamHierarchy();
    // this.teamService.getAll().subscribe({
    //   next: (response) => {
    //     this.teamMembers = response;
    //     this.organizeTeamHierarchy();
    //     console.log(response);
    //   }
    // })
  }

  private organizeTeamHierarchy(): void {
    this.teamMembers.forEach(member => {
      const title = member.jobTitle.toLowerCase();
      
      // C-Level executives
      if (title.includes('chief') || title.includes('ceo') || title.includes('cmo')) {
        this.teamHierarchy.executives.push(member);
      }
      // Team leaders and heads
      else if (title.includes('head') || title.includes('director')) {
        this.teamHierarchy.teamLeaders.push(member);
      }
      // Department categorization
      else if (title.includes('designer') || title.includes('creative')) {
        this.teamHierarchy.departments['Creative & Design'].push(member);
      }
      else if (title.includes('developer') || title.includes('engineer')) {
        this.teamHierarchy.departments['Development'].push(member);
      }
      else if (title.includes('marketing') || title.includes('seo') || title.includes('social') || title.includes('analyst') || title.includes('account')) {
        this.teamHierarchy.departments['Marketing & Growth'].push(member);
      }
      else {
        this.teamHierarchy.departments['Content & Media'].push(member);
      }
    });
  }

  getDepartmentKeys(): string[] {
    return Object.keys(this.teamHierarchy.departments);
  }
}
