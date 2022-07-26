<template>
  <button
      class="button title-m"
      :class="`button color-${props.color}`"
      @click="emit('click')"
  >
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
import * as Enums from '@/core/enums'

type Props = {
  icon?: boolean,
  color?: Enums.Colors,
}
const props = defineProps<Props>()
const emit = defineEmits(['click'])
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  outline: none;
  border: none;
  border-radius: $b-radius-sm;
  cursor: pointer;

  &.color-main {
    background-color: $color-main;
    color: $color-white;

  }

  &.color-secondary {
    background-color: $color-light-bg;
    color: $color-main;
  }

  &.color-success {
    background-color: $color-success;
    color: $color-white;
  }
}
</style>