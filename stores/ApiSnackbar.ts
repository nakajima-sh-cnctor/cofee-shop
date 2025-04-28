import { defineStore } from 'pinia'

export const useApiSnackbar = defineStore('apiSnackbar', () => {
  const isOpen = ref(false)
  const message = ref('')
  const color = ref('')

  const openSnackbar = (value: string, success: boolean) => {
    isOpen.value = true
    message.value = value
    color.value = success ? 'success' : 'error'
  }

  return { isOpen, message, color, openSnackbar }
})
