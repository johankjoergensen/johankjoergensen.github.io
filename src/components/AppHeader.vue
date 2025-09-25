<template>
  <v-app-bar
    :elevation="isScrolled ? 4 : 0"
    :color="isScrolled ? 'surface' : 'transparent'"
    fixed
    app
  >
    <v-container>
      <div class="d-flex align-center justify-space-between">
        <!-- Brand/Logo -->
        <v-btn
          :text="personalInfo.personalInfo.name"
          variant="text"
          size="large"
          class="text-h6 font-weight-bold"
          @click="scrollToSection('home')"
        />

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            v-for="item in navigationItems"
            :key="item.id"
            :text="item.label"
            variant="text"
            :color="activeSection === item.id ? 'primary' : undefined"
            @click="scrollToSection(item.id)"
          />
        </div>

        <!-- Mobile Menu Button -->
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
          :aria-label="textDictionary.aria.toggleNavigationMenu"
        />
      </div>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="d-md-none"
  >
    <v-list>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.id"
        :title="item.label"
        :active="activeSection === item.id"
        @click="scrollToSection(item.id)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { navigationItems, textDictionary } = useTextDictionary()

const drawer = ref(false)
const activeSection = ref('home')
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  const sections = ['home', 'skills', 'projects', 'blog', 'contact']
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    drawer.value = false // Close mobile drawer
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>