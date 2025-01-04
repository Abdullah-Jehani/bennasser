<template>
  <div class="border border-black rounded md:px-12 px-4 md:py-8 py-4 w-full">
    <div class="flex justify-between items-center">
      <div class="space-y-2">
        <h1 class="text-lg font-semibold">{{ title }}</h1>
        <p class="font-extralight text-sm text-blackColor">
          {{ name }} - {{ location }}
        </p>
      </div>
      <div>
        <ButtonComponent @click="$router.push(`/orders/${id}`)"
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
  name: String,
  location: String,
  id: Number,
});
</script>
