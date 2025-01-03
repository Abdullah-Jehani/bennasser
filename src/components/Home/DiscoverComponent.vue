<template>
  <div class="relative bg-neutral-900">
    <img
      class="blur-sm drop-shadow-2xl object-cover w-full h-full"
      src="../../../public/images/Discover.png"
      alt="Discover Background"
    />
    <div
      class="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold space-x-40"
    >
      <!-- Image 1 -->
      <div class="relative group">
        <img
          class="object-cover"
          src="../../../public/images/porcalen.png"
          alt="Porcelain"
        />
        <div
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-5xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          style="writing-mode: vertical-rl; text-orientation: sideways-right"
        >
          Porcelain
        </div>
      </div>

      <!-- Image 2 -->
      <div class="relative group">
        <img
          class="object-cover"
          src="../../../public/images/ceramic.png"
          alt="Ceramic"
        />
        <div
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-5xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          style="writing-mode: vertical-rl; text-orientation: sideways-right"
        >
          Ceramic
        </div>
      </div>

      <!-- Image 3 -->
      <div class="relative group">
        <img
          class="object-cover"
          src="../../../public/images/parke.png"
          alt="Parke"
        />
        <div
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-5xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          style="writing-mode: vertical-rl; text-orientation: sideways-right"
        >
          Parke
        </div>
      </div>
    </div>

    <div
      class="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <ButtonComponent2>See Our Products</ButtonComponent2>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent2 from "../Helper/ButtonComponent2.vue";
</script>
