<template>
  <div class="bg-white flex items-center justify-center h-screen">
    <div
      class="svg-container flex flex-col items-center justify-center"
      :class="{ small: isSmall }"
    >
      <img src="../../public/images/redberry.svg" alt="SVG Image" />
      <p v-if="isSmall" class="text-xl font-bold mt-4">კითხვარის დაწყება</p>
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
    // Delay the shrinking animation by a few milliseconds for a smoother transition
    setTimeout(() => {
      this.isSmall = true;
    }, 1000);
  },
};
</script>

<style scoped>
.svg-container {
  transition: all 0.5s ease;
}

.small {
  width: 100px;
  height: 100px;
}
</style>
