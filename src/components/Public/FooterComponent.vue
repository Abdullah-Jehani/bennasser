<template>
  <div
    class="grid grid-cols-12 w-full md:px-[120px] px-8 md:pb-12 pb-0 pt-0 my-12 md:my-0"
  >
    <div class="col-start-1 md:col-span-4 col-span-full">
      <img src="../../../public/logos/BenNasser2.svg" alt="" />
      <div class="md:mt-12 mt-6 flex space-x-6 items-center">
        <div class="flex justify-center items-center">
          <img src="../../../public/icons/YouTube.svg" alt="" />
          <img src="../../../public/icons/Instagram.svg" alt="" />
          <img src="../../../public/icons/Facebook.svg" alt="" />
        </div>
        <div
          class="flex flex-col justify-center items-center font-light space-y-6"
        >
          <p>BenNasser@store.ly</p>
          <p>+218 92 0909 1232</p>
        </div>
      </div>
    </div>
    <div
      class="md:col-start-7 col-start-1 md:col-span-5 col-span-full flex justify-center items-end space-x-6 mt-16 md:mt-12 md:text-lg text-base font-medium"
    >
      <router-link to="/">Home</router-link>
      <router-link to="/About-us">About Us</router-link>
      <router-link to="/categories">Categories</router-link>
    </div>
    <div
      class="border-b border-lightGray w-full col-start-1 col-span-full mt-12"
    ></div>
  </div>
</template>
