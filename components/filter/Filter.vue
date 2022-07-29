<template>
  <ul class="filter">
    <li
        v-for="(item, idx) in props.list"
        :key="item"
        :class="{'text-light': currentElement !== item}"
        class="filter__item text"
        @click="changeActiveElement(idx, item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {computed, ref} from "@vue/reactivity";
const props = defineProps<{ list?: string[] }>();
const emit = defineEmits(['click'])

const elementNumber = ref(0);
const currentElement = computed((): string => {
  return props.list[elementNumber.value]
});
const changeActiveElement = (idx: number, item:string) => {
  elementNumber.value = idx
  emit('click', item )
};

</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 0 12px;

  max-width: 320px;

  list-style: none;

  background-color: $color-light-bg;
  border-radius: $b-radius-sm;
  border: 1px solid $color-dark-bg;

  cursor: pointer;

  &__item {
    padding: 12px 0;
  }
}

</style>