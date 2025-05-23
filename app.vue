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

<style>
:root {
  font-family: "游ゴシック", YuGothic, "游ゴシック体", "Yu Gothic", sans-serif;
}

body {
  font-family: "游ゴシック", YuGothic, "游ゴシック体", "Yu Gothic", sans-serif;
}
</style>
