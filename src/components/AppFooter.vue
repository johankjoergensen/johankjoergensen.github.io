<template>
  <v-footer class="bg-grey-darken-4 text-white">
    <v-container>
      <v-row>
        <!-- Personal Info Section -->
        <v-col cols="12" md="3">
          <h3 class="text-h6 mb-4">{{ personalInfo.personalInfo.name }}</h3>
          <p class="text-body-2 mb-4">{{ personalInfo.personalInfo.shortBio }}</p>
          
          <div class="contact-info">
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-email" size="small" class="me-2" />
              <span class="text-body-2">{{ personalInfo.personalInfo.email }}</span>
            </div>
            
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-map-marker" size="small" class="me-2" />
              <span class="text-body-2">{{ personalInfo.personalInfo.location }}</span>
            </div>
            
            <div v-if="personalInfo.personalInfo.phone" class="d-flex align-center mb-2">
              <v-icon icon="mdi-phone" size="small" class="me-2" />
              <span class="text-body-2">{{ personalInfo.personalInfo.phone }}</span>
            </div>
          </div>
        </v-col>

        <!-- Quick Links Section -->
        <v-col cols="12" md="3">
          <h4 class="text-h6 mb-4">{{ textDictionary.headings.quickLinks }}</h4>
          <div class="d-flex flex-column">
            <v-btn
              v-for="link in footerQuickLinks"
              :key="link.href"
              :href="link.href"
              variant="text"
              color="white"
              size="small"
              class="justify-start pa-1 mb-1"
            >
              {{ link.label }}
            </v-btn>
          </div>
        </v-col>

        <!-- Social Links Section -->
        <v-col cols="12" md="3">
          <h4 class="text-h6 mb-4">{{ textDictionary.headings.connectWithMe }}</h4>
          <div class="d-flex flex-column">
            <v-btn
              v-for="social in personalInfo.socialLinks"
              :key="social.name"
              :href="social.url"
              :prepend-icon="social.icon"
              variant="text"
              color="white"
              size="small"
              class="justify-start pa-1 mb-1"
              target="_blank"
              rel="noopener noreferrer"
              :title="getSocialVisitText(social.name)"
            >
              {{ social.name }}
            </v-btn>
          </div>
        </v-col>

        <!-- More Info Section -->
        <v-col cols="12" md="3">
          <h4 class="text-h6 mb-4">{{ textDictionary.headings.moreInfo }}</h4>
          
          <div class="mb-4">
            <v-btn
              :href="personalInfo.personalInfo.resumeLink"
              prepend-icon="mdi-download"
              variant="text"
              color="white"
              size="small"
              class="justify-start pa-1 mb-2"
              download
            >
              {{ textDictionary.buttons.downloadResume }}
            </v-btn>
            
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-circle" color="success" size="small" class="me-2" />
              <span class="text-body-2">{{ personalInfo.personalInfo.availabilityStatus }}</span>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="tech-stack">
            <p class="text-body-2 mb-2">{{ textDictionary.headings.techStack }}</p>
            <div class="d-flex flex-wrap ga-1">
              <v-chip
                v-for="tech in personalInfo.personalInfo.techStack"
                :key="tech"
                size="x-small"
                color="primary"
                variant="outlined"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="grey" />

      <!-- Footer Bottom -->
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            <p class="text-body-2 mb-2">
              {{ getCopyrightText(personalInfo.currentYear.value, personalInfo.personalInfo.name) }}
            </p>
            <p class="text-caption">{{ personalInfo.personalInfo.footerNote }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary, footerQuickLinks, getSocialVisitText, getCopyrightText } = useTextDictionary()
</script>

<style scoped>
.contact-info {
  opacity: 0.9;
}

.tech-stack {
  margin-top: 16px;
}
</style>