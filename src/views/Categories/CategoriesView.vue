<template>
  <div class="grid grid-cols-12 w-full mt-4">
    <SearchBarComponent class="col-start-1 col-span-full md:px-[120px] px-8" />
  </div>
  <div class="grid grid-cols-12 w-full mt-12 mb-24 md:px-[120px] px-8">
    <ProductsComponent class="col-start-1 col-span-full" />
  </div>
</template>

<script setup>
import SearchBarComponent from "../../components/Categories/SearchBarComponent.vue";
import ProductsComponent from "../../components/Categories/ProductsComponent.vue";
</script>
