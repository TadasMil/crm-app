<script setup name="UsersIndexUserList" lang="ts">
interface IUser {
  name: string
  surrname: string
  email: string
  city: string
  street: string
  houseNumber: string
  zipCode: string
}

defineProps<{
  users: IUser[]
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
      <tbody>
        <tr
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <th
            scope="row"
            class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Sliver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-primary hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
