<template>
  <div>
    <h2>Hello Destination {{ $route.params.id }}</h2>
  </div>
</template>

//in vue dev tools go to router view and inspect the params 

<script setup>
import { computed } from "vue";
// computed
const destinationId = computed(() => {
  return parseInt(this.$route.params.id);
});
</script>

//use parseInt to cast it into a number, all params coming from the url are strings
