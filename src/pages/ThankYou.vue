<template>
  <div class="bg-gray-900 flex items-center justify-center h-screen relative">
    <transition class="fade-in">
      <img
        v-show="showThankYou"
        src="../../public/images/thankyou.png"
        alt="Thank You"
      />
    </transition>
    <transition class="fade-in">
      <div v-show="showStars" class="flex space-x-2 items-center">
        <img
          src="../../public/images/star.png"
          alt="Star"
          class="absolute top-[40%] left-[40%]"
        />
        <img
          src="../../public/images/star.png"
          alt="Star"
          class="absolute top-[55%] left-[60%] w-[33px]"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showThankYou: true,
      showStars: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showStars = true;
    }, 2000);
  },
};
</script>

<style>
.fade-in {
  animation: fade-in 5s ease-in;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
