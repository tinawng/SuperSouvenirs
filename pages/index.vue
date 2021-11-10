<template>
  <div class="page__container">
    <div class="bg-square"></div>
    <section class="hero">
      <div class="relative mr-14">
        <img class="absolute -top-24 left-20 h-48 shadow-2xl" src="/covers/tatsu2.jpg" />
        <img class="absolute -top-32 right-48 h-64 shadow-2xl" src="/covers/tatsu1.jpg" />
        <img class="absolute -top-40 right-0 h-80 shadow-2xl" src="/covers/tatsu0.jpg" />
      </div>
      <div class="h-full flex flex-col justify-center gap-y-6">
        <h1>
          山下 達郎 <br />
          Tatsurō Yamashita
        </h1>
        <h3>Symbol of the 70, Japanese most important contributor and pioneer of Japanese CityPop.</h3>
        <div class="flex gap-x-4">
          <utils-button class="w-40">try now!</utils-button>
          <utils-button class="w-40" secondary icon="play">watch video</utils-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.bg-square {
  @apply absolute top-0 right-0;
  z-index: -1;
  height: 40vw;
  width: 60vw;
  @apply bg-light;
}
section.hero {
  height: 40vw;
  @apply grid grid-cols-2 items-center;
}
</style>