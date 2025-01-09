<template>
  <div class="grid grid-cols-12 w-full mt-4">
    <SearchBarComponent
      class="col-start-1 col-span-full md:px-[120px] px-8"
      @update-search="handleSearch"
    />
  </div>
  <div class="grid grid-cols-12 w-full mt-12 mb-24 md:px-[120px] px-8">
    <ProductsComponent
      :products="filteredProducts"
      class="col-start-1 col-span-full"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SearchBarComponent from "../../components/Categories/SearchBarComponent.vue";
import ProductsComponent from "../../components/Categories/ProductsComponent.vue";

const products = ref([
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
]);

const searchQuery = ref("");

const filteredProducts = computed(() =>
  products.value.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

function handleSearch(query) {
  searchQuery.value = query;
}
</script>
