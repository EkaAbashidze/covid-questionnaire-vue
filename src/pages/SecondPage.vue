<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <div class="mb-12">
          <label class="text-lg block mb-2">გაქვს გადატანილი Covid-19?*</label>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="covidStatus">კი</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="noCovidStatus">არა</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="recentCovidStatus">ახლა მაქვს</label>
          </div>
        </div>
        <div class="mb-12">
          <label class="text-lg block mb-2"
            >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
          >
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="antibodyTestYes">კი</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="antibodyTestNo">არა</label>
          </div>
        </div>
        <div class="mb-4">
          <label class="text-lg block mb-2"
            >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
            ანტისხეულების რაოდენობა*</label
          >
          <div class="flex flex-col gap-[25px]">
            <input
              type="text"
              placeholder="რიცხვი"
              id="testResult"
              class="border border-gray-400 p-2 h-[50px] bg-transparent px-5 mr-2 w-[513px]"
            />
            <input
              type="text"
              placeholder="ანტისხეულების რაოდენობა"
              id="antibodyCount"
              class="border border-gray-400 p-2 h-[50px] bg-transparent px-5 w-[513px]"
            />
          </div>
        </div>
        <div class="">
          <label class="text-lg block mb-2"
            >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
            Covid-19*</label
          >
          <input
            type="date"
            placeholder="დდ/თთ/წწ"
            id="covidPeriod"
            class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
          />
        </div>
      </div>

      <div class="flex justify-center items-center mt-[-50px]">
        <img
          src="../../public/images/questionnaire.png"
          alt="Identification Image"
        />
      </div>
    </div>
    <div class="flex justify-center gap-[117px]">
      <router-link to="/identification">
        <img
          src="../../public/images/back.svg"
          alt="Next Page Arrow"
          class="h-12 w-[14px]"
        />
      </router-link>
      <router-link to="/vaccine">
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
      currentPage: 2,
    };
  },
};
</script>

<style>
</style>
