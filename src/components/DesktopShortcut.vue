<template>
  <div 
    class="desktop-shortcut" 
    @dblclick="handleDoubleClick"
    @click="handleClick"
    :class="{ selected: isSelected }"
  >
    <div class="shortcut-icon">
      <v-icon :icon="icon" size="32" color="#000080" />
    </div>
    <div class="shortcut-label">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  icon: string
  label: string
}

defineProps<Props>()

const emit = defineEmits<{
  'double-click': []
  'click': []
}>()

const isSelected = ref(false)

function handleClick() {
  isSelected.value = !isSelected.value
  emit('click')
}

function handleDoubleClick() {
  emit('double-click')
}
</script>