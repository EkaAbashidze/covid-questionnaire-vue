<template>
  <div class="bg-white flex items-center justify-center h-screen">
    <transition name="">
      <img
        v-show="!isSmall"
        src="/images/redberry.svg"
        alt="Redberry Logo"
        class="image"
      />
    </transition>
    <div class="flex flex-col justify-center parent relative">
      <img
        v-show="!animationStatus"
        src="/images/redberry.svg"
        alt="Redberry Logo"
      />
      <router-link
        v-show="showText"
        to="/identification"
        class="text fade-in text-[30px] font-bold flex text-center absolute transform translate-y-[200px]"
        >კითხვარის
        <br />
        დაწყება</router-link
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
      showText: false,
    };
  },
  mounted() {
    this.isSmall = true;
    setTimeout(() => {
      this.animationStatus = false;
    }, 3000);
    setTimeout(() => {
      this.showText = true;
    }, 3500);
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
  animation: scale-down 3s ease-in;
}

.text {
  animation: fade-in 1s ease-in;
}

@keyframes scale-down {
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(0.05);
  }
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