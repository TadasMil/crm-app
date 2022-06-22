<script setup name="UsersIndexUserList" lang="ts">
import { IUserEntity } from '../helpers/interfaces'

const props = defineProps<{
  users: IUserEntity[]
}>()
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-sm">
      <thead class="bg-primary text-xs uppercase text-white">
        <tr>
          <th scope="col" class="px-6 py-3">Full Name</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">City</th>
          <th scope="col" class="px-6 py-3">Street</th>
          <th scope="col" class="px-6 py-3">House Number</th>
          <th scope="col" class="px-6 py-3">Zipcode</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody v-if="users.length">
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            {{ user.firstName }} {{ user.lastName }}
          </th>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="px-6 py-4">{{ user.city }}</td>
          <td class="px-6 py-4">{{ user.street }}</td>
          <td class="px-6 py-4">{{ user.houseNumber }}</td>
          <td class="px-6 py-4">{{ user.zipCode }}</td>
          <td class="px-6 py-4 text-right">
            <router-link
              :to="{ name: 'UserEdit', params: { id: user.id } }"
              class="font-medium text-primary hover:underline"
            >
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else class="h-20 w-full bg-white">
        <tr class="text-md text-center">
          <td colspan="7">No users found.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
