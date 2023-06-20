<template>
  <div class="mx-[200px]">
    <Navbar :page="currentPage" />
    <div class="flex mt-12 justify-between">
      <div class="">
        <Form>
          <div class="mb-12">
            <label for="firstName" class="text-lg block mb-2">სახელი*</label>
            <Field
              name="firstName"
              rules="min|max|alpha"
              placeholder="იოსებ"
              type="firstName"
              id="firstName"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              v-model="firstName"
              @input="updateFirstName"
            />
          </div>
          <ErrorMessage name="firstName" class="text-red-500" />
          <div class="mb-12">
            <label for="lastName" class="text-lg block mb-2">გვარი*</label>

            <Field
              name="lastName"
              rules="minlast|maxlast|alphalast"
              placeholder="ჯუღაშვილი"
              type="lastName"
              id="lastName"
              class="border border-gray-400 p-2 w-[513px] h-[50px] bg-transparent px-5"
              v-model="lastName"
              @input="updatelastName"
            />
          </div>
          <ErrorMessage name="lastName" class="text-red-500" />
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
          </div>
          <ErrorMessage name="email" class="text-red-500" />

          <div class="flex justify-center mt-10">
            <button type="submit">
              <img
                src="../../public/images/next.svg"
                alt="Next Page Arrow"
                class="h-12 w-[14px]"
              />
            </button>
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
