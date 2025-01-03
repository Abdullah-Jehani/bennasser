<template>
  <div
    class="grid grid-cols-12 w-full place-items-center place-content-center py-1"
    style="--navbar-height: 60px"
  >
    <div class="col-start-1 cols-span-3">
      <img src="../../../public/logos/BenNasser.svg" alt="Logo" />
    </div>
    <div class="col-start-5 col-span-4">
      <div
        class="flex justify-center items-center space-x-6 text-xl font-normal"
      >
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Categories</h1>
        <h1>Contact</h1>
      </div>
    </div>
    <div
      class="col-start-12 col-span-full place-self-center place-content-center place-items-center"
    >
      <ButtonComponent>JOIN US</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../Helper/ButtonComponent.vue";
</script>
