<template>
  <div class="grid grid-cols-12 w-full h-screen">
    <!-- Content Section -->
    <div class="md:col-start-1 md:col-span-8 col-span-full bg-white w-full">
      <div class="p-6">
        <h1 class="text-2xl font-bold">Bennasser</h1>
      </div>
      <div class="mt-24 place-items-center">
        <h1 class="text-xl font-semibold">Login</h1>
        <p class="mt-1 md:text-sm text-xs text-gray-500">
          Make your house a home with our reliable home goods
        </p>
      </div>
      <form class="mt-8 place-items-center w-full">
        <div>
          <input
            type="text"
            placeholder="Username"
            class="mt-4 p-2 border border-greyColor md:w-[400px] w-[300px] text-xs"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            class="mt-4 p-2 border border-greyColor md:w-[400px] w-[300px] text-xs"
          />
        </div>
        <div>
          <button
            class="mt-4 bg-blackColor hover:bg-black text-white p-2 md:rounded-[2px] rounded text-xs md|:w-[400px] w-[300px]"
          >
            Login
          </button>
        </div>
      </form>
      <div class="mt-4 place-items-center">
        <p class="mt-8 text-gray-500 text-sm">
          Don’t Have an Account Yet?
          <span class="text-black underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>

    <div class="hidden md:col-start-9 md:col-span-4 md:block h-full">
      <img
        src="../../assets/images/slider-col-01 1.svg"
        alt="Slider Image"
        class="w-full h-screen object-cover"
      />
    </div>
  </div>
</template>
