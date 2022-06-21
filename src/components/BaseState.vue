<script setup name="BaseState" lang="ts">
import { injectState } from '../composables/useState'

import BaseLoading from './BaseLoading.vue'
import BaseSuccess from './BaseSuccess.vue'

const props = defineProps({
  injectKey: {
    type: String,
    default: 'state',
  },
  successTitle: {
    type: String,
    default: '',
  },
})

const { stateIsLoading, stateIsIdle, stateIsSuccess } = injectState(
  props.injectKey
)
</script>

<template>
  <slot v-if="stateIsLoading" name="success">
    <BaseLoading />
  </slot>

  <slot v-if="stateIsSuccess" name="success">
    <BaseSuccess :title="successTitle">
      <slot name="success-actions" />
    </BaseSuccess>
  </slot>

  <div v-if="stateIsIdle">
    <slot />
  </div>
</template>
