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
          <p class="location"> {{ personalInfo.personalInfo.location }}</p>
          <p class="email"> {{ personalInfo.personalInfo.email }}</p>
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
          class="action-button primary"
          @click="downloadResume"
        >
          {{ textDictionary.windows.about.downloadResumeButton }}
        </button>
        <button 
          class="action-button"
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
  background: var(--color-very-light-gray);
  border: 1px inset var(--color-silver);
}

.profile-avatar {
  background: linear-gradient(135deg, var(--color-very-light-gray) 0%, var(--color-silver) 100%);
  border: 2px outset var(--color-silver);
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
  color: var(--color-navy);
  font-size: 18px;
  font-weight: bold;
}

.job-title {
  font-size: 14px;
  font-weight: bold;
  color: var(--color-text-dark);
  margin: 4px 0;
}

.location, .email {
  font-size: 12px;
  color: var(--color-text-medium);
  margin: 2px 0;
}

.about-text, .tech-stack {
  margin-bottom: 20px;
}

.about-text h3, .tech-stack h3 {
  color: var(--color-navy);
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px 0;
  border-bottom: 1px solid var(--color-text-lighter);
  padding-bottom: 4px;
}

.about-text p {
  font-size: 12px;
  line-height: 1.4;
  margin: 8px 0;
  color: var(--color-text-dark);
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-chip {
  background: linear-gradient(to bottom, var(--color-light-gray), var(--color-silver));
  border: 1px outset var(--color-silver);
  padding: 4px 8px;
  font-size: 10px;
  border-radius: 2px;
  color: var(--color-black);
}

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.action-button {
  background: linear-gradient(to bottom, var(--color-light-gray), var(--color-silver));
  border: 2px outset var(--color-silver);
  color: var(--color-black);
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 11px;
  padding: 6px 12px;
  cursor: pointer;
  user-select: none;
}

.action-button:hover {
  background: linear-gradient(to bottom, var(--color-very-light-gray), var(--color-lighter-gray));
}

.action-button:active {
  border: 2px inset var(--color-silver);
  background: linear-gradient(to bottom, var(--color-silver), var(--color-medium-gray));
}

.action-button.primary {
  background: linear-gradient(to bottom, var(--color-light-blue), var(--color-medium-blue));
  border: 2px outset var(--color-light-blue);
  color: var(--color-white);
  font-weight: bold;
}

.action-button.primary:hover {
  background: linear-gradient(to bottom, var(--color-hover-blue), var(--color-hover-blue-dark));
}
</style>