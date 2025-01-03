<template>
  <div
    class="grid grid-cols-12 w-full place-items-center place-content-center py-1"
  >
    <!-- Logo -->
    <div class="col-start-1 col-span-3 w-full">
      <img class="" src="../../../public/logos/BenNasser.svg" alt="Logo" />
    </div>

    <!-- Hamburger Menu Icon -->
    <div class="col-start-12 col-span-full md:hidden block">
      <img
        src="../../../public/icons/Menu.svg"
        alt="Menu"
        class="cursor-pointer"
        @click="isMenuOpen = !isMenuOpen"
      />
    </div>

    <!-- Navigation Links for Medium Screens and Up -->
    <div
      class="col-start-5 col-span-4 hidden md:flex justify-center items-center space-x-6 text-lg font-normal"
    >
      <h1>Home</h1>
      <h1>About Us</h1>
      <h1>Categories</h1>
      <h1>Contact</h1>
    </div>

    <!-- Join Us Button for Medium Screens and Up -->
    <div
      class="col-start-12 col-span-full place-self-center place-content-center place-items-center hidden md:block"
    >
      <ButtonComponent>JOIN US</ButtonComponent>
    </div>

    <!-- Navigation Links Dropdown for Small Screens -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black text-white flex flex-col z-40 md:hidden overflow-auto space-y-12 justify-center h-screen items-center text-2xl"
      @click="closeMenu"
    >
      <div class="absolute top-8 right-8 font-bold">
        <h1>X</h1>
      </div>
      <a href="#" class="hover:font-bold">Home</a>
      <a href="#" class="hover:font-bold">About Us</a>
      <a href="#" class="hover:font-bold">Categories</a>
      <a href="#" class="hover:font-bold">Contact</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "../Helper/ButtonComponent.vue";

// State to toggle menu visibility
const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
