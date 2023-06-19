<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <Form @submit.prevent="">
          <div class="mb-12">
            <label for="firstName" class="text-lg block mb-2">სახელი*</label>
            <input
              placeholder="იოსებ"
              type="text"
              id="firstName"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              v-model="firstName"
              @input="updateFirstName"
            />
          </div>
          <div class="mb-12">
            <label for="lastName" class="text-lg block mb-2">გვარი*</label>
            <input
              placeholder="ჯუღაშვილი"
              type="text"
              id="lastName"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              v-model="lastName"
              @input="updateLastName"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="text-lg block mb-2">მეილი*</label>
            <Field
              name="email"
              rules="required|email"
              placeholder="fbi@redberry.ge"
              type="email"
              id="email"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              v-model="email"
              @input="updateEmail"
            />
            <ErrorMessage name="email" class="text-red-500" />
          </div>

          <div class="">
            <hr class="border-gray-400 w-[237px] mt-[111px]" />
            <p class="text-sm text-gray-500 mt-[20px] max-w-[300px]">
              *-ით მონიშნული ველების შევსება სავალდებულოა
            </p>
          </div>
        </Form>
      </div>

      <div class="flex justify-center items-center mt-[-100px]">
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
      currentPage: 1,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods: {
    updateFirstName(event) {
      this.$store.commit("updateUserData", {
        property: "first_name",
        value: event.target.value,
      });
    },
    updateLastName(event) {
      this.$store.commit("updateUserData", {
        property: "last_name",
        value: event.target.value,
      });
    },
    updateEmail(event) {
      this.$store.commit("updateUserData", {
        property: "email",
        value: event.target.value,
      });
    },
  },
};
</script>

<style>
</style>
