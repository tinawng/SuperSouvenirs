<template>
  <div class="page__container">
    <section class="hero">
      <img class="w-56 rounded-full shadow-2xl" src="/covers/tatsu.jpg" />
      <div class="h-3/4 flex-grow grid grid-rows-5">
        <div class="row-start-2 flex justify-between items-center opacity-60">
          <h3>Artist</h3>
          <h3>15 albums · 1080 tracks</h3>
        </div>
        <div class="row-start-3 flex items-center gap-4">
          <h1>Tatsurō Yamashita</h1>
          <span class=" py-1 px-1.5 border border-red rounded text-sm text-red font-medium">CityPop</span>
          <utils-button class="ml-auto w-28" primary icon="play" rounded>play</utils-button>
        </div>
        <utils-button class="w-28 row-start-5" secondary>follow</utils-button>
      </div>
    </section>
    <section>
      <h1 class="text-2xl">Top Tracks</h1>
      <div class="mt-2 flex gap-8">
        <utils-table style="flex: 1 0 75%"/>
        <cards-album class="flex-shrink" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
section.hero {
  @apply relative;
  @apply max-w-7xl;
  @apply px-16;
  @apply flex items-center gap-8;
}
section.hero::before {
  @apply absolute top-0 left-0 z-0;
  @apply h-1/2 w-full;
  @apply bg-light;
  content: "";
}
section > * {
  @apply z-10;
}
</style>