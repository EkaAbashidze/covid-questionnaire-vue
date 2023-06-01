<template>
  <div class="bg-white flex items-center justify-center h-screen">
    <div
      class="flex flex-col items-center justify-center"
      :class="{ small: isSmall }"
    >
      <transition name="svg-transition">
        <img
          v-show="!isSmall"
          src="../../public/images/redberry.svg"
          alt="Redberry Logo"
        />
      </transition>

      <router-link v-if="isSmall" to="/identification"
        >კითხვარის დაწყება</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSmall: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isSmall = true;
    }, 1000);
  },
};
</script>

<style scoped>
.svg-transition-enter-active,
.svg-transition-leave-active {
  transition: all 3s ease-in;
}

.svg-transition-enter {
  opacity: 1;
  transform: scale(25);
}

.svg-transition-leave-to {
  opacity: 1;
  transform: scale(25);
}
</style>
