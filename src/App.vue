<script setup></script>

<template>
  <header class="px-[120px]">
    <navBarComponent />
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup>
import navBarComponent from "./components/Public/navBarComponent.vue";
</script>

<style scoped></style>
