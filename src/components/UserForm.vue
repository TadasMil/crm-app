<script setup name="UserForm" lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form } from 'vee-validate'

import { IUser, IUserEntity } from '../helpers/interfaces'
import { useState } from '../composables/useState'

import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'
import BaseState from './BaseState.vue'

interface Props {
  user?: IUserEntity
}

const props = withDefaults(defineProps<Props>(), {
  user: () => ({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    houseNumber: '',
    zipCode: '',
    coordinates: '',
    id: '',
  }),
})

const emit = defineEmits<{
  (e: 'submit', values: any, state: any): void
}>()

const form = ref<IUser>({
  firstName: props.user?.firstName || '',
  lastName: props.user?.lastName || '',
  email: props.user?.email || '',
  city: props.user?.city || '',
  street: props.user?.street || '',
  houseNumber: props.user?.houseNumber || '',
  zipCode: props.user?.zipCode || '',
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

const state = useState()

const router = useRouter()

const redirectToUserList = () => {
  router.push({
    name: 'UsersIndex',
  })
}

const onSubmit = async (values: any) => {
  state.setLoading()

  emit('submit', values, state)
}
</script>

<template>
  <BaseState successTitle="User successfully created">
    <template #success-actions>
      <BaseButton buttonType="success" @click="redirectToUserList">
        Back to user list
      </BaseButton>
    </template>

    <Form @submit="onSubmit">
      <div class="grid grid-cols-2 gap-4">
        <BaseInput v-bind="schema.firstName" v-model="form.firstName" />
        <BaseInput v-bind="schema.lastName" v-model="form.lastName" />
        <BaseInput v-bind="schema.email" v-model="form.email" />
        <BaseInput v-bind="schema.city" v-model="form.city" />
        <BaseInput v-bind="schema.street" v-model="form.street" />
        <BaseInput v-bind="schema.houseNumber" v-model="form.houseNumber" />
        <BaseInput v-bind="schema.zipCode" v-model="form.zipCode" />
      </div>

      <div class="mt-4 flex place-content-end">
        <BaseButton type="submit"> Submit </BaseButton>
      </div>
    </Form>
  </BaseState>
</template>
