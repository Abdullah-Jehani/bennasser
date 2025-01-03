<script setup></script>

<template>
  <header class="md:px-[120px] px-8">
    <navBarComponent />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
<script setup>
import navBarComponent from "./components/Public/navBarComponent.vue";
import FooterComponent from "./components/Public/FooterComponent.vue";
</script>

<style scoped></style>
