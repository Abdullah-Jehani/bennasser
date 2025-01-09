<template>
  <div class="border border-black rounded md:px-12 px-4 md:py-8 py-4 w-full">
    <div class="flex justify-between items-center">
      <div class="space-y-2">
        <h1 class="text-lg font-semibold">{{ title }}</h1>
        <p class="font-medium text-sm text-gray-400">
          {{ CompanyName }} - {{ Quantaty }} m2
        </p>
      </div>
      <div>
        <ButtonComponent @click="$router.push(`/MyOrders/${id}`)"
          >View Order</ButtonComponent
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../Helper/ButtonComponent.vue";
const props = defineProps({
  title: String,
  CompanyName: String,
  Quantaty: Number,
  id: Number,
});
</script>
