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
      :class="
        router.currentRoute.value.path === '/' ||
        router.currentRoute.value.path === '/about-us' ||
        router.currentRoute.value.path === '/categories' ||
        router.currentRoute.value.path.startsWith('/products/') ||
        router.currentRoute.value.path.startsWith('/MyOrders')
          ? 'pt-48'
          : 'absolute bottom-0'
      "
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
