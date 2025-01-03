<template>
  <div
    class="grid grid-cols-12 w-full place-items-center place-content-center py-1"
  >
    <!-- Logo -->
    <div class="col-start-1 col-span-3 w-full">
      <img
        @click="$router.push('/')"
        class="cursor-pointer"
        src="../../../public/logos/BenNasser.svg"
        alt="Logo"
      />
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
      <router-link to="/">Home</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/categories">Categories</router-link>
    </div>

    <!-- Join Us Button for Medium Screens and Up -->
    <div
      class="col-start-12 col-span-full place-self-center place-content-center place-items-center hidden md:block"
      @click="$router.push('/signup')"
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
      <router-link to="/" class="hover:font-bold">Home</router-link>
      <router-link to="/about-us" class="hover:font-bold">About Us</router-link>
      <router-link to="/categories" class="hover:font-bold"
        >Categories</router-link
      >

      <div
        class="col-start-1 col-span-full place-self-center place-content-center place-items-center md:hidden block"
        @click="$router.push('/signup')"
      >
        <ButtonComponent3>JOIN US</ButtonComponent3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "../Helper/ButtonComponent.vue";
import ButtonComponent3 from "../Helper/ButtonComponent3.vue";
import router from "../../router";

// State to toggle menu visibility
const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
