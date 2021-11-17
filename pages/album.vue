<template>
  <div class="page__container">
    <section class="hero">
      <div class="relative transform translate-y-8">
        <img class="z-10 w-56 rounded-sm shadow-xl" src="/covers/tatsu0.jpg" />
        <img class="absolute -bottom-2 left-4 -z-1 w-48 rounded-sm shadow-2xl" src="/covers/tatsu0.jpg" />
      </div>
      <div class="h-3/4 flex-grow grid grid-rows-5">
        <div class="row-start-2 flex items-center gap-3">
          <h3 class="pacity-60">Album</h3>
          <h3 class="ml-auto opacity-60">CityPop <span class="mx-1">·</span> 1977</h3>
          <div class="px-1 py-0.5 flex items-center gap-1 bg-red bg-opacity-10 rounded-sm text-red">
            <utils-icon class="w-2.5" variant="bookmark" />
            <span class="-mb-0.5 text-2xs">152</span>
          </div>
        </div>
        <div class="row-start-3 flex items-center gap-4">
          <h1 class="dotted">Space</h1>
          <utils-button class="ml-auto w-28" active icon="pause" rounded>pause</utils-button>
        </div>
        <utils-button-icon class="row-start-5" icon="bookmark-outlined" secondary border small />
      </div>
    </section>
    <section class="flex items-center gap-8">
      <div class="w-56 px-4 py-4 shadow-xl flex flex-col gap-4">
        <div class="w-full flex items-center">
          <h5 class="text-black font-semibold">Year</h5>
          <h5 class="ml-auto">1977</h5>
        </div>
        <div class="w-full flex items-center">
          <h5 class="text-black font-semibold">Duration</h5>
          <h5 class="ml-auto">61:55</h5>
        </div>
        <div class="w-full flex items-center">
          <h5 class="text-black font-semibold">Bitrate</h5>
          <h5 class="ml-auto">16-bit/44.1kHz FLAC</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "detail",
};
</script>

<style lang="postcss" scoped>
</style>