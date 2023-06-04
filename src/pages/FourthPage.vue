<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="w-[600px]">
        <div class="mb-12">
          <p class="mb-6">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის.
          </p>
          <p class="mb-6">
            პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
            ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
        </div>

        <div class="mb-12">
          <label class="text-lg block mb-2 font-bold"
            >რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
            შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</label
          >
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>კვირაში ორჯერ</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>კვირაში ერთხელ</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>ორ კვირაში ერთხელ</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>თვეში ერთხელ</label>
          </div>
        </div>
        <div class="mb-12">
          <label class="text-lg block mb-2 font-bold"
            >კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label
          >
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>0</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>1</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>2</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>3</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>4</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label>5</label>
          </div>
        </div>
        <div class="mb-4">
          <label class="text-lg block mb-2 font-bold"
            >რას ფიქრობ ფიზიკურ შეკრებებზე?</label
          >
          <div class="flex items-center">
            <textarea
              type="checkbox"
              id=""
              class="mr-2 border border-gray-400 p-2 w-[513px] h-[184px] bg-transparent px-5 mb-12"
            ></textarea>
          </div>
        </div>
        <div class="mb-4">
          <label class="text-lg block mb-2 font-bold"
            >რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?</label
          >
          <div class="flex items-center">
            <textarea
              type="checkbox"
              id=""
              class="mr-2 border border-gray-400 p-2 w-[513px] h-[184px] bg-transparent px-5 mb-12"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="bg-[#208298] rounded-[42px] w-[180px] h-[56px] text-white"
        >
          დასრულება
        </button>
      </div>

      <div class="flex justify-center items-center mt-[-50px] relative">
        <img
          src="../../public/images/suggestions.png"
          alt="Identification Image"
          class="relative z-10 mt-[-650px]"
        />
        <img
          src="../../public/images/heart.png"
          alt="heart Image"
          class="absolute top-[65px] left-[90px]"
        />
      </div>
    </div>
    <div class="flex justify-center gap-[117px]">
      <router-link to="/questionnaire">
        <img
          src="../../public/images/back.svg"
          alt="Next Page Arrow"
          class="h-12 w-[14px]"
        />
      </router-link>
      <router-link to="/suggestions">
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
      currentPage: 4,
    };
  },
};
</script>

<style>
</style>
