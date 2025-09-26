<template>
  <div class="window-content-wrapper">
    <div class="projects-content">
      <h2> {{ textDictionary.windows.projects.title }} </h2>
      
      <div class="projects-grid">
        <div 
          v-for="project in personalInfo.personalInfo.projects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-header">
            <v-icon 
              :icon="getProjectIcon(project.id)" 
              size="24" 
              :color="getProjectColor(project.id)" 
            />
            <h3>{{ project.name }}</h3>
          </div>
          <p class="project-description">
            {{ project.description }}
          </p>
          <div class="project-tech">
            <span 
              v-for="tech in project.technologies" 
              :key="tech" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <div class="project-status">
            <span class="status-label">{{ textDictionary.windows.projects.status }}</span>
            <span class="status-value" :class="project.status">{{ formatStatus(project.status) }}</span>
          </div>
          <div class="project-actions">
            <button 
              v-if="project.projectUrl" 
              class="button button-gradient outset-border"
              @click="openProject(project.projectUrl)"
            >
              {{ textDictionary.windows.projects.viewProject }}
            </button>
            <button 
              v-if="project.codeUrl" 
              class="button button-gradient outset-border"
              @click="openCode(project.codeUrl)"
            >
              {{ textDictionary.windows.projects.viewCode }}
            </button>
          </div>
        </div>
      </div>

      <div class="more-projects">
        <p>{{ textDictionary.windows.projects.moreProjects }}</p>
        <button class="button primary" @click="visitGitHub">{{ textDictionary.windows.projects.visitGitHub }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()

// Project icon mapping
function getProjectIcon(projectId: string): string {
  const iconMap: Record<string, string> = {
    'portfolio': 'mdi-web',
    'task-manager': 'mdi-application',
    'weather-app': 'mdi-weather-partly-cloudy',
    'default': 'mdi-folder'
  }
  return iconMap[projectId] || iconMap.default
}

// Project color mapping
function getProjectColor(projectId: string): string {
  const colorMap: Record<string, string> = {
    'portfolio': 'var(--blue-accent)',
    'task-manager': 'var(--error-text)',
    'weather-app': 'var(--teal-primary)',
    'default': 'var(--text-secondary)'
  }
  return colorMap[projectId] || colorMap.default
}

// Format project status
function formatStatus(status: 'completed' | 'in-progress' | 'planned'): string {
  const statusMap: Record<string, string> = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'planned': 'Planned'
  }
  return statusMap[status] || status
}

// Open project URL
function openProject(url: string) {
  window.open(url, '_blank')
}

// Open code URL
function openCode(url: string) {
  window.open(url, '_blank')
}

// Visit GitHub profile
function visitGitHub() {
  const githubLink = personalInfo.socialLinks.find(link => link.name === 'GitHub')
  if (githubLink) {
    window.open(githubLink.url, '_blank')
  }
}
</script>

<style scoped>
.window-content-wrapper {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.projects-content h2 {
  color: var(--blue-primary);
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  border-bottom: 2px solid var(--blue-primary);
  padding-bottom: 4px;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.project-card {
  background: var(--gray-light);
  border: 2px outset var(--gray-medium);
  padding: 12px;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.project-header h3 {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}

.project-description {
  font-size: 11px;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 8px 0 12px 0;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 12px;
}

.tech-tag {
  background: var(--gray-gradient);
  border: 1px outset var(--gray-medium);
  padding: 2px 6px;
  font-size: 9px;
  border-radius: 2px;
  color: black;
}

.project-status {
  margin: 8px 0;
  font-size: 10px;
}

.status-label {
  font-weight: bold;
  color: var(--text-primary);
}

.status-value {
  margin-left: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 9px;
}

.status-value.completed {
  background: var(--success-bg);
  color: var(--success-text);
  border: 1px solid var(--success-border);
}

.status-value.in-progress {
  background: var(--warning-bg);
  color: var(--warning-text);
  border: 1px solid var(--warning-border);
}

.status-value.planned {
  background: var(--error-bg);
  color: var(--error-text);
  border: 1px solid var(--error-border);
}

.project-actions {
  display: flex;
  gap: 8px;
}

.button {
  background: var(--gray-gradient);
  border: 2px outset var(--gray-medium);
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 10px;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
}

.button:hover {
  background: var(--gray-gradient-light);
}

.button:active {
  border: 2px inset var(--gray-medium);
}

.more-projects {
  text-align: center;
  padding: 16px;
  background: var(--gray-light);
  border: 1px inset var(--gray-medium);
}

.more-projects p {
  font-size: 12px;
  color: var(--text-primary);
  margin: 0 0 12px 0;
}

.button.primary {
  background: var(--blue-gradient);
  border: 2px outset var(--blue-accent);
  color: white;
  font-weight: bold;
}
</style>
