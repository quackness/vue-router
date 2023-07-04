<template>
  <h1>{{ destination.name }}</h1>
  <img :src="`/images/${destination.image}`" :alt="destination.name" />
  <p>{{ destination.description }}</p>
</template>

//in vue dev tools go to router view and inspect the params 

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";

const route = useRoute();

// computed
const destinationId = computed(() => {
  return parseInt(route.params.id);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === destinationId.value
  );
});
</script>

//use parseInt to cast it into a number, all params coming from the url are strings
