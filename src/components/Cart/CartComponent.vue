<template>
  <div class="my-12">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div v-if="cart.length > 0">
      <!-- Iterate over cart items -->
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex justify-between items-center border-b py-4"
      >
        <div>
          <h2 class="font-semibold text-lg">{{ item.name }}</h2>
          <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
        </div>
        <div>
          <p class="text-lg font-bold">{{ item.totalPrice.toFixed(2) }} LYD</p>
        </div>
      </div>
      <!-- Display the cart total -->
      <div class="mt-8">
        <p class="text-xl font-bold">Total: {{ cartTotal }} LYD</p>
      </div>
    </div>
    <!-- Fallback when cart is empty -->
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../../Stores/cartStore";

const cartStore = useCartStore();

// Reactive cart and total
const cart = computed(() => cartStore.cart);
const cartTotal = computed(() => cartStore.cartTotal);
</script>
