<template>
  <div class="window-content-wrapper">
    <div class="about-content">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-avatar">
          <v-icon icon="mdi-account" size="64" color="#0050a0" />
        </div>
        <div class="profile-info">
          <h2>{{ personalInfo.personalInfo.name }}</h2>
          <p class="job-title">{{ personalInfo.personalInfo.jobTitle }}</p>
          <p class="location">📍 {{ personalInfo.personalInfo.location }}</p>
          <p class="email">✉️ {{ personalInfo.personalInfo.email }}</p>
        </div>
      </div>

      <!-- About Text -->
      <div class="about-text">
        <h3>{{ textDictionary.windows.about.heading }}</h3>
        <p v-for="paragraph in textDictionary.windows.about.description" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <!-- Tech Stack -->
      <div class="tech-stack">
        <h3>{{ textDictionary.windows.about.techStackTitle }}</h3>
        <div class="tech-chips">
          <div 
            v-for="tech in personalInfo.personalInfo.techStack" 
            :key="tech"
            class="tech-chip"
          >
            {{ tech }}
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button 
          class="retro-button primary"
          @click="downloadResume"
        >
          {{ textDictionary.windows.about.downloadResumeButton }}
        </button>
        <button 
          class="retro-button"
          @click="sendEmail"
        >
          {{ textDictionary.windows.about.sendEmailButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()

function downloadResume() {
  if (personalInfo.personalInfo.resumeLink) {
    window.open(personalInfo.personalInfo.resumeLink, '_blank')
  } else {
    alert(textDictionary.value.windows.about.resumeNotAvailable)
  }
}

function sendEmail() {
  window.open(`mailto:${personalInfo.personalInfo.email}`, '_blank')
}
</script>

<style scoped>
.window-content-wrapper {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.about-content {
  max-width: 100%;
}

.profile-section {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px;
  background: #f0f0f0;
  border: 1px inset #c0c0c0;
}

.profile-avatar {
  background: linear-gradient(135deg, #f0f0f0 0%, #c0c0c0 100%);
  border: 2px outset #c0c0c0;
  border-radius: 8px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.profile-info h2 {
  margin: 0 0 8px 0;
  color: #000080;
  font-size: 18px;
  font-weight: bold;
}

.job-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 4px 0;
}

.location, .email {
  font-size: 12px;
  color: #666;
  margin: 2px 0;
}

.about-text, .tech-stack {
  margin-bottom: 20px;
}

.about-text h3, .tech-stack h3 {
  color: #000080;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
}

.about-text p {
  font-size: 12px;
  line-height: 1.4;
  margin: 8px 0;
  color: #333;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-chip {
  background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
  border: 1px outset #c0c0c0;
  padding: 4px 8px;
  font-size: 10px;
  border-radius: 2px;
  color: black;
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.retro-button {
  background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
  border: 2px outset #c0c0c0;
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 11px;
  padding: 6px 12px;
  cursor: pointer;
  user-select: none;
}

.retro-button:hover {
  background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
}

.retro-button:active {
  border: 2px inset #c0c0c0;
  background: linear-gradient(to bottom, #c0c0c0, #a0a0a0);
}

.retro-button.primary {
  background: linear-gradient(to bottom, #4a90e2, #2171b5);
  border: 2px outset #4a90e2;
  color: white;
  font-weight: bold;
}

.retro-button.primary:hover {
  background: linear-gradient(to bottom, #5ba0f2, #3181c5);
}
</style>