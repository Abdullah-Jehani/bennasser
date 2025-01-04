<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 w-full"
  >
    <div v-for="product in products" :key="product.id">
      <ProductComponent
        :image="product.image"
        :title="product.title"
        :inStock="product.inStock"
        :description="product.description"
        :id="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductComponent from "./ProductComponent.vue";
const props = defineProps({
  products: Array,
});

// Example array of products
</script>
