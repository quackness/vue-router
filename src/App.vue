<template>
  <TheNavigation />
  <div class="container">
      <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>

  </div>
</template>
<script setup>
import TheNavigation from "@/components/TheNavigation.vue";
</script>
<style>

.slide-enter-active,
.slide-leve-active{
    transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
    opacity:0;
    transform: translateX(-30%);
}
</style>

