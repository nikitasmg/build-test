<template>
  <div class="card">
    <section class="card__info">
      <div class="img-wrapper">
        <img :src="props.product.image" class="img"/>
      </div>
      <div class="data">
        <span class="data__type text-m text-light">{{ props.product.type }}</span>
        <h2 class="data__name title-m">{{ props.product.name }}</h2>
        <div class="data__geo text-light text-m">
          <Icon type="geo" width="10" heigth="14"/>
          <span class="city">{{ props.product.city }}</span>
        </div>
        <span class="data__seller text-m"> <span class="text-light"> Продацец</span>{{ props.product.seller }}</span>
        <div class="data__category text-m">
          <span class="text-light"> Вид товара</span>
          <span>{{ props.product.category }}</span>
        </div>
        <p class="data__description text-m">{{ props.product.description }}</p>
      </div>
    </section>
    <section class="card__actions">
      <div>
        <h2 class="total_price title">{{ finalPrice }} ₽</h2>
        <div class="count text-m">
          <span class="text-light">Количество</span>
          <span>{{ props.product.count }} шт.</span>
        </div>
        <div class="price text-m">
          <span class="text-light">Стоимость за штуку</span>
          <span>{{ localePrice }} ₽</span>
        </div>
      </div>
      <div class="button-container">
        <MyButton v-if="isAddAction" style="padding: 17px 35px" color="secondary"
                  @click="emits('action', {type:Enums.ProductActions.ADD_TO_DEALS, data:props.product})"> Добавить
          в сделки
        </MyButton>
        <MyButton v-else style="padding: 12px 70px" color="success"
                  @click="emits('action', {type:Enums.ProductActions.BUY_PRODUCT, data:props.product})"> Оплатить
        </MyButton>
        <MyButton style="padding: 18px 16px" color="secondary"
                  @click="emits('action', {type:Enums.ProductActions.ADD_TO_FAVORITE, data:props.product})">
          <template #icon>
            <Icon type="heart" width="16" heigth="14"/>
          </template>
        </MyButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {computed} from "@vue/reactivity";
import MyButton from "~/components/UI/myButton/MyButton.vue";
import * as IProduct from '@/core/models/IProduct'
import * as Enums from '@/core/enums'

interface Props {
  product?: IProduct.Item,
  action: Enums.Actions;
}

const props = defineProps<Props>()
const emits = defineEmits(['action'])

const finalPrice = computed(() => (props.product.price * props.product.count).toLocaleString('ru-RU'))
const localePrice = computed(() => (props.product.price).toLocaleString('ru-RU'))
const isAddAction = computed(() => props.action === Enums.Actions.ADD)

</script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;

  border-radius: $b-radius-m;
  border: 1px solid $color-dark-bg;

  &__info {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    max-width: 70%;

    padding: 20px;

    .img-wrapper {
      min-width: 255px;
      min-height: 255px;
      border-radius: $b-radius-sm;

      & .img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: $b-radius-sm;
      }
    }

    .data {
      &__type {
        display: block;
        margin-bottom: 15px;
      }

      &__name {
        margin-bottom: 30px;
      }

      &__geo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 6px;

        width: max-content;
        padding: 5px 8px;
        margin-bottom: 12px;

        border-radius: $b-radius-xs;
        background-color: $color-light-bg;
      }

      &__seller {
        display: flex;
        gap: 4px;
        margin-bottom: 12px;
      }

      &__category {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;

        width: max-content;

        padding: 8px;
        background-color: $color-light-bg;
        border-radius: $b-radius-sm;

      }

      &__description {
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 19.5px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    min-width: 315px;
    border: 1px solid $color-dark-bg;
    border-radius: $b-radius-m;

    .total_price {
      margin-bottom: 14px;
    }

    .count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

}
</style>