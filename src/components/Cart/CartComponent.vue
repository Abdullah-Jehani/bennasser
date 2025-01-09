<template>
  <div class="mx-auto my-12 p-6 bg-white shadow rounded-lg w-full">
    <h1
      class="mb-12 underline text-black font-light hover:font-semibold cursor-pointer"
      @click="$router.push('/categories')"
    >
      Back to Categories
    </h1>
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

    <div v-if="cart.length > 0" class="space-y-6">
      <!-- Iterate over cart items -->
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
      >
        <div class="flex items-center gap-4">
          <div>
            <h2 class="font-semibold text-lg text-gray-700">{{ item.name }}</h2>
            <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-lg font-bold text-gray-800">
            {{ item.totalPrice.toFixed(2) }} LYD
          </p>
          <button
            @click="removeItem(item.id)"
            class="mt-2 text-sm text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Display the cart total -->
      <div
        class="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
      >
        <p class="text-xl font-semibold text-gray-700">Total:</p>
        <p class="text-2xl font-bold text-gray-800">
          {{ cartTotal.toFixed(2) }} LYD
        </p>
      </div>

      <!-- Place Order Button -->
      <div class="text-right">
        <button
          @click="placeOrder()"
          class="bg-black text-white text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Place Order
        </button>
      </div>
    </div>

    <!-- Fallback when cart is empty -->
    <div v-else class="text-center text-gray-500">
      <p>Your cart is empty.</p>
      <p class="mt-4">
        <button
          class="text-blue-600 hover:underline"
          @click="$router.push('/categories')"
        >
          Continue Shopping
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../../Stores/cartStore";
import { useToast } from "vue-toastification"; // Import toast library
import router from "../../router";

const cartStore = useCartStore();
const toast = useToast();

// Reactive cart and total
const cart = computed(() => cartStore.cart);
const cartTotal = computed(() => cartStore.cartTotal);

// Remove item from cart
function removeItem(productId) {
  cartStore.removeProduct(productId);
  toast.success("Item removed from cart.");
}

// Place order
function placeOrder() {
  if (cart.value.length > 0) {
    toast.success("Order placed successfully.");
    cartStore.clearCart(); // Clear cart after placing the order
  } else {
    toast.error("Your cart is empty.");
  }
}
</script>
