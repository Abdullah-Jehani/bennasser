<template>
  <div class="w-full flex flex-col border border-lightGray rounded">
    <img class="max-h-80" :src="image" alt="" />
    <div class="mt-12 px-4 flex justify-between items-center">
      <div>
        <h1 class="font-semibold text-sm">{{ title }}</h1>
        <h1
          class="text-sm font-light uppercase"
          :class="inStock ? 'text-greenColor' : 'text-redColor'"
        >
          {{ inStock ? "In Stock" : "Out of Stock" }}
        </h1>
      </div>
      <div>
        <ButtonComponent
          @click="$router.push(`/products/${id}`)"
          class="text-sm px-2"
          >View Product</ButtonComponent
        >
      </div>
    </div>
    <div class="mt-4 p-4">
      <p class="font-extralight text-blackColor leading-relaxed text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../Helper/ButtonComponent.vue";
const props = defineProps({
  image: String,
  title: String,
  inStock: {
    type: Boolean,
    default: true,
  },
  description: String,
  id: Number,
});
</script>
