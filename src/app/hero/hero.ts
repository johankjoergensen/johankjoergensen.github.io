import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  // Personal Information - Replace these with your actual details
  protected name = 'Your Name';
  protected jobTitle = 'Your Job Title / Professional Role';
  protected description = 'A brief elevator pitch about yourself. Describe what you do, your expertise, and what makes you unique. Keep this to 2-3 sentences.';
  protected location = 'Your City, Country';
  protected availabilityStatus = 'Available for opportunities';
  
  // Contact Information
  protected email = 'your.email@example.com';
  protected resumeLink = '/assets/your-resume.pdf';
  
  // Profile Image
  protected profileImage = ''; // Add path to your profile image here, e.g., '/assets/profile-photo.jpg'
}
