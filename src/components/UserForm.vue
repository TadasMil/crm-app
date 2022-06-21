<script setup name="UserForm" lang="ts">
import { Form } from 'vee-validate'
import { reactive, ref } from 'vue'

import { getUserCoordinates } from '../helpers/getUserCoordinates'

import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'

interface IUser {
  firstName: string
  lastName: string
  email: string
  city: string
  street: string
  houseNumber: string
  zipCode: string
}

const form = ref<IUser>({
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  street: '',
  houseNumber: '',
  zipCode: '',
})

const schema = reactive({
  firstName: {
    name: 'firstName',
    label: 'First Name',
    rules: 'required|min',
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
    rules: 'required|min',
  },
  email: {
    name: 'email',
    label: 'Email',
    rules: 'required|email',
  },
  city: {
    name: 'city',
    label: 'City',
    rules: 'required',
  },
  street: {
    name: 'street',
    label: 'Street',
    rules: 'required',
  },
  houseNumber: {
    name: 'houseNumber',
    label: 'House Number',
    rules: 'required',
  },
  zipCode: {
    name: 'zipCode',
    label: 'Zip Code',
    rules: 'required|zipcode',
  },
})

const onSubmit = async (values: any) => {
  const fullAddress = `${values.street} ${values.houseNumber} ${values.city} ${values.zipCode}`
  const coordinates = await getUserCoordinates(fullAddress)
  console.log(coordinates)
}
</script>

<template>
  <Form class="w-1/2 rounded bg-white p-4 shadow-md" @submit="onSubmit">
    <div class="grid grid-cols-2 gap-4">
      <BaseInput v-bind="schema.firstName" v-model="form.firstName" />
      <BaseInput v-bind="schema.lastName" v-model="form.lastName" />
      <BaseInput v-bind="schema.email" v-model="form.email" />
      <BaseInput v-bind="schema.city" v-model="form.city" />
      <BaseInput v-bind="schema.street" v-model="form.street" />
      <BaseInput v-bind="schema.houseNumber" v-model="form.houseNumber" />
      <BaseInput v-bind="schema.zipCode" v-model="form.zipCode" />
    </div>

    <div class="mt-4 flex justify-end">
      <BaseButton type="submit"> Submit </BaseButton>
    </div>
  </Form>
</template>
