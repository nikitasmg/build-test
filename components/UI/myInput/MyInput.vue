<template>
  <label class="input">
    <input
        class="input__el text"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="emit('update:modelValue', $event.target.value)"
    />
    <MyButton v-if="props.type === 'search'" color="main" class="input__button">
      <template #icon>
        <Icon type="search" width="15" heigth="15"/>
      </template>
    </MyButton>
  </label>
</template>

<script setup lang="ts">
import MyButton from "~/components/UI/myButton/MyButton.vue";

interface Props {
  modelValue?: string,
  type: string,
  placeholder: string,
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
.input {
  position: relative;
  display: block;
  width: 275px;

  &__el {
    width: 100%;
    outline: none;
    padding: 16px 20px;
    border-radius: $b-radius-sm;
    border: 1px solid $color-dark-bg;
    transition: $transition;

    &:focus {
      border: 1px solid $color-main;
      transition: $transition;
    }

    &::placeholder {
      color: $color-secondary;
    }
  }

  &__button {
    position: absolute;
    top: 7px;
    right: 4px;
  }
}

</style>