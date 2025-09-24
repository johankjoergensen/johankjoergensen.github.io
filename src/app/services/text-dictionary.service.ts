import { Injectable } from '@angular/core';

export interface NavigationText {
  home: string;
  skills: string;
  projects: string;
  blog: string;
  contact: string;
}

export interface ButtonText {
  contactMe: string;
  downloadCV: string;
  downloadResume: string;
  toggleNavigation: string;
  visitProfile: string;
}

export interface SectionHeadings {
  quickLinks: string;
  connectWithMe: string;
  moreInfo: string;
  techStack: string;
  skillsExperience: string;
  projectPortfolio: string;
  blog: string;
  contactInformation: string;
}

export interface PlaceholderText {
  skillsDescription: string;
  projectsDescription: string;
  blogDescription: string;
  contactDescription: string;
}

export interface Labels {
  location: string;
  availability: string;
  profilePhoto: string;
  allRightsReserved: string;
  builtWith: string;
}

export interface AriaLabels {
  toggleNavigationMenu: string;
  profilePhotoAlt: string;
  visitSocialProfile: string;
}

export interface TextDictionary {
  navigation: NavigationText;
  buttons: ButtonText;
  headings: SectionHeadings;
  labels: Labels;
  aria: AriaLabels;
  placeholders: PlaceholderText;
}

@Injectable({
  providedIn: 'root'
})
export class TextDictionaryService {
  
  private dictionary: TextDictionary = {
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
  };

  /**
   * Get the complete text dictionary
   */
  getDictionary(): TextDictionary {
    return this.dictionary;
  }

  /**
   * Get navigation text
   */
  getNavigation(): NavigationText {
    return this.dictionary.navigation;
  }

  /**
   * Get navigation items as array with id and label
   */
  getNavigationItems(): Array<{id: string, label: string}> {
    const nav = this.dictionary.navigation;
    return [
      { id: 'home', label: nav.home },
      { id: 'skills', label: nav.skills },
      { id: 'projects', label: nav.projects },
      { id: 'blog', label: nav.blog },
      { id: 'contact', label: nav.contact }
    ];
  }

  /**
   * Get footer quick links
   */
  getFooterQuickLinks(): Array<{href: string, label: string}> {
    const nav = this.dictionary.navigation;
    return [
      { href: '#home', label: nav.home },
      { href: '#skills', label: nav.skills },
      { href: '#projects', label: nav.projects },
      { href: '#blog', label: nav.blog },
      { href: '#contact', label: nav.contact }
    ];
  }

  /**
   * Get button text
   */
  getButtons(): ButtonText {
    return this.dictionary.buttons;
  }

  /**
   * Get section headings
   */
  getHeadings(): SectionHeadings {
    return this.dictionary.headings;
  }

  /**
   * Get labels
   */
  getLabels(): Labels {
    return this.dictionary.labels;
  }

  /**
   * Get ARIA labels for accessibility
   */
  getAriaLabels(): AriaLabels {
    return this.dictionary.aria;
  }

  /**
   * Get placeholder text for sections
   */
  getPlaceholders(): PlaceholderText {
    return this.dictionary.placeholders;
  }

  /**
   * Get specific text by key path (e.g., 'buttons.contactMe')
   */
  getText(keyPath: string): string {
    const keys = keyPath.split('.');
    let value: any = this.dictionary;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`Text key '${keyPath}' not found in dictionary`);
        return keyPath; // Return the key path as fallback
      }
    }
    
    return typeof value === 'string' ? value : keyPath;
  }

  /**
   * Get copyright text with year and name
   */
  getCopyrightText(year: number, name: string): string {
    return `© ${year} ${name}. ${this.dictionary.labels.allRightsReserved}.`;
  }

  /**
   * Get social profile visit text
   */
  getSocialVisitText(profileName: string): string {
    return `${this.dictionary.buttons.visitProfile} ${profileName}`;
  }

  /**
   * Get profile photo alt text
   */
  getProfilePhotoAlt(name: string): string {
    return `${name} ${this.dictionary.aria.profilePhotoAlt}`;
  }

  /**
   * Update dictionary text (useful for future i18n support)
   */
  updateText(keyPath: string, newValue: string): void {
    const keys = keyPath.split('.');
    const lastKey = keys.pop();
    let target: any = this.dictionary;
    
    for (const key of keys) {
      if (target[key]) {
        target = target[key];
      } else {
        console.warn(`Cannot update text: path '${keyPath}' not found`);
        return;
      }
    }
    
    if (lastKey && target) {
      target[lastKey] = newValue;
    }
  }

  /**
   * Load dictionary from external source (for future i18n support)
   */
  loadDictionary(newDictionary: Partial<TextDictionary>): void {
    this.dictionary = { ...this.dictionary, ...newDictionary };
  }
}