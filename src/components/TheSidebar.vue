<script setup name="TheSidebar" lang="ts">
  import BaseIcon from './BaseIcon.vue'
  interface IPageItem {
    name: string
    label: string
    icon: string
  }

  const pages: IPageItem[] = [
    {
      name: 'UsersIndex',
      label: 'Users',
      icon: 'users',
    },
  ]
</script>

<template>
  <div class="flex flex-col overflow-hidden bg-primary">
    <div class="flex h-20 items-center justify-center shadow-md shadow-white">
      <h1 class="text-3xl font-bold uppercase tracking-widest text-white">
        CRM
      </h1>
    </div>
    <ul v-for="page in pages" :key="page.name" class="flex flex-col py-4">
      <li
        class="flex items-center space-x-4 px-6 transition-transform duration-200 ease-in hover:translate-x-2 hover:text-secondary"
      >
        <BaseIcon icon="users" class="h-6 w-6 text-white" />
        <router-link
          class="flex h-12 transform flex-row items-center text-lg font-medium tracking-widest text-white outline-none"
          :to="{ name: page.name }"
        >
          {{ page.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
