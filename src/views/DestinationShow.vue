<template>
    <div>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
      <GoBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
    <router-view />
  </section>
    </div>
</template>

//in vue dev tools go to router view and inspect the params 

<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

const route = useRoute();
// const destination = ref(null)

const props = defineProps({
  id: { type: Number, required: true },
});

// computed
const destinationId = computed(() => {
  return parseInt(route.params.id);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === props.id
  );
});

// async function setup() {
//     const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
//     console.log(response)
//     destination.value = await response.json()
// }
// setup()

// async function initData() {
//      const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
//       destination.value  = await response.json()
// }
</script>

//use parseInt to cast it into a number, all params coming from the url are strings
