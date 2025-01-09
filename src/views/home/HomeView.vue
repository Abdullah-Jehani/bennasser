<template>
  <div>
    <HeroSectionComponent />
  </div>
  <div class="h-screen">
    <DiscoverComponent />
  </div>
  <div class="h- mt-72 px-8 md:px-[120px]">
    <ContactUsComponent />
  </div>
</template>

<script setup>
import HeroSectionComponent from "../../components/Home/HeroSectionComponent.vue";
import DiscoverComponent from "../../components/Home/DiscoverComponent.vue";
import ContactUsComponent from "../../components/Contact/ContactUsComponent.vue";
</script>
