<template>
  <div class="md:px-[120px] px-8">
    <nav class="flex justify-between items-center">
      <img src="../../../public/logos/BenNasser.svg" alt="" />
      <h1 class="text-lightGray font-medium text-lg">Admin</h1>
    </nav>
  </div>

  <div
    class="md:px-[120px] px-8 mt-6 font-semibold text-2xl flex justify-between"
  >
    <h1>Products</h1>
    <ButtonComponent
      @click="$router.push(`/admin/add`)"
      class="bg-white border border-black text-neutral-900"
      >Add Product</ButtonComponent
    >
  </div>
  <div
    class="grid grid-cols-12 w-full mt-6 md:px-[120px] px-8"
    v-for="product in products"
  >
    <ProductCardComponent
      class="col-start-1 col-span-full"
      :title="product.title"
      :company="product.company"
      :id="product.id"
    />
  </div>
</template>

<script setup>
import ProductCardComponent from "../../components/Admin/ProductCardComponent.vue";
import ButtonComponent from "../../components/Helper/ButtonComponent.vue";
const products = [
  {
    id: 1,
    title: "product 1",
    company: "John Doe",
  },
  {
    id: 2,
    title: "Order 2",
    company: "Jane Doe",
  },
  {
    id: 3,
    title: "Order 3",
    company: "Bob Smith",
  },
];
</script>
