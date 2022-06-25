<script setup name="BaseSuccess" lang="ts">
import BaseIcon from './BaseIcon.vue'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center space-y-2"
  >
    <BaseIcon icon="success" class="h-16 w-16 text-success" />
    <p class="font-bold text-success">{{ title }}</p>
    <slot />
  </div>
</template>
