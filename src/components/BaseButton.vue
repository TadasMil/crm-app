<script setup lang="ts" name="BaseButton">
import { ButtonHTMLAttributes, computed } from 'vue'

interface Props {
  type?: ButtonHTMLAttributes['type']
  buttonType?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  buttonType: 'primary',
})

const emit = defineEmits<{
  (e: 'click'): () => void
}>()

const onClick = () => {
  console.log('here')
  emit('click')
}

const typeIsPrimary = computed(() => props.buttonType === 'primary')
const typeIsSuccess = computed(() => props.buttonType === 'success')
</script>

<template>
  <button
    class="rounded-lg px-4 py-1"
    :type="type"
    :class="{
      ' bg-primary font-medium tracking-widest text-white outline-none hover:bg-primary-200':
        typeIsPrimary,
      'border border-success text-success': typeIsSuccess,
    }"
    @click="onClick"
  >
    <slot name="icon" />
    <slot />
  </button>
</template>
