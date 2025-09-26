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
        <p><strong>📅 Response Time:</strong> {{ textDictionary.windows.contact.info.responseTime }}</p>
        <p><strong>🕐 Availability:</strong> {{ textDictionary.windows.contact.info.availability }} ({{ personalInfo.personalInfo.location }} time)</p>
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
  color: #000080;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  border-bottom: 2px solid #000080;
  padding-bottom: 4px;
}

.contact-form {
  background: #f0f0f0;
  border: 2px inset #c0c0c0;
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
  color: #333;
  margin-bottom: 4px;
}

.input, .textarea {
  width: 100%;
  border: 2px inset #c0c0c0;
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
  border: 2px inset #c0c0c0;
  padding: 16px;
  margin-bottom: 16px;
}

.contact-info h3 {
  color: #333;
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
  background: #f8f8f8;
  border: 1px inset #e0e0e0;
}

.info-item span {
  flex: 1;
  font-size: 11px;
  color: #333;
}

.response-info {
  background: #fffacd;
  border: 2px inset #c0c0c0;
  padding: 12px;
}

.response-info p {
  font-size: 11px;
  color: #333;
  margin: 4px 0;
  line-height: 1.3;
}

.button {
  background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
  border: 2px outset #c0c0c0;
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 10px;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
}

.button:hover:not(:disabled) {
  background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
}

.button:active:not(:disabled) {
  border: 2px inset #c0c0c0;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button.primary {
  background: linear-gradient(to bottom, #4a90e2, #2171b5);
  border: 2px outset #4a90e2;
  color: white;
  font-weight: bold;
}

.button.small {
  font-size: 9px;
  padding: 2px 6px;
}
</style>
