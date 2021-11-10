<template>
  <div class="nav_bar__container">
    <span class="nav_bar_brand">Super Souvenirs<span class="text-red">.</span></span>
    <div class="flex-grow flex justify-center items-center gap-x-12 opacity-60 text-xs font-bold uppercase leading-none">
      <span>catalogue</span>
      <span>soundtracks</span>
      <span>new albums</span>
      <span>genres</span>
    </div>
    <div class="flex gap-x-4">
      <utils-button-icon icon="magnify"/>
      <utils-button class="w-20" small>log in</utils-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.nav_bar__container {
  @apply w-full;
  @apply py-2 px-4;
  @apply flex;
}
.nav_bar_brand {
  @apply text-2xl font-medium;
}
</style>