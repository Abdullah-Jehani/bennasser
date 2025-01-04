<template>
  <div class="grid grid-cols-12 w-full gap-4 md:h-screen">
    <!-- Product Image Section -->
    <div
      class="col-start-1 md:col-span-5 col-span-full mt-12 md:mt-0 md:bg-lightGrey bg-transparent flex justify-center items-center"
    >
      <img src="../../../public/images/porcalen1.png" alt="Product Image" />
    </div>

    <!-- Divider -->
    <div
      class="col-start-1 md:col-start-6 md:border-l border-t md:border-t-0 border-lightGrey"
    ></div>

    <!-- Product Details Section -->
    <div class="md:col-start-7 col-start-1 col-span-full mt-12">
      <h1 class="text-4xl font-semibold mb-2">Spanish Ceramic Sink Black</h1>
      <p class="text-lg font-extralight mb-4">By Pamesa Ceramic</p>
      <h1 class="text-4xl font-semibold">{{ totalPrice }} LYD</h1>
      <p class="text-xs font-extralight">Doesn’t Include Delivery</p>

      <!-- Quantity Selector -->
      <div class="flex items-center mt-12">
        <button
          @click="decreaseQuantity"
          class="px-4 py-2 bg-lightGrey rounded-3xl text-blackColor font-bold"
          :disabled="quantity === 1"
        >
          -
        </button>
        <span class="mx-4 text-lg font-medium">{{ quantity }}</span>
        <button
          @click="increaseQuantity"
          class="px-4 py-2 bg-lightGrey rounded-3xl text-blackColor font-bold"
        >
          +
        </button>
      </div>
      <div class="flex justify-center items-center mt-12 space-x-4">
        <SelectionButtonComponent class="bg-lightGrey"
          >Place Order</SelectionButtonComponent
        >
        <SelectionButtonComponent class="bg-black text-white"
          >Place Order</SelectionButtonComponent
        >
      </div>
      <div class="border-t border-lightGrey mt-12 md:mt-36"></div>
      <div class="font-extralight text-sm mt-4 leading-normal">
        <p>
          A Spanish ceramic sink is a beautifully handcrafted fixture that
          blends traditional artistry with modern functionality. Known for its
          intricate designs, vibrant colors, and durable craftsmanship, this
          sink is typically made from high-quality ceramic. It often features
          hand-painted patterns inspired by Spanish culture,
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SelectionButtonComponent from "../Helper/SelectionButtonComponent.vue";

// Product Price
const basePrice = 57.78;

// Reactive State for Quantity
const quantity = ref(1);

// Compute Total Price
const totalPrice = computed(() => (basePrice * quantity.value).toFixed(2));

// Functions to Increase and Decrease Quantity
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>
