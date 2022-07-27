<template>
  <component
      :is="iconsMap[props.type]"
      :style="{
      'min-width': props.width ? `${props.width}px` : 'auto',
      'min-height': props.height ? `${props.height}px` : 'auto',
    }"
      role="presentation"
      v-bind="$attrs"
      :color="props.color"
      @click="$emit('click', { props: $props, from: null })"
  />
</template>


<script setup lang="ts">
import Heart from '@/components/icon/icons/heart.vue'
import Box from '@/components/icon/icons/box.vue'
import Geo from '@/components/icon/icons/geo.vue'
import Bag from '@/components/icon/icons/bag.vue'
import Search from '@/components/icon/icons/search.vue'
import FilledHeart from '@/components/icon/icons/filledHeart.vue'


interface Props {
  width?:string,
  height?:string,
  color?:string,
  type?:string
}
const props = defineProps<Props>()
const iconsMap = {
  heart: Heart,
  box: Box,
  geo: Geo,
  bag: Bag,
  search: Search,
  filledHeart: FilledHeart,
}
</script>

<style scoped>
svg {
  display: block;
}
</style>
