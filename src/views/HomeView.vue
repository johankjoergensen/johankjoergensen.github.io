<template>
  <div class="desktop-environment">
    <!-- Desktop Background -->
    <div class="desktop-wallpaper">
      <!-- Desktop Icons/Shortcuts -->
      <div class="desktop-grid">
        <DesktopShortcut 
          icon="mdi-account-cog"
          :label="textDictionary.desktop.shortcuts.skillsExperience"
          @double-click="openWindow('skills')"
          class="triangle-icon triangle-row-1-col-1"
        />
        <DesktopShortcut 
          icon="mdi-folder-multiple"
          :label="textDictionary.desktop.shortcuts.myProjects"
          @double-click="openWindow('projects')"
          class="triangle-icon triangle-row-1-col-2"
        />
        <DesktopShortcut 
          icon="mdi-notebook-edit"
          :label="textDictionary.desktop.shortcuts.blogPosts"
          @double-click="openWindow('blog')"
          class="triangle-icon triangle-row-1-col-3"
        />
        <DesktopShortcut 
          icon="mdi-email"
          :label="textDictionary.desktop.shortcuts.contactMe"
          @double-click="openWindow('contact')"
          class="triangle-icon triangle-row-2-col-1"
        />
        <DesktopShortcut 
          icon="mdi-account-circle"
          :label="textDictionary.desktop.shortcuts.aboutMe"
          @double-click="openWindow('about')"
          class="triangle-icon triangle-row-2-col-2"
        />
        <DesktopShortcut 
          icon="mdi-download"
          :label="textDictionary.desktop.shortcuts.resumePdf"
          @double-click="downloadResume"
          class="triangle-icon triangle-row-3-col-1"
        />
        <!-- System Info positioned in bottom-right of grid -->
        <DesktopShortcut 
          icon="mdi-information"
          label="System Info"
          @double-click="openWindow('system-info')"
          class="system-info-shortcut"
        />
      </div>

      <!-- Open Windows -->
      <OSWindow 
        v-for="windowState in getVisibleWindows()" 
        :key="windowState.id"
        :window-state="windowState"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopShortcut from '@/components/DesktopShortcut.vue'
import OSWindow from '@/components/OSWindow.vue'
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'
import { useWindowManager } from '@/composables/useWindowManager'
import { onMounted } from 'vue'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()
const { openWindow: openWindowManager, getVisibleWindows, updateWindowPosition, updateWindowSize } = useWindowManager()

// Open system info window and position it in bottom right on mount
onMounted(() => {
  // Open the system info window using the WindowManager
  openWindowManager('system-info', textDictionary.value.windows.systemInfo.title, 'system-info')
  
  // Position it in the bottom right after creation and set appropriate size
  setTimeout(() => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    
    // Set appropriate size for system info
    updateWindowSize('system-info', {
      width: 300,
      height: 200
    })
    
    // Update position to bottom right
    updateWindowPosition('system-info', {
      x: windowWidth - 320,
      y: windowHeight - 250
    })
  }, 100) // Small delay to ensure window is created
})

function openWindow(section: string) {
  const windowTitles: Record<string, string> = {
    skills: 'Skills & Experience',
    projects: 'My Projects', 
    blog: 'Blog Posts',
    contact: 'Contact Me',
    about: 'About Me',
    'system-info': textDictionary.value.windows.systemInfo.title
  }
  
  openWindowManager(section, windowTitles[section] || section, section)
}

function downloadResume() {
  if (personalInfo.personalInfo.resumeLink) {
    window.open(personalInfo.personalInfo.resumeLink, '_blank')
  }
}
</script>