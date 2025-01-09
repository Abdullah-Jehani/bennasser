<template>
  <div class="p-6 min-h-screen border border-gray-50 rounded mt-12">
    <!-- Page Title -->
    <h1 class="text-4xl font-extrabold mb-8 text-gray-900">Order Details</h1>

    <!-- Product Details Card -->
    <div class="bg-white p-8 shadow-lg rounded-lg flex gap-6 items-center">
      <!-- Product Image -->
      <img
        :src="product.image"
        alt="Product Image"
        class="w-48 h-48 object-cover rounded-md"
      />

      <!-- Product Info -->
      <div>
        <h2 class="text-2xl font-bold text-gray-800">{{ product.name }}</h2>
        <p class="text-gray-600 mt-2">
          <span class="font-medium">Company:</span> {{ product.company }}
        </p>
        <p class="text-gray-600 mt-1">
          <span class="font-medium">Quantity:</span> {{ product.quantity }}
        </p>
        <p class="text-gray-700 mt-4">{{ product.description }}</p>
      </div>
    </div>

    <!-- Order Status Section -->
    <div class="mt-8 bg-white p-8 shadow-lg rounded-lg">
      <h3 class="text-2xl font-semibold mb-6 text-gray-800">Order Status</h3>

      <!-- Progress Bar -->
      <div class="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          class="absolute top-0 left-0 h-full bg-black transition-all"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>

      <!-- Status Indicators -->
      <div class="flex justify-between mt-4">
        <div
          v-for="(status, index) in statusSteps"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center"
            :class="{
              'bg-black text-white': index <= currentStatusIndex,
              'bg-gray-300 text-gray-500': index > currentStatusIndex,
            }"
          >
            <i :class="status.icon" class="text-lg"></i>
          </div>
          <p class="mt-2 text-sm font-medium">{{ status.label }}</p>
        </div>
      </div>

      <!-- Animated Status Description -->
      <div class="mt-2 flex items-center gap-4">
        <div v-if="orderStatus === 'processing'">
          <img src="../../../public/images/processing (2).gif" alt="" />
          <p class="text-gray-700 text-lg">
            Your order is currently being processed.
          </p>
        </div>
        <div v-else-if="orderStatus === 'packaging'">
          <img
            class="mb-4"
            src="../../../public/images/packaging (2).gif"
            alt=""
          />
          <p class="text-gray-700 text-lg">
            Your order is being carefully packaged.
          </p>
        </div>
        <div v-else-if="orderStatus === 'delivering'">
          <img class="mb-4" src="../../../public/images/delivery.gif" alt="" />

          <p class="text-gray-700 text-lg">Your order is on its way to you!</p>
        </div>
        <div v-else-if="orderStatus === 'cancelled'">
          <img src="" alt="" />
          <p class="text-red-600 text-lg font-semibold">
            Unfortunately, your order has been cancelled.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Mock Data (Replace with real backend data)
const product = ref({
  name: "Ceramic De el Spania",
  company: "New Era",
  quantity: 2,
  image: "/images/ceramic.png", // Replace with updated image path
  description: "High-quality wireless headphones with noise cancellation.",
});

const orderStatus = ref("processing"); // processing, packaging, delivering, or cancelled

// Order Status Data
const statusSteps = ref([
  { label: "Processing", icon: "fas fa-cogs" },
  { label: "Packaging", icon: "fas fa-box" },
  { label: "Delivering", icon: "fas fa-shipping-fast" },
]);

// Progress Percentages for Each Status
const statusProgressMap = {
  processing: 2, // Custom percentage for processing
  packaging: 50, // Custom percentage for packaging
  delivering: 100, // Custom percentage for delivering
  cancelled: 0, // No progress for cancelled
};

// Compute progress percentage based on current status
const progressPercentage = computed(
  () => statusProgressMap[orderStatus.value] || 0
);

// Compute current status index
const currentStatusIndex = computed(() =>
  statusSteps.value.findIndex(
    (step) => step.label.toLowerCase() === orderStatus.value
  )
);
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
