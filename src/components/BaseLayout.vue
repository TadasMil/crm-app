<script setup name="BaseLayout" lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageName = computed(() => route.meta.pageName)
</script>

<template>
  <div class="bg-secondary">
    <div class="mx-4 space-y-4">
      <h1
        class="border-text-primary flex h-20 w-full items-end border-b border-primary pb-1 text-2xl font-bold uppercase tracking-widest text-primary"
      >
        {{ pageName }}
      </h1>
      <slot />
    </div>
  </div>
</template>
