<template>
  <div class="md:px-[120px] px-8">
    <nav class="flex justify-between items-center">
      <img src="../../../public/logos/BenNasser.svg" alt="" />
      <h1 class="text-lightGray font-medium text-lg">Stock Manager</h1>
    </nav>
  </div>

  <div class="md:px-[120px] px-8 mt-6 font-semibold text-2xl">
    <h1>Orders</h1>
  </div>
  <div
    class="grid grid-cols-12 w-full mt-6 md:px-[120px] px-8"
    v-for="order in orders"
  >
    <OrderCardComponent
      class="col-start-1 col-span-full"
      :title="order.title"
      :name="order.name"
      :location="order.location"
    />
  </div>
</template>

<script setup>
import OrderCardComponent from "../../components/Orders/OrderCardComponent.vue";
const orders = [
  {
    id: 1,
    title: "Order 1",
    name: "John Doe",
    location: "New York",
  },
  {
    id: 2,
    title: "Order 2",
    name: "Jane Doe",
    location: "Los Angeles",
  },
  {
    id: 3,
    title: "Order 3",
    name: "Bob Smith",
    location: "San Francisco",
  },
];
</script>
