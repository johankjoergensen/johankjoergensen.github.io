import { ref, computed } from 'vue'

export interface NavigationText {
  home: string
  skills: string
  projects: string
  blog: string
  contact: string
}

export interface ButtonText {
  contactMe: string
  downloadCV: string
  downloadResume: string
  toggleNavigation: string
  visitProfile: string
}

export interface SectionHeadings {
  quickLinks: string
  connectWithMe: string
  moreInfo: string
  techStack: string
  skillsExperience: string
  projectPortfolio: string
  blog: string
  contactInformation: string
}

export interface Labels {
  location: string
  availability: string
  profilePhoto: string
  allRightsReserved: string
  builtWith: string
}

export interface AriaLabels {
  toggleNavigationMenu: string
  profilePhotoAlt: string
  visitSocialProfile: string
}

export interface PlaceholderText {
  skillsDescription: string
  projectsDescription: string
  blogDescription: string
  contactDescription: string
}

export interface TextDictionary {
  navigation: NavigationText
  buttons: ButtonText
  headings: SectionHeadings
  labels: Labels
  aria: AriaLabels
  placeholders: PlaceholderText
}

export function useTextDictionary() {
  const dictionary = ref<TextDictionary>({
    navigation: {
      home: 'Home',
      skills: 'Skills & Experience',
      projects: 'Project Portfolio',
      blog: 'Blog',
      contact: 'Contact'
    },
    
    buttons: {
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
      downloadResume: 'Download Resume',
      toggleNavigation: 'Toggle navigation menu',
      visitProfile: 'Visit my'
    },
    
    headings: {
      quickLinks: 'Quick Links',
      connectWithMe: 'Connect With Me',
      moreInfo: 'More Info',
      techStack: 'This site built with:',
      skillsExperience: 'Skills & Experience',
      projectPortfolio: 'Project Portfolio',
      blog: 'Blog',
      contactInformation: 'Contact Information'
    },
    
    labels: {
      location: 'Location',
      availability: 'Availability',
      profilePhoto: 'Profile Photo',
      allRightsReserved: 'All rights reserved',
      builtWith: 'This site built with:'
    },
    
    aria: {
      toggleNavigationMenu: 'Toggle navigation menu',
      profilePhotoAlt: 'profile photo',
      visitSocialProfile: 'Visit my'
    },
    
    placeholders: {
      skillsDescription: 'This section will contain your skills, experience, and professional background.',
      projectsDescription: 'This section will showcase your projects and work samples.',
      blogDescription: 'This section will contain your articles and blog posts.',
      contactDescription: 'This section will have your contact form and details.'
    }
  })

  const textDictionary = computed(() => dictionary.value)

  const navigationItems = computed(() => {
    const nav = dictionary.value.navigation
    return [
      { id: 'home', label: nav.home },
      { id: 'skills', label: nav.skills },
      { id: 'projects', label: nav.projects },
      { id: 'blog', label: nav.blog },
      { id: 'contact', label: nav.contact }
    ]
  })

  const footerQuickLinks = computed(() => {
    const nav = dictionary.value.navigation
    return [
      { href: '#home', label: nav.home },
      { href: '#skills', label: nav.skills },
      { href: '#projects', label: nav.projects },
      { href: '#blog', label: nav.blog },
      { href: '#contact', label: nav.contact }
    ]
  })

  function getText(keyPath: string): string {
    const keys = keyPath.split('.')
    let value: any = dictionary.value
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        console.warn(`Text key '${keyPath}' not found in dictionary`)
        return keyPath // Return the key path as fallback
      }
    }
    
    return typeof value === 'string' ? value : keyPath
  }

  function getCopyrightText(year: number, name: string): string {
    return `© ${year} ${name}. ${dictionary.value.labels.allRightsReserved}.`
  }

  function getSocialVisitText(profileName: string): string {
    return `${dictionary.value.buttons.visitProfile} ${profileName}`
  }

  function getProfilePhotoAlt(name: string): string {
    return `${name} ${dictionary.value.aria.profilePhotoAlt}`
  }

  function updateText(keyPath: string, newValue: string): void {
    const keys = keyPath.split('.')
    const lastKey = keys.pop()
    let target: any = dictionary.value
    
    for (const key of keys) {
      if (target[key]) {
        target = target[key]
      } else {
        console.warn(`Cannot update text: path '${keyPath}' not found`)
        return
      }
    }
    
    if (lastKey && target) {
      target[lastKey] = newValue
    }
  }

  return {
    textDictionary,
    navigationItems,
    footerQuickLinks,
    getText,
    getCopyrightText,
    getSocialVisitText,
    getProfilePhotoAlt,
    updateText
  }
}