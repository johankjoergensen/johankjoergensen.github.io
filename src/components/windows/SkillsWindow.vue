<template>
  <div class="window-content-wrapper">
    <div class="skills-content">
      <h2>{{ textDictionary.windows.skills.heading }}</h2>
      
      <!-- Skills Categories -->
      <div class="skills-section">
        <div class="skill-category">
          <h3>{{ textDictionary.windows.skills.frontendTitle }}</h3>
          <div class="skill-items">
            <div 
              v-for="skill in personalInfo.skillsByCategory.value.frontend" 
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <div class="skill-progress" :style="`width: ${skill.level}%`"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3>{{ textDictionary.windows.skills.backendTitle }}</h3>
          <div class="skill-items">
            <div 
              v-for="skill in personalInfo.skillsByCategory.value.backend" 
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <div class="skill-progress" :style="`width: ${skill.level}%`"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="skill-category">
          <h3>{{ textDictionary.windows.skills.toolsTitle }}</h3>
          <div class="skill-items">
            <div 
              v-for="skill in personalInfo.skillsByCategory.value.tools" 
              :key="skill.name"
              class="skill-item"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-bar">
                <div class="skill-progress" :style="`width: ${skill.level}%`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="experience-section">
        <h3>{{ textDictionary.windows.skills.experienceTitle }}</h3>
        <div class="timeline">
          <div 
            v-for="exp in personalInfo.personalInfo.experience" 
            :key="exp.id"
            class="timeline-item"
          >
            <div class="timeline-dot" :class="{ current: exp.current }"></div>
            <div class="timeline-content">
              <h4>{{ exp.position }}</h4>
              <p class="company">{{ exp.company }} • {{ exp.period }}</p>
              <p class="description">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalInfo } from '@/composables/usePersonalInfo'
import { useTextDictionary } from '@/composables/useTextDictionary'

const personalInfo = usePersonalInfo()
const { textDictionary } = useTextDictionary()
</script>

<style scoped>
.window-content-wrapper {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.skills-content h2 {
  color: var(--color-navy);
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  border-bottom: 2px solid var(--color-navy);
  padding-bottom: 4px;
}

.skills-section {
  margin-bottom: 24px;
}

.skill-category {
  margin-bottom: 20px;
  padding: 12px;
  background: var(--color-very-light-gray);
  border: 1px inset var(--color-silver);
}

.skill-category h3 {
  color: var(--text-primary);
  font-size: 13px;
  font-weight: bold;
  margin: 0 0 12px 0;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-name {
  font-size: 11px;
  font-weight: bold;
  min-width: 80px;
  color: var(--text-primary);
}

.skill-bar {
  flex: 1;
  height: 14px;
  background: white;
  border: 1px inset var(--gray-medium);
  position: relative;
}

.skill-progress {
  height: 100%;
  background: var(--blue-gradient);
  border: 1px outset var(--blue-accent);
  transition: width 0.3s ease;
}

.experience-section h3 {
  color: var(--blue-primary);
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 12px 0;
  border-bottom: 1px solid var(--gray-dark);
  padding-bottom: 4px;
}

.timeline {
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gray-dark);
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-dot {
  position: absolute;
  left: -12px;
  top: 6px;
  width: 8px;
  height: 8px;
  background: var(--blue-accent);
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--gray-dark);
}

.timeline-dot.current {
  background: var(--orange-accent);
  box-shadow: 0 0 0 2px var(--orange-accent), 0 0 0 4px rgba(255, 107, 53, 0.3);
}

.timeline-content h4 {
  font-size: 12px;
  font-weight: bold;
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.timeline-content .company {
  font-size: 11px;
  color: var(--text-secondary);
  margin: 0 0 4px 0;
}

.timeline-content .description {
  font-size: 11px;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
}
</style>