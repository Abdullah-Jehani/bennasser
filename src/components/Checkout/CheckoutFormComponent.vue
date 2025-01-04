<template>
  <div class="grid grid-cols-12 w-full h-screen mt-12">
    <form
      class="border col-start-4 col-span-7 px-8 py-12 border-lightGray w-full space-y-4 h-fit"
      action=""
    >
      <h1 class="text-2xl font-medium">Contact Information</h1>
      <div class="w-full">
        <input
          type="text"
          placeholder="Enter Location"
          id="location"
          name="location"
          class="px-2 py-2 rounded border border-lightGray w-full"
        />
      </div>
      <div class="w-full flex justify-center items-center space-x-4">
        <input
          type="text"
          placeholder="Enter First Name"
          id="fname"
          name="fname"
          class="px-2 py-2 rounded border border-lightGray w-full"
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          id="lname"
          name="lname"
          class="px-2 py-2 rounded border border-lightGray w-full"
        />
      </div>
      <div class="w-full">
        <input
          type="number"
          placeholder="Enter Phone Number"
          id="phone_number"
          name="phone_number"
          class="px-2 py-2 rounded border border-lightGray w-full"
        />
      </div>
      <div class="w-full">
        <textarea
          placeholder="Ant Additional Notes ..."
          id="note"
          name="note"
          class="px-2 py-2 rounded border border-lightGray w-full h-24 resize-none"
        ></textarea>
      </div>
      <div class="w-fit">
        <ButtonComponent>Send</ButtonComponent>
      </div>
    </form>
  </div>
</template>

<script setup>
import ButtonComponent from "../Helper/ButtonComponent.vue";
</script>
