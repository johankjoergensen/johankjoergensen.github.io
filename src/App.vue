<template>
  <v-app>
    <router-view />
    <Taskbar />
  </v-app>
</template>

<script setup lang="ts">
import Taskbar from './components/Taskbar.vue'
</script>

<style scoped>
/* Global app styles can be added here */
</style>