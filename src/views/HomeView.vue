<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>
<script setup>
import sourceData from "@/data.json";
// import { defineComponent } from "@vue/composition-api";
// import ref from "vue";
//  setup() {
//   return { destinations: sourceData.destinations}
// }

const destinations = sourceData.destinations;
console.log(destinations);
</script>
