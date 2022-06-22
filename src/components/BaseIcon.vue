<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  icon: string
}>()

const iconPath = computed(() => `/icons/dashboard.svg?#${props.icon}`)
</script>

<template>
  <svg class="block flex-shrink-0 fill-current">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>
