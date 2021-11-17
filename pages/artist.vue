<template>
  <div class="page__container">
    <section class="hero px-16">
      <img class="w-56 rounded-full shadow-2xl" src="/covers/tatsu.jpg" />
      <div class="h-3/4 flex-grow grid grid-rows-5">
        <div class="row-start-2 flex justify-between items-center opacity-60">
          <h3>Artist</h3>
          <h3>15 albums <span class="mx-1">·</span> 1080 tracks</h3>
        </div>
        <div class="row-start-3 flex items-center gap-4">
          <h1 class="dotted">Tatsurō Yamashita</h1>
          <span class=" py-1 px-1.5 border border-red rounded text-sm text-red font-medium">CityPop</span>
          <utils-button class="ml-auto w-28" primary icon="play" rounded>play</utils-button>
        </div>
        <utils-button class="w-28 row-start-5" secondary>follow</utils-button>
      </div>
    </section>
    <section>
      <h1 class="text-2xl">Top Tracks</h1>
      <div class="mt-2 flex gap-8">
        <utils-table style="flex: 1 0 75%" />
        <cards-album class="flex-shrink" />
      </div>
    </section>
    <section class="mb-24 listing">
      <div>
        <h1 class="text-2xl">Albums</h1>
        <h5>SEE ALL</h5>
      </div>
      <div>
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
      </div>
      <div>
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
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