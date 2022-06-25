<script setup name="BaseState" lang="ts">
import { injectState } from '../composables/useState'

import BaseLoading from './BaseLoading.vue'
import BaseSuccess from './BaseSuccess.vue'

interface Props {
  injectKey?: string
  successTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  injectKey: 'state',
  successTitle: '',
})

const { stateIsLoading, stateIsIdle, stateIsSuccess } = injectState(
  props.injectKey
)
</script>

<template>
  <div v-if="stateIsIdle">
    <slot />
  </div>

  <slot v-else-if="stateIsLoading" name="loading">
    <BaseLoading />
  </slot>

  <slot v-else-if="stateIsSuccess" name="success">
    <BaseSuccess :title="successTitle">
      <slot name="success-actions" />
    </BaseSuccess>
  </slot>
</template>
