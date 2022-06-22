<script setup name="UsersEdit" lang="ts">
import { v4 as uuidv4 } from 'uuid'

import { getUserCoordinates } from '../helpers/getUserCoordinates'
import { IUserEntity } from '../helpers/interfaces'
import { storage } from '../helpers/storage'

import UserForm from '../components/UserForm.vue'

const onSubmit = async (values: any, state: any) => {
  const fullAddress = `${values.street} ${values.houseNumber} ${values.city} ${values.zipCode}`
  const coordinates = await getUserCoordinates(fullAddress)

  const user: IUserEntity = {
    ...values,
    id: uuidv4(),
    coordinates,
  }

  storage.addNewUser(user)

  state.setSuccess()
}
</script>

<template>
  <div class="h-[410px] w-1/2 rounded bg-white p-4 shadow-md">
    <UserForm @submit="onSubmit" />
  </div>
</template>
