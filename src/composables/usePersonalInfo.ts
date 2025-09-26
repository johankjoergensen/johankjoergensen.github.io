import { ref, computed } from 'vue'

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools'
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  status: 'completed' | 'in-progress' | 'planned'
  projectUrl?: string
  codeUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  position: string
  company: string
  period: string
  description: string
  current?: boolean
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
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
  
  // Site Customization
  footerNote: string
}

export function usePersonalInfo() {
  const personalInfo = ref<PersonalInfo>({
    // Basic Information - UPDATE THESE WITH YOUR ACTUAL DETAILS
    name: 'Johan K. Jørgensen',
    jobTitle: 'Backend Developer',
    description: 'A brief elevator pitch about yourself. Describe what you do, your expertise, and what makes you unique. Keep this to 2-3 sentences.',
    shortBio: 'Brief description about yourself and what you do professionally.',
    location: 'Copenhagen, Denmark',
    availabilityStatus: 'Available for opportunities',
    
    // Contact Information - UPDATE THESE
    email: 'johankjoergensen@gmail.com',
    phone: '', // Optional - leave empty if you don't want to show
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

    // Skills - UPDATE WITH YOUR ACTUAL SKILLS
    skills: [
      { name: 'Vue.js', level: 90, category: 'frontend' },
      { name: 'React', level: 85, category: 'frontend' },
      { name: 'TypeScript', level: 88, category: 'frontend' },
      { name: 'HTML/CSS', level: 95, category: 'frontend' },
      { name: 'Node.js', level: 82, category: 'backend' },
      { name: 'Python', level: 78, category: 'backend' },
      { name: 'Express.js', level: 80, category: 'backend' },
      { name: 'Git', level: 85, category: 'tools' },
      { name: 'Docker', level: 75, category: 'tools' },
      { name: 'VS Code', level: 90, category: 'tools' }
    ],

    // Projects - UPDATE WITH YOUR ACTUAL PROJECTS
    projects: [
      {
        id: 'portfolio',
        name: 'OS Portfolio',
        description: 'A unique portfolio website designed as an operating system interface with draggable windows and authentic 90s styling.',
        technologies: ['Vue.js', 'TypeScript', 'Vuetify'],
        status: 'completed',
        projectUrl: 'https://yourportfolio.com',
        codeUrl: 'https://github.com/yourusername/portfolio',
        featured: true
      },
      {
        id: 'task-manager',
        name: 'Modern Task Manager',
        description: 'A collaborative task management application with real-time updates, user authentication, and project organization.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        status: 'completed',
        projectUrl: 'https://taskmanager.com',
        codeUrl: 'https://github.com/yourusername/task-manager',
        featured: true
      },
      {
        id: 'weather-app',
        name: 'Weather Forecast App',
        description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
        technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
        status: 'completed',
        projectUrl: 'https://weatherapp.com',
        codeUrl: 'https://github.com/yourusername/weather-app',
        featured: false
      }
    ],

    // Experience - UPDATE WITH YOUR ACTUAL EXPERIENCE
    experience: [
      {
        id: 'current-role',
        position: 'Backend Developer',
        company: 'Kruso',
        period: '2020 - Present',
        description: 'Consultancy work involving backend development, API design, and database management for various clients.',
        current: true
      },
      {
        id: 'fullstack-dev',
        position: 'Full Stack Developer',
        company: 'IHPostal',
        period: '2019',
        description: 'Built and maintained web application for the Norwegian postal service, focusing on both frontend and backend development.'
      },
      {
        id: 'master-thesis',
        position: 'Student - Computer Engineering',
        company: 'Aarhus University',
        period: '2016 - 2019',
        description: ''
      },
      {
        id: 'bachelor-thesis',
        position: 'Student - Medialogy',
        company: 'Aalborg University',
        period: '2011 - 2014',
        description: ''
      }
    ],
    
    // Site Customization
    footerNote: 'Built with passion and attention to detail.'
  })

  const socialLinks = ref<SocialLink[]>([
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/johan-joergensen/',
      icon: 'mdi-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/johankjoergensen',
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

  const skillsByCategory = computed(() => ({
    frontend: personalInfo.value.skills.filter(skill => skill.category === 'frontend'),
    backend: personalInfo.value.skills.filter(skill => skill.category === 'backend'),
    tools: personalInfo.value.skills.filter(skill => skill.category === 'tools')
  }))

  const featuredProjects = computed(() => 
    personalInfo.value.projects.filter(project => project.featured)
  )

  const completedProjects = computed(() =>
    personalInfo.value.projects.filter(project => project.status === 'completed')
  )

  function updatePersonalInfo(updates: Partial<PersonalInfo>) {
    personalInfo.value = { ...personalInfo.value, ...updates }
  }

  return {
    personalInfo: personalInfo.value,
    socialLinks: socialLinks.value,
    currentYear,
    basicInfo,
    contactInfo,
    skillsByCategory,
    featuredProjects,
    completedProjects,
    updatePersonalInfo
  }
}