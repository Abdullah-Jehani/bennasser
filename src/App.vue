<template>
  <header class="md:px-[120px] px-8">
    <navBarComponent
      v-if="
        !['/signup', '/login', '/orders', '/admin'].includes(
          router.currentRoute.value.path
        ) &&
        !router.currentRoute.value.path.startsWith('/orders/') &&
        !router.currentRoute.value.path.startsWith('/admin/')
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
        !['/signup', '/login', '/cart', '/admin'].includes(
          router.currentRoute.value.path
        ) &&
        !router.currentRoute.value.path.startsWith('/orders') &&
        !router.currentRoute.value.path.startsWith('/admin')
      "
    />
  </footer>
</template>

<script setup>
import navBarComponent from "./components/Public/navBarComponent.vue";
import FooterComponent from "./components/Public/FooterComponent.vue";
import router from "./router";
</script>
