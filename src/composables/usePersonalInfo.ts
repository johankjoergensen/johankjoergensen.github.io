import { ref, computed } from 'vue'

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface PersonalInfo {
  // Basic Information
  name: string
  jobTitle: string
  description: string
  shortBio: string
  location: string
  availabilityStatus: string
  
  // Contact Information
  email: string
  phone?: string
  resumeLink: string
  
  // Profile & Media
  profileImage?: string
  
  // Professional Details
  techStack: string[]
  
  // Site Customization
  footerNote: string
}

export function usePersonalInfo() {
  const personalInfo = ref<PersonalInfo>({
    // Basic Information - UPDATE THESE WITH YOUR ACTUAL DETAILS
    name: 'Your Name',
    jobTitle: 'Your Job Title / Professional Role',
    description: 'A brief elevator pitch about yourself. Describe what you do, your expertise, and what makes you unique. Keep this to 2-3 sentences.',
    shortBio: 'Brief description about yourself and what you do professionally.',
    location: 'Your City, Country',
    availabilityStatus: 'Available for opportunities',
    
    // Contact Information - UPDATE THESE
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567', // Optional - leave empty if you don't want to show
    resumeLink: '/assets/your-resume.pdf',
    
    // Profile & Media
    profileImage: '', // Add path to your profile image here, e.g., '/assets/profile-photo.jpg'
    
    // Professional Details - UPDATE WITH YOUR TECH STACK
    techStack: [
      'Vue.js',
      'Vuetify',
      'TypeScript',
      'Vite',
      'GitHub Pages'
    ],
    
    // Site Customization
    footerNote: 'Built with passion and attention to detail.'
  })

  const socialLinks = ref<SocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'mdi-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'mdi-github'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.value.email}`,
      icon: 'mdi-email'
    }
  ])

  const currentYear = computed(() => new Date().getFullYear())

  const basicInfo = computed(() => ({
    name: personalInfo.value.name,
    jobTitle: personalInfo.value.jobTitle,
    location: personalInfo.value.location,
    email: personalInfo.value.email
  }))

  const contactInfo = computed(() => ({
    email: personalInfo.value.email,
    phone: personalInfo.value.phone,
    location: personalInfo.value.location
  }))

  function updatePersonalInfo(updates: Partial<PersonalInfo>) {
    personalInfo.value = { ...personalInfo.value, ...updates }
  }

  return {
    personalInfo: personalInfo.value,
    socialLinks: socialLinks.value,
    currentYear,
    basicInfo,
    contactInfo,
    updatePersonalInfo
  }
}