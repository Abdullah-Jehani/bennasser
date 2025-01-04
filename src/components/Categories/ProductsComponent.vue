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
      />
    </div>
  </div>
</template>

<script setup>
import ProductComponent from "./ProductComponent.vue";

// Example array of products
const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Product 1",
    inStock: true,
    description: "This is the description of Product 1.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Product 2",
    inStock: false,
    description: "This is the description of Product 2.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Product 3",
    inStock: true,
    description: "This is the description of Product 3.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Product 4",
    inStock: false,
    description: "This is the description of Product 4.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Product 5",
    inStock: true,
    description: "This is the description of Product 5.",
  },
];
</script>
