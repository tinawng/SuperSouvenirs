<template>
  <div class="page__container">
    <div class="page__hero">
      <div class="page__hero_background"></div>
      <h2>featured</h2>
      <h1>The Beatles</h1>
      <span class="-mt-2 ml-3 text-lg text-brand-white text-opacity-80">are now on Super Souvenirs !</span>
      <div class="mt-6 ml-1 flex">
        <ui-utils-button icon="play" primary>play</ui-utils-button>
        <ui-utils-button class="ml-1">follow</ui-utils-button>
      </div>
    </div>
    <div class="page__content">
      <div class="page__content__new">
        <h2>new entries</h2>
        <div class="mt-6 grid grid-cols-2 gap-8">
          <div>
            <ui-utils-album-cover shadow interactive />
            <div class="flex justify-between">
              <div class="mt-4 ml-4 flex flex-col">
                <h3 class="mt-0.5 mb-1.5 leading-none">Random Access Memories</h3>
                <h5>Daft Punk · 2013</h5>
              </div>
              <div class="mt-4 mr-1 flex flex-col">
                <ui-utils-button icon="plus" small />
                <ui-utils-button class="mt-1.5" icon="more" small />
              </div>
            </div>
          </div>
          <div>
            <ui-utils-album-cover shadow interactive />
            <div class="flex justify-between">
              <div class="mt-4 ml-4 flex flex-col">
                <h3 class="mt-0.5 mb-1.5 leading-none">R.A.M.</h3>
                <h5>Daft Punk · 2013</h5>
              </div>
              <div class="mt-4 mr-1 flex flex-col">
                <ui-utils-button icon="plus" small />
                <ui-utils-button class="mt-1.5" icon="more" small />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page__content__chart">
        <h2 class="mb-6">top charts</h2>
        <div v-for="index in 6" :key="index" class="mt-2 flex items-center">
          <ui-utils-album-cover class="w-1/4" />
          <h5 class="mx-5">{{index}}</h5>
          <div>
            <h4>Contact</h4>
            <h5>Daft Punk</h5>
          </div>
        </div>
      </div>
      <div class="page__content__spotlight">
        <ui-utils-album-cover class="absolute -top-20 w-10/12" style="left: 8.5%; z-index: -2;" />
        <ui-utils-album-cover class="absolute -top-10 w-11/12" style="left: 4.5%; z-index: -1;" />
        <ui-utils-album-cover interactive />

        <div class="p-3 bg-brand-800">
          <h2>recommended for you</h2>
          <h3 class="mt-1">Spotlights</h3>
          <h5>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.page__container {
  @apply w-full;
}
.page__hero {
  @apply relative;
  @apply h-1/2 w-full;
  @apply py-6 px-10;
  @apply flex flex-col justify-end;
}
.page__hero_background {
  @apply absolute top-0 left-0;
  z-index: -10;
  height: 125%;
  width: 100%;

  background-image: url("/images/hero.jpg");
  background-size: cover;
}
.page__content {
  @apply w-full;
  @apply p-10;
  @apply grid grid-cols-4 gap-8;
  background: #1a1a1ae0;
}
.page__content__new {
  @apply col-span-2;
}
.page__content__chart {
}
.page__content__spotlight {
  @apply relative;
  height: fit-content;
  @apply -mt-14;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
}
</style>
