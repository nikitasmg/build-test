<template>
  <CardList :typeOfPage="TypeOfPage.ALL"/>
</template>
<script setup>
import CardList from "../components/cardList/CardList";
import {TypeOfPage} from "../core/enums";

</script>