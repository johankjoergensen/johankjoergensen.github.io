<template>
  <div class="system-info-content">
    <!-- User Info -->
    <div class="user-section">
      <div class="user-avatar">
        <v-icon icon="mdi-account" size="32" color="#0050a0" />
      </div>
      <div class="user-details">
        <h3>{{ personalInfo.personalInfo.name }}</h3>
        <p class="job-title">{{ personalInfo.personalInfo.jobTitle }}</p>
      </div>
    </div>

    <!-- System Details -->
    <div class="system-details">
      <div class="detail-row">
        <span class="label">{{ textDictionary.windows.systemInfo.labels.location }}</span>
        <span class="value">{{ personalInfo.personalInfo.location }}</span>
      </div>
      <div class="detail-row">
        <span class="label">{{ textDictionary.windows.systemInfo.labels.email }}</span>
        <span class="value email-link" @click="sendEmail">{{ personalInfo.personalInfo.email }}</span>
      </div>
      <div class="detail-row">
        <span class="label">{{ textDictionary.windows.systemInfo.labels.status }}</span>
        <span class="value status-available">{{ personalInfo.personalInfo.availabilityStatus }}</span>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="tech-section">
      <p class="tech-label">{{ textDictionary.windows.systemInfo.techSection }}:</p>
      <div class="tech-tags">
        <span 
          v-for="tech in personalInfo.personalInfo.techStack.slice(0, 4)" 
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
        <span v-if="personalInfo.personalInfo.techStack.length > 4" class="tech-more">
          +{{ personalInfo.personalInfo.techStack.length - 4 }} more
        </span>
      </div>
    </div>

    <!-- System Actions -->
    <div class="system-actions">
      <button class="system-button" @click="downloadResume">
        <v-icon icon="mdi-download" size="12" />
        {{ textDictionary.windows.systemInfo.buttons.resume }}
      </button>
      <button class="system-button" @click="viewProjects">
        <v-icon icon="mdi-folder" size="12" />
        {{ textDictionary.windows.systemInfo.labels.projects }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useWindowManager } from '@/composables/useWindowManager'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { openWindow } = useWindowManager()
const { textDictionary } = useTextDictionary()

function sendEmail() {
  window.open(`mailto:${personalInfo.personalInfo.email}`, '_blank')
}

function downloadResume() {
  if (personalInfo.personalInfo.resumeLink) {
    window.open(personalInfo.personalInfo.resumeLink, '_blank')
  }
}

function viewProjects() {
  openWindow('projects', 'My Projects', 'projects')
}
</script>

<style scoped>
.system-info-content {
  padding: 12px;
  font-size: 11px;
  color: var(--text-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: var(--gray-light);
  border: 1px inset var(--gray-medium);
}

.user-avatar {
  background: var(--gray-gradient-diagonal);
  border: 1px outset var(--gray-medium);
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-details h3 {
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: var(--blue-primary);
}

.job-title {
  margin: 2px 0 0 0;
  font-size: 10px;
  color: var(--text-secondary);
}

.system-details {
  flex: 1;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
  border-bottom: 1px dotted var(--gray-dark);
}

.detail-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: bold;
  color: var(--text-primary);
  min-width: 60px;
}

.value {
  color: var(--text-secondary);
  text-align: right;
  flex: 1;
}

.email-link {
  color: var(--blue-dark);
  cursor: pointer;
  text-decoration: underline;
}

.email-link:hover {
  color: var(--blue-light);
}

.status-available {
  color: var(--teal-primary) !important;
  font-weight: bold;
}

.tech-section {
  margin-top: 4px;
}

.tech-label {
  font-size: 10px;
  font-weight: bold;
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

.tech-tag {
  background: var(--gray-gradient);
  border: 1px outset var(--gray-medium);
  padding: 1px 4px;
  font-size: 9px;
  border-radius: 2px;
  color: black;
}

.tech-more {
  font-size: 9px;
  color: var(--text-secondary);
  font-style: italic;
  padding: 1px 4px;
}

.system-actions {
  display: flex;
  gap: 4px;
  margin-top: 8px;
}

.system-button {
  flex: 1;
  background: var(--gray-gradient);
  border: 2px outset var(--gray-medium);
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 9px;
  padding: 4px 6px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.system-button:hover {
  background: var(--gray-gradient-light);
}

.system-button:active {
  border: 2px inset var(--gray-medium);
  background: var(--gray-gradient-pressed);
}

/* Compact layout for small window */
@media (max-height: 200px) {
  .system-info-content {
    font-size: 10px;
  }
  
  .user-details h3 {
    font-size: 12px;
  }
  
  .system-actions {
    margin-top: 4px;
  }
}
</style>