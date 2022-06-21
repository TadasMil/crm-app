<script setup lang="ts">
import TheSidebar from './components/TheSidebar.vue'
import BaseLayout from './components/BaseLayout.vue'
</script>

<template>
  <main class="grid min-h-screen grid-cols-[200px_1fr]">
    <TheSidebar />

    <BaseLayout>
      <router-view />
    </BaseLayout>
  </main>
</template>
