<template>
  <div class="grid grid-cols-12 w-full gap-4 md:h-screen">
    <!-- Product Image Section -->
    <div
      class="col-start-1 md:col-span-5 col-span-full mt-4 md:mt-0 md:bg-lightGrey bg-transparent flex justify-center items-center"
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
      <p class="text-xs font-medium mt-2">{{ Date }}</p>
      <p class="mt-8 text-lg font-medium">
        Quantity: <span class="font-semibold">{{ quantity }} m2</span>
      </p>

      <!-- Buttons for Approve and Decline -->
      <div
        v-if="!isApproved"
        class="flex justify-center items-center mt-12 space-x-4"
      >
        <SelectionButtonComponent
          @click="approveOrder"
          class="bg-greenColor text-white cursor-pointer"
        >
          Approve
        </SelectionButtonComponent>
        <SelectionButtonComponent
          @click="declineOrder"
          class="bg-redColor text-white cursor-pointer"
        >
          Decline
        </SelectionButtonComponent>
      </div>

      <!-- Order Status Dropdown -->
      <div v-if="isApproved" class="mt-6">
        <label for="status" class="block text-lg font-medium mb-2">
          Update Order Status:
        </label>
        <select
          id="status"
          v-model="selectedStatus"
          class="border border-lightGrey rounded px-4 py-2"
        >
          <option value="Processing">Processing</option>
          <option value="Packaging">Packaging</option>
          <option value="Delivering">Delivering</option>
        </select>

        <!-- Confirm Status Button -->
        <SelectionButtonComponent
          @click="confirmStatus"
          class="mt-4 bg-black w-fit text-white cursor-pointer"
        >
          Confirm Status
        </SelectionButtonComponent>
      </div>

      <!-- Notification Message -->
      <div
        v-if="notification.message"
        :class="notification.class"
        class="mt-4 p-4 rounded"
      >
        {{ notification.message }}
      </div>

      <div class="border-t border-lightGrey mt-12 md:mt-36"></div>
      <div class="font-light text-sm mt-4 leading-normal mb-4">
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
import router from "../../router";

// Product Information
const basePrice = 57.78;
const Date = ref("22 january 2024");
const Company = ref("Ben Nasser Company");
const title = ref("Porcelain Sink");
const quantity = ref(24);

// Computed Total Price
const totalPrice = computed(() => (basePrice * quantity.value).toFixed(2));

// Notification State
const notification = ref({
  message: "",
  class: "",
});

// Order Status State
const isApproved = ref(false);
const selectedStatus = ref("Processing");

// Approve Order Function
const approveOrder = () => {
  isApproved.value = true;
  notification.value.message = "Order approved successfully!";
  notification.value.class = "bg-green-100 text-green-800";
};

// Decline Order Function
const declineOrder = () => {
  isApproved.value = false;
  notification.value.message = "Order declined.";
  notification.value.class = "bg-red-100 text-red-800";
  setTimeout(() => {
    router.push("/orders");
  }, 2000);
};

// Confirm Status Function
const confirmStatus = () => {
  notification.value.message = `Order status confirmed: ${selectedStatus.value}`;
  notification.value.class = "bg-blue-100 text-blue-800";
  setTimeout(() => {
    router.push("/orders");
  }, 1000);
  setTimeout(() => {
    window.location.reload();
  }, 1200);
};
</script>

<style scoped>
.bg-green-100 {
  background-color: #d4edda;
}

.text-green-800 {
  color: #155724;
}

.bg-red-100 {
  background-color: #f8d7da;
}

.text-red-800 {
  color: #721c24;
}

.bg-blue-100 {
  background-color: #cce5ff;
}

.text-blue-800 {
  color: #004085;
}
</style>
