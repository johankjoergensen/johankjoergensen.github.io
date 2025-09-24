import { Injectable } from '@angular/core';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  // Basic Information
  name: string;
  jobTitle: string;
  description: string;
  shortBio: string;
  location: string;
  availabilityStatus: string;
  
  // Contact Information
  email: string;
  phone?: string;
  resumeLink: string;
  
  // Profile & Media
  profileImage?: string;
  
  // Professional Details
  techStack: string[];
  
  // Site Customization
  footerNote: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  
  private personalInfo: PersonalInfo = {
    // Basic Information - UPDATE THESE WITH YOUR ACTUAL DETAILS
    name: 'Your Name',
    jobTitle: 'Your Job Title / Professional Role',
    description: 'A brief elevator pitch about yourself. Describe what you do, your expertise, and what makes you unique. Keep this to 2-3 sentences.',
    shortBio: 'Brief description about yourself and what you do professionally.',
    location: 'Your City, Country',
    availabilityStatus: 'Available for opportunities',
    
    // Contact Information - UPDATE THESE
    email: 'your.email@example.com',
    phone: '', // Optional - leave empty if you don't want to show
    resumeLink: '/assets/your-resume.pdf',
    
    // Profile & Media
    profileImage: '', // Add path to your profile image here, e.g., '/assets/profile-photo.jpg'
    
    // Professional Details - UPDATE WITH YOUR TECH STACK
    techStack: [
      'Angular',
      'TypeScript',
      'SCSS',
      'GitHub Pages'
    ],
    
    // Site Customization
    footerNote: 'Built with passion and attention to detail.'
  };

  /**
   * Get all personal information
   */
  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  /**
   * Get basic personal details
   */
  getBasicInfo() {
    return {
      name: this.personalInfo.name,
      jobTitle: this.personalInfo.jobTitle,
      location: this.personalInfo.location,
      email: this.personalInfo.email
    };
  }

  /**
   * Get contact information
   */
  getContactInfo() {
    return {
      email: this.personalInfo.email,
      phone: this.personalInfo.phone,
      location: this.personalInfo.location
    };
  }

  /**
   * Get social media links with dynamic email
   */
  getSocialLinks(): SocialLink[] {
    return [
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
        name: 'Email',
        url: `mailto:${this.personalInfo.email}`, // Dynamic email reference
        icon: '✉️'
      }
      // Add more social links as needed
    ];
  }

  /**
   * Get technology stack
   */
  getTechStack(): string[] {
    return this.personalInfo.techStack;
  }

  /**
   * Get current year for footer
   */
  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  /**
   * Update personal information (useful if you want to make it editable in the future)
   */
  updatePersonalInfo(updates: Partial<PersonalInfo>): void {
    this.personalInfo = { ...this.personalInfo, ...updates };
  }
}