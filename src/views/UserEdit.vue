<script setup name="UserEdit" lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import { IUserEntity } from '../helpers/interfaces'
import { getUserCoordinates } from '../helpers/getUserCoordinates'
import { storage } from '../helpers/storage'

import UserEditMap from '../components/UserEditMap.vue'
import UserForm from '../components/UserForm.vue'

const route = useRoute()

const user = ref(
  storage.getUsers().find((user: IUserEntity) => user.id === route.params.id)
)

const onSubmit = async (values: any, state: any) => {
  const fullAddress = `${values.street} ${values.houseNumber} ${values.city} ${values.zipCode}`
  const coordinates = await getUserCoordinates(fullAddress)

  const userInfo: IUserEntity = {
    ...values,
    id: route.params.id,
    coordinates,
  }

  user.value = userInfo
  storage.addNewUser(userInfo)

  state.setIdle()
}
</script>

<template>
  <div class="grid grid-rows-2 gap-4 lg:grid-cols-2">
    <div class="h-[410px] rounded bg-white p-4 shadow">
      <UserForm :user="user" @submit="onSubmit" />
    </div>

    <div class="h-[410px] w-full rounded bg-white p-4 shadow">
      <UserEditMap :coordinates="user.coordinates" />
    </div>
  </div>
</template>
