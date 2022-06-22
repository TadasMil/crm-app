<script setup name="UsersIndex" lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import { storage } from '../helpers/storage'

import UsersIndexUserList from '../components/UsersIndexUserList.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseIcon from '../components/BaseIcon.vue'

const router = useRouter()

const redirectToUserCreationPage = () => {
  router.push({
    name: 'UserNew',
  })
}

const users = computed(() => storage.getUsers())
</script>

<template>
  <div class="space-y-4">
    <BaseButton icon="plus" @click="redirectToUserCreationPage">
      <div class="flex items-center">
        <BaseIcon icon="plus" class="mr-1 h-5 w-5 text-white" />
        New User
      </div>
    </BaseButton>

    <UsersIndexUserList :users="users" />
  </div>
</template>
