<script setup lang="ts">
// コンポーネントのプロパティを定義
defineProps({
  label: {
    type: String,
    default: '焙煎度',
  },
})
</script>

<template>
  <div>
    <div class="font-weight-bold text-primary mb-1">
      {{ label }}
    </div>
    <slot />
  </div>
</template>
