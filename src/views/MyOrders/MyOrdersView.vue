<template>
  <div
    class="grid grid-cols-12 w-full mt-6 md:px-[120px] px-8"
    v-for="order in orders"
  >
    <OrderCardComponent
      class="col-start-1 col-span-full"
      :title="order.title"
      :CompanyName="order.CompanyName"
      :Quantaty="order.Quantaty"
      :id="order.id"
    />
  </div>
</template>

<script setup>
import OrderCardComponent from "../../components/MyOrders/OrderCardComponent.vue";
const orders = [
  {
    id: 1,
    title: "    Ceramic Del Spani",
    CompanyName: "Pamesa Ceramic",
    Quantaty: 12,
  },
  {
    id: 2,
    title: "Ceramic Del Blanco",
    CompanyName: "Pamesa Ceramic",
    Quantaty: 24,
  },
  {
    id: 3,
    title: "Ceramic Del Azul",
    CompanyName: "New Line",
    Quantaty: 27,
  },
];
</script>
