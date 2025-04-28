<script setup lang="ts">
import { useApiSnackbar } from '@/stores/ApiSnackbar'

const apiSnackbar = useApiSnackbar()
</script>

<template>
  <v-app>
    <NuxtPage />
    <v-snackbar
      v-model="apiSnackbar.isOpen"
      :timeout="2000"
      :color="apiSnackbar.color"
      rounded="pill"
    >
      {{ apiSnackbar.message }}
    </v-snackbar>
  </v-app>
</template>
