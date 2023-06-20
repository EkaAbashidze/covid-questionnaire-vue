<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <Form>
          <div class="mb-12">
            <label class="text-lg block mb-2"
              >გაქვს გადატანილი Covid-19?*</label
            >
            <div class="flex items-center">
              <Field
                name="covidStatus"
                type="radio"
                id="covidStatusYes"
                class="mr-2"
                value="yes"
                v-model="covidStatus"
                @change="updateCovidStatus"
                rules="radio"
              />
              <label for="covidStatusYes">კი</label>
            </div>
            <div class="flex items-center">
              <Field
                name="covidStatus"
                type="radio"
                id="covidStatusNo"
                class="mr-2"
                value="no"
                v-model="covidStatus"
                @change="updateCovidStatus"
                rules="radio"
              />
              <label for="covidStatusNo">არა</label>
            </div>
            <div class="flex items-center">
              <Field
                name="covidStatus"
                type="radio"
                id="covidStatusNow"
                class="mr-2"
                value="have_right_now"
                v-model="covidStatus"
                @change="updateCovidStatus"
                rules="radio"
              />
              <label for="covidStatus">ახლა მაქვს</label>
            </div>
          </div>
          <ErrorMessage name="covidStatus" class="text-red-500" />

          <div class="mb-12">
            <label class="text-lg block mb-2"
              >ანტისხეულების ტესტი გაქვს გაკეთებული?*</label
            >
            <div class="flex items-center">
              <Field
                name="antibodyTest"
                type="radio"
                id="antibodyTest"
                class="mr-2"
                :value="true"
                v-model="antibodyTest"
                @change="updateAntibodyTest"
                rules="radio"
              />
              <label for="antibodyTest">კი</label>
            </div>
            <div class="flex items-center">
              <Field
                name="antibodyTest"
                type="radio"
                id="antibodyTest"
                class="mr-2"
                :value="false"
                v-model="antibodyTest"
                @change="updateAntibodyTest"
                rules="radio"
              />
              <label for="antibodyTest">არა</label>
            </div>
          </div>
          <ErrorMessage name="antibodyTest" class="text-red-500" />

          <div class="mb-4">
            <label class="text-lg block mb-2"
              >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*</label
            >
            <div class="flex flex-col gap-[25px]">
              <Field
                name="antibodyCount"
                type="date"
                placeholder="რიცხვი"
                id="antibodyCount"
                class="border border-gray-400 p-2 h-[50px] bg-transparent px-5 mr-2 w-[513px]"
                v-model="antibodyCount.testDate"
                @input="updateAntibodyCount($event, antibodyCount.testDate)"
                rules="radio"
              />
              <Field
                name="antibodyCount"
                type="number"
                placeholder="ანტისხეულების რაოდენობა"
                id="antibodyCount"
                class="border border-gray-400 p-2 h-[50px] bg-transparent px-5 w-[513px]"
                v-model="antibodyCount.number"
                @input="updateAntibodyCount($event, 'number')"
                rules="radio"
              />
            </div>
            <ErrorMessage name="antibodyCount" class="text-red-500" />
          </div>
          <div class="">
            <label class="text-lg block mb-2"
              >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
              Covid-19*</label
            >
            <Field
              name="covidPeriod"
              type="date"
              placeholder="დდ/თთ/წწ"
              id="covidPeriod"
              v-model="covidPeriod"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              @change="updateCovidPeriod"
              rules="radio"
            />
          </div>
          <ErrorMessage name="covidPeriod" class="text-red-500" />

          <div class="flex justify-center gap-[117px]">
            <router-link to="/identification">
              <img
                src="../../public/images/back.svg"
                alt="Next Page Arrow"
                class="h-12 w-[14px]"
              />
            </router-link>
            <button type="submit">
              <img
                src="../../public/images/next.svg"
                alt="Next Page Arrow"
                class="h-12 w-[14px]"
              />
            </button>
          </div>
        </Form>
      </div>

      <div class="flex justify-center items-center mt-[-50px]">
        <img
          src="../../public/images/questionnaire.png"
          alt="Identification Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  components: {
    Navbar,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      currentPage: 2,
      covidStatus: null,
      antibodyTest: null,
      antibodyCount: { testDate: "", number: null },
      covidPeriod: "",
    };
  },
  methods: {
    updateCovidStatus(event) {
      this.$store.commit("updateUserData", {
        property: "had_covid",
        value: event.target.value,
      });
    },

    updateAntibodyTest(event) {
      this.$store.commit("updateUserData", {
        property: "had_antibody_test",
        value: event.target.value,
      });
    },
    updateAntibodyCount(event, field) {
      const value =
        field === "testDate"
          ? {
              test_date: event.target.value,
              number: this.antibodyCount.number,
            }
          : {
              test_date: this.antibodyCount.testDate,
              number: +event.target.value,
            };
      this.$store.commit("updateUserData", {
        property: "antibodies",
        value,
      });
    },
    updateCovidPeriod(event) {
      this.$store.commit("updateUserData", {
        property: "covid_sickness_date",
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>
