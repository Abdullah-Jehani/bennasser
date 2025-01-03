<template>
  <div class="grid grid-cols-12 w-full h-screen overflow-hidden">
    <!-- Content Section -->
    <div
      class="md:col-start-1 md:col-span-8 col-span-full bg-white w-full h-full overflow-auto"
    >
      <div class="p-6">
        <img
          @click="$router.push('/')"
          src="../../../public/logos/BenNasser2.svg"
          alt=""
        />
      </div>
      <div class="mt-32 place-items-center">
        <h1 class="text-xl font-semibold">Login</h1>
        <p class="mt-1 md:text-sm text-xs text-gray-500">
          Make your house a home with our reliable home goods
        </p>
      </div>
      <form class="mt-8 place-items-center w-full">
        <!-- //first name -->
        <div class="md:flex md:gap-x-2">
          <div>
            <input
              type="text"
              id="firstname"
              placeholder="Firstname"
              class="mt-4 p-2 border border-greyColor md:w-[196px] w-[300px] text-xs"
            />
          </div>

          <div>
            <input
              type="text"
              id="lastname"
              placeholder="Lastname"
              class="mt-4 p-2 border border-greyColor md:w-[196px] w-[300px] text-xs"
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            class="mt-4 p-2 border border-greyColor md:w-[400px] w-[300px] text-xs"
          />
        </div>
        <div>
          <input
            type="number"
            id="phone"
            placeholder="Phone Number"
            class="mt-4 p-2 border border-greyColor md:w-[400px] w-[300px] text-xs"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            class="mt-4 p-2 border border-greyColor md:w-[400px] w-[300px] text-xs"
          />
        </div>
        <div>
          <button
            class="mt-4 bg-blackColor hover:bg-black text-white p-2 md:rounded-[2px] rounded text-xs md:w-[400px] w-[300px]"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div class="mt-4 place-items-center">
        <p class="mt-8 text-gray-500 text-sm">
          Don’t Have an Account Yet?
          <span
            class="text-black underline cursor-pointer"
            @click="$router.push('/login')"
            >Login</span
          >
        </p>
      </div>
    </div>

    <!-- Image Section -->
    <div class="hidden md:col-start-9 md:col-span-4 md:block h-full">
      <img
        src="../../../public/images/ea00af45b587be3deb453e9ced0684c8 1.svg"
        alt="Slider Image"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>
