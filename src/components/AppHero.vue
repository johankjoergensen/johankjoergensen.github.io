<template>
  <v-container fluid class="hero-section">
    <v-container>
      <v-row align="center" justify="center" min-height="100vh">
        <v-col cols="12" md="6" order="2" order-md="1">
          <div class="hero-content">
            <h1 class="text-h2 text-md-h1 font-weight-bold mb-4">
              {{ personalInfo.personalInfo.name }}
            </h1>
            <h2 class="text-h4 text-md-h3 text-primary mb-6">
              {{ personalInfo.personalInfo.jobTitle }}
            </h2>
            <p class="text-body-1 text-md-h6 mb-8">
              {{ personalInfo.personalInfo.description }}
            </p>
            
            <!-- Details -->
            <div class="mb-8">
              <v-chip
                prepend-icon="mdi-map-marker"
                color="primary"
                variant="outlined"
                class="me-4 mb-2"
              >
                {{ personalInfo.personalInfo.location }}
              </v-chip>
              
              <v-chip
                prepend-icon="mdi-check-circle"
                color="success"
                variant="outlined"
                class="mb-2"
              >
                {{ personalInfo.personalInfo.availabilityStatus }}
              </v-chip>
            </div>

            <!-- Action Buttons -->
            <div class="d-flex flex-column flex-sm-row ga-4">
              <v-btn
                :href="`mailto:${personalInfo.personalInfo.email}`"
                color="primary"
                size="large"
                prepend-icon="mdi-email"
              >
                {{ textDictionary.buttons.contactMe }}
              </v-btn>
              
              <v-btn
                :href="personalInfo.personalInfo.resumeLink"
                variant="outlined"
                color="primary"
                size="large"
                prepend-icon="mdi-download"
                download
              >
                {{ textDictionary.buttons.downloadCV }}
              </v-btn>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" order="1" order-md="2" class="text-center">
          <div class="hero-image">
            <v-avatar
              v-if="personalInfo.personalInfo.profileImage"
              :image="personalInfo.personalInfo.profileImage"
              size="300"
              class="elevation-8"
            />
            <v-avatar
              v-else
              size="300"
              color="grey-lighten-2"
              class="elevation-8"
            >
              <v-icon size="120" color="grey-lighten-1">mdi-account</v-icon>
            </v-avatar>
            
            <p v-if="!personalInfo.personalInfo.profileImage" class="text-caption mt-4">
              {{ textDictionary.labels.profilePhoto }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, rgb(var(--v-theme-secondary)) 100%);
  background-attachment: fixed;
  color: white;
}

.hero-content {
  text-align: center;
  text-align-last: left;
}

@media (min-width: 960px) {
  .hero-content {
    text-align: left;
  }
}

.hero-image {
  position: relative;
  display: inline-block;
}
</style>