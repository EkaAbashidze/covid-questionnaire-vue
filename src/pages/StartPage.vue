<template>
  <div class="bg-white flex items-center justify-center h-screen">
    <div class="parent">
      <transition name="svg-transition">
        <img
          v-show="!isSmall"
          src="/images/redberry.svg"
          alt="Redberry Logo"
          class="image"
        />
      </transition>
      <img
        v-show="!animationStatus"
        src="/images/redberry.svg"
        alt="Redberry Logo"
      />
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
      animationStatus: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isSmall = true;
    }, 100);
    setTimeout(() => {
      this.animationStatus = false;
    }, 3200);
  },
};
</script>  
<style scoped>
.parent {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  width: 3000px;
  height: 3000px;
}
.svg-transition-enter-active,
.svg-transition-leave-active {
  transition: all 3s ease-in;
}
.svg-transition-enter {
  width: 3000px;
  height: 3000px;
}
.svg-transition-leave-to {
  width: 100px;
  height: 100px;
}
</style>