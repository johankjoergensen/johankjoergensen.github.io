<template>
  <div class="window-content-wrapper">
    <div class="contact-content">
      <h2>{{ textDictionary.windows.contact.heading }}</h2>
      
      <!-- Contact Form -->
      <div class="contact-form">
        <div class="form-group">
          <label for="name">{{ textDictionary.windows.contact.formLabels.name }}</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name"
            class="input"
            :placeholder="textDictionary.windows.contact.placeholders.name"
          />
        </div>

        <div class="form-group">
          <label for="email">{{ textDictionary.windows.contact.formLabels.email }}</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email"
            class="input"
            :placeholder="textDictionary.windows.contact.placeholders.email"
          />
        </div>

        <div class="form-group">
          <label for="subject">{{ textDictionary.windows.contact.formLabels.subject }}</label>
          <input 
            type="text" 
            id="subject" 
            v-model="form.subject"
            class="input"
            :placeholder="textDictionary.windows.contact.placeholders.subject"
          />
        </div>

        <div class="form-group">
          <label for="message">{{ textDictionary.windows.contact.formLabels.message }}</label>
          <textarea 
            id="message" 
            v-model="form.message"
            class="textarea"
            rows="6"
            :placeholder="textDictionary.windows.contact.placeholders.message"
          ></textarea>
        </div>

        <div class="form-actions">
          <button class="button primary" @click="sendMessage">
            {{ textDictionary.windows.contact.buttons.send }}
          </button>
          <button class="button" @click="clearForm">
            {{ textDictionary.windows.contact.buttons.clear }}
          </button>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="contact-info">
        <h3>{{ textDictionary.windows.contact.info.title }}</h3>
        <div class="info-grid">
          <div class="info-item">
            <v-icon icon="mdi-email" size="16" />
            <span>{{ personalInfo.personalInfo.email }}</span>
            <button class="button small" @click="copyEmail">{{ textDictionary.windows.contact.buttons.copy }}</button>
          </div>

          <div class="info-item">
            <v-icon icon="mdi-linkedin" size="16" />
            <span>{{ textDictionary.windows.contact.buttons.linkedIn }}</span>
            <button class="button small" @click="openLinkedIn">{{ textDictionary.windows.contact.buttons.visit }}</button>
          </div>

          <div class="info-item">
            <v-icon icon="mdi-github" size="16" />
            <span>{{ textDictionary.windows.contact.buttons.gitHub }}</span>
            <button class="button small" @click="openGitHub">{{ textDictionary.windows.contact.buttons.visit }}</button>
          </div>

          <div class="info-item">
            <v-icon icon="mdi-map-marker" size="16" />
            <span>{{ personalInfo.personalInfo.location }}</span>
            <button class="button small" disabled>📍</button>
          </div>
        </div>
      </div>

      <!-- Response Time Info -->
      <div class="response-info">
        <p><strong>{{ textDictionary.windows.contact.info.getInTouch }}</strong></p>
        <p><strong> Response Time:</strong> {{ textDictionary.windows.contact.info.responseTime }}</p>
        <p><strong> Availability:</strong> {{ textDictionary.windows.contact.info.availability }} ({{ personalInfo.personalInfo.location }} time)</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function sendMessage() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all required fields!')
    return
  }

  // Create mailto link with form data
  const subject = form.value.subject || 'Contact from Portfolio'
  const body = `Hi ${personalInfo.personalInfo.name},\n\n${form.value.message}\n\nBest regards,\n${form.value.name}\n${form.value.email}`
  
  const mailtoLink = `mailto:${personalInfo.personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.open(mailtoLink, '_blank')
  
  alert('Opening your email client... Please send the message from there!')
}

function clearForm() {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

function copyEmail() {
  navigator.clipboard.writeText(personalInfo.personalInfo.email).then(() => {
    alert('Email copied to clipboard!')
  })
}

function openLinkedIn() {
  const linkedInUrl = personalInfo.socialLinks.find(s => s.name === 'LinkedIn')?.url
  if (linkedInUrl) {
    window.open(linkedInUrl, '_blank')
  }
}

function openGitHub() {
  const githubUrl = personalInfo.socialLinks.find(s => s.name === 'GitHub')?.url
  if (githubUrl) {
    window.open(githubUrl, '_blank')
  }
}
</script>

<style scoped>
.window-content-wrapper {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.contact-content h2 {
  color: var(--blue-primary);
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  border-bottom: 2px solid var(--blue-primary);
  padding-bottom: 4px;
}

.contact-form {
  background: var(--gray-light);
  border: 2px inset var(--gray-medium);
  padding: 16px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 11px;
  font-weight: bold;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.input, .textarea {
  width: 100%;
  border: 2px inset var(--gray-medium);
  background: white;
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 11px;
  padding: 4px 6px;
  box-sizing: border-box;
}

.textarea {
  resize: vertical;
  min-height: 80px;
}

.input:focus, .textarea:focus {
  outline: 1px dotted black;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.contact-info {
  background: white;
  border: 2px inset var(--gray-medium);
  padding: 16px;
  margin-bottom: 16px;
}

.contact-info h3 {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 12px 0;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  background: var(--gray-extra-light);
  border: 1px inset var(--gray-light-alt);
}

.info-item span {
  flex: 1;
  font-size: 11px;
  color: var(--text-primary);
}

.response-info {
  background: var(--teal-light);
  border: 2px inset var(--gray-medium);
  padding: 12px;
}

.response-info p {
  font-size: 11px;
  color: var(--text-primary);
  margin: 4px 0;
  line-height: 1.3;
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

.button:hover:not(:disabled) {
  background: var(--gray-gradient-light);
}

.button:active:not(:disabled) {
  border: 2px inset var(--gray-medium);
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button.primary {
  background: var(--blue-gradient);
  border: 2px outset var(--blue-accent);
  color: white;
  font-weight: bold;
}

.button.small {
  font-size: 9px;
  padding: 2px 6px;
}
</style>
