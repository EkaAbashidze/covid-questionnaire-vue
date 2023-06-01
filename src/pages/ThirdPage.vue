<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <div class="mb-12">
          <label class="text-lg block mb-2">უკვე აცრილი ხარ?*</label>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="covidStatus">კი</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="noCovidStatus">არა</label>
          </div>
        </div>
        <div class="mb-12">
          <label class="text-lg block mb-2">აირჩიე რა ეტაპზე ხარ*</label>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="firstDose"
              >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
            >
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="fullyVaccinated">სრულად აცრილი ვარ</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="firstDoseNoRegistration"
              >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
            >
          </div>
        </div>
        <div class="mb-4">
          <label class="text-lg block mb-2">რას ელოდები?*</label>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="waitingForRegistration"
              >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
            >
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="notPlanning">არ ვგეგმავ</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="" class="mr-2" />
            <label for="recentlyRecovered"
              >გადატანილი მაქვს და ვგეგმავ აცრას</label
            >
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
    };
  },
};
</script>

<style>
</style>
