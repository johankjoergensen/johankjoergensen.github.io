import { ref, reactive } from 'vue'

export interface WindowState {
  id: string
  title: string
  component: string
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  isActive: boolean
}

const windows = ref<WindowState[]>([])
const nextZIndex = ref(100)
const activeWindowId = ref<string | null>(null)

export function useWindowManager() {
  function openWindow(id: string, title: string, component: string) {
    const existingWindow = windows.value.find(w => w.id === id)
    
    if (existingWindow) {
      // Window already exists, just bring it to front and unminimize
      existingWindow.isMinimized = false
      bringToFront(id)
      return
    }

    // Create new window with staggered position
    const newWindow: WindowState = {
      id,
      title,
      component,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      position: { 
        x: 50 + (windows.value.length * 30), 
        y: 50 + (windows.value.length * 30) 
      },
      size: { width: 600, height: 400 },
      zIndex: nextZIndex.value++,
      isActive: true
    }

    // Deactivate all other windows
    windows.value.forEach(w => w.isActive = false)
    
    windows.value.push(newWindow)
    activeWindowId.value = id
  }

  function closeWindow(id: string) {
    const index = windows.value.findIndex(w => w.id === id)
    if (index !== -1) {
      windows.value.splice(index, 1)
      
      // If we closed the active window, activate another one
      if (activeWindowId.value === id) {
        const topWindow = getTopWindow()
        activeWindowId.value = topWindow?.id || null
        if (topWindow) {
          topWindow.isActive = true
        }
      }
    }
  }

  function minimizeWindow(id: string) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.isMinimized = true
      window.isActive = false
      
      // Activate the next top window
      const topWindow = getTopWindow()
      if (topWindow) {
        topWindow.isActive = true
        activeWindowId.value = topWindow.id
      } else {
        activeWindowId.value = null
      }
    }
  }

  function maximizeWindow(id: string) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      if (window.isMaximized) {
        // Restore
        window.isMaximized = false
        window.size = { width: 600, height: 400 }
        window.position = { x: 50, y: 50 }
      } else {
        // Maximize
        window.isMaximized = true
        window.size = { width: globalThis.innerWidth - 100 || 800, height: globalThis.innerHeight - 140 || 500 }
        window.position = { x: 20, y: 20 }
      }
      bringToFront(id)
    }
  }

  function bringToFront(id: string) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      // Deactivate all windows
      windows.value.forEach(w => w.isActive = false)
      
      // Activate and bring to front
      window.zIndex = nextZIndex.value++
      window.isActive = true
      window.isMinimized = false
      activeWindowId.value = id
    }
  }

  function updateWindowPosition(id: string, position: { x: number; y: number }) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.position = position
    }
  }

  function updateWindowSize(id: string, size: { width: number; height: number }) {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      window.size = size
    }
  }

  function getTopWindow(): WindowState | undefined {
    return windows.value
      .filter(w => !w.isMinimized)
      .sort((a, b) => b.zIndex - a.zIndex)[0]
  }

  function getVisibleWindows() {
    return windows.value.filter(w => !w.isMinimized)
  }

  function getAllWindows() {
    return windows.value
  }

  function getActiveWindow() {
    return windows.value.find(w => w.id === activeWindowId.value)
  }

  return {
    windows: windows.value,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    bringToFront,
    updateWindowPosition,
    updateWindowSize,
    getVisibleWindows,
    getAllWindows,
    getActiveWindow
  }
}