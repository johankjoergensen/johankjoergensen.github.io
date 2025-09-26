import { ref, computed } from 'vue'

export interface TaskbarText {
  start: string
  startMenu: {
    aboutMe: string
    skillsExperience: string
    myProjects: string
    blogPosts: string
    contactMe: string
    downloadResume: string
  }
}

export interface DesktopText {
  shortcuts: {
    skillsExperience: string
    myProjects: string
    blogPosts: string
    contactMe: string
    aboutMe: string
    resumePdf: string
  }
}

export interface WindowContent {
  about: {
    title: string
    heading: string
    description: string[]
    techStackTitle: string
    downloadResumeButton: string
    sendEmailButton: string
    resumeNotAvailable: string
  }
  skills: {
    title: string
    heading: string
    frontendTitle: string
    backendTitle: string
    toolsTitle: string
    experienceTitle: string
  }
  contact: {
    title: string
    heading: string
    formLabels: {
      name: string
      email: string
      subject: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      subject: string
      message: string
    }
    buttons: {
      send: string
      clear: string
      copy: string
      visit: string
      linkedIn: string
      gitHub: string
    }
    info: {
      title: string
      getInTouch: string
      responseTime: string
      availability: string
    }
  }
  projects: {
    title: string
    heading: string
    viewProject: string
    viewCode: string
    technologies: string
    status: string
    description: string
  }
  systemInfo: {
    title: string
    userSection: string
    systemSection: string
    techSection: string
    labels: {
      location: string
      email: string
      status: string
      projects: string
    }
    buttons: {
      resume: string
      contact: string
      linkedin: string
    }
  }
  blog: {
    title: string
    heading: string
    readMore: string
    posts: {
      vintage: {
        title: string
        date: string
        excerpt: string
        tags: string[]
      }
      typescript: {
        title: string
        date: string
        excerpt: string
        tags: string[]
      }
      responsive: {
        title: string
        date: string
        excerpt: string
        tags: string[]
      }
      modern: {
        title: string
        date: string
        excerpt: string
        tags: string[]
      }
    }
    placeholders: {
      comingSoon: string
      noResults: string
      loading: string
    }
  }
}

export interface TextDictionary {
  taskbar: TaskbarText
  desktop: DesktopText
  windows: WindowContent
}

export function useTextDictionary() {
  const dictionary = ref<TextDictionary>({
    taskbar: {
      start: 'Start',
      startMenu: {
        aboutMe: 'About Me',
        skillsExperience: 'Skills & Experience',
        myProjects: 'My Projects',
        blogPosts: 'Blog Posts',
        contactMe: 'Contact Me',
        downloadResume: 'Download Resume'
      }
    },

    desktop: {
      shortcuts: {
        skillsExperience: 'Skills & Experience',
        myProjects: 'My Projects',
        blogPosts: 'Blog Posts',
        contactMe: 'Contact Me',
        aboutMe: 'About Me',
        resumePdf: 'Resume.pdf'
      }
    },

    windows: {
      about: {
        title: 'About Me',
        heading: 'About Me',
        description: [
          'Welcome to my personal portfolio! I\'m a passionate developer with expertise in modern web technologies. I enjoy creating innovative solutions and building user-friendly applications that make a difference.',
          'My experience spans across various technologies and frameworks, and I\'m always eager to learn new things and take on exciting challenges.'
        ],
        techStackTitle: 'Technologies I Work With',
        downloadResumeButton: '📄 Download Resume',
        sendEmailButton: '✉️ Send Email',
        resumeNotAvailable: 'Resume download will be available soon!'
      },
      skills: {
        title: 'Skills & Experience',
        heading: '💼 Skills & Experience',
        frontendTitle: '🚀 Frontend Development',
        backendTitle: '⚙️ Backend Development',
        toolsTitle: '🛠️ Tools & Technologies',
        experienceTitle: '📈 Experience Overview'
      },
      contact: {
        title: 'Contact Me',
        heading: '📧 Contact Me',
        formLabels: {
          name: 'Name:',
          email: 'Email:',
          subject: 'Subject:',
          message: 'Message:'
        },
        placeholders: {
          name: 'Your Name',
          email: 'your.email@example.com',
          subject: 'What\'s this about?',
          message: 'Your message here...'
        },
        buttons: {
          send: '📧 Send Message',
          clear: '🗑️ Clear Form',
          copy: 'Copy',
          visit: 'Visit',
          linkedIn: 'LinkedIn Profile',
          gitHub: 'GitHub Profile'
        },
        info: {
          title: '💼 Get In Touch',
          getInTouch: 'I\'d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.',
          responseTime: 'I typically respond within 24 hours.',
          availability: 'Monday - Friday, 9 AM - 6 PM'
        }
      },
      projects: {
        title: 'Projects',
        heading: '🚀 My Projects',
        viewProject: 'View Project',
        viewCode: 'View Code',
        technologies: 'Technologies:',
        status: 'Status:',
        description: 'Description:'
      },
      systemInfo: {
        title: 'System Information',
        userSection: 'User Information',
        systemSection: 'System Details',
        techSection: 'Primary Tech Stack',
        labels: {
          location: 'Location:',
          email: 'Email:',
          status: 'Status:',
          projects: 'Projects'
        },
        buttons: {
          resume: 'Download Resume',
          contact: 'Contact Me',
          linkedin: 'LinkedIn'
        }
      },
      blog: {
        title: 'Blog',
        heading: '📝 Blog Posts',
        readMore: 'Read More',
        posts: {
          vintage: {
            title: 'Building a Vintage OS Interface with Vue.js',
            date: 'March 15, 2024',
            excerpt: 'Learn how to create a nostalgic operating system interface using modern web technologies. This post covers everything from styling to window management.',
            tags: ['Vue.js', 'CSS', 'UI/UX']
          },
          typescript: {
            title: 'TypeScript Best Practices for Vue Applications',
            date: 'February 28, 2024',
            excerpt: 'Explore the best practices for using TypeScript in Vue applications, including proper typing, composables, and component patterns.',
            tags: ['TypeScript', 'Vue.js', 'Best Practices']
          },
          responsive: {
            title: 'The Art of Responsive Design',
            date: 'January 12, 2024',
            excerpt: 'Creating responsive layouts that work across all devices requires careful planning and understanding of modern CSS techniques.',
            tags: ['CSS', 'Responsive', 'Design']
          },
          modern: {
            title: 'Modern Web Development with Vite and Vue 3',
            date: 'December 8, 2023',
            excerpt: 'Discover how Vite revolutionizes the development experience with lightning-fast builds and hot module replacement for Vue 3 applications.',
            tags: ['Vite', 'Vue 3', 'Performance']
          }
        },
        placeholders: {
          comingSoon: 'More blog posts coming soon!',
          noResults: 'No posts found matching your criteria.',
          loading: 'Loading blog posts...'
        }
      }
    }
  })

  const textDictionary = computed(() => dictionary.value)

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
    getText,
    updateText
  }
}