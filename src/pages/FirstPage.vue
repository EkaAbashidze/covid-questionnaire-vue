<template>
  <div class="mx-20">
    <Navbar :page="currentPage" />
    <div class="flex mt-10">
      <div class="w-1/2 mr-10">
        <div class="mb-4">
          <label for="firstName" class="text-lg block mb-2">სახელი*</label>
          <input
            type="text"
            id="firstName"
            class="border border-gray-400 p-2 w-[513px] bg-transparent"
          />
        </div>
        <div class="mb-4">
          <label for="lastName" class="text-lg block mb-2">გვარი*</label>
          <input
            type="text"
            id="lastName"
            class="border border-gray-400 p-2 w-[513px] bg-transparent"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="text-lg block mb-2">მეილი*</label>
          <input
            type="email"
            id="email"
            class="border border-gray-400 p-2 w-[513px] bg-transparent"
          />
        </div>

        <div class="">
          <hr class="border-gray-400 w-[237px] mt-[111px]" />
          <p class="text-sm text-gray-500 mt-[20px] max-w-[300px]">
            *-ით მონიშნული ველების შევსება სავალდებულოა
          </p>
        </div>
      </div>

      <div class="w-1/2 flex justify-center items-center mt-[-100px]">
        <img
          src="../../public/images/identification.png"
          alt="Identification Image"
        />
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <router-link to="/questionnaire">
        <img
          src="../../public/images/next.svg"
          alt="Next Page Arrow"
          class="h-12 w-[14px]"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style>
/* Add any custom styles for the questionnaire page here */
</style>
