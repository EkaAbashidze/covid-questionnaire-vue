<template>
  <div
    class="flex justify-between items-center border-darkest border-b-[1.8px] pb-6 mt-[98px]"
  >
    <img
      src="../../public/images/rdbr.png"
      alt="Redberry Logo"
      class="w-[142px] h-[24px]"
    />
    <div class="text-4xl font-anonymous leading-10 text-darkest">
      {{ page }} / 4
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>
