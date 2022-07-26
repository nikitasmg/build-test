<template>
  <div class="container">
    <div class="row">
      <Filter :list="constant.filterList" @click="changeFilter"/>
      <MyInput v-model.lazy.trim="searchText" :placeholder="'Найти'" type="search"></MyInput>
    </div>
    <TransitionGroup name="list" tag="div" class="cards">
      <Card
          v-for="product in visibleData"
          :key="product.id"
          :product="product"
          :action="Enums.Actions.ADD"
          @action="handleAction"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "@vue/reactivity";
import Filter from "../filter/Filter.vue";
import MyInput from "~/components/UI/myInput/MyInput.vue";
import * as constant from '~/core/constants'
import * as IProduct from '~/core/models/IProduct'
import Card from "~/components/card/Card.vue";
import * as Enums from "~/core/enums";
import {useFetchProducts} from "~/composables/useFetchProducts";

interface Props {
  typeOfPage: Enums.TypeOfPage
}

const props = defineProps<Props>()
const searchText = ref('')
const filter = ref('Все типы')

const changeFilter = (e: string) => {
  filter.value = e
}

const buyProduct = () => {
  // logic for buy product
  console.log('buy')
}

const filterPost = (items: IProduct.Item[], filter: string) => {
  if (filter === 'Все типы') {
    return items
  }
  return items.filter(el => el.type === filter)
};

const searchEmp = (items: IProduct.Item[], term: string) => {
  if (!term) {
    return items;
  }
  return items.filter((el) => el.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
};

// API
const {getProducts, getFavorite, getDeals, addToFavorite, addToDeals} = useFetchProducts()


const currentFetch = () => {
  switch (props.typeOfPage) {
    case Enums.TypeOfPage.ALL:
      return getProducts()
    case Enums.TypeOfPage.FAVORITE:
      return getFavorite()
    case Enums.TypeOfPage.DEALS:
      return getDeals()
  }
}

const {data: products} = currentFetch()

console.log(products.value)

const visibleData = computed(() => {
  return filterPost(searchEmp(products.value, searchText.value), filter.value);
})

const handleAction = (e: { type: string, data: IProduct.Item }) => {
  switch (e.type) {
    case Enums.ProductActions.ADD_TO_FAVORITE:
      addToFavorite(e.data)
      break
    case Enums.ProductActions.ADD_TO_DEALS:
      addToDeals(e.data)
      break
    case Enums.ProductActions.BUY_PRODUCT:
      buyProduct()
      break
  }
}

</script>


<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
}

.cards {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>