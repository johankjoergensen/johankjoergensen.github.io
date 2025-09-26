<template>
  <div 
    class="window"
    :class="{ active: windowState.isActive }"
    :style="windowStyle"
    @mousedown="bringToFront"
  >
    <!-- Title Bar -->
    <div 
      class="window-title-bar"
      @mousedown="startDrag"
      @dblclick="handleTitleBarDoubleClick"
    >
      <div class="window-title-content">
        <v-icon :icon="windowIcon" size="14" class="window-icon" />
        <span class="window-title">{{ windowState.title }}</span>
      </div>
      <div class="window-controls">
        <button 
          class="window-control minimize"
          @click.stop="minimize"
          title="Minimize"
        >
          −
        </button>
        <button 
          class="window-control maximize"
          @click.stop="toggleMaximize"
          :title="windowState.isMaximized ? 'Restore' : 'Maximize'"
        >
          {{ windowState.isMaximized ? '❐' : '□' }}
        </button>
        <button 
          class="window-control close"
          @click.stop="close"
          title="Close"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Window Content -->
    <div class="window-content" v-if="!windowState.isMinimized">
      <component 
        :is="contentComponent" 
        :window-id="windowState.id"
        @close="close"
      />
    </div>

    <!-- Resize Handle -->
    <div 
      v-if="!windowState.isMaximized && !windowState.isMinimized"
      class="resize-handle"
      @mousedown="startResize"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { useWindowManager, type WindowState } from '@/composables/useWindowManager'

interface Props {
  windowState: WindowState
}

const props = defineProps<Props>()

const { bringToFront: wmBringToFront, minimizeWindow, maximizeWindow, closeWindow, updateWindowPosition, updateWindowSize } = useWindowManager()

// Dragging state
const isDragging = ref(false)
const isResizing = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const initialPosition = ref({ x: 0, y: 0 })
const initialSize = ref({ width: 0, height: 0 })

// Window content components mapping using defineAsyncComponent
const contentComponents = {
  'about': defineAsyncComponent(() => import('@/components/windows/AboutWindow.vue')),
  'skills': defineAsyncComponent(() => import('@/components/windows/SkillsWindow.vue')),
  'projects': defineAsyncComponent(() => import('@/components/windows/ProjectsWindow.vue')),
  'blog': defineAsyncComponent(() => import('@/components/windows/BlogWindow.vue')),
  'contact': defineAsyncComponent(() => import('@/components/windows/ContactWindow.vue')),
  'system-info': defineAsyncComponent(() => import('@/components/windows/SystemInfoWindow.vue'))
}

const contentComponent = computed(() => {
  return contentComponents[props.windowState.component as keyof typeof contentComponents] || null
})

const windowIcon = computed(() => {
  const icons = {
    'about': 'mdi-account-circle',
    'skills': 'mdi-account-cog',
    'projects': 'mdi-folder-multiple',
    'blog': 'mdi-notebook-edit',
    'contact': 'mdi-email',
    'system-info': 'mdi-information'
  }
  return icons[props.windowState.component as keyof typeof icons] || 'mdi-application'
})

const windowStyle = computed(() => ({
  left: `${props.windowState.position.x}px`,
  top: `${props.windowState.position.y}px`,
  width: `${props.windowState.size.width}px`,
  height: `${props.windowState.size.height}px`,
  zIndex: props.windowState.zIndex,
  display: props.windowState.isMinimized ? 'none' : 'block'
}))

function bringToFront() {
  wmBringToFront(props.windowState.id)
}

function minimize() {
  minimizeWindow(props.windowState.id)
}

function toggleMaximize() {
  maximizeWindow(props.windowState.id)
}

function close() {
  closeWindow(props.windowState.id)
}

function handleTitleBarDoubleClick() {
  toggleMaximize()
}

// Dragging functionality
function startDrag(event: MouseEvent) {
  if (props.windowState.isMaximized) return
  
  isDragging.value = true
  dragStart.value = { x: event.clientX, y: event.clientY }
  initialPosition.value = { ...props.windowState.position }
  
  document.addEventListener('mousemove', handleDrag)
  document.addEventListener('mouseup', stopDrag)
  event.preventDefault()
}

function handleDrag(event: MouseEvent) {
  if (!isDragging.value) return
  
  const deltaX = event.clientX - dragStart.value.x
  const deltaY = event.clientY - dragStart.value.y
  
  const newPosition = {
    x: Math.max(0, Math.min(initialPosition.value.x + deltaX, window.innerWidth - props.windowState.size.width)),
    y: Math.max(0, Math.min(initialPosition.value.y + deltaY, window.innerHeight - props.windowState.size.height - 40))
  }
  
  updateWindowPosition(props.windowState.id, newPosition)
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
}

// Resizing functionality
function startResize(event: MouseEvent) {
  isResizing.value = true
  dragStart.value = { x: event.clientX, y: event.clientY }
  initialSize.value = { ...props.windowState.size }
  
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  event.preventDefault()
}

function handleResize(event: MouseEvent) {
  if (!isResizing.value) return
  
  const deltaX = event.clientX - dragStart.value.x
  const deltaY = event.clientY - dragStart.value.y
  
  const newSize = {
    width: Math.max(300, initialSize.value.width + deltaX),
    height: Math.max(200, initialSize.value.height + deltaY)
  }
  
  updateWindowSize(props.windowState.id, newSize)
}

function stopResize() {
  isResizing.value = false
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
}

onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
})
</script>