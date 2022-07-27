<template>
  <div class="container">
    <div class="row">
      <Filter :list="constant.filterList" @click="changeFilter"/>
      <MyInput v-model.lazy.trim="searchText" :placeholder="'Найти'" type="search"/>
    </div>
    <div v-if="!products?.length" class="title">Нет записей</div>
    <div v-else-if="pending" class="title">Загрузка...</div>
    <div v-else-if="error" class="title">Произошла ошибка...</div>
    <TransitionGroup v-else name="list" tag="div" class="cards">
      <Card
          v-for="product in visibleData"
          class="card"
          :key="product.id"
          :product="product"
          :typeOfPage="props.typeOfPage"
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
  typeOfPage: Enums.Routes
}

const props = defineProps<Props>()
const searchText = ref('')
const filter = ref('Все типы')
const isPayButtonActive = ref(false)

const changeFilter = (e: string) => {
  filter.value = e
}

const filterPost = (items: IProduct.Item[], filter: string):IProduct.Item[] => {
  if (filter === 'Все типы') {
    return items
  }
  return items.filter(el => el.type === filter)
};

const searchEmp = (items: IProduct.Item[], term: string):IProduct.Item[] => {
  if (!term) {
    return items;
  }
  return items.filter((el) => el.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
};
const visibleData = computed(():IProduct.Item[] => {
  return filterPost(searchEmp(products.value, searchText.value), filter.value);
})

// API
const {data: products, error, pending, refresh, addToFavorite, addToDeals} = useFetchProducts(props.typeOfPage)
refresh()
const handleAction = (e: { type: string, data: IProduct.Item }) => {
  switch (e.type) {
    case Enums.ProductActions.ADD_TO_FAVORITE:
      addToFavorite(e.data)
      break
    case Enums.ProductActions.ADD_TO_DEALS:
      addToDeals(e.data)
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

  .card {
    margin-bottom: 40px;
  }
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