<template>
  <div id="nav">
      <router-link id="logo" to="/">Vue School Travel App</router-link>
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id}}"
      >
        {{ destination.name }}
      </router-link>
  </div>
</template>
<script setup>
import sourceData from '@/data.json';
import {computed} from "vue";

const destinations = computed(() => {
  return sourceData.destinations
});

</script>
