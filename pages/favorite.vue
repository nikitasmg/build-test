<template>
  <CardList :filterType="FilterType.FAVORITE"/>
</template>
<script setup>
import CardList from "../components/cardList/CardList";
import {FilterType} from "../core/enums";


</script>