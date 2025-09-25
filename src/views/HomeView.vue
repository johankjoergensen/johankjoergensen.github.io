<template>
  <div>
    <AppHeader />
    
    <v-main>
      <!-- Hero Section -->
      <section id="home">
        <AppHero />
      </section>

      <!-- Placeholder sections for navigation -->
      <section id="skills" class="section-placeholder">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <div class="text-center pa-8">
                <h2 class="text-h3 mb-4">{{ textDictionary.headings.skillsExperience }}</h2>
                <p class="text-body-1">{{ textDictionary.placeholders.skillsDescription }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="projects" class="section-placeholder">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <div class="text-center pa-8">
                <h2 class="text-h3 mb-4">{{ textDictionary.headings.projectPortfolio }}</h2>
                <p class="text-body-1">{{ textDictionary.placeholders.projectsDescription }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="blog" class="section-placeholder">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <div class="text-center pa-8">
                <h2 class="text-h3 mb-4">{{ textDictionary.headings.blog }}</h2>
                <p class="text-body-1">{{ textDictionary.placeholders.blogDescription }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section id="contact" class="section-placeholder">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <div class="text-center pa-8">
                <h2 class="text-h3 mb-4">{{ textDictionary.headings.contactInformation }}</h2>
                <p class="text-body-1">{{ textDictionary.placeholders.contactDescription }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppHero from '@/components/AppHero.vue'
import { useTextDictionary } from '@/composables/useTextDictionary'

const { textDictionary } = useTextDictionary()
</script>

<style scoped>
.section-placeholder {
  min-height: 400px;
  display: flex;
  align-items: center;
}

.section-placeholder:nth-child(even) {
  background-color: rgb(var(--v-theme-surface));
}
</style>