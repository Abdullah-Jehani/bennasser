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
      <h1 class="text-4xl font-semibold mb-2">{{ title }}</h1>
      <p class="text-lg font-light text-blackColor mb-4">By {{ Company }}</p>
      <h1 class="text-4xl font-semibold">{{ totalPrice }} LYD</h1>
      <p class="text-xs font-light">{{ Date }}</p>
      <p class="mt-8 text-lg font-medium">
        Quantity: <span class="font-semibold">{{ quantity }} m2</span>
      </p>

      <!-- Quantity Selector -->

      <div class="flex justify-center items-center mt-12 space-x-4">
        <SelectionButtonComponent
          @click="router.push('/checkout')"
          class="bg-greenColor text-white cursor-pointer"
        >
          Approve
        </SelectionButtonComponent>
        <SelectionButtonComponent
          class="bg-redColor text-white cursor-pointer"
          @click="addToCart"
        >
          Declined
        </SelectionButtonComponent>
      </div>

      <!-- Notification -->

      <div class="border-t border-lightGrey mt-12 md:mt-36"></div>
      <div class="font-extralight text-sm mt-4 leading-normal">
        <p>
          A Spanish ceramic sink is a beautifully handcrafted fixture that
          blends traditional artistry with modern functionality. Known for its
          intricate designs, vibrant colors, and durable craftsmanship, this
          sink is typically made from high-quality ceramic. It often features
          hand-painted patterns inspired by Spanish culture.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import SelectionButtonComponent from "../Helper/SelectionButtonComponent.vue";
import { useCartStore } from "../../Stores/cartStore";
import router from "../../router";

// Product Price
const basePrice = 57.78;
const Date = ref("22-12-2024");
const Company = ref("Ben Nasser Company");
const title = ref("Porcelain Sink");
// Reactive State for Quantity
const quantity = ref(24);

// Compute Total Price
const totalPrice = computed(() => (basePrice * quantity.value).toFixed(2));

// Add to Cart Function
</script>
