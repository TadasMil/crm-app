<script setup name="BaseInput" lang="ts">
import { useField } from 'vee-validate'
import { computed, toRef, watch } from 'vue'

const props = defineProps<{
  label: string
  modelValue: string
  name: string
  rules: string
}>()

const emit = defineEmits(['update:modelValue'])

const dynamicRules = computed(() => props.rules)

const name = toRef(props, 'name')

const { errorMessage, value, handleChange } = useField(name, dynamicRules, {
  initialValue: props.modelValue,
  valueProp: 'modelValue',
})

watch(
  () => value.value,
  (newValue) => {
    emit('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<template>
  <div>
    <label
      class="mb-2 block text-sm font-medium text-primary text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </label>

    <input
      type="text"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary"
      :name="name"
      :value="value"
      @input="handleChange"
    />
    <span class="text-sm text-danger">{{ errorMessage }}</span>
  </div>
</template>
