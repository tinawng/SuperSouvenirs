<template>
  <div class="page__container">
    <div class="bg-square"></div>
    <section class="hero">
      <div class="relative mr-14">
        <img class="absolute -top-24 right-0 h-48 shadow-2xl transform -translate-x-72 animation-glide" src="/covers/tatsu2.jpg" />
        <img class="absolute -top-32 right-0 h-64 shadow-2xl transform -translate-x-44 animation-glide" src="/covers/tatsu1.jpg" />
        <img class="absolute -top-40 right-0 h-80 shadow-2xl" src="/covers/tatsu0.jpg" />
      </div>
      <div class="h-full flex flex-col justify-center gap-y-6">
        <h1>
          山下 達郎<span class="text-red">.</span><br />
          Tatsurō Yamashita
        </h1>
        <h3>Symbol of the 70, Japanese most important contributor and pioneer of Japanese CityPop.</h3>
        <div class="flex gap-x-4">
          <utils-button class="w-40">listen now!</utils-button>
          <utils-button class="w-40" secondary icon="disc">albums</utils-button>
        </div>
      </div>
    </section>

    <section class="mb-24 listing">
      <div>
        <h2>New releases</h2>
        <h5>SEE ALL</h5>
      </div>
      <div>
        <cards-album />
        <cards-album />
        <cards-album />
        <cards-album />
      </div>
      <div>
        <cards-album small />
        <cards-album small />
        <cards-album small />
        <cards-album small />
        <cards-album small />
        <cards-album small />
      </div>
    </section>

    <section class="mb-24 featured dark">
      <h1 class="font-medium">Chillhop</h1>
      <div class="w-full mt-6 flex gap-6">
        <cards-album class="w-36" is_new small />
        <cards-album class="w-36" small />
        <cards-album class="w-36" small />
        <cards-album class="w-36" small />
        <div class="h-36 w-36 bg-white bg-opacity-40 rounded-sm flex justify-center items-center">
          <h1 class="font-normal">+8</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "home",
};
</script>

<style lang="postcss" scoped>
.bg-square {
  @apply absolute top-0 right-0 -z-1;
  height: 40vw;
  width: 60vw;
  @apply bg-light;
}

section.hero {
  height: 40vw;
  @apply grid grid-cols-2 items-center;
}

section.featured {
  @apply relative;
  @apply max-w-5xl;
  @apply pt-24 pb-8 px-6;
  @apply bg-blue rounded-lg;
}
section.featured::before {
  @apply absolute top-12 left-6;
  @apply text-3xl font-bold text-white text-opacity-20 tracking-wider;
  content: "FEATURED ARTIST";
}
section.featured::after {
  @apply absolute top-16 left-6;
  @apply text-xl text-white text-opacity-90;
  content: "This Month";
}

.animation-glide {
  animation: 1.61s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 glide;
}
@keyframes glide {
  from {
    transform: rotate(0deg) translate(0%, 0%);
  }
}
</style>