import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  // Personal Information - Replace with your details
  protected name = 'Your Name';
  protected shortBio = 'Brief description about yourself and what you do professionally.';
  protected email = 'your.email@example.com';
  protected location = 'Your City, Country';
  protected phone = '+1 (555) 123-4567'; // Optional - leave empty if you don't want to show
  protected availabilityStatus = 'Available for new opportunities';
  protected resumeLink = '/assets/your-resume.pdf';
  
  // Footer customization
  protected currentYear = new Date().getFullYear();
  protected footerNote = 'Built with passion and attention to detail.';
  
  // Social media links - Add your actual profiles
  protected socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐱'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '✉️'
    }
    // Add more social links as needed
  ];

  // Technologies used to build the site
  protected techStack: string[] = [
    'Angular',
    'TypeScript',
    'SCSS',
    'GitHub Pages'
  ];
}
