<template>
  <header class="md:px-[120px] px-8">
    <navBarComponent
      v-if="
        router.currentRoute.value.path !== '/signup' &&
        router.currentRoute.value.path !== '/login'
      "
    />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterComponent
      :class="router.currentRoute.value.path === '/' ? 'pt-48' : ''"
      v-if="
        router.currentRoute.value.path !== '/signup' &&
        router.currentRoute.value.path !== '/login'
      "
    />
  </footer>
</template>
<script setup>
import navBarComponent from "./components/Public/navBarComponent.vue";
import FooterComponent from "./components/Public/FooterComponent.vue";
import router from "./router";
</script>

<style scoped></style>
