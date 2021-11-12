<template>
  <div class="page__container">
    <section class="hero">
      <img class="w-64 rounded-full shadow-xl" src="/covers/tatsu.jpg" />
      <div class="flex-grow">
        <div class="flex justify-between">
          <h3>Artist</h3>
          <h3>15 albums · 1080 tracks</h3>
        </div>
        <div class="flex items-center">
          <h1>Tatsurō Yamashita</h1>
          <span class="h-full p-1 border border-red rounded text-sm text-red font-medium">CityPop</span>
          <utils-button class="ml-auto w-28" primary icon="play" rounded>play</utils-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.page__container {
  @apply bg-light;
}

section.hero {
  @apply max-w-7xl;
  @apply p-8;
  @apply flex items-center gap-8;
}
</style>