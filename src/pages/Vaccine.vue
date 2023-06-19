<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <div class="mb-12">
          <label class="text-lg block mb-2">უკვე აცრილი ხარ?*</label>
          <div class="flex items-center">
            <input
              type="radio"
              id="vaccineStatus"
              class="mr-2"
              value="yes"
              v-model="vaccineStatus"
              @change="updateVaccineStatus"
            />

            <label for="vaccineStatus">კი</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="vaccineStatus"
              class="mr-2"
              value="no"
              v-model="vaccineStatus"
              @change="updateVaccineStatus"
            />
            <label for="vaccineStatus">არა</label>
          </div>
        </div>
        <div class="mb-12">
          <label class="text-lg block mb-2">აირჩიე რა ეტაპზე ხარ*</label>
          <div class="flex items-center">
            <input
              type="radio"
              id="stage"
              class="mr-2"
              value="first_dosage_and_registered_on_the_second"
              v-model="stage"
              @change="updateStage"
            />

            <label for="stage"
              >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
            >
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="stage"
              class="mr-2"
              value="fully_vaccinated"
              v-model="stage"
              @change="updateStage"
            />
            <label for="stage">სრულად აცრილი ვარ</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="stage"
              class="mr-2"
              value="first_dosage_and_not_registered_yet"
              v-model="stage"
              @change="updateStage"
            />
            <label for="stage"
              >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
            >
          </div>
        </div>
        <div class="mb-4">
          <label class="text-lg block mb-2">რას ელოდები?*</label>
          <div class="flex items-center">
            <input
              type="radio"
              id="waiting"
              class="mr-2"
              value="registered_and_waiting"
              v-model="waiting"
              @change="updateWaiting"
            />
            <label for="waiting">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="waiting"
              class="mr-2"
              value="not_planning"
              v-model="waiting"
              @change="updateWaiting"
            />

            <label for="waiting">არ ვგეგმავ</label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              id="waiting"
              class="mr-2"
              value="had_covid_and_planning_to_be_vaccinated"
              v-model="waiting"
              @change="updateWaiting"
            />
            <label for="waiting">გადატანილი მაქვს და ვგეგმავ აცრას</label>
          </div>
        </div>
        <div>
          <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</p>
          <a href="https://booking.moh.gov.ge/" target="_blank"
            >https://booking.moh.gov.ge/</a
          >
        </div>
        <div class="mt-4">
          <label class="text-lg block mb-2"
            >ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
            ვაქცინის გაკეთება.</label
          >
          <p>👉 რეგისტრაციის ბმული</p>
          <a href="https://booking.moh.gov.ge/" target="_blank"
            >https://booking.moh.gov.ge/</a
          >
        </div>
      </div>

      <div class="flex justify-center items-center mt-[-50px]">
        <img src="../../public/images/vaccine.png" alt="Identification Image" />
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
      currentPage: 3,
      vaccineStatus: null,
      stage: null,
      waiting: null,
    };
  },
  methods: {
    updateVaccineStatus(event) {
      this.$store.commit("updateUserData", {
        property: "had_vaccine",
        value: event.target.value,
      });
    },
    updateStage(event) {
      this.$store.commit("updateUserData", {
        property: "vaccination_stage",
        value: event.target.value,
      });
    },
    updateWaiting(event) {
      this.$store.commit("updateUserData", {
        property: "i_am_waiting",
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>
