<template>
  <CardList :filterType="FilterType.ALL"/>
</template>
<script setup>
import CardList from "../components/cardList/CardList";
import {FilterType} from "../core/enums";

</script>