<template>
  <section>
    <h1>{{ experience?.name }}</h1>
    <img :src="`/images/${experience?.image}`" :alt="experience?.name" />
    <p>{{ experience?.description }}</p>
  </section>
</template>
<script setup>
import sourceData from "@/data.json";
import { computed, ref } from "vue";

// const id = ref(null);
// const experienceSlug = ref("test");

const props = defineProps({
  id: { type: Number, required: true },
  experienceSlug: { type: String, required: true },
});
console.log("props", props.experienceSlug);
console.log("props", props.id);

const destination = computed(() => {
  console.log(sourceData);
  return sourceData?.destinations?.find(
    (destination) => destination.id === props.id
  );
});
console.log("log", destination);

const experience = computed(() => {
  console.log("destination", destination);
  console.log("props", props.experienceSlug);
  return destination.value.experiences.find(
    (experience) => experience.slug === props.experienceSlug
  );
});
</script>