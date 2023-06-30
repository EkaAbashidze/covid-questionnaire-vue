<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="w-[600px]">
        <Form @submit="submitForm($event)">
          <div class="mb-12">
            <p class="mb-6">
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
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
              <Field
                name="nonFormalMeetings"
                type="radio"
                id="nonFormalMeetings"
                class="mr-2"
                value="twice_a_week"
                v-model="nonFormalMeetings"
                @change="updateNonFormal"
                rules="radio"
              />

              <label>კვირაში ორჯერ</label>
            </div>
            <div class="flex items-center">
              <Field
                name="nonFormalMeetings"
                type="radio"
                id="nonFormalMeetings"
                class="mr-2"
                value="once_a_week"
                v-model="nonFormalMeetings"
                @change="updateNonFormal"
                rules="radio"
              />
              <label>კვირაში ერთხელ</label>
            </div>
            <div class="flex items-center">
              <Field
                name="nonFormalMeetings"
                type="radio"
                id="nonFormalMeetings"
                class="mr-2"
                value="once_in_a_two_weeks"
                v-model="nonFormalMeetings"
                @change="updateNonFormal"
                rules="radio"
              />
              <label>ორ კვირაში ერთხელ</label>
            </div>
            <div class="flex items-center">
              <Field
                name="nonFormalMeetings"
                type="radio"
                id="nonFormalMeetings"
                class="mr-2"
                value="once_in_a_month"
                v-model="nonFormalMeetings"
                @change="updateNonFormal"
                rules="radio"
              />
              <label>თვეში ერთხელ</label>
            </div>
            <div class="block pl-3 pt-2 h-6 mb-12">
              <ErrorMessage name="nonFormalMeetings" class="text-red-500" />
            </div>
          </div>

          <div class="mb-12">
            <label class="text-lg block mb-2 font-bold"
              >კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label
            >
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="0"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />

              <label>0</label>
            </div>
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="1"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />
              <label>1</label>
            </div>
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="2"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />
              <label>2</label>
            </div>
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="3"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />
              <label>3</label>
            </div>
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="4"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />
              <label>4</label>
            </div>
            <div class="flex items-center">
              <Field
                name="officeDays"
                type="radio"
                id="officeDays"
                class="mr-2"
                value="5"
                v-model="officeDays"
                @change="updateOfficeDays"
                rules="radio"
              />
              <label>5</label>
            </div>
            <div class="block pl-3 pt-2 h-6 mb-12">
              <ErrorMessage name="officeDays" class="text-red-500" />
            </div>
          </div>

          <div class="mb-4">
            <label class="text-lg block mb-2 font-bold"
              >რას ფიქრობ ფიზიკურ შეკრებებზე?</label
            >
            <div class="flex items-center">
              <textarea
                type="radio"
                id="liveMeetings"
                v-model="liveMeetings"
                @change="updateLiveMeetings"
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
                type="radio"
                id="liveMeetings"
                v-model="opinion"
                @change="updateOpinion"
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
        </Form>
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
      <router-link to="/vaccine">
        <img
          src="../../public/images/back.svg"
          alt="Next Page Arrow"
          class="h-12 w-[14px]"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import { createUser } from "../services/axios";

export default {
  components: {
    Navbar,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      currentPage: 4,
      nonFormalMeetings: null,
      officeDays: null,
      liveMeetings: null,
      opinion: null,
    };
  },
  created() {
    this.loadFormData();
  },
  methods: {
    updateNonFormal(event) {
      this.updateFormData(event, "non_formal_meetings");
    },

    updateOfficeDays(event) {
      const value = +event.target.value;
      this.updateFormData(event, "number_of_days_from_office");
    },

    updateLiveMeetings(event) {
      this.updateFormData(event, "what_about_meetings_in_live");
    },
    updateOpinion(event) {
      this.updateFormData(event, "tell_us_your_opinion_about_us");
    },
    submitForm(event) {
      const formData = this.$store.state.userData;
      createUser(formData)
        .then((response) => {
          console.log(response);
          this.$router.push("/thankyou");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateFormData(event, key) {
      this.$store.commit("updateUserData", {
        property: key,
        value: event.target.value,
      });
      this.saveFormData();
    },
    saveFormData() {
      const formData = {
        nonFormalMeetings: this.nonFormalMeetings,
        officeDays: this.officeDays,
        liveMeetings: this.liveMeetings,
        opinion: this.opinion,
      };
      localStorage.setItem("formPage4Data", JSON.stringify(formData));
    },
    loadFormData() {
      const formData = JSON.parse(localStorage.getItem("formPage4Data"));
      if (formData) {
        this.nonFormalMeetings = formData.nonFormalMeetings;
        this.officeDays = formData.officeDays;
        this.liveMeetings = formData.liveMeetings;
        this.opinion = formData.opinion;
      }
    },
  },
};
</script>

<style>
</style>
