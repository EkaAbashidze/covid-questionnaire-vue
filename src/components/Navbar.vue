<template>
  <div
    class="flex justify-between items-center border-b border-black pb-2 mt-20"
  >
    <img src="../../public/images/rdbr.png" alt="Redberry Logo" class="h-10" />
    <div class="text-lg">{{ page }}</div>
  </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>

<style>
</style>
