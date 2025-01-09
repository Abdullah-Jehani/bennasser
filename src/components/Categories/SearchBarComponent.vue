<template>
  <div class="grid grid-cols-12 w-full place-content-center">
    <div
      class="md:col-start-3 col-start-1 md:col-span-8 col-span-full relative"
    >
      <input
        class="bg-searchBar rounded-3xl border py-4 pl-12 pr-8 text-sm font-medium text-blackColor w-full focus:outline-none focus:ring-1 focus:ring-gray-100"
        type="search"
        name="Search"
        id="Search"
        placeholder="Search By Product Name"
        @input="updateSearch($event.target.value)"
      />
      <span
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-blackColor"
      >
        <img src="../../../public/icons/Search.svg" alt="Search Icon" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["update-search"]);

function updateSearch(value) {
  emit("update-search", value);
}
</script>
