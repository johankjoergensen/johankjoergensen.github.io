<template>
  <div class="taskbar">
    <!-- Start Button -->
    <div class="start-button" @click="toggleStartMenu" :class="{ active: showStartMenu }">
      <v-icon icon="mdi-adjust" size="16" />
      <span class="start-text">{{ textDictionary.taskbar.start }}</span>
    </div>

    <!-- Start Menu -->
    <div v-if="showStartMenu" class="start-menu">
      <div class="start-menu-header">
        <div class="start-menu-user">
          <v-icon icon="mdi-account" size="32" />
          <span>{{ personalInfo.personalInfo.name }}</span>
        </div>
      </div>
      <div class="start-menu-items">
        <div class="start-menu-item" @click="openProgram('about')">
          <v-icon icon="mdi-account-circle" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.aboutMe }}</span>
        </div>
        <div class="start-menu-item" @click="openProgram('skills')">
          <v-icon icon="mdi-account-cog" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.skillsExperience }}</span>
        </div>
        <div class="start-menu-item" @click="openProgram('projects')">
          <v-icon icon="mdi-folder-multiple" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.myProjects }}</span>
        </div>
        <div class="start-menu-item" @click="openProgram('blog')">
          <v-icon icon="mdi-notebook-edit" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.blogPosts }}</span>
        </div>
        <div class="start-menu-item" @click="openProgram('contact')">
          <v-icon icon="mdi-email" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.contactMe }}</span>
        </div>
        <div class="start-menu-separator"></div>
        <div class="start-menu-item" @click="downloadResume">
          <v-icon icon="mdi-download" size="16" />
          <span>{{ textDictionary.taskbar.startMenu.downloadResume }}</span>
        </div>
      </div>
    </div>

    <!-- Taskbar Center - Running Programs -->
    <div class="taskbar-programs">
      <!-- Running Windows -->
      <div 
        v-for="window in getAllWindows()" 
        :key="window.id"
        class="program-button"
        :class="{ 
          active: window.isActive,
          minimized: window.isMinimized 
        }"
        @click="activateWindow(window.id)"
      >
        <v-icon :icon="getWindowIcon(window.id)" size="16" />
        <span>{{ window.title }}</span>
      </div>
    </div>

    <!-- System Tray -->
    <div class="system-tray">
      <div class="system-tray-icons">
        <v-icon icon="mdi-volume-high" size="14" />
        <v-icon icon="mdi-wifi" size="14" />
        <v-icon icon="mdi-email-outline" size="14" />
      </div>
      <div class="system-clock">
        {{ currentTime }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'
import { useWindowManager } from '@/composables/useWindowManager'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()
const { getAllWindows, bringToFront, minimizeWindow } = useWindowManager()

const showStartMenu = ref(false)
const currentTime = ref('')

let timeInterval: number | null = null

function toggleStartMenu() {
  showStartMenu.value = !showStartMenu.value
}

function openProgram(program: string) {
  showStartMenu.value = false
  
  const windowTitles: Record<string, string> = {
    about: 'About Me',
    skills: 'Skills & Experience',
    projects: 'My Projects',
    blog: 'Blog Posts',
    contact: 'Contact Me'
  }
  
  const { openWindow } = useWindowManager()
  openWindow(program, windowTitles[program] || program, program)
}

function downloadResume() {
  showStartMenu.value = false
  if (personalInfo.personalInfo.resumeLink) {
    window.open(personalInfo.personalInfo.resumeLink, '_blank')
  }
}

function activateWindow(windowId: string) {
  const window = getAllWindows().find(w => w.id === windowId)
  if (window) {
    if (window.isMinimized || !window.isActive) {
      bringToFront(windowId)
    } else {
      // If window is already active, minimize it
      minimizeWindow(windowId)
    }
  }
}

function getWindowIcon(windowId: string): string {
  const iconMap: Record<string, string> = {
    'skills': 'mdi-account-cog',
    'projects': 'mdi-folder-multiple',
    'blog': 'mdi-notebook-edit',
    'contact': 'mdi-email',
    'about': 'mdi-account-circle',
    'system-info': 'mdi-information'
  }
  
  return iconMap[windowId] || 'mdi-application'
}

function updateTime() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

onMounted(() => {
  updateTime()
  timeInterval = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})

// Close start menu when clicking outside
function handleClickOutside(event: Event) {
  const target = event.target as Element
  if (!target.closest('.start-button') && !target.closest('.start-menu')) {
    showStartMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>