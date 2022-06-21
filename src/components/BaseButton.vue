<script setup lang="ts" name="BaseButton">
import { ButtonHTMLAttributes } from 'vue'

interface Props {
  type: ButtonHTMLAttributes['type']
}

withDefaults(defineProps<Props>(), {
  type: 'button',
})

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    class="rounded-lg bg-primary px-4 py-1 font-medium tracking-widest text-white outline-none hover:bg-primary-200"
    :type="type"
    @click="emit('click')"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>
