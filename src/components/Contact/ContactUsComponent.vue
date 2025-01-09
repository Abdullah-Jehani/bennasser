<template>
  <div class="grid grid-cols-12 w-full text-black place-content-center">
    <div class="col-start-1 col-span-full md:col-span-3">
      <h1 class="text-5xl font-bold mb-14">Contact Us</h1>
      <div class="mt-10 grid grid-cols-2 w-full">
        <div class="flex flex-col space-y-10 font-light">
          <h1>Visit us!</h1>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col">
          <!-- Social Icons -->
          <div class="flex space-x-4">
            <!-- <img src="/icons/facebook.svg" alt="Facebook Icon" />
            <img src="/icons/instagram.svg" alt="Instagram Icon" />
            <img src="/icons/snapchat.svg" alt="Snapchat Icon" /> -->
          </div>

          <!-- Locations -->
          <div class="flex flex-col space-y-4 justify-center items-center">
            <!-- Benghazi -->
            <div class="flex flex-col">
              <h1 class="text-sm text-secondWhite font-extralight">Benghazi</h1>
              <div class="flex items-center space-x-1">
                <!-- <img src="/icons/location.svg" alt="Location Icon" /> -->
                <h1 class="font-light">Bodzera</h1>
              </div>
              <div class="flex flex-col mt-4">
                <h1 class="text-sm text-secondWhite font-extralight">
                  Benghazi
                </h1>
                <div class="flex items-center space-x-1">
                  <!-- <img src="/icons/location.svg" alt="Location Icon" /> -->
                  <h1 class="font-light">River Road</h1>
                </div>
              </div>
            </div>

            <!-- Tripoli -->
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-start-7 col-start-1 col-span-full w-full">
      <form
        class="md:p-8 p-4 bg-formColor border-black border border-opacity-10 rounded-2xl w-full mt-12 md:mt-0"
        action=""
      >
        <!-- First Row , Topic-->
        <div class="w-full flex flex-col">
          <label class="text-sm font-light mb-2" for="topic">Topic</label>

          <input
            class="bg-main rounded-lg border border-strokeColor2 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-strokeColor2"
            type="text"
            name="topic"
            id="topic"
            placeholder="Enter topic here"
          />
        </div>
        <!-- Second Row , First & last name -->
        <div
          class="w-full flex md:flex-row flex-col mt-4 md:space-x-4 space-x-0"
        >
          <div class="md:w-1/2 w-full">
            <label class="text-sm font-light" for="firstName">First Name</label>
            <input
              class="bg-main rounded-lg border border-strokeColor2 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-strokeColor2 mt-2 mb-4 md:mb-0"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter name here"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label class="text-sm font-light" for="lastName">Last Name</label>
            <input
              class="bg-main rounded-lg border border-strokeColor2 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-strokeColor2 mt-2"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter name here"
            />
          </div>
        </div>
        <!-- Third Row , Email -->
        <div class="w-full flex flex-col mt-4">
          <label class="text-sm font-light mb-2" for="Email">Email</label>

          <input
            class="bg-main rounded-lg border border-strokeColor2 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-strokeColor2"
            type="email"
            name="Email"
            id="Email"
            placeholder="yourname@mail.com"
          />
        </div>
        <!-- Fourth Row , Message -->
        <div class="w-full flex flex-col mt-4">
          <label class="text-sm font-light mb-2" for="Message">Message</label>
          <textarea
            class="bg-main rounded-lg border border-strokeColor2 px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-strokeColor2 h-36 text-start resize-none"
            type="text"
            name="Message"
            id="Message"
            placeholder="Enter message here "
          />
        </div>
        <div class="mt-6 cursor-pointer w-fit">
          <ButtonComponent>Send</ButtonComponent>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../Helper/ButtonComponent.vue";
</script>
